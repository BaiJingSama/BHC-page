import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建 Axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // 可从环境变量读取
  timeout: 10000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 可以在这里加 token
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 可统一处理返回数据
    return response.data
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

export default service