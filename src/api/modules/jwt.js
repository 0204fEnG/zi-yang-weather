import { jwtService } from '../request'
export const getJwt = async () => {
  try {
    const response = await jwtService.get('/get-jwt')
    return response.token // 返回获取到的 JWT
  } catch (error) {
    // 处理错误情况，例如网络错误或服务器错误
    console.error('Error fetching JWT:', error)
    throw error // 抛出错误，让调用者知道发生了错误
  }
}
