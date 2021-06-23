import {request} from "../../network/request";


export function getInfo(data) {
  return request({
    url: '/home/multidata'
  })
}

export function getInfo2(data) {
  return request({
    url: '/home/data'
  })
}
