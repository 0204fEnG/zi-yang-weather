<template>
<div id="app">
<MapView></MapView>
<WeatherView></WeatherView>
</div>
</template>

<script>
import MapView from '@/views/MapView.vue'
import WeatherView from '@/views/WeatherView.vue'
export default {
  components: {
    MapView,
    WeatherView
  }
}
</script>

<style scoped>
   #app {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap; /* 允许子项换行 */
   background-color: #79be79;
}
</style>
