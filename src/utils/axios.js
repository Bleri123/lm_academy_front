import axios from 'axios'
import { mirrorRequest } from './refreshToken'

const Axios = axios.create({
  baseURL:
    import.meta.env.MODE === 'production'
      ? 'https://lm_academy.com/api'
      : 'http://127.0.0.1:8000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('lm_access_token')
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
})

const REFRESH_ERROR_MESSAGE = 'Token has expired and can no longer be refreshed'

Axios.interceptors.response.use(
  function (response) {
    return response
  },
  async (error) => {
    const requestConfig = error.config

    const res = error.response
    const status = res.status
    const message = res.data.message

    console.log('error', error)
    console.log('message', message)

    if (status === 401) {
      if (message === 'Unauthorized') {
        localStorage.removeItem('lm_access_token')
        window.location.href = '/login'
      }

      if (message == 'token expired') {
        return mirrorRequest(requestConfig)
      } else {
        localStorage.removeItem('lm-access-token')
        window.location.href = '/login'
      }
    }

    if (status === 500 && message === REFRESH_ERROR_MESSAGE) {
      localStorage.removeItem('lm_access_token')
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)

export default Axios
