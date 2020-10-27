import {request1} from "./index";
import {request2} from "./index";

export function list(){
  return request1({
    url:"/?version=v9&appid=91464947&appsecret=a3D58GxD&city=杭州",
    method:"get",
  
  
  })
}

export function total(address){
  return request2({
    url:"/hm/stats/"+address,
    method:"get",
    header:{
        'Content-Type': 'multipart/form-data',
       

    },

  })
}

export function week(address){
  return request2({
    url:"/hm/usage/lastWeek/"+address,
    method:"get",
    header:{
        'Content-Type': 'multipart/form-data',
       

    },

  })
}

export function week1(){
  return request2({
    url:"/dwm/usage/lastWeek",
    method:"get",
    header:{
        'Content-Type': 'multipart/form-data',
       

    },

  })
}


export function kxj_st(){
  return request2({
    url:"/dwm/list",
    method:"get",
    header:{
        'Content-Type': 'multipart/form-data',
       

    },

  })
}