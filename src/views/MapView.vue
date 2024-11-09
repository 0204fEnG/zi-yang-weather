<template>
  <div id="map-container">
    <div id="map-view"></div>
  </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import { getCurrentCountry } from '../api/modules/weather.js'
export default {
  name: 'MapView',
  data () {
    return {
      map: null
    }
  },
  created () {
    this.initLocation()
  },
  mounted () {
    this.initAMap()
  },
  unmounted () {
    this.map?.destroy()
  },
  computed: {
    key () {
      return this.$store.state.map.key
    },
    securityJsCode () {
      return this.$store.state.map.securityJsCode
    },
    currentLocation () {
      return this.$store.state.map.currentLocation
    }
  },
  methods: {
    initLocation () {
      const lastLocationStr = localStorage.getItem('lastLocation')
      if (lastLocationStr !== null && lastLocationStr !== undefined) {
        const lastLocationObj = JSON.parse(lastLocationStr)
        this.$store.commit('map/setCurrentLocation', { lat: lastLocationObj.latitude, lon: lastLocationObj.longitude })
      }
    },
    initAMap () {
      window._AMapSecurityConfig = {
        securityJsCode: this.securityJsCode
      }
      AMapLoader.load({
        key: this.key, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale', 'AMap.Geolocation'] // 需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
      })
        .then((AMap) => {
          this.map = new AMap.Map('map-view', {
            // 设置地图容器id
            viewMode: '3D', // 是否为3D地图模式
            zoom: 19, // 初始化地图级别
            center: [this.currentLocation.longitude, this.currentLocation.latitude] // 初始化地图中心点位置
          })
          const mapGeoLocation = new AMap.Geolocation({
            position: 'RB',
            showCircle: false,
            panToLocation: true,
            zoomToAccuracy: true
          })
          mapGeoLocation.getCurrentPosition(async (status, result) => {
            if (status === 'complete') {
              this.$store.commit('map/setCurrentLocation', { lat: result.position.lat.toFixed(2), lon: result.position.lng.toFixed(2) })
              const finalLocationObj = this.currentLocation
              const finalLocationStr = JSON.stringify(finalLocationObj)
              localStorage.setItem('lastLocation', finalLocationStr)
              const getCurrentCountryObj = await getCurrentCountry({ location: this.currentLocation.longitude + ',' + this.currentLocation.latitude })
              const CountryObj = {
                location: getCurrentCountryObj.data.location[0].id,
                name: getCurrentCountryObj.data.location[0].name
              }
              this.$store.commit('weather/setCurrentCountry', CountryObj)
              const CountryStr = JSON.stringify(CountryObj)
              localStorage.setItem('lastCountry', CountryStr)
            } else {
              console.log('获取经纬度错误！')
            }
          })
          const scale = new AMap.Scale()
          this.map.addControl(scale)
          scale.show()
          this.map.addControl(mapGeoLocation)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
#map-container {
  width: 45%;
  /* height: 75%; */
  height: 30vw;
  border-radius:2.5vh;
  margin-right: 1vw;
}
#map-view{
  width: 100%;
  height: 100%;
  border-radius: 2.5vh;
}
@media (max-aspect-ratio: 1){
  #map-container{
    width: 98vw;
    /* aspect-ratio: 1; */
    height: 49vw;
    margin-right:0;
    margin-bottom: 1vw;
  }
}
</style>
