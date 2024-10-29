<template>
<div id="weather-detail">
  <WeatherCountry></WeatherCountry>
  <Weather24Hours></Weather24Hours>
  <Weather7Days></Weather7Days>
  <CorrelationIndex></CorrelationIndex>
</div>
</template>

<script>
import WeatherCountry from '@/components/WeatherCountry.vue'
import Weather24Hours from '@/components/Weather24Hours.vue'
import Weather7Days from '@/components/Weather7Days.vue'
import CorrelationIndex from '@/components/CorrelationIndex.vue'
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
</style>
