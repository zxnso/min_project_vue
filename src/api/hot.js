import request from '@/utils/request'

//获取热词规则列表
export function getList(params) {
  return request({
    url: '/hotWordAdmin/pagesHotWordRule',
    method: 'get',
    params
  })
}

//获取热词人工列表
export function getList1(params) {
  return request({
    url: '/hotWordAdmin/pagesHotWordHuman',
    method: 'get',
    paramscc
  })
}

// 添加热词规则
export function setHotRule(params) {
  return request({
    url: '/hotWordAdmin/addHotWordRule',
    method: 'post',
    params
  })
}

// 添加热词
export function addHotWord(params) {
  return request({
    url: '/hotWordAdmin/addHotWordHuman',
    method: 'post',
    params
  })
}
