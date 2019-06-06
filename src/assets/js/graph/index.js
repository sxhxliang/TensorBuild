
import * as d3 from "d3";
// import graphFlow from 'd3-graph-flow'
import graphFlow from 'dagre-d3'



// import {UI} from './lib/UI'
import {Style} from './lib/style'
import {modelGraph} from './lib/graph'
// import {demo_data} from './demo/demo2'
import {mode_graph_demo} from './demo/model-graph-demo'

import {Config} from './lib/Config'

import {NodeMetas} from './node-metas'
import {frameworkSelection} from './framework'

const _ = require("lodash")

function Init(option){
    // 禁用 原生 右键菜单
    // document.oncontextmenu = function(){return false}
    // // Set up an SVG group so that we can translate the final graph.
    var root_graph = d3.select(option.element),
        inner = root_graph.append("g");
    
  

    // Create the renderer
    let default_option = {
        curve: d3.curveBasis
    }

    _.assign(default_option, option)

    var render = new graphFlow.render(default_option);


    var graph = new modelGraph()
    _.assign(graph, Config)
    _.assign(graph, {NodeMetas: NodeMetas})
    _.assign(graph, {frameworks: frameworkSelection})
    
    // graph.initGraphFromData()
    // var g = demo_data()
    // graph.initGraphFromGraph(g)
    graph.setFramework('PyTorch')
    // graph.initAll()
    if(option.load_demo){
        graph.loadGraph(mode_graph_demo)
    }

    if(option.model_graph){
        graph.loadGraph(default_option.model_graph)
    }

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
    graph.keyBinding()
    

    console.log(graph)
  

    return graph
}


export {Init}