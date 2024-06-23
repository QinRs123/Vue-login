import request from '@/utils/request'

// 登录接口
export const Login = data => {
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}

// 获取登录用户信息
export const GetUserinfo = () => {
  return request({
    url: '/getUserInfo',
    method: 'get',
  })
}

// 获取验证码
export const GetValidateCode = () => {
  return request({
    url: '/generateValidateCode',
    method: 'get',
  })
}

// 退出功能
export const Logout = () => {
  return request({
    url: '/logout',
    method: 'get',
  })
}
