import { jwtService } from '../request'
export const getJwt = () => {
  return jwtService.get('/get-jwt')
}
