// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import jwt from './modules/jwt'
import map from './modules/map'
import weather from './modules/weather'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    jwt,
    map,
    weather
  }
})
