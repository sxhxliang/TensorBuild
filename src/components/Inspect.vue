<template>
  <vue-draggable-resizable :x="top" :y="left" :w="245" :h="28" :drag-handle="'.drag-handle'">
    <div class="drag-handle">
      <h3 class="inspect-title">{{node_op_label}}</h3>
      <el-button-group class="btn-save-params">
        <el-button size="mini" type="primary" icon="el-icon-s-promotion" @click="onSubmit"></el-button>
        <el-button size="mini" type="primary" icon="el-icon-close" @click="onClose"></el-button>
      </el-button-group>

      <!-- <el-button  size="mini" type="primary" icon="el-icon-s-promotion"></el-button> -->
    </div>
    <div id="inspectContent" class="inspect-content"></div>
   
  </vue-draggable-resizable>
</template>

<script>
import { eventBus } from '../components/eventBus.js'
import * as dat from "@macroman/dat.gui";
import VueDraggableResizable from "vue-draggable-resizable";

let id = 1;

export default {
  name: "Inspect",
  components: {
    VueDraggableResizable
  },

  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: -300,
      node_op_label: "",
      params_keys: [],
    };
  },
  computed: {
    selectedNodeInfo() {
      return this.$store.state.selectedNodeInfo;
    }
  },
  watch: {
    selectedNodeInfo() {
      this.left = this.selectedNodeInfo.event.clientX;
      this.top = this.selectedNodeInfo.event.clientY;
      this.showInspect(this.selectedNodeInfo.node);
    }
  },
  mounted() {
    this.inspectContent = document.getElementById("inspectContent");
  },
  methods: {
    showInspect(node) {
      console.log('showInspect:', node)
      // let node = nodeInst.node
      // let params= nodeInst.params
      const _this = this;
      const gui_info = {};
      // const params_types = 
      Object.keys(node.params).forEach(function(k) {
        let param = node.params[k];
        // console.log('param', param)
        if (k != "name") {
       
          if (param["value"] == undefined||param["value"] == null) {
            param.value = 0;
          }
          
          if (param.type.indexOf("tuple") != -1) {
            param.value = parseInt(param.value);

          } else if (param.type.indexOf("int") != -1) {
            param.value = parseInt(param.value);

          } else if (param.type.indexOf("float") != -1) {
            console.log('float', k , param.value)
            param.value = parseFloat(param.value);

          } else if (param.type.indexOf("str") != -1) {
            param.value = param.value;

          } else if (param.type.indexOf("bool") != -1) {
            console.log('key bool', k, param.value)
            param.value = true ? param.value == 'True': false

          }

          // gui_info = {
          //   key: value,
          //   key2: value2
          // }
          // console.log(gui_info)
          gui_info[k] = param["value"];
          node.params[k] = param;
        }
      });

      this.node_op_label = node.attrs.label;
      
      this.gui_info = gui_info;
      this.params_keys = Object.keys(this.gui_info);

      // load: JSON
      const gui = new dat.GUI({ 
            name: node.id,
            autoPlace: false,
          });

      console.log("params_keys", this.params_keys, this.gui_info);
      let controllers = []

      for (let i = 0; i < this.params_keys.length; i++) {
        const key = this.params_keys[i]
        if (node.params[key].type.indexOf("tuple") != -1) {
          controllers.push(gui.add(this.gui_info, key, 0, undefined, 1));

        } else if (node.params[key].type.indexOf("int") != -1) {
          controllers.push(gui.add(this.gui_info, key, 0, undefined, 1));

        } else if (node.params[key].type.indexOf("float") != -1) {
          console.log('key', key)
          controllers.push(gui.add(this.gui_info, key));

        } else if (node.params[key].type.indexOf("str") != -1) {
          controllers.push(gui.add(this.gui_info, key));

        } else if (node.params[key].type.indexOf("bool") != -1) {
          controllers.push(gui.add(this.gui_info, key));
        }
       
      }

     

      for (var i = 0; i < controllers.length; i++) {
        controllers[i].onChange(function(val) {
          // console.log(this.property, 'onChange:', val);
        });
        controllers[i].onFinishChange(function(val) {
          // console.log(this.property, 'onFinishChange:', val);
        });
      }
     
      const ele = gui.domElement;
      this.inspectContent.innerHTML = "";
      this.inspectContent.appendChild(ele);
    },


    onSubmit() {

      for (let i = 0; i < this.params_keys.length; i++) {
        const key = this.params_keys[i];
        // console.log(this.selectedNodeInfo.node.params[key].value, this.gui_info[key])
        this.selectedNodeInfo.node.params[key].value = this.gui_info[key];
      }

      // console.log("submit!", this.gui_info, this.node);
      eventBus.$emit("UpdateNode", this.selectedNodeInfo.node);
    },
    onClose(){
      this.inspectContent.innerHTML = ''
      this.left = -300
    },

    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    }
  }
};
</script>
<style scoped>
.drag-handle{
  width: 100%;
  height: 100%;
  background: #409EFF;
  text-align: center;
}
.inspect-title {
  padding-left: 10px;
  line-height: 28px;
  color: #fff;
  float: left;
}

.inspect-content {
  position: relative;
  z-index: auto;
}
.btn-save-params{
  float: right;
  /* position: relative; */
  /* top:0 */
  /* margin-top: 25px */
}
.dg li.save-row .button.gears{
  height: 15px;
  width: 15px;
}
.has-save{
  width: 285px !important;
}
.dg .close-button{
   width: 285px !important;
}
</style>