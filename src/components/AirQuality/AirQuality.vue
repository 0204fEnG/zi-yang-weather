<template>
<div class="air-quality">
    <div class="title">今日空气质量</div>
    <div class="content">
        <div class="indexes-echart">
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
    background-color: rgb(255, 255, 255,0.25);
    border-radius:1.25vh;
    transition:all 0.2s ease-in-out;
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
