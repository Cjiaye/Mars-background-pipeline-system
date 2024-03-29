import request from '@/utils/request'
// 登录接口
const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}
const getMenu = (data) => {
  return request({
    url: '/menu/list',
    method: 'POST',
    data
  })
}
export default {
  login,
  getMenu
}
