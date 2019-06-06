

<template>

<div id="app">
  <el-container class="main">
      <el-header> 
        <Header/>
      </el-header>
      <el-container>
          <el-main >
            <keep-alive>
              <router-view/>
            </keep-alive>
          </el-main>
          
          <el-footer>
            <Footer/>
          </el-footer>
      </el-container>
    </el-container>
 </div>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
</script>

<style>
html, body { 
    padding: 0;  
    margin: 0;  
    height: 100%;  
    overflow:hidden;  
}  

#app {
  height: 100%;  
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  background-color: #999;
  height: 100%;

}

header {
    background-color: #85d989;
    width: 100%;
    height: 60px;
}
#el-container {
    background-color: #cc85d9;
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0px;
}
 
.el-header {
  background-color: rgb(84, 92, 100)
}
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  padding-top: 20px;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
} 

.el-main {
  background-color: #E9EEF3;
  height: 100%;
  width: 100%;
  padding: 10px !important;
}


</style>
