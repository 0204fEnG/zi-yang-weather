<template>
  <div class="wind">
    <div class="title">风力风向</div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
.wind{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    align-content: space-between;
    border-radius:2.5vh;
    margin-bottom: 1vh;
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
    transition:all 0.2s ease-in-out;
}
.container:active{
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.container:hover{
  cursor: pointer;
}
</style>
