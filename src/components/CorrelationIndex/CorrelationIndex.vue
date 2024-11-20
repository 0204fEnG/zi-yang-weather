<template>
  <div class="correlation-index">
    <div class="title">今日天气指数</div>
    <div class="correlations-container"></div>
  </div>
</template>

<script>
export default {
  name: 'CorrletionIndex'
}
</script>

<style scoped>
.correlation-index{
  width: 100%;
  height: auto;
  border-radius:2.5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  margin-bottom:1vh;
  transition:all 0.2s ease-in-out;
}
.correlation-index:active{
  transform: scale(0.95);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.correlation-index:hover{
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
.correlations-container{
  flex:0 0 100%;
  height: 20vh;
    border-radius:2.5vh;
  background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
}
</style>
