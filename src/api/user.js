import request from '@/utils/request'

export function login(data) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      token: 'admin-token'
    })
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
