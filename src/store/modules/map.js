export default {
  namespaced: true,
  state: {
    currentLocation: {
      latitude: 28.18,
      longitude: 112.95
    },
    key: '70624df561ac6289fc2859eb6e1582ca',
    securityJsCode: '845c0f04a314d5a4fce02831ced87da3'
  },
  mutations: {
    setCurrentLocation (state, { lat, lon }) {
      state.currentLocation.latitude = lat
      state.currentLocation.longitude = lon
    }
  }
}
