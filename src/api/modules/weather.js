import { weatherService } from '../request'
export const getCurrentWeather = (params) => {
  return weatherService.get('https://api.qweather.com/v7/weather/now', { params })
}
export const getCurrentCountry = (params) => {
  return weatherService.get('https://geoapi.qweather.com/v2/city/lookup', { params })
}
export const get2HoursRain = (params) => {
  return weatherService.get('https://api.qweather.com/v7/minutely/5m', { params })
}
export const get24HoursWeather = (params) => {
  return weatherService.get('https://api.qweather.com/v7/weather/24h', { params })
}
export const get7DaysWeather = (params) => {
  return weatherService.get('https://api.qweather.com/v7/weather/7d', { params })
}
export const getCurrentAirQuality = (latitude, longitude) => {
  return weatherService.get(`https://api.qweather.com/airquality/v1/current/${latitude}/${longitude}`)
}
export const get24HoursAirQuality = (latitude, longitude) => {
  return weatherService.get(`https://api.qweather.com/airquality/v1/hourly/${latitude}/${longitude}`)
}
export const get3DaysAirQuality = (latitude, longitude) => {
  return weatherService.get(`https://api.qweather.com/airquality/v1/daily/${latitude}/${longitude}`)
}
export const getCurrentIndex = (location) => {
  return weatherService.get('https://api.qweather.com/v7/indices/1d', {
    params: {
      type: 0,
      location: location
    }
  })
}
export const get3DaysIndex = (location) => {
  return weatherService.get('https://api.qweather.com/v7/indices/3d', {
    params: {
      type: 0,
      location: location
    }
  })
}
export const getCurrentDisaster = (location) => {
  return weatherService.get('https://api.qweather.com/v7/warning/now', {
    params: {
      location: location
    }
  })
}
export const getSun = (location, date) => {
  return weatherService.get('https://api.qweather.com/v7/astronomy/sun', {
    params: {
      location: location,
      date: date
    }
  })
}
export const getMoon = (location, date) => {
  return weatherService.get('https://api.qweather.com/v7/astronomy/moon', {
    params: {
      location: location,
      date: date
    }
  })
}
