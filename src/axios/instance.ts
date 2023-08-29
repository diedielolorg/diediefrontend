import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { PostRequest } from '../interfaces/axiosTypes'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
})

api.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  (config) => {
    const accessToken = Cookies.get('access_token')
    const headers = { ...config.headers }
    if (accessToken) {
      headers.authorization = `${accessToken}`
    } else {
      headers.authorization = ''
    }
    return config
  },

  // 오류요청을 보내기 전 수행되는 함수
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  (response) => {
    try {
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  },

  // 오류응답을 내보내기 전 수행되는 함수
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

const postRequest = async (url: string, data: PostRequest) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const getRequest = async (url: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    throw error
  }
}

const putRequest = async (url: string, data: PostRequest) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.put(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}
const deleteRequest = async (url: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.delete(url)
    return response.data
  } catch (error) {
    throw error
  }
}

export { api, postRequest, getRequest, putRequest, deleteRequest }
