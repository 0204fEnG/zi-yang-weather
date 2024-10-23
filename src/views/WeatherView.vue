<template>
  <div id="weather-container">
    <div class="weather-nav">
        <div class="router-link"  @click="linkClick('weather')" @mouseover="currentHoverLink='weather'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='weather'||isActiveLink('weather')}">天气</div>
        <div class="router-link"  @click="linkClick('assistant')" @mouseover="currentHoverLink='assistant'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='assistant'||isActiveLink('assistant')}">生活助手</div>
        <div class="router-link"  @click="linkClick('setting')" @mouseover="currentHoverLink='setting'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='setting'||isActiveLink('setting')}">设置</div>
    </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data () {
    return {
      currentActiveLink: 'weather',
      currentHoverLink: ''
    }
  },
  methods: {
    linkClick (select) {
      if (this.currentActiveLink !== select) {
        this.currentActiveLink = select
        this.$router.push(this.currentActiveLink)
      }
    },
    isActiveLink (isActive) {
      return this.currentHoverLink === '' && this.currentActiveLink === isActive
    }
  }
}
</script>

<style scoped>
#weather-container{
    position: relative;;
    flex: 1;
    height: 100vh;
    padding: 20px;
    background-size:cover;
    background-repeat:repeat;
}
@media (max-aspect-ratio: 1){
    #weather-container{
        height: 2000px;
        padding:0;
    }
}
.weather-nav{
    position:sticky;
    top:0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
}
.router-link{
    color:rgb(0, 0, 0);
    font-size: 20px;
    line-height: 40px;
    padding: 10px;
    margin: 0 20px;
    cursor:pointer;
    text-align: center;
}
.active-router-link{
    border-bottom:3px solid rgb(255, 255, 255);
    color: white;
}
</style>
