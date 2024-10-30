export default {
  namespaced: true, // 启用命名空间

  state: {
    jwt: null // JWT token
  },
  getters: {
    // 获取JWT token
    jwt: state => state.jwt,
    // 检查JWT是否过期
    isTokenExpired: (state) => (token) => {
      if (!token) return true // 如果没有token，也视为过期
      const payload = JSON.parse(atob(token.split('.')[1]))
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
    refreshToken ({ commit, getters }) {
      // 这里应该是调用API来获取新的JWT的逻辑
      // 假设返回一个新的JWT
      const newJwt = 'new.jwt.token' // 示例token
      commit('SET_JWT', newJwt)
      // 保存新的JWT到本地存储
      localStorage.setItem('jwt', newJwt)
    },
    // 检查JWT并可能刷新
    checkAndRefreshToken ({ dispatch, getters }) {
      const jwt = getters.jwt
      if (jwt && getters.isTokenExpired(jwt)) {
        return dispatch('refreshToken')
      }
      return Promise.resolve()
    }
  }
}
