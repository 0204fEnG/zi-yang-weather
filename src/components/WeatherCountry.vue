<template>
<div class="weather-country">
  <div class="temperature">
    <div class="temp-top">22</div>
    <div class="temp-bottom">24°C/12°C</div>
  </div>
  <div class="weather">阴&nbsp;</div>
  <div class="air-qualit">&nbsp;良好</div>
  <div class="obs-time">最后更新时间：2024-10-30 19：32</div>
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
  display:flex;
  position: relative;
  margin-bottom:0.75vw;
  border-radius:10px;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  width: 100%;
  background-color:transparent;
}
/* .weather-country::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(124, 140, 191, 0.5);
  filter:blur(5px);
  z-index: 1;
} */
.temperature{
  width: 100%;
  height: 15vh;
  /* background-color: blue; */
}
.temp-top{
  position: relative;
  width: 100%;
  height: 12vh;
  color:white;
  font-size:12vh;
  line-height: 12vh;
  text-align: center;
  /* background-color: aquamarine; */
}
.temp-top::after{
  content:"°C";
  font-size:3vh;
  color:white;
  position:absolute;
  display:block;
  line-height: 4vh;
  top:0;
  right:calc(50% - 8vh);
}
.temp-bottom{
  width: 100%;
  height: 3vh;
  color:white;
  font-size:2vh;
  line-height: 3vh;
  text-align: center;
  /* background-color:coral; */
}
.weather{
  font-size: 2vh;
  height: 3vh;
  color:white;
  line-height: 3vh;
  /* background-color: rgb(188, 188, 101); */
}
.air-qualit{
  font-size: 2vh;
  height: 3vh;
  color:white;
  line-height: 3vh;
  /* background-color: rgb(97, 100, 125) */
}
.obs-time{
  width: 100%;
  color:white;
  font-size: 2vh;
  line-height: 2vh;
  height: 2vh;
  text-align: center;
  /* background-color: cornflowerblue; */
}
</style>
