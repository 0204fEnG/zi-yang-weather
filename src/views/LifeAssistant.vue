<template>
  <div id="life-assistant">{{weatherinfo}}</div>
</template>

<script>
import { getCurrentWeather } from '@/api/modules/weather.js'
export default {
  name: 'LifeAssistant',
  data () {
    return {
      weatherinfo: null
    }
  },
  created () {
    console.log('开始获取实时天气')
    this.initCurrent()
  },
  methods: {
    async initCurrent () {
      console.log('开始获取cur')
      this.weatherinfo = await getCurrentWeather({ location: 101010100 })
    }
  }
}
</script>

<style scoped>
</style>
