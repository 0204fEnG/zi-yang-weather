import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    now: {
      obsTime: '2024-10-30T21:40+08:00',
      temp: '24',
      feelsLike: '26',
      icon: '101',
      text: '多云',
      wind360: '123',
      windDir: '东南风',
      windScale: '1',
      windSpeed: '3',
      humidity: '72',
      precip: '0.0',
      pressure: '1003',
      vis: '16',
      cloud: '10',
      dew: '21'
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
