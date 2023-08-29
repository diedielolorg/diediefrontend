import { PostRequest } from '../interfaces/axiosTypes'
import api from './instance'

export const postRequest = async (url: string, data: PostRequest) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}
