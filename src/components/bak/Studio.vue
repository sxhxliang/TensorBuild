<template>
  <div class="graph-container">
    <el-button @click="genCode" size="mini"> code </el-button>
    <el-button @click="serialize" size="mini"> Srialize </el-button>
    <el-button @click="clear" size="mini"> Clear </el-button>
    <svg id="root-graph"></svg>

    <div class="SearchBox" id="SearchBox" style="display: none">
      <el-row class="search-autocomplete">
        <el-col :span="24">
          <el-autocomplete
            class="inline-input" 
            v-model="SelectState"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>
    </div>
   
  </div>
</template>

<script>


import { eventBus } from './eventBus.js'
import * as d3 from "d3";
// import dagreD3 from 'dagre-d3'
import {Init} from '../assets/js/graph' 
import {TemplateRender} from '../assets/template/compiler'


export default {
  name: "Studio",
  data() {
    return {
      id:0,
      visible: false,
      NodeMetas: [],
      SelectState: '',
      state2: '',
      cur_node_select_id:'',
    };
  },
  mounted() {
    this.event = event;
    this.graph = Init(this)
    this.SearchBox = document.querySelector('#SearchBox')
    //  
    // this.NodeMetas = this.graph.NodeMetas
    const len = this.graph.NodeMetas.length

    for(let i = 0;i<len;i++){
      let node = this.graph.NodeMetas[i]
      // node.value for search ui index
      node.value = node.name
      this.NodeMetas.push(node)
    }
    const _this = this
    this.graph.event.on('node-double-click',function(id){
        _this.cur_node_select_id = id
        console.log('studio node-double-click', id, _this.graph.getNodeParamsById(id))
        eventBus.$emit('InspectNode', _this.graph.getNodeParamsById(id))
    })

    eventBus.$on('UpdateNode', args => {

      console.log('UpdateNode args', args)
      const optType  = {}
      this.graph.updateNodeParams(_this.cur_node_select_id, optType, args)

      
    }) 



  },
  methods: {

    querySearch(queryString, cb) {
      var NodeMetas = this.NodeMetas;
      var results = queryString ? NodeMetas.filter(this.createFilter(queryString)) : NodeMetas;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (node) => {
        return (node.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
      // name: "Conv2d"
      // schema: Object
      // value: "Conv2d"
      // this.event.$emit('eventName', 'this is a message.');
      this.graph.searchBoxVisible(false)
      this.graph.addNodeByObj(item)
      this.graph.updateGraph()
      this.SelectState = ''
    },
    genCode(){
      //  eventBus.$emit('my-event', 'newValue')
      //  this.graph.zhihu = '100'
      const data = {"last_node_id":13,"last_link_id":12,"nodes":[{"id":2,"type":"graph/GlobalInput","pos":[165,9.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"outputs":[{"name":"input_367","type":null,"links":[1]}],"properties":{"name":"input_426","type":null}},{"id":3,"type":"pytorch/Conv1d","pos":[165,78.5],"size":{"0":138.75518798828125,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":1}],"outputs":[{"name":"out","links":[2]}],"properties":{"output_padding":"","in_channels":"","out_channels":"","groups":1,"transposed":false,"padding":[0],"dilation":[1],"stride":[1],"bias":true}},{"id":4,"type":"pytorch/BatchNorm1d","pos":[165,147.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":2}],"outputs":[{"name":"out","links":[3]}],"properties":{}},{"id":5,"type":"pytorch/ReLU","pos":[165,216.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":3}],"outputs":[{"name":"out","links":[4,5]}],"properties":{"inplace":false,"threshold":0,"value":0}},{"id":7,"type":"pytorch/Conv1d","pos":[70,285.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":4}],"outputs":[{"name":"out","links":[7]}],"properties":{"output_padding":"","in_channels":"","out_channels":"","groups":1,"transposed":false,"padding":[0],"dilation":[1],"stride":[1],"bias":true}},{"id":6,"type":"pytorch/Conv1d","pos":[260,285.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":5}],"outputs":[{"name":"out","links":[6]}],"properties":{"output_padding":"","in_channels":"","out_channels":"","groups":1,"transposed":false,"padding":[0],"dilation":[1],"stride":[1],"bias":true}},{"id":9,"type":"pytorch/BatchNorm1d","pos":[70,354.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":7}],"outputs":[{"name":"out","links":[9]}],"properties":{}},{"id":8,"type":"pytorch/BatchNorm1d","pos":[260,354.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":6}],"outputs":[{"name":"out","links":[8]}],"properties":{}},{"id":11,"type":"pytorch/ReLU","pos":[70,423.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":9}],"outputs":[{"name":"out","links":[11]}],"properties":{"inplace":false,"threshold":0,"value":0}},{"id":10,"type":"pytorch/ReLU","pos":[260,423.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"in","type":0,"link":8}],"outputs":[{"name":"out","links":[10]}],"properties":{"inplace":false,"threshold":0,"value":0}},{"id":12,"type":"graph/GlobalOutput","pos":[70,492.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"output_491","type":0,"link":11}],"properties":{"name":"output_698","type":0}},{"id":13,"type":"graph/GlobalOutput","pos":[260,492.5],"size":{"0":140,"1":19},"flags":{},"mode":0,"inputs":[{"name":"output_593","type":0,"link":10}],"properties":{"name":"output_167","type":0}}],"links":[[1,2,0,3,0,0],[2,3,0,4,0,0],[3,4,0,5,0,0],[4,5,0,7,0,0],[5,5,0,6,0,0],[6,6,0,8,0,0],[7,7,0,9,0,0],[8,8,0,10,0,0],[9,9,0,11,0,0],[10,10,0,13,0,0],[11,11,0,12,0,0]],"groups":[],"config":{}}
      let res = TemplateRender(data);
      console.log(res)
      
    },
    serialize(){
      // old version
      console.log(this.graph.serialize())
    },
    clear(){
      this.graph.clear()
    }
  },
  computed: {  
  }
};
</script>

<style>
/* @import "../assets/css/litegui.css"; */
.graph-container{
  height: 100%;
  width: 100%;
    /* background-color: #cc85d9;
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0px; */
}
#root-graph{
  height: 100%;
  width: 100%;
}
#svg-container {
  background: #eaeaea;
}

text {
  font-weight: 300;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serf;
  font-size: 14px;
}

.node{
  height: 30px;
  line-height: 30px;
}
.node rect {
  stroke: #333;
  fill: #fff;
  stroke-width: 1.5px;
}

.edgePath path.path {
  stroke: #333;
  fill: none;
  stroke-width: 1.5px;
}

.hidden {
  display: none;
}

.arrowhead {
  stroke: blue;
  fill: blue;
  stroke-width: 1.5px !important;
}

marker > path {
  stroke-width: 1.5px !important;
}

.inactive path {
  stroke: #c1c1c1 !important;
}

.inactive marker path {
  stroke: #c1c1c1;
  fill: #c1c1c1;
}

.density-low path {
  stroke: green !important;
}

.density-medium path {
  stroke: orange !important;
}

.density-high path {
  stroke: red !important;
}

.density-low marker path {
  fill: green;
}

.density-medium marker path {
  fill: orange;
}

.density-high marker path {
  fill: red;
}

.weight-normal > path.path {
  stroke-width: 1px;
}

.weight-medium > path.path {
  stroke-width: 2px;
}

.weight-high > path.path {
  stroke-width: 4px;
}

.animation-slow {
  animation: arc-animation 100s linear infinite;
}

.animation-medium {
  animation: arc-animation 50s linear infinite;
}

.animation-fast {
  animation: arc-animation 10s linear infinite;
}

.animation {
  stroke-dasharray: 5px 10px;
  stroke-linecap: round;
  stroke-dashoffset: 1500;
}

@keyframes arc-animation {
  to {
    stroke-dashoffset: 0;
  }
}
.arc-information {
  width: 100px;
  box-shadow: 0 0 1em #cecece;
  background: white;
  display: table !important;
}
.arc-information tr td {
  padding: 3px 10px;
}
.arc-information tr th {
  background: #FFEB3B;
}
.arc-information button {
  width: 100%;
  background: #FF9800;
  color: #1f1f1f;
  border: none;
  border-radius: 3px;
  margin: 5px 0;
}


.graph {
  border: solid 1px #ddd;
}
.graph text, .graph .node.root div {
  fill: #333;
  font-weight: 300;
  font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
}
.graph .node rect {
  stroke: #ccc;
  fill: #fff;
  stroke-width: 2px;
}
.graph .node.root rect {
  stroke: none;
}
.graph .node.disabled rect {
  stroke-dasharray: 5,5;
}
.graph .node.disabled text {
  fill: #ccc;
}
.graph .edgePath path {
  stroke: #aaa;
  fill: #aaa;
  stroke-width: 2px;
}
/* Arrowhead */
.graph .edgePath marker path {
  stroke: none;
}

.anchor{
  /* z-index: 999; */
  /* stroke-width: 1.5px; */
  opacity:1
}


path.connecting-link{
	fill: none;
	stroke-width: 1.5px;
	stroke: #D19D00;
  opacity: 0.0;
}

path.edge-highlight{
  stroke-width: 2.0px;
	stroke: #D19D00;
  fill: #D19D00;
}

path.hidden{
  opacity: 0.0;
}
path.visible{
  opacity: 1.0;
}


circle.hidden{
	opacity: 0.0;
}

/* for node slect =>>rect  */

.node rect.hover{
  fill: #e5e5e5;
}

node.double-click{
  fill: #FFEB3B;

}




/*  */
.graph,.list {
	cursor: default
}

.graph.animate .node {
	opacity: 0;
	transition: fill 0.5s, stroke 0.5s, opacity 1s;
	-webkit-transition: fill 0.5s, stroke 0.5s, opacity 1s;
}

.graph.animate .node.visible {
	opacity: 1;
	transition: fill 0.5s, stroke 0.5s, opacity 0.5s;
	-webkit-transition: fill 0.5s, stroke 0.5s, opacity 0.5s;
}

.graph.animate .node.visible.entering {
	transition: fill 0.5s, stroke 0.5s, opacity 1.5s;
	-webkit-transition: fill 0.5s, stroke 0.5s, opacity 1.5s;
}

.hovering .graph .node.visible {
	opacity: 0.2;
}

.hovering .graph.animate .node.visible {
	transition: fill 0.5s, stroke 0.5s, opacity 0.4s;
	-webkit-transition: fill 0.5s, stroke 0.5s, opacity 0.4s;
}

.hovering .graph .node.visible.hovered,.hovering .graph .node.visible.selected
	{
	opacity: 1;
}

.graph circle.anchor{
	transition: fill 0.5s, stroke 0.5s, opacity 0.5s;
	-webkit-transition: fill 0.5s, stroke 0.5s, opacity 0.5s;
	opacity: 1;
}


.graph circle.hidden{
	opacity: 0.0;
}


.hovering .graph .node.hovered.immediate rect {
	stroke: #A4011B;
	fill: #FFE0E5;
}

.nodes .node rect {
	stroke-width: 2px;
	stroke: #F16D00;
}

.SearchBox{
  position: absolute;
  z-index: 999;
  height: 80px;
}


</style>
