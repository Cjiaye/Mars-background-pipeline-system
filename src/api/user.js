import request from '@/utils/request'
// 登录接口
const login = (data) => {
  return request({
    url: `/users/login?username=${data.username}&password=${data.password}&token=${data.token}`,
    method: 'POST'
  })
}
export default{
  login
}