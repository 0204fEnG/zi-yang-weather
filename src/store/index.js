// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import jwt from './modules/jwt'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    jwt // 引入auth模块
  }
})
