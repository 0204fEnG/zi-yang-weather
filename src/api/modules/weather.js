import { weatherService } from '../request'
export const getCurrentWeather = (params) => {
  return weatherService.get('https://devapi.qweather.com/v7/weather/now', { params })
}
export const getCurrentCountry = (params) => {
  return weatherService.get('https://geoapi.qweather.com/v2/city/lookup', { params })
}
