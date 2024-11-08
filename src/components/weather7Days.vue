<template>
<div class="weather-7days">
  <span class="title">近日天气</span>
  <div class="days-container">
  <div class="days">
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
    <div class="day"></div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Weather7Days'
}
</script>

<style scoped>
.weather-7days{
    width: 100%;
    /* border-radius:2.5vh; */
    margin-bottom: 1vh;
      border-radius:0 0 2.5vh 2.5vh;
    overflow: hidden;
}
.title{
  display: block;
  color:white;
  width: 100%;
  font-size: 2.5vh;
  height: 2.5vh;
  line-height: 2.5vh;
  margin-bottom: 1vh;
}
.days-container{
  width: 100%;
  height: 100%;
  overflow-x: auto;
  border-radius:2.5vh;
  background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
}
.days-container::-webkit-scrollbar{
  background: rgba(255,255,255,0.25);
}
.days-container::-webkit-scrollbar-thumb{
  background-color:rgba(255,255,255,0.25);
  border-radius: 2.5vh;
}
.days{
  width: 100%;
  height:35vh;
  padding: 3vh 0;
  display: flex;
  flex-direction: row;
}
.day{
  flex:0 0 15vh;
  margin-right: 3vh;
   border-radius:2.5vh;
   background-color:rgb(255, 255, 255,0.25);
  height: 100%;
}
</style>
