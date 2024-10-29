<template>
<div class="weather-country">
  <!-- <div class="country">岳麓区</div> -->
  <div class="temperature">17</div>
  <div class="weather">阴</div>
  <div class="air-qualit">良好</div>
</div>
</template>

<script>
export default {
  name: 'WeatherCountry',
  data () {
    return {
      text: 'hello!'
    }
  }
}
</script>

<style scoped>
.weather-country{
  /* position: relative; */
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
    width: 100%;
  background-color: rgb(208, 113, 50);
}
/* .country{
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  width: 100%;
  height: 5vh;
  background-color: brown;
} */
.temperature{
  width: 100%;
  height: 10vh;
background-color: blue;
}
.weather{
  width: 50%;
  height: 2vh;
background-color: rgb(188, 188, 101);
}
.air-qualit{
  width: 50%;
  height: 2vh;
  line-height: 2vh;
background-color: rgb(97, 100, 125)
}
</style>
