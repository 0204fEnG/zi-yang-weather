<template>
<div class="weather-7days">
  <span class="title">近日天气</span>
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
</template>

<script>
export default {
  name: 'Weather7Days'
}
</script>

<style scoped>
.weather-7days{
    width: 100%;
    border-radius:10px;
    margin-bottom: 1vh;
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
.days{
  width: 100%;
  height: 35vh;
  padding: 3vh 0;
  border-radius:10px;
  background-color: rgb(3, 73, 95,0.5);
}
</style>
