import store from '../store'
import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) config.headers.Authorization = 'Bearer'+token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    // console.log(response.data.data.token)
   const authorization=response.data.data.token
   if(authorization){
     store.commit('user/SET_TOKEN',authorization)
   }
    if(response.data.code===200){
      return response.data.data
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
export default request
