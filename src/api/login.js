import {request1} from "./index";

export function login(account,password){
  return request1({
    url:"/user/login",
    method:"post",
    header:{
      "Content-Type":'application/json'
    },
    data:{
        account:account,
        password:password
    }
  })
}