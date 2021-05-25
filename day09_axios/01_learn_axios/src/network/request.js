import axios from "axios";


export function request(config) {
  //  1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2. axios 的请求拦截
  instance.interceptors.request.use((config) => {
    console.log('111:', config);
    // 1. 比如 config 中的一些信息不符合服务器的要求

    // 2. 比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3. 某些网络请求（比如登录（token））， 必须携带一些特殊的信息
    return config
  }, (error) => {
    console.log('error', error);
  })

  // axios 的响应拦截
  instance.interceptors.response.use(res => {
    console.log('interceptors response:', res);
    return res.data;
  }, error => {
    console.log('interceptors response error:', error);
  })

  /*
  * instance()  会直接返回  Promise
  * */
  // 3. 发送真正的网络请求
  return instance(config)
}
