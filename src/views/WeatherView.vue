<template>
  <div id="weather-container">
    <div class="weather-nav">
        <div class="router-link"  @click="linkClick('/weather')" @mouseover="currentHoverLink='/weather'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='/weather'||isActiveLink('/weather')}">天气</div>
        <div class="router-link"  @click="linkClick('/assistant')" @mouseover="currentHoverLink='/assistant'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='/assistant'||isActiveLink('/assistant')}">生活助手</div>
        <div class="router-link"  @click="linkClick('/setting')" @mouseover="currentHoverLink='/setting'" @mouseleave="currentHoverLink=''" :class="{'active-router-link':currentHoverLink==='/setting'||isActiveLink('/setting')}">设置</div>
    </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data () {
    return {
      currentActiveLink: '/weather',
      currentHoverLink: ''
    }
  },
  // mounted () {
  //   this.initStickyObserver()
  // },
  methods: {
    linkClick (select) {
      if (this.$route.path !== select) {
        this.currentActiveLink = select
        this.$router.push(this.currentActiveLink)
      }
    },
    isActiveLink (isActive) {
      return this.currentHoverLink === '' && this.currentActiveLink === isActive
    }
    // initStickyObserver () {
    //   const stickyBox = document.querySelector('.weather-nav')
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //       if (!entry.isIntersecting) {
    //         // 当粘性盒子触发粘性固定后
    //         stickyBox.classList.add('nav-stick') // 更改边框圆角为0px
    //       } else {
    //         // 当粘性盒子未触发粘性固定
    //         stickyBox.classList.remove('nav-stick') // 恢复边框圆角
    //       }
    //     })
    //   }, {
    //     rootMargin: '0px 0px 0px 0px',
    //     threshold: 0
    //   })

    //   observer.observe(document.querySelector('.weather-container'))
    // }
  },
  // beforeDestroy () {
  //   if (this.observer) {
  //     this.observer.disconnect()
  //   }
  // },
  watch: {
    // 监听路由变化
    $route (to, from) {
      // to: Route对象，即将进入的目标路由对象
      // from: Route对象，当前导航正要离开的路由
      this.currentActiveLink = to.path
    }
  }
}
</script>

<style scoped>
#weather-container{
    position: relative;;
    width: calc(50% - 20px);
    height: 100%;
    border-radius:10px;
    background-color:rgb(165, 194, 223);
    overflow-y: auto;
}
#weather-container::-webkit-scrollbar {
    display: none; /* 隐藏滚动条 */
}
.weather-nav{
    position:sticky;
    top:0;
    width: 100%;
    display: flex;
    border-radius:10px 10px 0 0;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(7px);
}
.router-link{
    color:rgb(0, 0, 0);
    font-size: 20px;
    line-height: 40px;
    padding: 10px 20px;
    cursor:pointer;
    text-align: center;
}
.active-router-link{
    border-bottom:3px solid rgb(255, 255, 255);
    color: white;
}
@media (max-aspect-ratio: 1){
    #weather-container{
        width: 100%;
        height: calc(100vh - 40px);
    }
}
</style>
