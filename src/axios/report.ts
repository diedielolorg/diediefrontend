import { api } from './instance'

const postRequest = async (url: string, data: FormData) => {
  const response = await api.post(url, data)
  return response
}

export const report = async (formdata: FormData) => {
  return postRequest('/api/reportuser', formdata)
}
