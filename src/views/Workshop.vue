<template>
<div class="main-workshop">

  <Workshop />

  <Inspect/>
  <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible">
    <!-- <el-button slot="reference" @click="visible = !visible">手动激活</el-button> -->
  </el-popover>

</div>
</template>

<style>
.main-workshop{
  height: 100%;
  width: 100%;
}
</style>

<script>
import Inspect from '../components/Inspect.vue'
import Workshop from "../components/ModelGraph.vue";

export default {
  name: "HelloWorld",
  components:{
    Inspect,
    Workshop
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>