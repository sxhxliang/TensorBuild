<template>
  <el-row :gutter="24">
    <el-col :xs="12" :sm="6" :md="4">
      <h1 class="logo">TensorBuild</h1>
      <span class="version">alpha</span>
    </el-col>
    <el-col :xs="12" :sm="18" :md="20">
      <el-menu
        :default-active="activeIndex"
        :router=true
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="hidden-xs-only" index="workshop">我的工作台</el-menu-item>
        <el-menu-item class="hidden-xs-only" index="editor">模型代码</el-menu-item>
       
        <!-- <el-menu-item index="debug">在线调试</el-menu-item> -->
        <el-menu-item class="hidden-xs-only">
          <a href="http://pytorch.cn/docs/stable/index.html" target="_blank">PyTorch 文档</a>
        </el-menu-item>
         <el-submenu class="hidden-sm-and-up">
          <template slot="title">菜单</template>
          <el-menu-item index="workshop">我的工作台</el-menu-item>
          <el-menu-item index="editor">模型代码</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isCollapse:true,
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>

.logo{
  line-height: 60px;
  color:#E6A23C 
  /* #E6A23C #409EFF */
}
.version{
  position: relative;
  /* float: right; */
  color: #E6A23C;
  right: -70px;
  top:-40px;
}
</style>