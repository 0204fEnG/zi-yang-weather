<template>
<div class="detail-container">
    <div class="detail"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-container{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgb(255, 255, 255,0.5);
    backdrop-filter: blur(10px);
}
/* 进入和离开的初始状态 */
.detail-container-enter-active, .detail-container-leave-active {
  transition: opacity 0.5s, backdrop-filter 0.5s;
}

/* 进入的结束状态 */
.fade-enter-to {
  opacity: 1;
  backdrop-filter: blur(10px);
}

.detail-container-enter, .detail-container-leave {
  opacity: 0;
  backdrop-filter: blur(10px);
}
</style>
