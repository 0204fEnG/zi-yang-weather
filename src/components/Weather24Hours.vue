<template>
<div class="weather-24hours">
  <div class="top">tip:当前晴朗</div>
  <div class="bottom">
    <div class="hour-container">
    <div class="bottom-hour">
      <span class="hour-time">22:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">23:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">00:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">01:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">02:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">03:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">04:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">05:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">06:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">07:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">08:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">09:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">10:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">11:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">22:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">12:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">13:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">14:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">15:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">16:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">17:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">18:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">19:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">20:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    <div class="bottom-hour">
      <span class="hour-time">21:00</span>
      <img src="" alt="">
      <span class="hour-tem">16℃</span>
    </div>
    </div>
  </div>
  <!-- <buttom class="hour-buttom hour-left" @click="clickLeftButtom()">&lt;</buttom>
  <buttom class="hour-buttom hour-right" @click="clickRightButtom()">&gt;</buttom> -->
</div>
</template>

<script>
export default {
  name: 'Weather24Hours',
  data () {
    return {
    }
  },
  methods: {
    // clickLeftButtom () {
    //   const hourContainer = document.querySelector('.bottom')
    //   const scrollStep = this.viewHeight * (9.5 / 100)
    //   hourContainer.scrollLeft -= scrollStep
    // },
    // clickRightButtom () {
    //   const hourContainer = document.querySelector('.bottom')
    //   const scrollStep = this.viewHeight * (9.5 / 100)
    //   hourContainer.scrollLeft += scrollStep
    // }
  },
  computed: {
    // viewHeight () {
    //   return window.innerHeight
    // },
    // viewWidth () {
    //   return window.innerWidth
    // }
  }
}
</script>

<style scoped>
.weather-24hours{
    width: 100%;
    display:flex;
    position: relative;
    flex-direction:row;
    flex-wrap: wrap;
    border-radius:2.5vh;
    overflow: hidden;
    margin-bottom: 1vh;
  background-color: rgb(3, 73, 95,0.5);
}
.top{
  color:white;
  font-size:2vh;
  line-height: 3vh;
  width: 100%;
  height: 4.5vh;
  padding: 0.5vh;
  border-bottom:0.5vh solid rgb(255, 255, 255,0.25);
  /* background-color: aquamarine; */
}
.bottom{
  width: 100%;
  height: 100%;
  overflow-x: auto;
}
.bottom::-webkit-scrollbar{
  background: rgba(255,255,255,0.25);
}
.bottom::-webkit-scrollbar-thumb{
  background-color:rgba(255,255,255,0.25);
  border-radius: 2.5vh;
}
/* .bottom::-webkit-scrollbar-thumb{
  height: 2vh;
  background-color:aquamarine
}
.bottom::-webkit-scrollbar-track{
  background-color:bisque
}
.bottom::-webkit-scrollbar-button{
  background-color:cadetblue;
}
.bottom::-webkit-scrollbar-corner{
  background-color:blue
} */
.hour-buttom{
  position: absolute;
  color:white;
  font-size:1.5vh;
  text-align: center;
  border:0.25vh solid white;
  border-radius:1.25vh;
  width: 2.5vh;
  height: 2.5vh;
  top:12vh;
}
/* .hour-buttom:hover{
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.185);
}
.hour-left{
  left:1%;
  transform: translateY(-50%);
}
.hour-right{
  right:1%;
  transform: translateY(-50%);
} */
.hour-container{
  color:white;
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 15vh;
  padding: 2vh 0;
}

.bottom-hour{
  flex:0 0 8vh;
  position: relative;
  margin-right: 1.5vh;
  border-radius:2vh;
  height: 100%;
  background-color:rgb(255, 255, 255,0.25);
}
.bottom-hour:last-child{
  margin-right: 0;
}
.hour-time{
  display: block;
  position: absolute;
  top:0;
  width: 100%;
  font-size:2vh;
  text-align: center;
  height: 4vh;
  line-height: 4vh;
}
.hour-tem{
  position: absolute;
  bottom:0;
  display: block;
  width: 100%;
  font-size:2vh;
  text-align: center;
  height: 4vh;
  line-height: 4vh;
}
</style>
