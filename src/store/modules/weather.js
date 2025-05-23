export default {
  namespaced: true,
  state: {
    currentCountry: {
      location: null,
      name: null
    },
    favouriteCountries: [
      {
        latitude: 27.05,
        longitude: 119.52
      },
      {
        latitude: 34.14,
        longitude: 109.02
      }
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
