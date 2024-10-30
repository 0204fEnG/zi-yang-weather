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
            Authorization: 'BearereyJhbGciOiJFZERTQSIsImtpZCI6IktLV0VDRjcyQ0QifQ.eyJzdWIiOiIyNzhBV0o2Qks4IiwiaWF0IjoxNzMwMzEwMzcxLCJleHAiOjE3MzA5MTUxNzF9.9kigi7aIcDh56vCCDCRHVxKo9qxw5m5PFtjzT-cNaum3EWNFAlL11Lb_L7gkrYnX2ORizpgThuktxPQI7FvFDg'
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
