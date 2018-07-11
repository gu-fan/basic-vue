import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    PLUS(state,msg){
      state.count++
    },
    MINUS(state, msg) {
      state.count--
    }

  },
  actions: {
    GO_PLUS({commit}){
      commit('PLUS')
    },
    GO_MINUS({commit}){
      commit('MINUS')
    },

  }
})
