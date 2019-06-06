<template>
  <div class="codemirror">
    <div class="code-header">
      <el-tooltip class="codemirror-tools" effect="dark" content="复制代码" placement="top-start">
        <el-button class="btn-copy" icon="el-icon-document-copy" size="mini" @click="copyCode"></el-button>
      </el-tooltip>
    </div>
    <!-- codemirror -->
    <codemirror class="main-codemirror" v-model="code" :options="cmOption"></codemirror>
  </div>
</template>

<script>
import { TemplateRender } from "../assets/template/compiler";
// require component
import { codemirror } from "vue-codemirror";

// require styles
import "codemirror/lib/codemirror.css";
// language
import "codemirror/mode/python/python.js";
// theme css
import "codemirror/theme/base16-light.css";

// require active-line.js
import "codemirror/addon/selection/active-line.js";
// closebrackets
import "codemirror/addon/edit/closebrackets.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/emacs.js";
export default {
  components: {
    codemirror
  },
  data() {
    return {
      code: "",
      cmOption: {
        autoCloseBrackets: true,
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: "text/x-python",
        theme: "base16-light",
        keyMap: "emacs",
        readOnly: true
      }
    };
  },
  activated() {
    const model_graph = this.$store.getters.getGraph
  
    if (model_graph) {
      // console.log(model_graph.edges)
      if(model_graph.edges.length > 0){
        const code = TemplateRender(this.$store.getters.getGraph);
        this.code = code;
      }else{
        console.log('no graph')
        this.code = "";
      }
      
    } else {
      this.code = "";
    }
  },
  methods: {
    copyCode(){
      const _this = this
      this.$copyText(this.code).then(function (e) {
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
  }
};
</script>
<style>
.codemirror {
  height: 100%;
  text-align: left;
}
.code-header{
  position: fixed;
  height: 28px;
  z-index: 999;
  right: 22px;
}
.codemirror-tools{
  line-height: 28px;
  /* text-align: right; */
  /* padding: 4px; */
  /* float: right; */
}
.btn-copy{
  float: right;
}
.main-codemirror {
  /* height: 100%; */
  height: auto;
}
.CodeMirror {
  height: 100% !important;
  border: 1px solid #eee;
  height: auto;
}
</style>
