import * as d3 from "d3";
// import graphFlow from 'd3-graph-flow'
import graphFlow from 'dagre-d3'

function GroupNode(model_graph, id, children=0){

    // this._model= model_graph

    this.id = id
    this.name = 'group'
    this.label = 'group'
    this.type = 'group'

    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.mini_height = 40
    this.mini_width = 80



    this.inputs=[]
    this.ouputs=[]
    this.children = children
    this.nodes = {}

    this.isCollapse = false

    this.nodes_edges = {

    }



    // this.initGroup()

}
function initGroup(){
    if(!this.children){
        this.children = this._model.g.children(this.id)
    }
    // 初始化 子节点
    for(let i = 0; i<this.children.length; i++){
        this.nodes[this.children[i]] = this._model.g.node(this.children[i])
    }
    // 初始化边
    for(let i = 0; i<this.children.length; i++){
        
        this.nodes_edges[this.children[i]] = this._model.g.nodeEdges(this.children[i])
    }
    console.log(this)

    // this.removeNode(this.nodes['J'])

}
GroupNode.prototype.initGroup = initGroup

function addNode(g, node){
    this.nodes[node.id] = node
    this.children.push(node.id)
    // add node to dag group
    g.setParent(node.id, this.id);
}

GroupNode.prototype.addNode = addNode


function removeNode(node){
    delete this.nodes[node.id]
    const ids = this.children.indexOf(node.id)
    delete this.children[ids]
    
    this._model.graph_data = graphFlow.graphlib.json.write(this._model.g);
    this._model.g.nodeEdges(node.id)

   
    this.nodes_edges[node.id] = this._model.g.nodeEdges(node.id)

    
}
GroupNode.prototype.removeNode = removeNode


function moveTo(g, svgNodes, Group){
    
    console.log(this, svgNodes, 'group moveTo transform_to')

    for(let i = 0; i<this.children.length; i++){
        let svgNode = svgNodes[this.children[i]]
        g.node(this.children[i]).x += d3.event.dx;
        g.node(this.children[i]).y += d3.event.dy;
        // 更新 dag 中 graph的坐标
        // 然后根据 坐标 把 node translate到新坐标
        const transform_to = "translate(" + g.node(this.children[i]).x + "," + g.node(this.children[i]).y + ")"
        svgNode.attr('transform', transform_to)


    }
}
GroupNode.prototype.moveTo = moveTo

/**
 *  collapse 就是把graph 的node 坐标迁移到 group 的坐标
 *  之后隐藏node
 *  重新绘制 group 的大小
 *  然后重新绘制edge
 * @param {*} g 
 * @param {*} Group 
 * @param {*} if_collapse 
 */
function setCollapse(g, svgNodes, Group, if_collapse=null){

    if(if_collapse == null){
        if_collapse = this.isCollapse
        this.isCollapse = !this.isCollapse
    }else{
        this.isCollapse = if_collapse
    }
       

    
  
    for(let i = 0; i<this.children.length; i++){
        
        if(if_collapse){
            // step 1 transform node
            let node = g.node(this.children[i])
            g.node(this.children[i]).pre_x = node.x
            g.node(this.children[i]).pre_y = node.y
            g.node(this.children[i]).x = Group.x
            g.node(this.children[i]).y = Group.y

            // step 2 disvisible the node 
            svgNodes[this.children[i]].style("opacity", 0)

        }else{
            // step 1 transform node
            g.node(this.children[i]).x = g.node(this.children[i]).pre_x
            g.node(this.children[i]).y =g.node(this.children[i]).pre_y
            // step 2 visible the node 
            svgNodes[this.children[i]].style("opacity", 1)
        }
       
    }
    
    // set 

    for(let i = 0; i<this.children.length; i++){
        // const svgNode = d3.select("node_"+this.children[i])
        // svgNode.attr()
       

    }

}
GroupNode.prototype.setCollapse = setCollapse





export{GroupNode}