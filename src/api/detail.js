import {request1} from "./index";
import {request2} from "./index";



export function month(address){
  return request2({
    url:"/hm/usage/month/"+address,
    method:"get",
    header:{
        'Content-Type': 'multipart/form-data',
       

    },

  })
}


export function month3(){
    return request2({
      url:"/dwm/usage/month",
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }

  export function week(month,address){
    return request2({
      url:"/hm/usage/week/"+month+'/'+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }

  export function week3(month){
    return request2({
      url:"/dwm/usage/week/"+month,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }

  export function day(month,address){
    return request2({
      url:"/hm/usage/day/"+month+'/'+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }

  export function day3(month){
    return request2({
      url:"/dwm/usage/day/"+month,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }