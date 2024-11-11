<template>
<div id="app">
<MapView></MapView>
<router-view></router-view>
</div>
</template>

<script>
import MapView from '@/views/MapView.vue'
export default {
  components: {
    MapView
  }
}
</script>

<style scoped>
   #app {
    width: 100vw;
    height: 100vh;
    padding: 1vw;
   display: flex;
   flex-direction: row;
    align-items: start;
   flex-wrap: wrap;
  background-image: url('@/assets/WeatherBackground/ModerateRain.jpg');
  background-size:cover;
}
@media (max-aspect-ratio: 1){
    #app{
      width: 100vw;
      height: auto;
      border-radius:0;
      margin: 0;
      overflow-y:auto ;
    }
}
</style>
