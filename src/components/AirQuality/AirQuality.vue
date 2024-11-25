<template>
<div class="air-quality">
    <div class="title">今日空气质量</div>
    <div class="content">
        <div class="indexes-echart">
          <div class="outer">
          <div class="outer0" :style="{backgroundColor:this.progressColor}">
            <div class="inner0" ref="inner0"></div>
          </div>
          <div class="outer1" :style="{backgroundColor:this.progressColor}">
            <div class="inner1" ref="inner1"></div>
          </div>
          <div class="outerself">污染指数:{{this.airQuality.now.indexes.aqi}}</div>
          </div>
        </div>
        <div class="pollutants-container">
            <div class="title2">污染物浓度</div>
            <div class="pollutants">
            <div class="pollutant" v-for="pollutant in airQuality.now.pollutants" :key="pollutant.id">
                <span class="name">{{pollutant.name}}</span>
                <span class="value">{{pollutant.concentration.value}}</span>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AirQuality',
  props: {
    airQuality: Object
  },
  mounted () {
    this.init_echart()
  },
  computed: {
    progress () {
      return this.airQuality.now.indexes.aqi / 5
    },
    progressColor () {
      return this.airQuality.now.indexes.color
    }
  },
  methods: {
    init_echart () {
      const box0 = this.$refs.inner0
      const box1 = this.$refs.inner1
      if (this.progress <= 50) {
        box1.style.transform = `rotate(${this.progress * 3.6}deg)`
      } else {
        box1.style.transform = `rotate(${50 * 3.6}deg)`
        setTimeout(() => {
          box0.classList.add('inner01')
          box0.style.transform = `rotate(${(this.progress - 50) * 3.6}deg)`
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
.air-quality{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius:2.5vh;
    margin-bottom: 1vh;
}
.title{
    flex:0 0 100%;
    color:white;
    font-size:2.5vh;
    height: 2.5vh;
    text-align: center;
    line-height: 2.5vh;
    margin-bottom: 1vh;
    border-radius:2.5vh;
}
.content{
    flex:0 0 100%;
    height: 20vh;
    display: flex;
    padding: 1.5vh;
    border-radius:2.5vh;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    background-color: rgba(128, 128, 128, 0.5);
    backdrop-filter: blur(10px);
}
.indexes-echart{
    flex:0 0 49%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(255, 255, 255,0.25);
    border-radius:1.25vh;
    transition:all 0.2s ease-in-out;
}
.outer{
  height: 100%;
  aspect-ratio: 1;
  position: relative;
}
.outerself{
  font-size:2vh;
  color:rgb(0, 0, 0);
  position: absolute;
  text-align: center;
  line-height: calc(17vh - 2vh);
  height: calc(17vh - 2vh);
  aspect-ratio: 1;
  border-radius: 50%;
  top:1vh;
  left: 1vh;
  background-color: rgb(202, 202, 202);
}
.outer0{
  position: absolute;
  height: 17vh;
  aspect-ratio: 1;
  top:0;
  left: 0;
  border-radius: 50%;
  clip:rect(0px,8.5vh,17vh,0);
}
.inner0{
  position: absolute;
  height: 17vh;
  aspect-ratio: 1;
  top:0;
  left:0;
  background-color: rgb(181, 180, 180);
  border-radius: 50%;
  clip:rect(0px,8.5vh,17vh,0);
  animation: cir0  linear 1s 1s;
}
.inner0::after{
  position: absolute;
  content:'';
  display: block;
  background-color: rgb(255, 255, 255);
  border-radius: 0.5vh 0 0 0.5vh;
  width: 1vh;
  height: 1vh;
  bottom:0;
  opacity: 0;
  left:calc(50% - 1vh);
  /* animation: cir01 linear 0s 1s forwards; */
}
.inner01::after{
  opacity: 1;
}
.outer1{
  position: absolute;
 height: 17vh;
  aspect-ratio: 1;
  top:0;
  left: 0;
   border-radius: 50%;
  clip:rect(0,17vh,17vh,8.5vh);
}
.inner1{
  position: absolute;
  height: 17vh;
  aspect-ratio: 1;
  top:0;
  left:0;
  background-color: rgb(181, 180, 180);
  border-radius: 50%;
  clip:rect(0,17vh,17vh,8.5vh);
  animation: cir1  linear 1s ;
}
.inner1::after{
  position: absolute;
  content:'';
  display: block;
  background-color: rgb(255, 255, 255);
  border-radius: 0 0.5vh 0.5vh 0;
  width: 1vh;
  height: 1vh;
  top:0;
  left:calc(50%);
}
@keyframes cir0 {
  0%{
    transform: rotate(0deg);
  }
}
/* @keyframes cir01 {
  100%{
    opacity: 1;
  }
} */
@keyframes cir1 {
  0%{
    transform: rotate(0deg);
  }
}
.indexes-echart:active{
  transform: scale(0.95);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.indexes-echart:hover{
  cursor: pointer;
}
.pollutants-container{
    flex:0 0 49%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255,0.25);
    border-radius:1.25vh;
     transition:all 0.2s ease-in-out;
}
.pollutants-container:active{
  transform: scale(0.95);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.pollutants-container:hover{
  cursor: pointer;
}
.title2{
    flex:0 0 100%;
    font-size:2vh;
    color:white;
    text-align: center;
    height: 2.5vh;
    border-radius:1.25vh 1.25vh 0 0;
    line-height: 2.5vh;
    background-color: rgba(128, 128, 128, 0.5);
}
.pollutants{
    flex:0 0 100%;
    height: calc(100% - 2.5vh);
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-content: space-around;
}
.pollutant{
    flex:0 0 46%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: calc(0.25vw + 1.25vh);
    color:white;
    margin: 0 2%;
    text-align: center;
    height: 3vh;
    line-height: 3vh;
    border-radius:1.25vh;
    background-color: rgba(128, 128, 128, 0.5);
}
.name{
    flex:0 0 50%;
    height: 100%;
}
.value{
    flex:0 0 50%;
    height: 100%;
}
@media (max-aspect-ratio: 1){
    .content{
        height: 40vh;
    }
  .indexes-echart{
    flex:0 0 100%;
    height: 48%;
  }
  .pollutants-container{
    flex:0 0 100%;
    height: 48%;
  }
  }
</style>
