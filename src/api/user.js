import request from '@/utils/request'
// 登录接口
export const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST'
  })
}