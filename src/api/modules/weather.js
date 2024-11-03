import { weatherService } from '../request'
export const getCurrentWeather = (params) => {
  return weatherService.get('v7/weather/now', { params: params })
}
