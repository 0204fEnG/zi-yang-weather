<template>
  <div id="weather-container" ref="weatherContainer">
    <div class="weather-nav nav-color-7">
        <div class="router-link"  @click="linkClick('/weather')" @mouseover="currentHoverLink='/weather'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='/weather'||isActiveLink('/weather')}">天气</div>
        <div class="router-link"  @click="linkClick('/assistant')" @mouseover="currentHoverLink='/assistant'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='/assistant'||isActiveLink('/assistant')}">生活助手</div>
        <div class="router-link"  @click="linkClick('/setting')" @mouseover="currentHoverLink='/setting'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='/setting'||isActiveLink('/setting')}">设置</div>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data () {
    return {
      currentActiveLink: '/weather',
      currentHoverLink: '',
      scrollPositions: {
        '/weather': 0,
        '/assistant': 0,
        '/setting': 0
      }
    }
  },
  created () {
    this.initJwt()
    this.initWeather()
  },
  methods: {
    async initJwt () {
      const jwt = localStorage.getItem('jwt')
      console.log(jwt)
      // 如果JWT存在，则将其保存到Vuex store中
      if (jwt !== null && jwt !== undefined) {
        console.log('weatherview中获取本地jwt成功')
        this.$store.commit('jwt/SET_JWT', jwt)
        console.log('weatherview将jwt保存到vuex成功')
      } else {
        console.log('weatherview本地不存在jwt，开始调用vuex方法获取刷新')
        await this.$store.dispatch('jwt/refreshToken')
        console.log('weatherview刷新jwt成功,jwt为', this.$store.state.jwt.jwt)
      }
    },
    initWeather () {
      const lastCountryStr = localStorage.getItem('lastCountry')
      if (lastCountryStr !== null && lastCountryStr !== undefined) {
        const lastCountryObj = JSON.parse(lastCountryStr)
        this.$store.commit('weather/setCurrentCountry', lastCountryObj)
      }
      const lastFavouriteCountriesStr = localStorage.getItem('lastFavouriteCountries')
      if (lastFavouriteCountriesStr !== null && lastFavouriteCountriesStr !== undefined) {
        const lastFavouriteCountriesObj = JSON.parse(lastFavouriteCountriesStr)
        this.$store.commit('weather/setFavouriteCountries', lastFavouriteCountriesObj)
      }
    },
    linkClick (select) {
      if (this.$route.path !== select) {
        this.currentActiveLink = select
        this.$router.push(this.currentActiveLink)
      }
    },
    isActiveLink (isActive) {
      return this.currentHoverLink === '' && this.currentActiveLink === isActive
    }
  },
  watch: {
    // 监听路由变化
    $route (to, from) {
      // to: Route对象，即将进入的目标路由对象
      // from: Route对象，当前导航正要离开的路由
      this.scrollPositions[from.path] = this.$refs.weatherContainer.scrollTop
      this.currentActiveLink = to.path
      this.$nextTick(() => {
        // 这里的代码会在 DOM 更新之后执行
        this.$refs.weatherContainer.scrollTop = this.scrollPositions[to.path]
      })
    }
  }
}
</script>

<style scoped>
#weather-container{
    position: relative;;
    width: calc(55% - 1vw);
    height: 100%;
    border-radius:2.5vh;
    /* background-color:rgb(165, 194, 223); */
     background-image: url('@/assets/WeatherBackground/LightRain1.jpg');
     background-size:cover;
     background-repeat:no-repeat;
    overflow-y: auto;
}
#weather-container::-webkit-scrollbar {
    display: none;
}
.weather-nav{
    position:sticky;
    top:0;
    z-index: 1;
    width: 100%;
    display: flex;
    border-radius:10px 10px 0 0;
    justify-content: center;
    background: linear-gradient(to bottom,rgba(0, 170, 255, 0.5),rgb(61, 137, 220,0.5));
    backdrop-filter: blur(10px);
}
.router-link{
    color:rgb(255, 255, 255,0.5);
    font-size: 2.5vh;
    line-height: 5vh;
    padding: 1vh 2vh;
    cursor:pointer;
    text-align: center;
}
.active-router-link{
    border-bottom:0.5vh solid rgb(255, 255, 255);
    color: white;
}
.nav-color-1{
  background: linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(128, 128, 128, 0.5));
}
.nav-color-2{
  background: linear-gradient(to bottom,rgba(0, 221, 255, 0.5),rgba(179, 219, 220, 0.5));
}
.nav-color-3{
  background: linear-gradient(to bottom,rgba(0, 128, 255, 0.5),rgba(73, 190, 248, 0.5));
}
.nav-color-4{
  background: linear-gradient(to bottom,rgba(0, 68, 255, 0.5),rgba(0, 149, 255, 0.5));
}
.nav-color-5{
  background: linear-gradient(to bottom,rgba(0, 143, 253, 0.5),rgba(133, 239, 237, 0.5));
}
.nav-color-6{
  background: linear-gradient(to bottom,rgba(246, 173, 110, 0.5),rgba(155, 138, 115, 0.5));
}
.nav-color-7{
  background: linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(34, 79, 244, 0.5));
}
@media (max-aspect-ratio: 1){
    #weather-container{
        width: 100%;
        height: calc(100vh - 2vw);
    }
}
</style>
