<template>
<div class="weather-country">
  <div class="temperature">
    <div class="temp-top">{{weatherCountry.nowTemp}}</div>
    <div class="temp-bottom">{{weatherCountry.tempMax}}℃/{{weatherCountry.tempMin}}℃</div>
  </div>
  <div class="weather">{{weatherCountry.nowWeather}}&nbsp;</div>
  <div class="air-quality">&nbsp;{{weatherCountry.nowAirQuality}}</div>
  <div class="obs-time">最后更新时间:{{updateTime}}</div>
</div>
</template>

<script>
import { formatISOTime } from '@/utils/formatISOTime.js'
export default {
  name: 'WeatherCountry',
  props: {
    weatherCountry: Object
  },
  data () {
    return {
      text: 'hello!'
    }
  },
  computed: {
    updateTime () {
      return this.formatISOTime(this.weatherCountry.updateTime, '123')
    }
  },
  methods: {
    formatISOTime
  }
}
</script>

<style scoped>
.weather-country{
  display:flex;
  position: relative;
  margin-bottom:1vh;
  border-radius:10px;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  width: 100%;
  background-color:transparent;
}
/* .weather-country::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(124, 140, 191, 0.5);
  filter:blur(5px);
  z-index: 1;
} */
.temperature{
  width: 100%;
  height: 15vh;
}
.temp-top{
  position: relative;
  width: 100%;
  height: 12vh;
  color:white;
  font-size:12vh;
  line-height: 12vh;
  text-align: center;
}
.temp-top::after{
  content:"°C";
  font-size:3vh;
  color:white;
  position:absolute;
  display:block;
  line-height: 4vh;
  top:0;
  right:calc(50% - 8vh);
}
.temp-bottom{
  width: 100%;
  height: 3vh;
  color:white;
  font-size:2vh;
  line-height: 3vh;
  text-align: center;
}
.weather{
  font-size: 2vh;
  height: 3vh;
  color:white;
  line-height: 3vh;
}
.air-quality{
  font-size: 2vh;
  height: 3vh;
  color:white;
  line-height: 3vh;
}
.obs-time{
  width: 100%;
  color:white;
  font-size: 2vh;
  line-height: 3vh;
  height: 3vh;
  text-align: center;
}
</style>
