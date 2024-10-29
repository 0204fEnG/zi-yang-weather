<template>
<div id="weather-detail">
  <div class="country">
    <div>岳麓区</div>
    <button class="left">&lt;</button>
    <button class="right">&gt;</button>
  </div>
  <WeatherCountry></WeatherCountry>
  <Weather24Hours></Weather24Hours>
  <Weather7Days></Weather7Days>
  <CorrelationIndex></CorrelationIndex>
</div>
</template>

<script>
import WeatherCountry from '@/components/WeatherCountry'
import Weather24Hours from '@/components/Weather24Hours'
import Weather7Days from '@/components/Weather7Days'
import CorrelationIndex from '@/components/CorrelationIndex'
export default {
  components: {
    WeatherCountry,
    Weather24Hours,
    Weather7Days,
    CorrelationIndex
  },
  data () {
    return {
    }
  },
  name: 'WeatherDetail'

}
</script>

<style scoped>
#weather-detail{
    width: 100%;
    height: 1400px;
    background-color:rgb(80, 111, 101);
}
.country{
  position: sticky;
  text-align: center;
  line-height: 5vh;
  font-size:30px;
  top:63px;
  width: 100%;
  height: 5vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7px);
}
.left{
  position: absolute;
  border-radius: 12px;
  border-color: white;
  left: 20px;
  width: 24px;
  height: 24px;
  top:calc(50% - 12px);
}
.right{
  position: absolute;
  border-color:white;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  right: 20px;
  top:calc(50% - 12px);
}
</style>
