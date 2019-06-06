import * as d3 from "d3";
// import graphFlow from 'd3-graph-flow'
import graphFlow from 'dagre-d3'
import { GroupNode } from './group'
import { _ } from "lodash"
// import {assert} from 'assert'
const assert = require('assert');



// 这个图的作用是保存所有 graph 对象的属性 已经对象之间的关系
// 同时包含一些主要的svg dom 元素
function modelGraph() {
    const graph = new graphFlow.graphlib.Graph({ compound: true })
        .setGraph({
            ranksep: 40,
            nodesep: 40,
            edgesep: 10
        })
        .setDefaultEdgeLabel(function () { return {}; });

    this.g = graph

    this.g.last_node_id = -1;
    this.g.last_edge_id = -1;
    this.g.graph().transition = function (selection) { return selection.transition().duration(500); };

    // this.g.nodes
    // this.g.edges

    this.group_ids = []
    this.groups = {}
    this.groups_children_id = {}

    this.root_graph
    this.render

    this.root_graph_cfg = {}
    this.root_graph_cfg.initialScale = 0.5;
    this.root_graph_cfg.trans_y = 20
    this.root_graph_cfg.cur_trans_x = 0
    this.root_graph_cfg.cur_trans_y = 20

    this.svg_nodes
    this.svg_nodes_json = {}

    this.svg_anchors
    this.svg_clusters // group

    this.mouse_action

    this.connect_link_path
    this.connect_link_path_start_position = [0, 0]
    // this.connect_source_node_id = -1
    // this.connect_target_node_id = -1

    this.connect_source_id = ''
    this.connect_target_id = ''

    this.search_box
    this.search_box

    this.cur_select_node
    this.cur_copy_node_id
    this.cur_select_node_neighbor_nodes = []
    this.cur_select_node_neighbor_edges = []
    this.all_graph_node_metas = {}

    this.global_inputs = []
    this.global_outputs = []
    this.support_frameworks = ['PyTorch']
    this.frameworks = {}
    this.cur_framework_name

    // model node opt params 
    // node_id: {
    //     "op": "Convolution", 
    //     "param": {
    //       "dilate": "(1,1)", 
    //       "kernel": "(3,3)", 
    //       "no_bias": "False", 
    //       "num_filter": "64", 
    //       "num_group": "1", 
    //       "pad": "(1,1)", 
    //       "stride": "(1,1)", 
    //       "workspace": "512"
    //     }, 
    //     "name": "conv1_1", 
    //     "inputs": [[0, 0], [1, 0], [2, 0]], 
    //     "backward_source_id": -1
    //   }, 
    this.params_types = ['int', 'tuple', 'bool', 'obj', 'str']
    this.model_graph_nodes_params = {}


    this.update_count = 0
    this.__version__ = '0.1.2'

}

function setFramework(framework) {
    assert(this.support_frameworks.indexOf(framework) != -1, 'Do not support this framework')
    this.cur_framework_name = framework
}
modelGraph.prototype.setFramework = setFramework

function formatCoords(x, y) {
    console.log(x, y)
    x = x - this.root_graph_cfg.cur_trans_x
    y = y + this.root_graph_cfg.trans_y - this.root_graph_cfg.cur_trans_y
    console.log(x, y)
    return x, y
}

modelGraph.prototype.formatCoords = formatCoords

/**
 * add Node to graph
 * for graph init
 * @param {*} node 
 * @param {*} type 
 */
function addNode(node, type = 'graph') {

    this.g.last_node_id++;
    node.svgId = 'node' + this.g.last_node_id;
    console.log('add node to type', type)

    let x = node.x ? node.x : 0
    let y = node.y ? node.y : 0


    x, y = this.formatCoords(x, y)

    this.g.setNode(node.id, {
        svgId: node.svgId,
        label: node.label,
        labelType: "text",
        properties: node.properties,
        x: x,
        y: y
    });
    this.model_graph_nodes_params[node.id] = node.properties
    // console.log(this.render.createNodes())   
}
modelGraph.prototype.addNode = addNode

/**
 * add a new edge 
 * @param {*} edge 
 */
function addEdge(edge) {

    this.g.last_edge_id++;
    edge.svgId = 'arc' + this.g.last_edge_id;
    this.g.setEdge(edge.source, edge.target, {
        arrowhead: "hollowPoint",
        arrowheadClass: 'arrowhead',
        curve: d3.curveBasis,
        label: edge.label,
        labelType: 'text',
        lineInterpolate: 'basis',
        class: edge.class,
        id: edge.svgId,
        labelId: edge.svgId + '-label'
    });
}
modelGraph.prototype.addEdge = addEdge

function createConnection(edge) {

    // TODO  check data's shape and update node

    // if(this.model_graph_nodes_params[edge.source].out_channels){  
    //     // 1. get source node output channel  
    //     const in_channels =  this.model_graph_nodes_params[edge.source].out_channels.value

    //     // 2. set target node intput channel 
    //     if(this.model_graph_nodes_params[edge.target].in_channels){
    //         this.model_graph_nodes_params[edge.target].in_channels.value = in_channels
    //     }

    // }

    this.addEdge(edge)
}
modelGraph.prototype.createConnection = createConnection

function removeEdge(d) {
    this.g.removeEdge(d.v, d.w)
    this.updateGraph()
}
modelGraph.prototype.removeEdge = removeEdge

function initGroups() {

    for (let i = 0; i < this.g.nodes.length; i++) {
        let node_id = this.g.nodes[i]
        let children = this.g.children(node_id)
        if (children.length > 0) {
            let new_group = new GroupNode(this, node_id, children)
            // new_group.
            this.group_ids.push(node_id)
            this.groups[node_id] = new_group
            this.groups_children_id[node_id] = children
        }
        // console.log(node)
    }

    // this.g.nodes.forEach(function(node){
    //     console.log(this.g.node(node))
    // })
    console.log(this.g.nodes)
}
modelGraph.prototype.initGroups = initGroups



// ===================================  init Graph ====================================
/**
 * init this graph data 
 * including node and edge
 */
function initGraphFromData(nodes, arcs) {

    this.g.nodes = nodes
    this.g.edges = arcs

    const _this = this

    this.g.nodes.forEach(function (node, key) {
        _this.addNode(node)
    });
    this.g.edges.forEach(function (edge, key) {
        _this.addEdge(edge)
    });

}
modelGraph.prototype.initGraphFromData = initGraphFromData

/**
 * init Graph From Graph
 * @param {*} g 
 */
function initGraphFromGraph(g) {
    this.g.nodes = g.nodes()
    this.g.edges = g.edges()
    this.g = g
    this.g.last_node_id = -1;
    this.g.last_edge_id = -1;
}

modelGraph.prototype.initGraphFromGraph = initGraphFromGraph

/**
 * global init 
 * init group graph
 */
function initAll() {
    this.initGroups()

    // this.updateGraph()
}
modelGraph.prototype.initAll = initAll



/**
 * refresh SVGNodes of this instance 
 */
function updateSVGNodes() {
    let _this = this
    this.svg_nodes = this.root_graph.selectAll('g.node')
    this.svg_nodes.each(function (d) {
        // console.log( d3.select(this))
        _this.svg_nodes_json[d] = d3.select(this)
        // console.log('updateSVGNodes', d,i)
    })
    // console.log(this.svg_nodes_json)
}
modelGraph.prototype.updateSVGNodes = updateSVGNodes


/**
 * refresh SVGAnchors of this instance 
 */
function updateSVGAnchors() {
    this.svg_anchors = this.root_graph.selectAll('circle.anchor')
}
modelGraph.prototype.updateSVGAnchors = updateSVGAnchors

/**
 * refresh SvgClusters of this instance 
 */
function updateSvgClusters() {
    this.svg_clusters = this.root_graph.selectAll('g.cluster')
}
modelGraph.prototype.updateSvgClusters = updateSvgClusters


// ================================= Graph Render ====================================

/**
 * updateGraph 
 */
function updateGraph() {
    console.log(this)
    ++ this.update_count 
    console.log('modelGraph updateGraph...step', this.update_count )
    if(!this.g.graph().transition){
        this.g.graph().transition = function (selection) { return selection.transition().duration(500); };
    }
    // d3.selectAll('div').data(data)
    // console.log(this.inner)
    
    this.render.update(this.g)

    this.updateSVGNodes()
    this.setNodesDraggable()
    this.setNodeMenuEvent()
    this.setNodeSelectEvent()

    this.setEdgeEvent()

    // this.updateSVGAnchors()
    // this.setAnchorsEvent()
    // this.setAchorsdragable()

    this.updateSvgClusters()
    this.setClustersDraggable()

    this.setGroupEvent()
    this.event.emit('update-graph', this)
}
modelGraph.prototype.updateGraph = updateGraph

/**
 * fisrt render Graph
 */
function drawGraph() {
    this.render(this.inner, this.g)
    // get connect_link_path temporary 
    this.connect_link_path = this.root_graph.select('path.connecting-link')

    this.updateSVGNodes()
    this.setNodesDraggable()
    this.setNodeMenuEvent()
    this.setNodeSelectEvent()

    this.setEdgeEvent()

    // this.setAnchorsEvent()
    // this.updateSVGAnchors()
    // this.setAchorsdragable()


    this.updateSvgClusters()
    this.setClustersDraggable()

    this.setGroupEvent()


    // this.inner

}
modelGraph.prototype.drawGraph = drawGraph

/**
 * get config of draggable for nodes
 */
function getDraggableConfig() {

    const draged = d3.drag()
        // .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);

    const _this = this
    function dragstarted(d) {
        _this.mouse_action = 'starNodeDraggable '
        d3.select(this).raise().classed("active", true);
    }
    function dragged(d) {
        const id = d


        d = _this.g.node(d);

        // console.log(' dragged d', d)

        d.x += d3.event.dx;
        d.y += d3.event.dy;
        const transform_to = "translate(" + d.x + "," + d.y + ")"
        d3.select(this).attr("transform", transform_to);
        // console.log('正在拖动...')

        if (_this.group_ids.indexOf(id) != -1) {
            _this.mouse_action = 'GroupDraggable'
            _this.groupMove(id, { x: d3.event.dx, y: d3.event.dy })

        } else {
            _this.mouse_action = 'NodeDraggable'
        }




    }
    function dragended(d) {
        d3.select(this).classed("active", false);
        if (_this.mouse_action == 'NodeDraggable') {
            console.log('dragended 要重新渲染边')
            _this.updateGraph()
        } else if (_this.mouse_action == 'GroupDraggable') {
            console.log('dragended GroupDraggable 要重新渲染边')
            _this.updateGraph()
        }
        _this.mouse_action = ''
    }


    return draged
}
modelGraph.prototype.getDraggableConfig = getDraggableConfig


// ================================= Node ====================================


/**
 * when add a new node to graph , should add draggable listerning function to this node
 * @param {*} node_id: element Dom id
 */
function setNodeDraggableById(node_id) {
    // node8
    this.root_graph.selectAll('#' + node_id)
        .call(this.getDraggableConfig())
}
modelGraph.prototype.setNodeDraggableById = setNodeDraggableById

/**
 * set Nodes Draggable
 */
function setNodesDraggable() {
    this.svg_nodes.call(this.getDraggableConfig())
}
modelGraph.prototype.setNodesDraggable = setNodesDraggable

/**
 * Node right Click Menu Event
 */
function setNodeMenuEvent() {
    const _this = this

    this.svg_nodes.on("contextmenu", this.onContextMenu);
}

modelGraph.prototype.setNodeMenuEvent = setNodeMenuEvent


/**
 * Node left Click Menu Event
 */
function setNodeSelectEvent() {
    const _this = this
    this.svg_nodes.on("click", function (d, i) {
        // d3.select(this).raise().classed("active", true);
        // console.log('cur_select_node', _this.cur_select_node, d)
        // console.log('connecting',  _this.connect_source_id, _this.connect_target_id)

      
        _this.mouse_action = "node-click"

        let select_flag = true

        if (_this.connect_source_id == '') {
            // console.log('start', d)
            _this.connect_source_id = d
            _this.visiblePreNodes(d, false)
        } else {
            _this.connect_target_id = d


            // create connection here
            if (_this.cur_select_node_neighbor_nodes.indexOf(_this.connect_target_id) == -1) {

                if (_this.connect_source_id != _this.connect_target_id) {
                    // console.log('create connection...',  _this.connect_source_id, _this.connect_target_id)
                    const new_connection = {
                        source: _this.connect_source_id,
                        target: _this.connect_target_id,
                        label: _this.connect_source_id + " to " + _this.connect_target_id,
                        class: _this.connection_class
                    }
                     select_flag = false
                    _this.createConnection(new_connection)
                    _this.updateGraph()

                } else {

                }
                // reset connection
                _this.connect_source_id = ''
                _this.connect_target_id = ''
            } else {
                select_flag = false
                _this.event.emit('node-pre-click', { event: d3.event, id: d })
            }
            // _this.cur_select_node =  d3.select(this).selectAll('rect').classed('hover', false)
        }
        if(select_flag){
            _this.cur_select_node = d3.select(this)
            // _this.cur_select_node.selectAll('rect').classed('hover', true)
            // label-container
            _this.cur_select_node.selectAll('rect').attr('class', "label-container hover")
        }

    }).on("dblclick", function (d) {
        _this.mouse_action = "node-double-click"
        // alert("node was double clicked"); 
        // _this.connect_source_id = d
        // _this.cur_select_node =  d3.select(this)
        // _this.cur_select_node.selectAll('rect').classed('hover', false)
        // label-container hover
        _this.cur_select_node.selectAll('rect').attr('class', "label-container double-click")
        // console.log('inEdges', _this.g.inEdges(d))

        _this.event.emit('node-double-click', { event: d3.event, id: d })

        // DataFlowConfig检测可连接节点



    }).on("mouseover", function (d) {
        // console.log(d, 'mouseover')	

        const node_params = _this.model_graph_nodes_params[d]
        let htmls = []
        const html_title = '<div class="title">Name: ' + d + '</div>'
        if (node_params != undefined) {
            Object.keys(node_params).forEach(function (key) {
                if (node_params[key].value != undefined) {
                    let html_content = key + ': ' + node_params[key].value
                    if (node_params[key].value == node_params[key].default) {
                        html_content = html_content + ' (default)'
                    }
                    htmls.push(html_content)
                } else if (node_params[key].default != undefined) {
                    const html_content = key + ': ' + node_params[key].value + ' (default)'
                    htmls.push(html_content)
                } else {
                    htmls.push(key + ': None')
                }
                // console.log(node_params[key])
            })
        }
        htmls = html_title + htmls.join('<br>')
        _this.tooltip.transition()
            .duration(200)
            .style("opacity", .9);

        _this.tooltip.html(htmls)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })
        .on("mouseout", function (d) {
            // console.log(d, 'mouseout')		
            _this.tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
    // this.svg_nodes.transtion().duration(500)

}
modelGraph.prototype.setNodeSelectEvent = setNodeSelectEvent


function visibleAllNodes() {
     // visible nodes
    for (let i = 0; i < this.cur_select_node_neighbor_nodes.length; i++) {
        this.svg_nodes_json[this.cur_select_node_neighbor_nodes[i]]
            .transition()
            .duration(300)
            .style('opacity', 1)
    }
    // visible edges
    for (let i = 0; i < this.cur_select_node_neighbor_edges.length; i++) {
        const edge = this.g.edge(this.cur_select_node_neighbor_edges[i])
        if(edge){
            d3.select(edge.elem)
                .transition()
                .duration(300)
                .style('opacity', 1) 
        }
    }
}
modelGraph.prototype.visibleAllNodes = visibleAllNodes

function visiblePreNodes(node_id, visible) {
    this.visibleAllNodes()

    const res = this.getPreNodes(node_id)
    const pre_nodes = res.pre_nodes
    const pre_edges = res.pre_edges
    // {pre_nodes: pre_nodes, pre_edges: pre_edges}

    let opacity = 1
    if (!visible) opacity = 0.4

    // console.log('nodes', pre_nodes)

    for (let i = 0; i < pre_nodes.length; i++) {
        // node = nodes[i]

        this.svg_nodes_json[pre_nodes[i]]
            .transition()
            .duration(300)
            .style('opacity', opacity)

    }

    for (let i = 0; i < pre_edges.length; i++) {
        const edge = this.g.edge(pre_edges[i])
        d3.select(edge.elem)
            .transition()
            .duration(300)
            .style('opacity', opacity)
    
    }


}
modelGraph.prototype.visiblePreNodes = visiblePreNodes


/**
 * 
 * @param {*} node_id 
 * return  [{v: "ResNet18_0", w: "Conv2dBnRelu_3"}...]
 */
function getPreNodesEdges(node_id) {

    function findPre(node_id) {
        let in_edges = this.g.inEdges(node_id)
        let cur_node_in_edges = []

        if (in_edges != undefined) {
            for (let i = 0; i < in_edges.length; i++) {
                cur_node_in_edges.push(in_edges[i])
                let pre_in_edges = findPre.call(this, in_edges[i].v)

                cur_node_in_edges.push.apply(cur_node_in_edges, pre_in_edges);
            }
            return cur_node_in_edges
        } else {
            return []
        }

    }

    const pre_edges = findPre.call(this, node_id)
    // console.log('pre_edges', node_id, pre_edges)
    return pre_edges
}
modelGraph.prototype.getPreNodesEdges = getPreNodesEdges


function getPreNodes(node_id) {
    let pre_nodes = []
    const pre_edges = this.getPreNodesEdges(node_id)
    for (let i = 0; i < pre_edges.length; i++) {
        pre_nodes.push(pre_edges[i].v)
        
            // .transition()
            // .duration(300)
            // .style('opacity', 0.4)
    }
    // console.log(node_id, 'pre_nodes:', pre_nodes)
    this.cur_select_node_neighbor_nodes = pre_nodes
    this.cur_select_node_neighbor_edges = pre_edges
    return {pre_nodes: pre_nodes, pre_edges: pre_edges}
}

modelGraph.prototype.getPreNodes = getPreNodes



function getSuccNodesEdges(node_id) {

    function findPre(node_id) {
        let out_edges = this.g.outEdges(node_id)
        let cur_node_out_edges = []

        if (out_edges != undefined) {
            for (let i = 0; i < out_edges.length; i++) {
                cur_node_out_edges.push(out_edges[i])
                let pre_out_edges = findPre.call(this, out_edges[i].w)

                cur_node_out_edges.push.apply(cur_node_out_edges, pre_out_edges);
            }
            return cur_node_out_edges
        } else {
            return []
        }

    }

    const succ_edges = findPre.call(this, node_id)
    // console.log('Pre_node_id', node_id, PreEdges)
    return succ_edges
}
modelGraph.prototype.getSuccNodesEdges = getSuccNodesEdges

function getSuccNodes(node_id) {
    let succ_nodes = []
    const succ_edges = this.getSuccNodesEdges(node_id)
    for (let i = 0; i < succ_edges.length; i++) {
        succ_nodes.push(succ_edges[i].w)
    }
    console.log(node_id, 'succ_nodes:', succ_nodes)
    this.cur_select_node_neighbor_nodes = succ_nodes
    return succ_nodes
}

modelGraph.prototype.getSuccNodes = getSuccNodes

// /**
//  * left Click
//  * @param {*} d 
//  * @param {*} i 
//  */
function onNodeSelect(d, i) {
    d3.select(this).classed('hover', true)
}

modelGraph.prototype.onNodeSelect = onNodeSelect

// ================================= Edge ====================================


/**
 * Groups Event 
 */
function setEdgeEvent() {

    const _this = this
    this.root_graph.selectAll('path.path')
        .on('mouseover', function (d) {
            d3.select(this)
                .style('stroke', _this.edge_highlight_stroke)
                .style('stroke-width', _this.edge_highlight_stroke_width)
        })
        .on('mouseout', function (d) {
            d3.select(this)
                .style('stroke', _this.edge_stroke)
                .style('stroke-width', _this.edge_stroke_width)
        })
        .on('click', function (d) {

            console.log('setEdgeEvent click', d)

            _this.removeEdge(d)

        })

}

modelGraph.prototype.setEdgeEvent = setEdgeEvent

/**
 * 
 */
// function setNodesEvent(){
//     this.root_graph.selectAll('g.node')
//         .call(this.getDraggableConfig())
// }
// modelGraph.prototype.setNodesEvent = setNodesEvent



// ================================= Connection ====================================

/**
 * Anchors dragable for connecting nodes 
 * 遗弃 不再使用该方法
 */
function setAchorsdragable() {
    let _this = this
    const draged = d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);

    function dragstarted(d) {
        // d3.select(this).raise().classed("active", true);
        const type = d3.select(this).attr('type')

        let bais_y = 18
        if (type == 'input') bais_y = -18

        console.log('type', type, bais_y)
        d = _this.g.node(d);
        d.dagre_to_x = d.x
        d.dagre_to_y = d.y + bais_y
        _this.connect_link_path_start_position = [d.dagre_to_x, d.dagre_to_y]

    }
    function dragged(d) {

        d = _this.g.node(d);

        // _this.connect_link_path_start_position
        d.dagre_to_x += d3.event.dx
        d.dagre_to_y += d3.event.dy

        function diagonal(s, d) {
            const path = `M ${s.x} ${s.y}
                    C ${(s.x + d.x) / 2} ${s.y},
                      ${(s.x + d.x) / 2} ${d.y},
                      ${d.x} ${d.y}`
            return path;
        }

        const points = diagonal({
            x: _this.connect_link_path_start_position[0],
            y: _this.connect_link_path_start_position[1]
        }, {
                x: d.dagre_to_x,
                y: d.dagre_to_y
            })
        // 要重新渲染边
        _this.connect_link_path.classed('hidden', false)
        _this.connect_link_path.attr('d', points)

    }
    function dragended(d) {
        _this.connect_link_path_start_position = [0, 0]
        // d3.select(this).classed("active", false);
        // 要重新渲染边
        // render.updateGraph(inner, g)
    }


    this.svg_anchors.call(draged);
}
modelGraph.prototype.setAchorsdragable = setAchorsdragable

/**
 * Anchors Event for connecting
 */
function setAnchorsEvent() {

    const _this = this
    this.root_graph.selectAll('circle.anchor')
        .on('mousedown', function (d) {
            const coords = d3.mouse(this);
            // console.log('anchors mousedown', coords)
            console.log('setAnchorsEvent', d)

            if (_this.connect_source_node_id == -1) {
                _this.connect_source_node_id = d
            } else {
                _this.connect_target_node_id = d

                console.log('connecting...', _this.connect_source_node_id, _this.connect_target_node_id)
                // create connection here


                const new_connection = {
                    source: _this.connect_source_node_id,
                    target: _this.connect_target_node_id,
                    label: _this.connect_source_node_id + " to " + _this.connect_target_node_id,
                    class: "inactive"
                }

                _this.createConnection(new_connection)
                _this.drawGraph()
                // reset connettion
                _this.connect_source_node_id = -1
                _this.connect_target_node_id = -1
            }
        })
        .on('mousemove', function (d) {
            const coords = d3.mouse(this);
            // console.log('anchors mousemove', d, coords)
            // dag.connecting_target_node = d.id
        })


}

modelGraph.prototype.setAnchorsEvent = setAnchorsEvent

// ====================================== Group ========================================
// ================================= Clusters/Group ====================================
/**
 * set Clusters Draggable
 */
function setClustersDraggable() {
    this.svg_clusters.call(this.getDraggableConfig())
}
modelGraph.prototype.setClustersDraggable = setClustersDraggable

/**
 * Groups Event 
 */
function setGroupEvent() {

    const _this = this
    this.root_graph.selectAll('g.cluster')
        .on('mousedown', function (d) {
            const coords = d3.mouse(this);
            // console.log('anchors mousedown', coords)
            console.log('setGroupEvent', d)

        })
        .on('mousemove', function (d) {
            const coords = d3.mouse(this);
            // console.log('anchors mousemove', d, coords)
            // dag.connecting_target_node = d.id
            console.log('setGroupEvent', d)
        })


}

modelGraph.prototype.setGroupEvent = setGroupEvent


function addNodeToGroup(group_id, node_id) {
    this.groups[group_id].addNode(this.g, this.g.node(node_id))
}
modelGraph.prototype.addNodeToGroup = addNodeToGroup


function removeNodeFormGroup(group_id, node_id) {

    const cur_node_edges = this.groups[group_id].nodes_edges[node_id]
    // 删除 节点 // remove from dag
    this.g.removeNode(node.id)

    // 重新添加 node 和边
    // add node to dag
    this.g.setNode(node.id, this.g.nodes[node.id])

    //  console.log(this.g.nodes_edges[node.id])
    // 重新初始化边
    for (let i = 0; i < cur_node_edges.length; i++) {
        let edge = this.g.nodes_edges[node.id][i]
        this.g.setEdge(edge.v, edge.w, { curve: d3.curveBasis });
    }
}
modelGraph.prototype.removeNodeFormGroup = removeNodeFormGroup


function groupMove(group_id, Group) {
    // console.log('transform_to',group_id, transform_to)
    // console.log(this.groups[group_id])
    this.groups[group_id].moveTo(this.g, this.svg_nodes_json, Group)
    // this.groups[group_id].setSollapse(this.g, Group, true)
}
modelGraph.prototype.groupMove = groupMove

function collapseGroup(group_id, Group) {
    this.groups[group_id].setCollapse(this.g, this.svg_nodes_json, Group, true)
}
modelGraph.prototype.collapseGroup = collapseGroup


// ==============================Zoom==================================

function setZoom() {
    // Set up zoom support
    const _this = this
    const zoom = d3.zoom()
        .on("zoom", function () {
            // 287.875,21
            // console.log('d3.event.transform', d3.event.transform)
            const transform = d3.event.transform
            _this.root_graph_cfg.initialScale = transform.k
            _this.root_graph_cfg.cur_trans_x = transform.x
            _this.root_graph_cfg.cur_trans_y = transform.y
            _this.inner.attr("transform", d3.event.transform);
        })
        .scaleExtent([this.mini_scale, this.max_scale])


    this.root_graph.call(zoom)

    // Center the graph

    this.root_graph_cfg.cur_trans_x = (this.g.graph().width) / 2
    console.log('graphSVGConfig', this.root_graph_cfg.cur_trans_x, this.root_graph_cfg.cur_trans_y)
    // this.root_graph.call(
    //     zoom.transform, 
    //     d3.zoomIdentity.translate(
    //         this.root_graph_cfg.cur_trans_x,
    //         this.root_graph_cfg.cur_trans_y)
    //     .scale(this.root_graph_cfg.initialScale));
    // this.root_graph.attr('height', this.g.graph().height * this.root_graph_cfg.initialScale + 40);
    // this.inner.attr('height', this.g.graph().height * this.root_graph_cfg.initialScale + 40);
}
modelGraph.prototype.setZoom = setZoom

function setMiniMap() {
    // Set up minimap support

}

modelGraph.prototype.setMiniMap = setMiniMap




//  ======================================= Listerning function ================================================

function onContextMenu(d, i) {

    // react on right-clicking
    console.log('on setNodeMenuEvent')
    // console.log(d, d3.mouse(this),d3.event.clientX, d3.event.clientY)
    // _this.onContextMenu(d, i,  d3.event.preventDefault(

}
modelGraph.prototype.onContextMenu = onContextMenu





//  ==========================UI=============================

function ListerningGraphClick() {
    const _this = this
    this.root_graph.on("dblclick.zoom", function () {

        if (_this.mouse_action != "node-double-click") {
            console.log('root_graph dblclick.zoom')
            _this.setSearchBoxVisible(true)

        } else {
            _this.mouse_action = "dblclick.zoom"
        }

    }).on('click', function () {

        if (_this.search_box) {
            _this.setSearchBoxVisible(false)

        }
        if (_this.mouse_action != "node-click" && _this.mouse_action != "node-double-click") {
            console.log('root_graph click')
            // _this.cur_select_node.selectAll('rect').classed('hover', false)
            if (_this.cur_select_node)
                _this.cur_select_node.selectAll('rect').attr('class', 'label-container')
            _this.visibleAllNodes()

            _this.connect_source_id = ''
            _this.cur_select_node = null

        } else {
            _this.mouse_action = "graph-click"
        }

    })
}

modelGraph.prototype.ListerningGraphClick = ListerningGraphClick

function setSearchBoxVisible(if_visible) {
    if (!this.search_box)
        this.search_box = document.querySelector(this.SearchBoxId)

    if (!this.search_suggestion)
        this.search_suggestion = document.querySelector(".el-autocomplete-suggestion")

    if (if_visible) {

        // const input = document.getElementById("search-inline-input")

        setTimeout(function () {
            document.getElementById("search-inline-input").focus()
        }, 0)

        // console.log(input, this.search_box, this.search_suggestion)

        this.search_box.style.display = ""
        this.search_box.style.left = d3.event.clientX + "px";
        this.search_box.style.top = d3.event.clientY + 'px';

        this.search_suggestion.style.display = "";
        this.search_suggestion.style.left = d3.event.clientX + "px";
        this.search_suggestion.style.top = (28 + d3.event.clientY) + 'px';

    } else {
        this.search_box.style.display = "none"
        this.search_suggestion.style.display = "none";

    }
    // console.log('getElementsByClassName')
    // const suggestion = document.getElementsByClassName('el-autocomplete-suggestion')
    // const suggestion = document.querySelector(".el-autocomplete-suggestion").style.display = "none";

}

modelGraph.prototype.setSearchBoxVisible = setSearchBoxVisible

/**
 * get all VisibleLinks
 */
function getVisibleLinks() {

}
//  ===================== API ===========================
// 

function findCNode(g, node_stack, node_ids) {
    for (var in_id in node_ids) {


    }
}
function ifHasPreNode() {


}





//save and recover app state ***************************************
/**
* Creates a Object containing all the info about this graph, it can be serialized
* @method serialize
* @return {Object} value of the node
*/
function serialize(order = true) {

    this.g.nodes()
    this.global_outputs
    const _this = this
    let node_coords = []
    this.g.nodes().forEach(function (v) {
        const node = _this.g.node(v)
        const outputs = _this.g.successors(v)
        const inputs = _this.g.predecessors(v)

        // console.log(node)
        let obj = {
            opt: v,
            node_id: node.id,
            inputs: inputs,
            outputs: outputs,
            coords: [node.x, node.y]
        }
        node_coords.push(obj)
    })

    if (order) {
        node_coords.sort(function (a, b) {
            return a.coords[1] - b.coords[1]
        })
    }
    const model = {
        __version__: this.__version__,
        __date__: new Date(),
        graph: graphFlow.graphlib.json.write(this.g),
        params: this.model_graph_nodes_params,

        order: node_coords,
        edges: this.g.edges(),

        last_node_id: this.g.last_node_id,
        last_edge_id: this.g.last_edge_id,

        global_inputs: this.global_inputs,
        global_outputs: this.global_outputs,

        // nodes: this.g.nodes()

    }
    return model
    // JSON.stringify()
    // return serializeJson

}
modelGraph.prototype.serialize = serialize

// function loadGraphNodeMeta(){
//     this.all_graph_node_metas = {}
//     for(let i=0;i<this.g.nodes().length;i++){

//     }
//     for(let i=0;i<this.NodeMetas.length;i++){

//     }
   

// }
// modelGraph.loadGraphNodeMeta = loadGraphNodeMeta
/**
 * 
 * @param {*} model_graph JSON  
 */
function loadGraph(model_graph) {



    this.g = graphFlow.graphlib.json.read(model_graph.graph);
    this.model_graph_nodes_params = model_graph.params
    // console.log('model_graph', this.model_graph_nodes_params)

    this.g.last_node_id = model_graph.last_node_id
    this.g.last_edge_id = model_graph.last_edge_id

    this.global_inputs = model_graph.global_inputs
    this.global_outputs = model_graph.global_outputs

}
modelGraph.prototype.loadGraph = loadGraph

// modelGraph.prototype.restore = function(model){
//     this.loadGraph(model)
//     this.updateGraph()
// }


function clearGraph() {

    this.g = new graphFlow.graphlib.Graph({ compound: true })
        .setGraph({
            ranksep: 40,
            nodesep: 40,
            edgesep: 10
        })
        .setDefaultEdgeLabel(function () { return {}; });
        
    this.g.graph().transition = function (selection) { return selection.transition().duration(500); };

    this.g.last_node_id = -1;
    this.g.last_edge_id = -1;
    this.model_graph_nodes_params = {}
    this.updateGraph()
    this.cur_select_node_neighbor_nodes = []
    this.connect_source_id = ''
    this.connect_target_id = ''
    this.cur_select_node = ''
    this.global_inputs = []
    this.global_outputs = []
    this.svg_nodes_json = {}

}
modelGraph.prototype.clear = clearGraph

// function transParam(name, param){
// 'padding': {
//     'name': 'padding', 
//     'type': ['int', 'tuple'], 
//     'default': [' ', '0']
// },
// let param_type = ''
// Object.keys(param).forEach(function(k){
//     if(k != 'name'){

//     }

//     switch(k){
//         case 'type':
//             param_type = param[k]
//             if(param_type==['int', 'tuple']){

//             }

//         break
//     }

// })

// }
/**
 * update or add node 
 * @param {*} node_id 
 * @param {*} optType 
 * @param {*} params Do not need if add a new node to graph 
 */
function updateNodeParams(node_id, optType, params = {}) {

    // console.log('node_id', this.g.hasNode(node_id))
    if (this.g.hasNode(node_id)) {
        // update
        console.log('updateNodeParams', this.model_graph_nodes_params[node_id], 'to', params)
        Object.keys(params).forEach(function (key) {
            // console.log(params[key].type.indexOf('bool'))
            if (params[key].value == true && params[key].type.indexOf('bool') != -1) {
                params[key].value = 'True'
                console.log('params[key].value', params[key].value)
            }

            if (params[key].value == false && params[key].type.indexOf('bool') != -1) {
                params[key].value = 'False'
                console.log('params[key].value', params[key].value)
            }
        })

        this.model_graph_nodes_params[node_id] = params

    } else {
        // add a new

        
        const params = this.frameworks[this.cur_framework_name][optType]
        console.log(this.frameworks[this.cur_framework_name].ResNet50)
        console.log('add a new', optType ,'node', 'params', params)
        if (this.global_input_node_opt.indexOf(optType) == -1 && this.global_output_node_opt.indexOf(optType) == -1) {
            Object.keys(params).forEach(function (k) {
                params[k].value = params[k].default;
            })
            // console.log('add a new', optType ,  params)
        }
        this.model_graph_nodes_params[node_id] = params

    }

    // this.model_graph_nodes_params[node.id] = {

    //     "op": "Convolution", 
    //     "param": {
    //         "dilate": "(1,1)", 
    //         "kernel": "(3,3)", 
    //         "no_bias": "False", 
    //         "num_filter": "64", 
    //         "num_group": "1", 
    //         "pad": "(1,1)", 
    //         "stride": "(1,1)", 
    //         "workspace": "512"
    //     }, 
    //     "name": "conv1_1", 
    //     "inputs": [[0, 0], [1, 0], [2, 0]], 
    //     "backward_source_id": -1 
    // }
    // console.log(this.render.createNodes())   
}

modelGraph.prototype.updateNodeParams = updateNodeParams


function updateNode(node) {
    // this.selectedNodeInfo

    this.updateNodeParams(node.id, {}, node.params)

}
modelGraph.prototype.updateNode = updateNode

function addNodeByObj(node_obj, type = 'graph') {
    this.g.last_node_id++;

    // {name: "Sigmoid"
    // schema: Object
    // value: "Sigmoid"}
    this.all_graph_node_metas[node_obj.name] = node_obj



    const node_id = node_obj.name + '_' + this.g.last_node_id
    const svgId = 'node' + this.g.last_node_id;
    // graph_node_id  = node_name + global_graph_node_id

    let node = {
        id: node_id,
        svgId: svgId,
        label: node_obj.name,
        properties: {
            anchors: [{ id: 0, type: 'input' }, { id: 1, type: 'output' }],
            schema: node_obj.schema
        },
        params: node_obj.schema

    }


    if (this.global_input_node_opt.indexOf(node_obj.name) != -1) {
        this.global_inputs.push(node_id)
        node.style = this.input_node_style
    }

    if (this.global_output_node_opt.indexOf(node_obj.name) != -1) {
        this.global_outputs.push(node_id)
        node.style = this.output_node_style
    }

    // eg. { id : "UUUU", label: "IUUU", properties:{anchors:[{id:0,type:'input'}, {id:1,type:'output'}] }}

    let x = node.x ? node.x : 0
    let y = node.y ? node.y : 0


    x, y = this.formatCoords(x, y)



    this.updateNodeParams(node.id, node_obj.name, {})

    this.g.setNode(node.id, {
        svgId: node.svgId,
        label: node.label,
        labelType: "text",
        properties: node.properties,
        x: x,
        y: y
    });

    // console.log(this.g.nodes())

    // init params of node opt  
    // console.log('cur_framework_name', this.frameworks['PyTorch'], this.cur_framework_name)
    // console.log(Object.keys(this.frameworks['PyTorch']))
    // this.model_graph_nodes_params[node.id] = this.frameworks[this.cur_framework_name][node_obj.name]
    // this.model_graph_nodes_params[node.id] = {

    //     "op": "Convolution", 
    //     "param": {
    //         "dilate": "(1,1)", 
    //         "kernel": "(3,3)", 
    //         "no_bias": "False", 
    //         "num_filter": "64", 
    //         "num_group": "1", 
    //         "pad": "(1,1)", 
    //         "stride": "(1,1)", 
    //         "workspace": "512"
    //     }, 
    //     "name": "conv1_1", 
    //     "inputs": [[0, 0], [1, 0], [2, 0]], 
    //     "backward_source_id": -1 
    // }
    // console.log(this.render.createNodes())   
}
modelGraph.prototype.addNodeByObj = addNodeByObj

/**
 * 
 * @param {*} node_id 
 * return {node,params}
 */
function getNodeParamsById(node_id) {

    const node_info = this.g.node(node_id)
    const node_params = this.model_graph_nodes_params[node_id]

    return {
        id: node_id,
        attrs: node_info,
        params: node_params
    }

}
modelGraph.prototype.getNodeParamsById = getNodeParamsById


function CreateEventListerner() {
    function EventEmitter() {
        this.events = {};
    }
    //绑定事件函数
    EventEmitter.prototype.on = function (eventName, callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback);
    };
    //触发事件函数
    EventEmitter.prototype.emit = function (eventName, data) {
        var events = this.events[eventName],
            args = Array.prototype.slice.call(arguments, 1), i, m;

        if (!events) {
            return;
        }
        // console.log('data', data, 'args', args)
        for (i = 0, m = events.length; i < m; i++) {
            events[i].apply(data, args);
        }
    }

    this.event = new EventEmitter()
    return this.event
}

modelGraph.prototype.CreateEventListerner = CreateEventListerner

function move(x,y){
    console.log(x, y)
}
function keyBinding() {
    // var keyPressed = {};
    const _this = this
    d3.select('body')  
        .on('keydown', function() {
            console.log('d3.event', d3.event)
            if(d3.event.ctrlKey&&d3.event.key=='c'){
                console.log('copy')
            }
            // keyPressed[d3.event.keyIdentifier] = true;
        })
        .on('keyup', function() {

            if(d3.event.ctrlKey&&d3.event.key=='c'){
                console.log('copy2')

                if(_this.cur_select_node){
                    // console.log(_this.cur_select_node.data())
                    _this.cur_copy_node_id =  _this.cur_select_node.data()[0]
                    // console.log('node_id', node_id)
                    // const opt  = _this.node_id.split('_')[0]
                    // console.log(opt)

                }else{
                    console.log('not node selected')
                }
               
            }
            if(d3.event.ctrlKey&&d3.event.key=='v'){
                console.log('paste')

                if(_this.cur_copy_node_id){
                    // console.log(_this.cur_select_node.data())
                    // _this.cur_copy_node_id =  _this.cur_select_node.data()[0]
                    // console.log('node_id', node_id)
                    // const opt_type  = _this.cur_copy_node_id.split('_')[0]
                        // item = {name: "Sigmoid"
                        // schema: Object
                        // value: "Sigmoid"}
                    const node_info = _this.g.node(_this.cur_copy_node_id)
                    _this.addNodeByObj({
                        'name': node_info.label,
                        'schema': node_info.properties.schema
                    })
                    _this.updateGraph()
                    // console.log(opt)

                }else{
                    console.log('not node selected')
                }
               
            }
            if(d3.event.ctrlKey&&d3.event.key=='d'){
               const node_id =  _this.cur_select_node.data()[0]
               _this.g.removeNode(node_id)
               _this.updateGraph()

            }

        });

}
modelGraph.prototype.keyBinding = keyBinding

export { modelGraph }