import axios from "axios";


export function request(config) {

//  1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

//  发送真正的网络请求
  instance(config.baseConfig)
    .then(res => {
      // console.log(res);
      baseConfig.success(res)
    })
    .catch(err => {
      // console.log(err);
      baseConfig.failure(err)
    })

}
