
import * as d3 from "d3";
// import dagreD3 from 'dagre-d3'
// import graphFlow from 'd3-graph-flow'
import graphFlow from 'dagre-d3'

// import {nodes, arcs} from './test'
import {UI} from './UI'
import {Style} from './style'
import {modelGraph} from './graph'
import {demo_data} from './demo2'
import {mode_graph_demo} from './model-graph-demo'

import {Config} from './Config'

import {NodeMetas} from './node-metas'
import {frameworkSelection} from './framework'

function Init(vue){
    // 禁用 原生 右键菜单
    // document.oncontextmenu = function(){return false}
    // // Set up an SVG group so that we can translate the final graph.
    var root_graph = d3.select("#root-graph"),
        inner = root_graph.append("g");
       

    // Create the renderer
    var render = new graphFlow.render();


    var graph = new modelGraph()
    _.assign(graph, Config)
    _.assign(graph, {NodeMetas: NodeMetas})
    _.assign(graph, {frameworks: frameworkSelection})
    
    // graph.initGraphFromData()
    var g = demo_data()
    // graph.initGraphFromGraph(g)
    graph.setFramework('PyTorch')
    // graph.initAll()
    graph.loadGraph(mode_graph_demo)
    
    graph.root_graph = root_graph
  
    graph.inner = inner
    graph.render = render
    
    // // Set up graph
   
    Style.apply_style.apply(graph)
    graph.drawGraph()
    graph.setZoom()
    graph.setNodesDraggable()

    graph.CreateEventListerner()
    graph.ListerningGraphClick()
    

    console.log(graph)
  

    // graph.graphSVG.on("dblclick.zoom", function(){
    //     console.log('dblclick.zoom')
    //     var coordinates= d3.mouse(this);
    //     var x = coordinates[0];
    //     var y = coordinates[1]

    //     // console.log('click',x, y)

    //     // const new_node = { id : "UUUU", label: "IUUU", properties:{anchors:[{id:0,type:'input'}, {id:1,type:'output'}] }}

    //     // _this.addNode(new_node,'graphSVG')
    //     // _this.updateGraph()
    //     vue.visible = !vue.visible

    // });;
    
    // UI.call(graph, vue)

    return graph

    var height = 3400
    var width = '100%'
    // 网页可见区域宽
    var bodyW = document.documentElement.clientWidth
    // 小球运动时间（毫秒）
    var duration = 2000
    // 运动缓动动画方式
    var animations = ['easeLinear', 'easePolyIn', 'easePolyOut', 'easePolyInOut', 'easeQuad', 'easeQuadIn', 'easeQuadOut',
    'easeQuadInOut', 'easeCubic', 'easeCubicIn', 'easeCubicOut', 'easeCubicInOut', 'easeSin', 'easeSinIn', 'easeSinOut', 'easeSinInOut',
    'easeExp', 'easeExpIn', 'easeExpOut', 'easeExpInOut', 'easeCircle', 'easeCircleIn', 'easeCircleOut', 'easeCircleInOut', 'easeElastic',
    'easeElasticIn', 'easeElasticOut', 'easeElasticInOut', 'easeBack', 'easeBackIn', 'easeBackOut', 'easeBackInOut',
    'easeBounce', 'easeBounceIn', 'easeBounceOut', 'easeBounceInOut']
    var svg = d3.select('body').append('svg').attr('height', height)
        .attr('width', width)
    var g = svg.append('g')
    // 标题文字
    var title = g.append('text')
    title.text('d3.js实现运动缓动动画').attr('fill', 'black')
        .attr('x', bodyW / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .style('font-size', '20px')
        .style('font-weight', 'bold')
        .attr('dy', 8)
    // 各种运动动画的小球
    animations.forEach((v, i) => {
        console.log(v, i)
        var g = svg.append('g')
        g.append('text').text((i + 1) + '.' + v).attr('fill', 'black')
        .attr('x', 100)
        .attr('y', 90 * (i + 1))
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('font-weight', 'bold')
        var circle = svg.append('circle').attr('cx', 100)
        .attr('cy', 90 * (i + 1) + 40).attr('r', 25).style('fill', 'steelblue')
        .style('cursor', 'pointer')
        .on('click', function () {
            circle.transition() // 启动过渡效果
                .duration(duration)
                .attr('cx', 800)
                .ease(d3[v])
        })
    })
}


export {Init}