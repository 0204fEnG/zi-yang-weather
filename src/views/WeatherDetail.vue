<template>
<div id="weather-detail">
  <div class="country">
    <div>{{currentCountryName}}</div>
    <div class="left">&lt;</div>
    <div class="right">&gt;</div>
  </div>
  <div class="detail">
  <WeatherCountry></WeatherCountry>
  <Weather24Hours></Weather24Hours>
  <Weather7Days></Weather7Days>
  <CorrelationIndex></CorrelationIndex>
  </div>
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
  name: 'WeatherDetail',
  computed: {
    currentCountryName () {
      return this.$store.state.weather.currentCountry.name
    }
  }
}
</script>

<style scoped>
#weather-detail{
    width: 100%;
    height: auto;
    border-radius:10px;
    background-size:cover;
    background-repeat: no-repeat;
}
.detail{
  width: 100%;
  height: auto;
  padding: 0 1vh;
  overflow: auto;
}
.country{
  position: sticky;
  z-index: 1;
  text-align: center;
  color:white;
  line-height: 5vh;
  font-size:3vh;
  margin-bottom:1vh;
  top:7.5vh;
  width: 100%;
  height: 5vh;
  background:linear-gradient(to bottom,rgba(127.5,127.5,127.5,0.5),rgb(255, 255, 255,0.5));
  backdrop-filter: blur(10px);
}
.left{
  position: absolute;
  cursor: pointer;
  border:0.3vh solid white;
  border-radius:1.5vh;
  font-size: 2.7vh;
  line-height: 2.5vh;
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
  line-height: 2.5vh;
  right: 4vh;
  width: 3vh;
  height: 3vh;
  top:calc(50% - 1.5vh);
}
.left:hover,.right:hover{
  background-color: rgba(0, 0, 0, 0.185);
}
</style>
