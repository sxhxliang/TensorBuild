<template>
  <div class="graph-container">
    <div class="tools hidden-md-and-down" >
      <el-tooltip class="item" effect="dark" content="export graph" placement="top">
        <el-button @click="graphExport" size="mini">Export</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="clear graph" placement="top">
        <el-button @click="clear" size="mini">Clear</el-button>
      </el-tooltip>
    </div>
    <svg id="root-graph">
    </svg>

    <div class="SearchBox" id="SearchBox" style="display: none">
      <el-row class="search-autocomplete">
        <el-col :span="24">
          <el-autocomplete
            id="search-inline-input"
            size="mini"
            prefix-icon="el-icon-search"
            v-model="SelectState"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="Graph Model" :visible.sync="dialogFormVisible">
      <el-input
        type="textarea"
        id="model_input"
        :autosize="{ minRows: 5, maxRows: 10}"
        placeholder="请输入内容"
      >
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="importGraph" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { eventBus } from "../components/eventBus.js";
import * as d3 from "d3";
// import dagreD3 from 'dagre-d3'
import { Init } from "../assets/js/graph";
import { TemplateRender } from "../assets/template/compiler";

export default {
  name: "Workshop",
  data() {
    return {
      // graph: null,
      id: 0,
      graph_model:'',
      visible: false,
      NodeMetas: [],
      SelectState: "",
      state2: "",
      cur_node_select_id: "",
      dialogFormVisible: false,
      fileList:[]
    };
  },
  mounted() {
    this.init();
    const _this = this;
    eventBus.$on("UpdateNode", node => {
      // console.log("UpdateNode node args", node);
      // const optType  = {}
      _this.graph.updateNode(node);
    });
  },
  methods: {
    init() {
      const _this = this;
      if(!this.$store.getters.getGraph){
        const option = {
          element: "#root-graph",
          load_demo: true,
        }
        this.graph = Init(option);
      }else{
        const option = {
          element: "#root-graph",
          model_graph: this.$store.getters.getGraph
        }
        this.graph = Init(option);
      }
     
      this.$store.commit("setGraph", this.graph.serialize());
      
      this.SearchBox = document.querySelector("#SearchBox");

      // for search
      const len = this.graph.NodeMetas.length;
      for (let i = 0; i < len; i++) {
        let node = this.graph.NodeMetas[i];
        // node.value for search ui index
        node.value = node.name;
        this.NodeMetas.push(node);
      }

      this.graph.event.on("node-double-click", function(d) {
        //  {event:d3.event, id:d}
        _this.cur_node_select_id = d.id;

        _this.$store.commit("inspectNode", {
          event: d.event,
          node: _this.graph.getNodeParamsById(d.id)
        });

        // _this.$store.dispatch('inspectNode', _this.graph.getNodeParamsById(id))
      });
      this.graph.event.on("node-pre-click", function(d) {
        _this.$message({
          showClose: true,
          duration: 1500,
          message: "前序节点不能作为该节点的输出节点",
          type: "warning"
        });
      });
      this.graph.event.on("update-graph", function(model_graph) {
        // console.log('update-graph', model_graph.serialize())
        _this.$store.commit("setGraph", model_graph.serialize());
      });
    },
    querySearch(queryString, cb) {
      var NodeMetas = this.NodeMetas;
      var results = queryString
        ? NodeMetas.filter(this.createFilter(queryString))
        : NodeMetas;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return node => {
        return node.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    handleSelect(item) {
      this.graph.setSearchBoxVisible(false);
      this.graph.addNodeByObj(item);
      this.graph.updateGraph();
      this.SelectState = "";
    },
    genCode() {
      // const model_graph = this.graph.serialize();
      // let res = TemplateRender(model_graph);
      // console.log(res);
    },
    serialize() {
      console.log(JSON.stringify(this.graph.serialize()));
      console.log("serialize");
    },
    importGraph(){
      this.dialogFormVisible = false
    },
    exportGraph(){
      const model = JSON.stringify(this.graph.serialize())
      console.log("model", model);
      const _this = this
      this.$copyText(model).then(function (e) {
        _this.$message({
          message: '复制成功',
          type: 'success',
          duration: 700
        });
      }, function (e) {
        _this.$message({
          message: '不支持复制',
          type: 'warning',
          duration: 700
        });
      })
    },
    graphExport(arrData) {
      let csvContent = "data:text/json;charset=utf-8,"+ JSON.stringify(this.graph.serialize())
      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "model.graph");
      link.click();
    },
    clear() {
      this.graph.clear();
    },
    handleClick() {
     
    }
  }
};
</script>

<style>
@import "../assets/css/litegui.css";
.graph-container {
  height: 100%;
  width: 100%;
  /* background-color: #cc85d9;
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0px; */
}
#root-graph {
  height: 100%;
  width: 100%;
  min-height: 450px;
}
#svg-container {
  background: #eaeaea;
}

text {
  font-weight: 300;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serf;
  font-size: 14px;
}

.node {
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
  background: #ffeb3b;
}
.arc-information button {
  width: 100%;
  background: #ff9800;
  color: #1f1f1f;
  border: none;
  border-radius: 3px;
  margin: 5px 0;
}

.graph {
  border: solid 1px #ddd;
}
.graph text,
.graph .node.root div {
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
  stroke-dasharray: 5, 5;
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

.anchor {
  /* z-index: 999; */
  /* stroke-width: 1.5px; */
  opacity: 1;
}

path.connecting-link {
  fill: none;
  stroke-width: 1.5px;
  stroke: #d19d00;
  opacity: 0;
}

path.edge-highlight {
  stroke-width: 2px;
  stroke: #d19d00;
  fill: #d19d00;
}

path.hidden {
  opacity: 0;
}
path.visible {
  opacity: 1;
}

circle.hidden {
  opacity: 0;
}

/* for node slect =>>rect  */

.node rect.hover {
  fill: #e5e5e5;
}

.node rect.hidden {
}

node.double-click {
  fill: #ffeb3b;
}

/*  */
.graph,
.list {
  cursor: default;
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

.hovering .graph .node.visible.hovered,
.hovering .graph .node.visible.selected {
  opacity: 1;
}

.graph circle.anchor {
  transition: fill 0.5s, stroke 0.5s, opacity 0.5s;
  -webkit-transition: fill 0.5s, stroke 0.5s, opacity 0.5s;
  opacity: 1;
}

.graph circle.hidden {
  opacity: 0;
}

.hovering .graph .node.hovered.immediate rect {
  stroke: #a4011b;
  fill: #ffe0e5;
}

.nodes .node rect {
  stroke-width: 2px;
  stroke: #f16d00;
}

.SearchBox {
  position: absolute;
  z-index: 999;
  height: 80px;
}

div.tooltip {	
    color: #fff;
    position: absolute;			
    text-align: left;			
    padding: 4px;				
    font: 12px sans-serif;		
    background: rgb(38, 42, 48);	
    border: 0px;		
    border-radius: 4px;			
    pointer-events: none;			
}
div.tooltip .title{
  color: #E6A23C;
}
.tools{
  position: fixed;
  /* right:10px; */
  left: 45%;
  
}
</style>
