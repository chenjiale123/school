import {request1} from "./index";
import {request2} from "./index";



export function month(address){
  return request2({
    url:"/school/usage/month/"+address,
    method:"get",
    header:{
        'Content-Type': 'multipart/form-data',
       

    },

  })
}

export function week(month,address){
    return request2({
      url:"/school/usage/week/"+month+'/'+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }


  export function day(month,address){
    return request2({
      url:"/school/usage/day/"+month+'/'+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }

  export function total(address){
    return request2({
      url:"/school/stats/"+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }


  export function list(address){
    return request2({
      url:"/school/devList/"+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }

  export function detail(address){
    return request2({
      url:"/school/usage/"+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }