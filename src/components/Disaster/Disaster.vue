<template>
  <div class="disaster-container">
    <i style="font-size:2vh" v-if="warning.length===0">暂无天气灾害预警</i>
    <div class="disaster" v-else v-for="warningItem in warning" :key="warningItem.id">
      <div class="detail">{{warningItem.typeName}}{{level[warningItem.severityColor]}}预警</div>
      <div class="detail">严重等级:<i :style="{color:warningItem.severityColor}">{{severity[warningItem.severity]}}</i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disaster',
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
      },
      severity: {
        Cancel: '取消',
        None: '无',
        Unknown: '未知',
        Standard: '标准',
        Minor: '轻微',
        Moderate: '中等',
        Major: '严重',
        Severe: '剧烈',
        Extreme: '极端'
      }
    }
  }
}
</script>

<style scoped>
.disaster-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    color:white;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5vh;
    border-radius:2.5vh;
    background-color: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
  margin-bottom: 1vh;
  transition:all 0.2s ease-in-out;
}
.disaster-container:active{
  transform: scale(0.95);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.disaster-container:hover{
  cursor: pointer;
}
.disaster{
  color: white;
  flex:0 0 100%;
  display: flex;
  border-radius:2.5vh;
  flex-direction: row;
  padding: 0.5vh;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5vh;
  height: 4vh;
}
.disaster:last-child{
  margin-bottom: 0;
}
.detail{
  text-align: center;
  font-size:2vh;
  margin-right: 0.5vh;
  flex:1 0 0;
  height: 100%;
  line-height: 3vh;
  border-radius:1.25vh;
    background-color:rgb(255, 255, 255,0.25);
}
.detail:last-child{
  margin-right: 0;
}
</style>
