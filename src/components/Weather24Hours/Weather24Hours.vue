<template>
<div class="weather-24hours">
  <div class="top">近24小时天气</div>
  <div class="bottom">
    <div class="hour-container">
    <div class="bottom-hour" v-for="hour in weather24Hours" :key="hour.id">
      <span class="hour-time">{{formatISOTime(hour.fxTime,'3')}}</span>
      <img src="" alt="">
      <span class="hour-tem">{{hour.temp}}℃</span>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import { formatISOTime } from '@/utils/formatISOTime.js'
export default {
  name: 'Weather24Hours',
  props: {
    weather24Hours: Array
  },
  data () {
    return {
    }
  },
  methods: {
    formatISOTime
  },
  computed: {
  }
}
</script>

<style scoped>
.weather-24hours{
    width: 100%;
    display:flex;
    position: relative;
    flex-direction:row;
    flex-wrap: wrap;
    border-radius:2.5vh;
    overflow: hidden;
    margin-bottom: 1vh;
}
.top{
  color:white;
  width: 100%;
  font-size:2.5vh;
  text-align: center;
  line-height: 2.5vh;
  margin-bottom:1vh;
}
.bottom{
  width: 100%;
  height: 100%;
  border-radius:2.5vh;
  overflow-x: auto;
  background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
}
.bottom::-webkit-scrollbar{
  background: rgba(255,255,255,0.25);
  border-radius: 0 0 2.5vh 2.5vh;
}
.bottom::-webkit-scrollbar-thumb{
  background-color:rgba(255,255,255,0.25);
  border-radius: 2.5vh;
}
.hour-container{
  color:white;
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  border-radius:2.5vh;
  height: 15vh;
  padding: 2vh 0;
}

.bottom-hour{
  flex:0 0 8vh;
  position: relative;
  margin-right: 1.5vh;
  border-radius:2.5vh;
  height: 100%;
  background-color:rgb(255, 255, 255,0.25);
}
.bottom-hour:last-child{
  margin-right: 0;
}
.hour-time{
  display: block;
  position: absolute;
  top:0;
  width: 100%;
  font-size:2vh;
  text-align: center;
  line-height: 4vh;
}
.hour-tem{
  position: absolute;
  bottom:0;
  display: block;
  width: 100%;
  font-size:2vh;
  text-align: center;
  line-height: 4vh;
}
</style>
