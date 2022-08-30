// 封装的axios
import axios from 'axios'

// 创建一个axios实例
const $axios = axios.create({
  baseURL: 'http://localhost:8080', // baseURL就是跨域地址的公共部分，设置代理后可用proxyTable中的'/地址'代替，也可用变量process.env.VUE_APP_BASE_API表示，或者就直接输入http地址
  timeout: 3000
})

// 创建的axios实例没有all方法，所以借用axios的all方法
$axios.all = (arr) => {
  return axios.all(arr)
}

// 配置拦截器

// 请求拦截器
$axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
$axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default $axios
