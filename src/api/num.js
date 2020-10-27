import {request1} from "./index";
import {request2} from "./index";



export function total(address){
    return request2({
      url:"/hm/stats/"+address,
      method:"get",
      header:{
          'Content-Type': 'multipart/form-data',
         
  
      },
  
    })
  }