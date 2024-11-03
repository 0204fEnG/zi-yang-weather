// request.js
import axios from 'axios'
import store from '@/store'
// import jwtVuex from '../store/modules/jwt'
// 创建获取地图数据的 Axios 实例
const mapService = axios.create({
//   baseURL: 'https://api.mapserver.com',
  timeout: 5000
})

// 创建获取天气数据的 Axios 实例
const weatherService = axios.create({
  baseURL: 'https://devapi.qweather.com',
  timeout: 5000
})
weatherService.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // config 是当前请求的配置对象

    // 例如，你可以在这里添加认证令牌到请求头
    if (store.getters['jwt/isTokenExpired']) {
      store.dispatch('jwt/refreshToken')
    }
    config.headers.Authorization = `Bearer ${store.state.jwt.jwt}`
    // 可以根据需要修改 config 的任何属性
    // ...

    // 最终需要返回 config 对象
  },
  function (error) {
    // 对请求错误做些什么
    // 如果请求出错，通常会在这里处理错误
    // 这里可以返回一个 Promise.reject 对象，以通知调用者请求拦截器中发生了错误
    return Promise.reject(error)
  }
)

// 现在，所有通过 axios 发出的请求都会经过这个请求拦截器

// 创建获取token的Axios实例
const jwtService = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})
// 导出实例
export { mapService, weatherService, jwtService }
