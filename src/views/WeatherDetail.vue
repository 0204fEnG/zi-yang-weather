<template>
<div id="weather-detail">
  <div class="country country1-color-7">
    <div>{{this.current.name}}</div>
    <div class="left">&lt;</div>
    <div class="right">&gt;</div>
  </div>
  <div class="detail">
  <WeatherCountry></WeatherCountry>
  <Precipitation></Precipitation>
  <Weather24Hours></Weather24Hours>
  <Weather7Days></Weather7Days>
  <CorrelationIndex></CorrelationIndex>
  <AirQuality></AirQuality>
  <Disaster></Disaster>
  </div>
  <div class="country-manage country2-color-7"></div>
</div>
</template>

<script>
import WeatherCountry from '@/components/WeatherCountry'
import Weather24Hours from '@/components/Weather24Hours'
import Weather7Days from '@/components/Weather7Days'
import CorrelationIndex from '@/components/CorrelationIndex'
import Precipitation from '@/components/Precipitation'
import AirQuality from '@/components/AirQuality'
import Disaster from '@/components/Disaster'
import * as weatherApi from '@/api/modules/weather'
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
      current: {
        name: null,
        updateTime: null,
        nowWeather: null,
        hours24Weather: null,
        days7Weather: null,
        hours2Rain: null,
        nowAirQuality: null,
        hours24AirQuality: null,
        days3AirQuality: null,
        nowIndex: null,
        days3Index: null,
        disaster: null,
        sun: {},
        moon: {}
      },
      favourite: []
    }
  },
  created () {
    this.init()
  },
  computed: {
    currentLat () {
      return this.$store.state.map.currentLocation
    },
    currentCountryinfo () {
      return this.$store.state.weather.currentCountry
    },
    favouriteCountryinfo () {
      return this.$store.state.weather.favouriteCountries
    }
  },
  methods: {
    splitArrayIntoChunks (array, chunkSize) {
      const chunks = []
      for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize)
        chunks.push(chunk)
      }
      return chunks
    },
    getNowDate () {
      // 获取当前日期
      const currentDate = new Date()

      // 获取年、月、日
      const year = currentDate.getFullYear()
      let month = currentDate.getMonth() + 1 // getMonth() 返回的月份是从0开始的，所以需要加1
      let day = currentDate.getDate()

      // 将月和日转换为两位数字的字符串
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day

      // 拼接成所需的格式
      const formattedDate = year.toString() + month + day
      return formattedDate
    },
    async init () {
      this.initCurrent()
      this.initFavourite()
    },
    async initCurrent () {
      console.log('开始获取cur')
      this.current.name = await this.getCountryInfo(this.currentLat).data.location[0].name
      const tempNowWeather = await this.getNowWeather(this.currentLat)
      this.current.updateTime = tempNowWeather.data.updateTime
      this.current.nowWeather = tempNowWeather.data.now
      this.current.hours24Weather = await this.get24HoursWeather(this.currentLat).data.hourly
      this.current.days7Weather = await this.get7DaysWeather(this.currentLat).data.daily
      this.current.hours2Rain = await this.get2HoursRain(this.currentLat).data.minutely
      this.current.nowAirQuality = await this.getNowAirQuality(this.currentLat).data.indexes
      this.current.hours24AirQuality = await this.get24HoursAirQuality(this.currentLat).data.hours
      this.current.days3AirQuality = await this.get3DaysAirQuality(this.currentLat).data.days
      this.current.nowIndex = await this.getNowIndex(this.currentLat).data.daily
      const tempDays3Index = await this.get3DaysIndex(this.currentLat).data.daily
      this.current.days3Index = this.splitArrayIntoChunks(tempDays3Index, 16)
      this.current.disaster = await this.getDisaster(this.currentLat).data.warning
      const tempSun = await this.getSun(this.currentLat)
      this.current.sun.rise = tempSun.data.sunrise
      this.current.sun.set = tempSun.data.sunset
      const tempMoon = await this.getMoon(this.currentLat)
      this.current.moon.rise = tempMoon.data.moonrise
      this.current.moon.set = tempMoon.data.moonset
      this.current.moon.phase = tempMoon.data.moonPhase
    },
    async initFavourite () {
      console.log('开始获取fav')
    },
    async getCountryInfo (lat) {
      console.log('开始获取当前城市位置')
      const countryInfo = await weatherApi.getCurrentCountry({ location: `${lat.longitude},${lat.latitude}` })
      return countryInfo
    },
    async getNowWeather (lat) {
      console.log('开始获取城市当前天气')
      const nowWeather = await weatherApi.getCurrentWeather({ location: `${lat.longitude},${lat.latitude}` })
      return nowWeather
    },
    async get24HoursWeather (lat) {
      console.log('开始获取城市未来24小时天气')
      const hours24Weather = await weatherApi.get24HoursWeather({ location: `${lat.longitude},${lat.latitude}` })
      return hours24Weather
    },
    async get7DaysWeather (lat) {
      console.log('开始获取城市未来7天天气')
      const days7Weather = await weatherApi.get7DaysWeather({ location: `${lat.longitude},${lat.latitude}` })
      return days7Weather
    },
    async get2HoursRain (lat) {
      console.log('开始获取城市未来2小时降雨/雪')
      const hours2Rain = await weatherApi.get2HoursRain({ location: `${lat.longitude},${lat.latitude}` })
      return hours2Rain
    },
    async getNowAirQuality (lat) {
      console.log('开始获取城市当前空气质量')
      const nowAirQuality = await weatherApi.getCurrentAirQuality(lat.latitude, lat.longitude)
      return nowAirQuality
    },
    async get24HoursAirQuality (lat) {
      console.log('开始获取城市未来24小时空气质量')
      const hours24AirQuality = await weatherApi.get24HoursAirQuality(lat.latitude, lat.longitude)
      return hours24AirQuality
    },
    async get3DaysAirQuality (lat) {
      console.log('开始获取城市未来3天空气质量')
      const days3AirQuality = await weatherApi.get3DaysAirQuality(lat.latitude, lat.longitude)
      return days3AirQuality
    },
    async getNowIndex (lat) {
      console.log('开始获取城市当前天气指数')
      const nowIndex = await weatherApi.getCurrentIndex(`${lat.longitude},${lat.latitude}`)
      return nowIndex
    },
    async get3DaysIndex (lat) {
      console.log('开始获取城市未来3天天气指数')
      const days3Index = await weatherApi.get3DaysIndex(`${lat.longitude},${lat.latitude}`)
      return days3Index
    },
    async getDisaster (lat) {
      console.log('开始获取城市实时灾害预警')
      const disaster = await weatherApi.getCurrentDisaster(`${lat.longitude},${lat.latitude}`)
      return disaster
    },
    async getSun (lat) {
      console.log('开始获取城市日出日落时间')
      const sun = await weatherApi.getSun(`${lat.longitude},${lat.latitude}`, this.getNowDate())
      return sun
    },
    async getMoon (lat) {
      console.log('开始获取城市月出月落时间')
      const moon = await weatherApi.getMoon(`${lat.longitude},${lat.latitude}`, this.getNowDate())
      return moon
    }
  }
}
</script>

<style scoped>
#weather-detail{
    width: 100%;
    height: auto;
    /* border-radius:10px; */
    background-size:cover;
    background-repeat: no-repeat;
}
.detail{
  width: 100%;
  height: auto;
  padding: 0 1vh;
  overflow: auto;
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
</style>
