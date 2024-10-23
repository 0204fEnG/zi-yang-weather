import Vue from 'vue'
import VueRouter from 'vue-router'
import LifeAssistant from '@/views/LifeAssistant.vue'
import Setting from '@/views/Setting.vue'
import WeatherDetail from '@/views/WeatherDetail.vue'
import WeatherView from '@/views/WeatherView.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: WeatherView,
      children: [
        { path: '/weather', component: WeatherDetail },
        { path: '/assistant', component: LifeAssistant },
        { path: '/setting', component: Setting }
      ]
    }
  ]
})

export default router
