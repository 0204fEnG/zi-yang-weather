<template>
<div class="weather-7days">
  <span class="title">近日天气</span>
  <div class="days-container">
    <div class="days-chart"></div>
  <div class="days">
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
    <div class="day">
      <div class="day-top">
        <span class="top-day">今天</span>
        <span class="top-date">11月9日</span>
        <img src="@/assets/WeatherBackground/Cloudy3.jpg">
        <span class="top-weather">小雨</span>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from 'echarts/charts'
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
export default {
  name: 'Weather7Days',
  data () {
    return {
      days7: [[26, 28, 26, 24, 25, 28, 29], [20, 20, 19, 20, 21, 23, 23]]
    }
  },
  mounted () {
    this.myChart7Days = this.init7Days()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    currentDay () { return new Date().getDay() }
  },
  methods: {
    weekDay (time) {
      const datelist = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      return datelist[time]
    },
    handleResize () {
      if (this.myChart7Days) {
        this.myChart7Days.resize()
      }
    },
    init7Days () {
      echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        LineChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer
      ])
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      const minData = Math.min(...this.days7[1])
      const maxData = Math.max(...this.days7[0])
      const myChart7Days = echarts.init(document.querySelector('.days-chart'))
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
          min: minData - 2,
          max: maxData + 2,
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
            type: 'line',
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
            data: this.days7[0],
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
            data: this.days7[1],
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
    /* border-radius:2.5vh; */
    margin-bottom: 1vh;
      border-radius:0 0 2.5vh 2.5vh;
    overflow: hidden;
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
.day{
  flex:0 0 13.37vh;
  margin-right: 3vh;
   border-radius:2.5vh;
   background:linear-gradient(to bottom,rgb(255, 255, 255,0.25) 0%,rgb(255, 255, 255,0.167) 25%,rgb(255, 255, 255,0.084) 50%,rgb(255, 255, 255,0) 100%);
  height: 100%;
}
.day:last-child{
  margin-right: 0;
}
.day-top{
  width: 100%;
  height: 100%;
  display:flex;
  color:white;
    font-size: 2vh;
  flex-direction: column;
  border-radius: 2.5vh 2.5vh 0 0;
}
.top-day{
  text-align: center;
  margin-bottom: 0.5vh;
}
.top-date{
  text-align: center;
    margin-bottom: 0.5vh;
}
.day-top img{
  margin:0 auto;
  height:5vh;
  width:5vh;
  border-radius:1vh;
  margin-bottom: 0.5vh;
}
.top-weather{
  text-align: center;
}
</style>
