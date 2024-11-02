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
    width: 80vw;
    height: 100vh;
    margin: 0 10vw;
    padding: 1vw;
    border-radius:20px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap; /* 允许子项换行 */
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
