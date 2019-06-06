<template>
<el-row>
    <div id="mini-map">
        <svg viewBox="0 0 400 250">
        <title>Use the mousewheel to zoom in/out here too!</title>
        <description>Mini version of the same SVG</description>
        <use xlink:href="#main-graph"></use>
        </svg>
    </div>
</el-row>
</template>

<script>

import * as d3 from "d3";

export default {
  name:'miniMap',
  components: {
  },
  data() {
    return {
      
    };
  },
  computed: {
  
  },
  mounted(){
   
  },
  methods: {
    
  }
};
</script>
<style scoped>

#mini-map{
  border: 1px solid #000;
  position: relative;
  z-index: 999;
  /* position: fixed; */
  bottom: 0;
  /* height: 250px;
  width: 400px; */
}
.list-group-item{
  width: 100%
}
</style>