import request from '@/utils/request'

//获取热词人工列表
export function getList(data) {
  return request({
    url: '/hotWordAdmin/pagesHotWordHuman',
    method: 'post',
    data
  })
}

//获取热词规则列表
export function getRule(data) {
  return request({
    url: '/hotWordAdmin/pagesHotWordRule',
    method: 'post',
    data
  })
}

// 添加热词规则
export function setHotRule(data) {
  return request({
    url: '/hotWordAdmin/addHotWordRule',
    method: 'post',
    data
  })
}

// 修改热词规则
export function updateHotRule(data) {
  return request({
    url: '/hotWordAdmin/updateHotWordRule',
    method: 'post',
    data
  })
}

// 添加热词
export function addHotWord(data) {
  return request({
    url: '/hotWordAdmin/addHotWordHuman',
    method: 'post',
    data
  })
}

// 搜索
export function search(data) {
  return request({
    url: '/hotWordApp/selectHotWord',
    method: 'post',
    data
  })
}

// 展示热词
export function getHotList(data) {
  return request({
    url: '/hotWordApp/getHotWord',
    method: 'post',
    data
  })
}
