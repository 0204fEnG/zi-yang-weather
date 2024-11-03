import { getJwt } from '@/api/modules/jwt.js'
export default {
  namespaced: true, // 启用命名空间

  state: {
    jwt: null // JWT token
  },
  getters: {
    // 检查JWT是否过期
    isTokenExpired: (state) => {
      const jwt = state.jwt
      if (!jwt) return true // 如果没有token，也视为过期
      const payload = JSON.parse(atob(jwt.split('.')[1]))
      const exp = new Date(payload.exp * 1000)
      return new Date() > exp // 如果当前时间大于exp时间，则token过期
    }
  },
  mutations: {
    // 设置JWT token
    SET_JWT (state, jwt) {
      state.jwt = jwt
    }
  },
  actions: {
    // 刷新JWT token
    async refreshToken ({ commit }) {
      // 这里应该是调用API来获取新的JWT的逻辑
      // 假设返回一个新的JWT
      console.log('vuex开始获取jwt')
      const newJwt = await getJwt() // 示例token
      console.log('获取成功,值为', newJwt)
      commit('SET_JWT', newJwt.data.token)
      console.log('保存成功jwt')
      // 保存新的JWT到本地存储
      localStorage.setItem('jwt', newJwt.data.token)
    }
  }
}
