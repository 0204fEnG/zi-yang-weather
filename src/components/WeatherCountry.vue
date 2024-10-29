<template>
<div class="weather-country">{{text}}</div>
</template>

<script>
export default {
  name: 'WeatherCountry',
  data () {
    return {
      text: 'hello!'
    }
  },
  created () {
    setTimeout(() => {
      this.text += 'world!'
    }, 2000)
  }
}
</script>

<style scoped>
.weather-country{
    width: 100%;
    height: 200px;
  background-color: rgb(208, 113, 50);
}
</style>
