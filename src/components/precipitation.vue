<template>
<div class="precipitation">
  <div class="pre-top">
    <span>预计有雨</span>
    <span>雨预计3分钟后开始下，持续38分钟</span>
  </div>
  <div class="pre-bottom" ref="preBottom">
  </div>
</div>
</template>

<script>
export default {
  name: 'Precipitation',
  props: {
    echarts: Object
  },
  mounted () {
    this.myChartPre = this.initChart()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
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
          data: ['18:05', '18:10', '18:15', '18:20', '18:25', '18:30', '18:35', '18:40', '18:45', '18:50', '18:55', '19:00', '19:05', '19:10', '19:15', '19:20', '19:25', '19:30', '19:35', '19:40', '19:45', '19:50', '19:55', '20:00'],
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
            data: [0.05, 0.05, 0.06, 0.10, 0.11, 0.12, 0.12, 0.14, 0.20, 0.24, 0.34, 0.36, 0.34, 0.32, 0.29, 0.25, 0.24, 0.20, 0.20, 0.13, 0.09, 0.03, 0.02, 0.00],
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

<style>
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
