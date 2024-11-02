<template>
  <div id="map-container">
    <div id="map-view"></div>
  </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  name: 'MapView',
  data () {
    return {
      key: '70624df561ac6289fc2859eb6e1582ca',
      securityJsCode: '845c0f04a314d5a4fce02831ced87da3',
      currentPosition: {
        latitude: 28.165342,
        longitude: 112.946341
      },
      map: null
    }
  },
  created () {
  },
  mounted () {
    this.initAMap()
  },
  unmounted () {
    this.map?.destroy()
  },
  methods: {
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
            zoom: 16, // 初始化地图级别
            center: [this.currentPosition.longitude, this.currentPosition.latitude] // 初始化地图中心点位置
          })
          const mapGeoLocation = new AMap.Geolocation({
            position: 'RB',
            showCircle: false,
            panToLocation: true,
            zoomToAccuracy: true
          })
          mapGeoLocation.getCurrentPosition((status, result) => {
            if (status === 'complete') {
              this.currentPosition.latitude = result.position.lat
              this.currentPosition.longitude = result.position.lng
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
  width: 50%;
  /* height: 75%; */
  height: 39vw;
  border-radius:10px;
  margin-right: 1vw;
}
#map-view{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
@media (max-aspect-ratio: 1){
  #map-container{
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-right:0;
    margin-bottom: 1vw;
  }
}
</style>
