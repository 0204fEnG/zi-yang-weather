<template>
  <div class="disaster-container">
    <div class="disaster" v-for="warningItem in warning" :key="warningItem.id">
      <div class="title">{{warningItem.typeName}}{{level[warningItem.severityColor]}}预警</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    warning: Array
  },
  data () {
    return {
      level: {
        White: '白色',
        Blue: '蓝色',
        Green: '绿色',
        Yellow: '黄色',
        Orange: '橙色',
        Red: '红色',
        Black: '黑色'
      }

    }
  }
}
</script>

<style>
.disaster-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0.5vh;
    background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
}
.disaster{
  color: white;
  flex:0 0 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 5vh;
  background-color:rgb(255, 255, 255,0.25);
}
</style>
