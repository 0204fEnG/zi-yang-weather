<template>
<div class="precipitation">
  <div class="pre-top">
    <i>{{precipitation.summary}}</i>
  </div>
  <div class="pre-bottom" ref="preBottom">
  </div>
</div>
</template>

<script>
import { formatISOTime } from '@/utils/formatISOTime.js'
export default {
  name: 'Precipitation',
  props: {
    echarts: Object,
    precipitation: Object
  },
  mounted () {
    this.myChartPre = this.initChart()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    times () {
      return this.precipitation.minutely.map(item => formatISOTime(item.fxTime, '3'))
    },
    precips () {
      return this.precipitation.minutely.map(item => item.precip)
    }
  },
  methods: {
    formatISOTime,
    handleResize () {
      if (this.myChartPre) {
        this.myChartPre.resize()
      }
    },
    initChart () {
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      const myChartPre = this.echarts.init(this.$refs.preBottom)
      myChartPre.setOption({
        xAxis: {
          name: '时间',
          nameTextStyle: {
            color: 'white', // 名称颜色
            fontSize: 18 // 名称字体大小
          },
          data: this.times,
          axisLabel: {
            textStyle: {
              fontFamily: 'HarmonyOS_Sans_SC_Regular',
              color: 'white'
            },
            interval: 'auto'
          },
          axisTick: {
            // 在设置boundaryGap 为 true的前提下，设置alignWithLabel使刻度线和标签对齐
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          }
        },
        yAxis: {
          name: '降水量/mm',
          nameTextStyle: {
            color: 'white', // 名称颜色
            fontSize: 18 // 名称字体大小
          },
          splitLine: {
            show: true, // 确保分隔线是显示的
            lineStyle: {
              color: 'white' // 设置分隔线的颜色为红色
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'HarmonyOS_Sans_SC_Regular',
              fontSize: 15,
              color: 'white'
            }
          },
          axisLine: {
          }
        },
        grid: {
          top: '18%', // 上边距
          right: '12%', // 右边距
          bottom: '7%', // 下边距
          left: '5%', // 左边距
          containLabel: true
        },
        series: [
          {
            data: this.precips,
            type: 'line',
            responsive: true,
            smooth: true,
            lineStyle: {
              color: 'rgba(0, 145, 255)'
            },
            itemStyle: {
              color: 'white'
            }
          }
        ]
      })
      return myChartPre
    }
  }
}
</script>

<style scoped>
.precipitation{
    width: 100%;
    border-radius:2.5vh;
    margin-bottom: 1vh;
    overflow: hidden;
  background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
}
.pre-top{
  width: 100%;
  display:flex;
  flex-direction: column;
  color:white;
  justify-content: space-between;
  font-size: 2vh;
  padding: 1vh;
}
.pre-top span{
  width: 100%;
}
.pre-bottom{
width: 100%;
height: 30vh;
position: relative;
background:rgb(255, 255, 255,0.25);
}
</style>
