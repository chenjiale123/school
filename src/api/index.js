/**
 * axios初始化配置
 * --------------------------------------
 * 大部分接口以这个为基础
 */

import axios from "axios"

export function request1(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL:"https://openapi.mp.usr.cn/usrCloud",
    timeout:5000
  })


  
  instance.interceptors.request.use(


  config => {
    console.log(sessionStorage.getItem('token'))
    if (sessionStorage.getItem('token')) {
      config.headers['token'] = sessionStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },

  error => {
    // console.log(error);
    return Promise.reject();
  }
);
  // 发送真正的网络请求
  return instance(config)
}

export function request2(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL:"http://192.168.101.24:8080",
    timeout:5000
  })


  instance.interceptors.request.use(


    config => {
      console.log(sessionStorage.getItem('token'))
      if (sessionStorage.getItem('token')) {
        config.headers['token'] = sessionStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      return config
    },
  
    error => {
      // console.log(error);
      return Promise.reject();
    }
  );
  // 发送真正的网络请求
  return instance(config)
}


