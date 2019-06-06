import Vue from 'vue'
import Vuex from 'vuex'
// import {Init} from '../assets/js/graph' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    graph: null,
    selectedNodeInfo: {
      node: {},
      params: {},
    },
  },
  getters:{
    getGraph(state){
      return state.graph
    },
    getInspectNode(state){
      return state.selectedNodeInfo
    }
  },
  mutations: {
    inspectNode(state, nodeInfo){
      // console.log('store.commit inspectNode', nodeInfo)
      state.selectedNodeInfo = nodeInfo
    },
    setGraph(state, graph){
      // console.log('store.commit graph', graph)
      state.graph = graph
    },

  }
})
