<template>
  <div class="aside">

    <h5 class="opt-title">{{node_opt}}</h5>
    <div id="inspectBox"> </div>
    <el-button class="onSubmitBtn" type="primary" @click="onSubmit" size="mini">更新</el-button>
    <miniMap/>
  </div>
</template>

<script>

import { eventBus } from './eventBus.js'
import miniMap from "./miniMap";

import * as dat from 'dat.gui';

let id = 1;

export default {
  name: "InspectAside",
  display: "Simple",
  components: {
    miniMap
  },

  data() {
    return {
      radio: 'True',
      node:{
        node: {},
        params: {}
      },
      node_opt: '',
      radio_params:{},
      num:0,
      params_data: {},
      params_keys: [],
      gui:null,
    }
  },
  mounted() {
   

    eventBus.$on('InspectNode', node => {
      console.log('args', node)
      this.node = node  
      this.showInspect(node)    
      this.param = {
        type: ['tuple'],
        value: [1]
      }
    })

    this.gui = new dat.GUI({autoPlace:false});
   
  },
  computed:{

  },
  methods: {
    showInspect(node){
      // console.log('showInspect:', node)
      // let node = nodeInst.node
      // let params= nodeInst.params
      const _this  = this
      const gui_info = {}
      Object.keys(node.params).forEach(function(k){
      
        
        let param = node.params[k]
        if(k != 'name'){
          
          if(!param['value']){

            if(!param['default']){
              param['value'] = 0
            }else{
              param['value'] = param['default']
            }

            if(param.type.indexOf('tuple') != -1){
              param['value'] = parseInt(param['value'])
            }else if(param.type.indexOf('int') != -1){
              param['value'] = parseInt(param['value'])
            }else if(param.type.indexOf('bool') != -1){
              _this.radio_params[k] = param['value']
            }

           
          }

          gui_info[k] = param['value']
          node.params[k] = param
          
          
        }

      })

      this.node_opt = node.info.label
      // console.log('params_data:', JSON.stringify(this.params_data))
      this.gui_info = gui_info
      this.params_keys = Object.keys(this.gui_info)
    

      this.gui = new dat.GUI({autoPlace:false});

      console.log('params_keys', this.params_keys)

      for(let i =0;i<this.params_keys.length;i++){
        this.gui.add(this.gui_info, this.params_keys[i], 0);
      }
      
      const ele = this.gui.domElement
      const box = document.getElementById('inspectBox')

      box.innerHTML = ''
      box.appendChild(ele)

      
    },
    handleChange(value) {
      this.params_data.bias.value = 'False'
      console.log('handleChange', value, this.params_data.bias.value);
    },
    change(key){
      console.log('change', key)

    },
    onRadio(key, value){
      //  console.log('onRadio', key, value)
       this.params_data[key].value = value
      //  this.radio_params[key] = value
       console.log('params_data', this.params_data[key].value)

    },
    onSubmit() {
     
      // this.gui.remember(this.gui_info);
      for(let i=0;i<this.params_keys.length;i++){
        const key = this.params_keys[i]
        this.node.params[key].value = this.gui_info[key]
      }
      
      console.log('submit!', this.gui_info, this.node);
      eventBus.$emit('UpdateNode',this.node.params)
    }
  }
};
</script>
<style scoped>
.aside {
  height: 100%;
}
.opt-title{
  /* background: #000l */
}
#inspectBox{
  margin-bottom: 30px;
}
#inspect-box {
  height: 65%;
  padding: 2px;

  overflow-y: scroll;
}
.onSubmitBtn{
  margin-bottom: 30px;
}
.form-item {
  margin-bottom: 10px !important;
}
.list-group-item {
  width: 100%;
}
</style>