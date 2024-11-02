<template>
  <div id="life-assistant">{{weatherinfo}}</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LifeAssistant',
  data () {
    return {
      weatherinfo: null
    }
  },
  mounted () {
    this.getWeatherData()
  },
  methods: {
    async getWeatherData () {
      try {
        const response = await axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100', {
          headers: {
            Authorization: '{}'
          }
        })
        this.weatherinfo = response
      } catch (error) {
        alert('错误', error)
      }
    }

  }
}
</script>

<style scoped>
</style>
