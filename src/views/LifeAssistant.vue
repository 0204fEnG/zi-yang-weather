<template>
  <div id="life-assistant">{{weatherinfo}}</div>
</template>

<script>
export default {
  name: 'LifeAssistant',
  data () {
    return {
      weatherinfo: null
    }
  },
  created () {
    console.log('开始获取实时天气')
    this.initCurrent()
  },
  methods: {
    initCurrent () {
      console.log('开始获取cur')
    }
  }
}
</script>

<style scoped>
</style>
