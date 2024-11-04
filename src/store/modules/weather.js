export default {
  namespaced: true,
  state: {
    currentCountry: {
      location: null,
      name: null
    },
    favouriteCountries: [
    ]
  },
  mutations: {
    setCurrentCountry (state, cur) {
      state.currentCountry = cur
    },
    setFavouriteCountries (state, lastfavour) {
      state.favouriteCountries = lastfavour
    },
    addFavouriteCountry (state, { location, name }) {
      state.favouriteCountries.push({ location, name })
    }
  }
}
