import axios from 'axios'

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
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default Axios
