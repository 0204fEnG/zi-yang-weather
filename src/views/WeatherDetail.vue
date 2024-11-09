<template>
<div id="weather-detail">
  <div class="country country1-color-1">
    <div>{{currentCountryName}}</div>
    <div class="left">&lt;</div>
    <div class="right">&gt;</div>
  </div>
  <div class="detail">
  <WeatherCountry></WeatherCountry>
  <Precipitation></Precipitation>
  <Weather24Hours></Weather24Hours>
  <Weather7Days></Weather7Days>
  <CorrelationIndex></CorrelationIndex>
  <AirQuality></AirQuality>
  <Disaster></Disaster>
  </div>
  <div class="country-manage country2-color-1"></div>
</div>
</template>

<script>
import WeatherCountry from '@/components/WeatherCountry'
import Weather24Hours from '@/components/Weather24Hours'
import Weather7Days from '@/components/Weather7Days'
import CorrelationIndex from '@/components/CorrelationIndex'
import Precipitation from '@/components/Precipitation'
import AirQuality from '@/components/AirQuality'
import Disaster from '@/components/Disaster'
export default {
  components: {
    WeatherCountry,
    Weather24Hours,
    Weather7Days,
    Precipitation,
    AirQuality,
    CorrelationIndex,
    Disaster
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
    /* border-radius:10px; */
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
  top:7.44vh;
  width: 100%;
  height: 5vh;
  background:linear-gradient(to bottom,rgb(61, 137, 220,0.5),rgb(255, 255, 255,0.5));
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
.country-manage{
  position: sticky;
  bottom:0;
  width: 100%;
  height: 7vh;
  backdrop-filter:blur(10px);
}
.country1-color-1{
  background: linear-gradient(to bottom,rgb(128, 128, 128,0.5),rgba(255, 255, 255, 0.5));
}
.country1-color-2{
background: linear-gradient(to bottom,rgba(179,219,220,0.5),rgba(255, 255, 255, 0.5));
}
.country1-color-3{
background: linear-gradient(to bottom,rgba(73,190,248,0.5),rgba(185, 225, 246, 0.5));
}
.country1-color-4{
background: linear-gradient(to bottom,rgba(0,183,255,0.5),rgb(147, 226, 244,0.5));
}
.country1-color-5{
background: linear-gradient(to bottom,rgba(133, 239, 237, 0.5),rgb(255, 255, 255,0.5));
}
.country1-color-6{
background: linear-gradient(to bottom,rgba(155, 138, 115, 0.5),rgb(128, 128, 128,0.5));
}
.country1-color-7{
background: linear-gradient(to bottom,rgba(91, 74, 247, 0.5),rgba(116, 172, 241, 0.5));
}

.country2-color-1{
  background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(0, 0, 0, 0.5));
}
.country2-color-2{
  background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(83, 211, 240, 0.5));
}
.country2-color-3{
  background:linear-gradient(to bottom,rgb(185, 255, 246,0.5),rgba(57, 163, 245, 0.5));
}
.country2-color-4{
  background: linear-gradient(to bottom,rgb(147,226,244,0.5),rgb(72, 146, 236,0.5));
}
.country2-color-5{
  background: linear-gradient(to bottom,rgb(255, 255, 255,0.5),rgba(4, 152, 216, 0.5));
}
.country2-color-6{
  background: linear-gradient(to bottom,rgb(128, 128, 128,0.5),rgba(244, 142, 95, 0.5));
}
.country2-color-7{
  background: linear-gradient(to bottom,rgba(116, 172, 241, 0.5),rgb(47, 50, 246,0.5));
}
</style>
