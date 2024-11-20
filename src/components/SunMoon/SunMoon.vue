<template>
  <div class="sunmoon">
    <div class="title">日出日落</div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
.sunmoon{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap:wrap;
    align-content: space-between;
    border-radius:2.5vh;
    margin-bottom: 1vh;
    transition:all 0.2s ease-in-out;
}
.sunmoon:active{
  transform: scale(0.95);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.sunmoon:hover{
  cursor: pointer;
}
.title{
  flex:0 0 100%;
  color:white;
  font-size: 2.5vh;
  text-align: center;
  height: 2.5vh;
  border-radius:2.5vh;
  line-height: 2.5vh;
  margin-bottom: 1vh;
}
.container{
    flex:0 0 100%;
    height: 20vh;
    background-color: rgba(128, 128, 128, 0.5);
    backdrop-filter:blur(10px);
    border-radius: 2.5vh;
}
</style>
