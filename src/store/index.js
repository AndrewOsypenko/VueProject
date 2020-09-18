import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import addComment from './modules/addComment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    post,
    addComment
  }
})
