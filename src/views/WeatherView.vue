<template>
  <div id="weather-container">
    <div class="weather-nav">
        <router-link>天气</router-link>
        <router-link>生活助手</router-link>
        <router-link>设置</router-link>
    </div>
    苏子愀然，正襟危坐而问客曰：“何为其然也？”客曰：“‘月明星稀，乌鹊南飞’，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。”
  </div>
</template>

<script>
export default {
  name: 'weather-view'
}
</script>

<style scpoed>
#weather-container{
    position: relative;;
    flex: 1;
    height: 100vh;
    background-color: aquamarine;
}
@media (max-aspect-ratio: 1){
    #weather-container{
        height: 2000px;
        background-color: burlywood;
    }
}
.weather-nav{
    position:sticky;
    top:0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
}
router-link{
    padding: 2%;
    margin: 0 10px;
    text-align: center;
}
</style>
