<template>
<div id="weather-detail">
  <div class="country">
    <div>岳麓区</div>
    <div class="left">&lt;</div>
    <div class="right">&gt;</div>
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
  z-index: 1;
  text-align: center;
  color:white;
  line-height: 5vh;
  font-size:3vh;
  top:7.5vh;
  width: 100%;
  height: 5vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7px);
}
.left{
  position: absolute;
  cursor: pointer;
  border:0.3vh solid white;
  border-radius:1.5vh;
  font-size: 2.7vh;
  line-height: 2.7vh;
  left: 4vh;
  width: 3vh;
  height: 3vh;
  top:calc(50% - 1.5vh);
}
.right{
  position: absolute;
  cursor: pointer;
  border:0.3vh solid white;
  border-radius:1.5vh;
  font-size: 2.7vh;
  line-height: 2.7vh;
  right: 4vh;
  width: 3vh;
  height: 3vh;
  top:calc(50% - 1.5vh);
}
.left:hover,.right:hover{
  background-color: rgba(0, 0, 0, 0.185);
}
</style>
