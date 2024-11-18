<template>
<div class="weather-7days">
  <span class="title">近7日天气</span>
  <div class="days-container">
    <div class="days-chart" ref="daysChart"></div>
  <div class="days">
      <div class="day-top" v-for="day in weather7Days" :key="day.id">
        <span class="top-day">{{day.id===1?"今天":(day.id===2?"明天":datelist[(currentWeek+day.id-1)%7])}}</span>
        <span class="top-date">{{formatDate(day.fxDate)}}</span>
        <div class="top-img">
        <img :src="require(`../../../node_modules/qweather-icons/icons/${day.iconDay}.svg`)" class="invert-svg" alt="">/<img :src="require(`../../../node_modules/qweather-icons/icons/${day.iconNight}.svg`)" class="invert-svg" alt="">
        </div>
        <span class="top-weather">{{day.textDay}}/{{day.textNight}}</span>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { formatDate } from '@/utils/formatISOTime.js'
export default {
  name: 'Weather7Days',
  props: {
    echarts: Object,
    weather7Days: Array
  },
  data () {
    return {
      datelist: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
  },
  created () {
    console.log(this.tempsMax)
  },
  mounted () {
    this.myChart7Days = this.init7Days()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    currentWeek () { return new Date(this.weather7Days[0].fxDate).getDay() },
    tempsMax () {
      return this.weather7Days.map(item => Number(item.tempMax))
    },
    tempsMin () {
      return this.weather7Days.map(item => Number(item.tempMin))
    }
  },
  methods: {
    formatDate,
    handleResize () {
      if (this.myChart7Days) {
        this.myChart7Days.resize()
      }
    },
    init7Days () {
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      const minData = Math.min(...this.tempsMin)
      const maxData = Math.max(...this.tempsMax)
      const myChart7Days = this.echarts.init(this.$refs.daysChart)
      myChart7Days.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            show: false // 隐藏X轴轴线
          },
          splitLine: {
            show: false // 隐藏X轴网格线
          },
          axisTick: { // 坐标轴刻度相关设置
            alignWithLabel: true, // 刻度线和标签对齐
            show: false
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'HarmonyOS_Sans_SC_Regular',
              color: 'white'
            },
            show: false,
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          min: minData - 5,
          max: maxData + 5,
          axisLine: {
            show: false // 隐藏Y轴轴线
          },
          splitLine: {
            show: false // 隐藏Y轴网格线
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'HarmonyOS_Sans_SC_Regular',
              color: 'white'
            },
            margin: -25,
            show: false
          }
        },
        grid: {
          top: '18%', // 上边距
          right: '0', // 右边距
          bottom: '7%', // 下边距
          left: '0', // 左边距
          containLabel: true
        },
        series: [
          {
            name: '最高温',
            data: this.tempsMax,
            type: 'line',
            smooth: true,
            label: {
              show: true,
              position: 'top',
              formatter: function (params) {
                return params.value + '℃'
              },
              fontSize: 18,
              fontFamily: 'HarmonyOS_Sans_SC_Regular',
              color: 'white'
            },
            lineStyle: {
              color: 'rgb(255, 123, 41)' // 设置折线的颜色
            },
            itemStyle: {
              color: 'white' // 设置数据点的颜色
            }
          },
          {
            name: '最低温',
            type: 'line',
            data: this.tempsMin,
            smooth: true,
            label: {
              show: true,
              position: 'bottom',
              formatter: function (params) {
                return params.value + '℃'
              },
              fontSize: 18,
              fontFamily: 'HarmonyOS_Sans_SC_Regular',
              color: 'white'
            },
            lineStyle: {
              color: 'skyblue' // 设置折线的颜色
            },
            itemStyle: {
              color: 'white' // 设置数据点的颜色
            }
          }
        ]
      })
      return myChart7Days
    }
  }
}
</script>

<style scoped>
.weather-7days{
    width: 100%;
    margin-bottom: 1vh;
    border-radius:2.5vh;
    overflow: hidden;
}
.title{
  display: block;
  text-align: center;
  color:white;
  width: 100%;
  font-size: 2.5vh;
  line-height: 2.5vh;
  margin-bottom: 1vh;
}
.days-container{
  width: 100%;
  height: 100%;
  overflow-x: auto;
  position: relative;
  border-radius:2.5vh;
  background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
}
.days-container::-webkit-scrollbar{
  background: rgba(255,255,255,0.25);
  border-radius: 0 0 2.5vh 2.5vh;
}
.days-container::-webkit-scrollbar-thumb{
  background-color:rgba(255,255,255,0.25);
  border-radius: 2.5vh;
}
.days-chart{
  position: absolute;
  left: 0;
  width: 111.59vh;
  bottom: 3vh;
  height: 14.5vh;
    /* background-color:rgba(255,255,255,0.25); */
  border-radius: 0 0 2.5vh 2.5vh;
}
.days{
  width: 100%;
  height:35vh;
  padding: 3vh 0;
  display: flex;
  flex-direction: row;
}
.day-top{
  flex:0 0 13.37vh;
  margin-right: 3vh;
  border-radius:2.5vh;
  background:linear-gradient(to bottom,rgb(255, 255, 255,0.25) 0%,rgb(255, 255, 255,0.167) 25%,rgb(255, 255, 255,0.084) 50%,rgb(255, 255, 255,0) 100%);
  height: 100%;
  display:flex;
  color:white;
  font-size: 2vh;
  flex-direction: column;
  align-items: center;
}
.day-top:last-child{
  margin-right: 0;
}
.top-day{
  text-align: center;
  line-height: 2vh;
  margin-top:1.3vh;
  margin-bottom: 1vh;
}
.top-date{
  text-align: center;
  line-height: 2vh;
  margin-bottom: 1vh;
}
.top-img{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 4vh;
  line-height: 4vh;
  margin-bottom: 1vh;
}
.top-img img{
  height:4vh;
  width:4vh;
}
.invert-svg {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
}
.top-weather{
  line-height: 2vh;
  text-align: center;
}
</style>
