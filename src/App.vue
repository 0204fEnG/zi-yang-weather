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
   display: flex;
   flex-direction: row;
   flex-wrap: wrap; /* 允许子项换行 */
  background-image: url('@/assets/WeatherBackground/Clear.jpg');
  background-size:cover;
}
</style>
