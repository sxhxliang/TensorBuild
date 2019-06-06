import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);

import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

// // const electron = require('electron')
// const {app, BrowserWindow} = require('electron')

//   function createWindow () {   
//     // 创建浏览器窗口
//     win = new BrowserWindow({width: 800, height: 600})

//     // 然后加载应用的 index.html。
//     win.loadFile('../dist/index.html')
//   }

//   app.on('ready', createWindow)