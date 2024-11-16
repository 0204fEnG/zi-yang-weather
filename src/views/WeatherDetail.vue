<template>
<div id="weather-detail">
  <div class="country country1-color-7">
    <div>{{countries[this.currentIndex].name}}</div>
    <div class="left" @click="buttonLeft">&lt;</div>
    <div class="right" @click="buttonRight">&gt;</div>
  </div>
  <div class="detail-container" ref="detailContainer">
  <div class="detail" v-for="country in countries" :key="country.id">
  <WeatherCountry :weatherCountry="country.weatherCountry"></WeatherCountry>
  <Disaster :warning="country.disaster.warning"></Disaster>
  <Precipitation :echarts="echarts" :precipitation="country.precipitation"></Precipitation>
  <Weather24Hours :weather24Hours="country.weather24Hours"></Weather24Hours>
  <Weather7Days :echarts="echarts" :weather7Days="country.weather7Days"></Weather7Days>
  <CorrelationIndex></CorrelationIndex>
  <AirQuality></AirQuality>
  </div>
  </div>
  <div class="country-manage country2-color-7"></div>
</div>
</template>

<script>
import WeatherCountry from '@/components/WeatherCountry/WeatherCountry'
import Weather24Hours from '@/components/Weather24Hours/Weather24Hours'
import Weather7Days from '@/components/Weather7Days/Weather7Days'
import CorrelationIndex from '@/components/CorrelationIndex/CorrelationIndex'
import Precipitation from '@/components/Precipitation/Precipitation'
import AirQuality from '@/components/AirQuality/AirQuality'
import Disaster from '@/components/Disaster/Disaster'
import * as weatherApi from '@/api/modules/weather'
import echarts from '@/utils/echartsSetup.js'
export default {
  components: {
    WeatherCountry,
    Weather24Hours,
    Weather7Days,
    Precipitation,
    AirQuality,
    CorrelationIndex,
    Disaster
  },
  name: 'WeatherDetail',
  data () {
    return {
      echarts,
      currentIndex: 0,
      savedScrollPosition: 0,
      detailWidth: 1010,
      countries: []
    }
  },
  activated () {
    this.$refs.detailContainer.scrollTo({
      left: this.currentIndex * this.detailWidth,
      behavior: 'auto'
    })
  },
  deactivated () {
  },
  created () {
    this.init()
    // this.buttonScroll = this.throttle(this.detailScroll, 500)
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    currentLat () {
      return this.$store.state.map.currentLocation
    },
    currentCountryinfo () {
      return this.$store.state.weather.currentCountry
    },
    favouriteLats () {
      return this.$store.state.weather.favouriteCountries
    }
  },
  methods: {
    handleResize () {
      this.$nextTick(() => {
        const detailElement = this.$refs.detailContainer.querySelector('.detail')
        if (detailElement) {
          this.detailWidth = detailElement.clientWidth
        }
      })
    },
    // throttle (func, limit) {
    //   let inThrottle
    //   return function () { // 使用剩余参数来捕获所有传入的参数
    //     const args = arguments
    //     const context = this // 保存当前的this上下文
    //     if (!inThrottle) {
    //       func.apply(context, args) // 使用apply来调用func，并传递正确的上下文和参数
    //       inThrottle = true
    //       setTimeout(() => { inThrottle = false }, limit)
    //     }
    //   }
    // },
    detailScroll (index) {
      this.currentIndex += index
      this.$refs.detailContainer.scrollTo({
        left: this.currentIndex * this.detailWidth,
        behavior: 'smooth'
      })
    },
    buttonLeft () {
      if (this.currentIndex === 0) return
      this.detailScroll(-1)
    },
    buttonRight () {
      if (this.currentIndex === this.countries.length - 1) return
      this.detailScroll(1)
    },
    splitArrayIntoChunks (array, chunkSize) {
      const chunks = []
      for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize)
        chunks.push(chunk)
      }
      return chunks
    },
    // getNowDate () {
    //   // 获取当前日期
    //   const currentDate = new Date()

    //   // 获取年、月、日
    //   const year = currentDate.getFullYear()
    //   let month = currentDate.getMonth() + 1 // getMonth() 返回的月份是从0开始的，所以需要加1
    //   let day = currentDate.getDate()

    //   // 将月和日转换为两位数字的字符串
    //   month = month < 10 ? '0' + month : month
    //   day = day < 10 ? '0' + day : day

    //   // 拼接成所需的格式
    //   const formattedDate = year.toString() + month + day
    //   return formattedDate
    // },
    async init () {
      this.initCountries()
    },
    async initCountries () {
      const tempInfo = await this.getInfo(this.currentLat)
      tempInfo.id = 1
      this.countries.push(tempInfo)
      for (const [index, value] of this.favouriteLats.entries()) {
        const tempInfo = await this.getInfo(value)
        tempInfo.id = index + 2
        this.countries.push(tempInfo)
      }
    },
    async getInfo (location) {
      const info = {
        name: null,
        weatherCountry: {},
        precipitation: {},
        weather24Hours: {},
        weather7Days: [],
        correlationIndex: {},
        airQuality: {},
        disaster: {}
      }
      info.name = await this.getCountryInfo(location)
      const tempNowWeather = await this.getNowWeather(location)
      info.weatherCountry.updateTime = tempNowWeather.updateTime
      console.log(tempNowWeather)
      info.weatherCountry.nowTemp = tempNowWeather.now.temp
      info.weatherCountry.nowWeather = tempNowWeather.now.text
      const temp24HoursWeather = await this.get24HoursWeather(location)
      info.weather24Hours = []
      for (const [index, value] of temp24HoursWeather.entries()) {
        const tempInfo = {}
        tempInfo.id = index + 1
        tempInfo.fxTime = value.fxTime
        tempInfo.temp = value.temp
        tempInfo.text = value.text
        info.weather24Hours.push(tempInfo)
      }
      const temp7DaysWeather = await this.get7DaysWeather(location)
      info.weatherCountry.tempMax = temp7DaysWeather[0].tempMax
      info.weatherCountry.tempMin = temp7DaysWeather[0].tempMin
      for (const [index, value] of temp7DaysWeather.entries()) {
        const tempInfo = {}
        tempInfo.id = index + 1
        tempInfo.fxDate = value.fxDate
        tempInfo.textDay = value.textDay
        tempInfo.tempMax = value.tempMax
        tempInfo.tempMin = value.tempMin
        tempInfo.textNight = value.textNight
        info.weather7Days.push(tempInfo)
      }
      const temp2HoursRain = await this.get2HoursRain(location)
      info.precipitation.summary = temp2HoursRain.summary
      info.precipitation.minutely = temp2HoursRain.minutely
      const tempNowAirQuality = await this.getNowAirQuality(location)
      info.weatherCountry.nowAirQuality = tempNowAirQuality[0].category
      // info.hours24AirQuality = await this.get24HoursAirQuality(location)
      // info.days3AirQuality = await this.get3DaysAirQuality(location)
      // info.nowIndex = await this.getNowIndex(location)
      // const tempDays3Index = await this.get3DaysIndex(location)
      // info.days3Index = this.splitArrayIntoChunks(tempDays3Index, 16)
      const tempDisaster = await this.getDisaster(location)
      info.disaster.warning = []
      for (let i = 0; i < tempDisaster.length; i++) {
        const tempInfo = {}
        tempInfo.id = i + 1
        tempInfo.pubTime = tempDisaster[i].pubTime
        tempInfo.title = tempDisaster[i].title
        tempInfo.startTime = tempDisaster[i].startTime
        tempInfo.endTime = tempDisaster[i].endTime
        tempInfo.severity = tempDisaster[i].severity
        tempInfo.severityColor = tempDisaster[i].severityColor
        tempInfo.typeName = tempDisaster[i].typeName
        tempInfo.text = tempDisaster[i].text
        tempInfo.urgency = tempDisaster[i].urgency
        info.disaster.warning.push(tempInfo)
      }
      // const tempSun = await this.getSun(location)
      // info.sun.rise = tempSun.data.sunrise
      // info.sun.set = tempSun.data.sunset
      // const tempMoon = await this.getMoon(location)
      // info.moon.rise = tempMoon.data.moonrise
      // info.moon.set = tempMoon.data.moonset
      // info.moon.phase = tempMoon.data.moonPhase
      return info
    },
    async getCountryInfo (lat) {
      console.log('开始获取当前城市位置')
      const countryInfo = await weatherApi.getCurrentCountry({ location: `${lat.longitude},${lat.latitude}` })
      return countryInfo.data.location[0].name
    },
    async getNowWeather (lat) {
      console.log('开始获取城市当前天气')
      const nowWeather = await weatherApi.getCurrentWeather({ location: `${lat.longitude},${lat.latitude}` })
      return nowWeather.data
    },
    async get24HoursWeather (lat) {
      console.log('开始获取城市未来24小时天气')
      const hours24Weather = await weatherApi.get24HoursWeather({ location: `${lat.longitude},${lat.latitude}` })
      return hours24Weather.data.hourly
    },
    async get7DaysWeather (lat) {
      console.log('开始获取城市未来7天天气')
      const days7Weather = await weatherApi.get7DaysWeather({ location: `${lat.longitude},${lat.latitude}` })
      return days7Weather.data.daily
    },
    async get2HoursRain (lat) {
      console.log('开始获取城市未来2小时降雨/雪')
      const hours2Rain = await weatherApi.get2HoursRain({ location: `${lat.longitude},${lat.latitude}` })
      return hours2Rain.data
    },
    async getNowAirQuality (lat) {
      console.log('开始获取城市当前空气质量')
      const nowAirQuality = await weatherApi.getCurrentAirQuality(lat.latitude, lat.longitude)
      return nowAirQuality.data.indexes
    },
    async get24HoursAirQuality (lat) {
      console.log('开始获取城市未来24小时空气质量')
      const hours24AirQuality = await weatherApi.get24HoursAirQuality(lat.latitude, lat.longitude)
      return hours24AirQuality.data.hours
    },
    async get3DaysAirQuality (lat) {
      console.log('开始获取城市未来3天空气质量')
      const days3AirQuality = await weatherApi.get3DaysAirQuality(lat.latitude, lat.longitude)
      return days3AirQuality.data.days
    },
    async getNowIndex (lat) {
      console.log('开始获取城市当前天气指数')
      const nowIndex = await weatherApi.getCurrentIndex(`${lat.longitude},${lat.latitude}`)
      return nowIndex.data.daily
    },
    async get3DaysIndex (lat) {
      console.log('开始获取城市未来3天天气指数')
      const days3Index = await weatherApi.get3DaysIndex(`${lat.longitude},${lat.latitude}`)
      return days3Index.data.daily
    },
    async getDisaster (lat) {
      console.log('开始获取城市实时灾害预警')
      const disaster = await weatherApi.getCurrentDisaster(`${lat.longitude},${lat.latitude}`)
      return disaster.data.warning
    },
    async getSun (lat) {
      console.log('开始获取城市日出日落时间')
      const sun = await weatherApi.getSun(`${lat.longitude},${lat.latitude}`, this.getNowDate())
      return sun.data
    },
    async getMoon (lat) {
      console.log('开始获取城市月出月落时间')
      const moon = await weatherApi.getMoon(`${lat.longitude},${lat.latitude}`, this.getNowDate())
      return moon.data
    }
  }
}
</script>

<style scoped>
#weather-detail{
    width: 100%;
    height: auto;
}
.detail-container{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.detail-container::-webkit-scrollbar{
  display: none;
}
.detail{
  flex:0 0 100%;
  height: auto;
  padding: 0 1vh;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
.country{
  position: sticky;
  z-index: 1;
  text-align: center;
  color:white;
  line-height: 5vh;
  font-size:3vh;
  margin-bottom:1vh;
  top:7.44vh;
  width: 100%;
  height: 5vh;
  background:linear-gradient(to bottom,rgb(61, 137, 220,0.5),rgb(255, 255, 255,0.5));
  backdrop-filter: blur(10px);
}
.left{
  position: absolute;
  cursor: pointer;
  border:0.3vh solid white;
  border-radius:1.5vh;
  font-size: 2.7vh;
  line-height: 2.5vh;
  left: 4vh;
  width: 3vh;
  height: 3vh;
  top:calc(50% - 1.5vh);
}
.right{
  position: absolute;
  cursor: pointer;
  border:0.3vh solid white;
  border-radius:1.5vh;
  font-size: 2.7vh;
  line-height: 2.5vh;
  right: 4vh;
  width: 3vh;
  height: 3vh;
  top:calc(50% - 1.5vh);
}
.left:hover,.right:hover{
  background-color: rgba(0, 0, 0, 0.185);
}
.country-manage{
  position: sticky;
  bottom:0;
  width: 100%;
  height: 7vh;
  backdrop-filter:blur(10px);
}
.country1-color-1{
  background: linear-gradient(to bottom,rgb(128, 128, 128,0.5),rgba(255, 255, 255, 0.5));
}
.country1-color-2{
background: linear-gradient(to bottom,rgba(179,219,220,0.5),rgba(255, 255, 255, 0.5));
}
.country1-color-3{
background: linear-gradient(to bottom,rgba(73,190,248,0.5),rgba(157, 214, 244, 0.5));
}
.country1-color-4{
background: linear-gradient(to bottom,rgba(0, 149, 255, 0.5),rgba(56, 219, 255, 0.5));
}
.country1-color-5{
background: linear-gradient(to bottom,rgba(133, 239, 237, 0.5),rgb(255, 255, 255,0.5));
}
.country1-color-6{
background: linear-gradient(to bottom,rgba(155, 138, 115, 0.5),rgb(128, 128, 128,0.5));
}
.country1-color-7{
background: linear-gradient(to bottom,rgba(34, 79, 244, 0.5),rgba(104, 170, 250, 0.5));
}

.country2-color-1{
  background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(0, 0, 0, 0.5));
}
.country2-color-2{
  background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(83, 211, 240, 0.5));
}
.country2-color-3{
  background:linear-gradient(to bottom,rgba(128, 221, 245, 0.5),rgba(44, 153, 237, 0.5));
}
.country2-color-4{
  background: linear-gradient(to bottom,rgba(48, 186, 255, 0.5),rgba(25, 82, 239, 0.5));
}
.country2-color-5{
  background: linear-gradient(to bottom,rgb(255, 255, 255,0.5),rgba(4, 152, 216, 0.5));
}
.country2-color-6{
  background: linear-gradient(to bottom,rgb(128, 128, 128,0.5),rgba(239, 149, 107, 0.5));
}
.country2-color-7{
  background: linear-gradient(to bottom,rgba(21, 122, 245, 0.5),rgba(0, 0, 0, 0.5));
}
/* @media (max-aspect-ratio: 1){
  .detail{
    flex:0 0 100vw;
  }
} */
</style>
