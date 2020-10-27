<template>
  <div class="weather">
    <div class="top">
      <h2>天气</h2>
  
        <span>WEATHER</span>
      
    </div>

    <div class="center" :style=" imgbg">
      <div class="middle">
        <div class="left">
          <h1>{{vdata}}°</h1>
          <h3>杭州市滨江区 {{month}}/{{day}}</h3>
        </div>
        <img :src="wen" alt />
      </div>
      <div class="wmap">
          <colorfulArea1/>

      </div>

       </div>
      <div class="foot">
        <div class="tab">
          <img src="../../assets/img/home/wind.png" alt />

          <div class="right">
            <div class="til">
              <span>6</span>

              <span>MPH</span>
            </div>

            <p>偏南风</p>
          </div>
        </div>

        <div class="tab1">
          <div class="left">
            <span>UV</span>
          </div>

          <div class="right">
            <div class="til">
              <span>6</span>

              <span>%</span>
            </div>

            <p>紫外线强度</p>
          </div>
        </div>
      </div>
   
  </div>
</template>

<script>
import colorfulArea1 from '../colorfulArea1' // 多彩轮播面积

export default {
    components:{
        colorfulArea1
    },
  data() {
    return {

      month:new Date().getMonth()+1,
      day:new Date().getDate(),
      wdata:'',
      vdata:'',
      temList:[],
      wen:'',
      imgbg:''
      
    }
  },
  mounted(){
     this.getWether()
  },
  methods:{
    getWether(){
axios.get('https://www.tianqiapi.com/api/?version=v9&appid=91464947&appsecret=a3D58GxD&city=杭州')
.then(res=>{


  this.arr=res.data.data[0]
 console.log(res.data.data[0])
  this.wdata=res.data.data[0].wea_day
  this.vdata=res.data.data[0].hours[0].tem
   console.log(res.data.data[0].wea_day)
  if(this.wdata=='晴'){
   this.wen=require('../../assets/img/detail/sun.gif')
    this.imgbg="background:url("+require("../../assets/img/detail/weate.png")+');  background-size: 100% 100%;'
   
  }else if(this.wdata=='小雨'||this.wdata=='中雨'||this.wdata=='大雨'||this.wdata=='暴雨'){
     this.wen=require('../../assets/img/detail/rain.gif')
         this.imgbg="background:url("+require("../../assets/img/detail/weate1.png")+');  background-size: 100% 100%;'
  }else if(this.wdata=='多云'){
   this.wen=require('../../assets/img/detail/duoyun.gif')
       this.imgbg="background:url("+require("../../assets/img/detail/weate.png")+');  background-size: 100% 100%;'
  }else if(this.wdata=='雷阵雨'){
   this.wen=require('../../assets/img/detail/leizhenyu.gif')
       this.imgbg="background:url("+require("../../assets/img/detail/weate1.png")+');  background-size: 100% 100%;'
  }else if(this.wdata=='阴'){
   this.wen=require('../../assets/img/detail/duoyun.gif')
   

    this.imgbg="background:url("+require("../../assets/img/detail/weate.png")+');  background-size: 100% 100%;'
  }
})
},
  }
};
</script>

<style  scoped>
.weather {   
  width: 100%;
  height: 47%;
  background: #f7f8fd;
  border-radius: 5px;
  overflow: hidden;

}
.top{
    padding: 22px 39px;
}
.top > span {
  font-size: 27px;
  font-family: Montserrat;
  font-weight: bold;
  color: #595f6f;
}
.center {
  width: 100%;
  height: 65%;

  background-size: 100% 100%;
}
.middle {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 31px 35px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.middle > .left{
    margin-top: 31px;
}
.middle > .left > h1 {
  font-size: 77px;
  font-family: Arial;
  font-weight: 400;
  color: #ffffff;
}
.middle > .left > h3 {
  font-size: 15px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  margin-top: 24px;
}
.middle>img{
    display: inline-block;
    width: 86px;
    height: 87px;
}


.foot{
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-around;
    padding: 0px 0;
    box-sizing: border-box;
}
.foot>.tab{
    display: flex;
    justify-content: space-between;
}
.foot>.tab>img{
    display: inline-block;
    width: 32px;
    height: 27px;
    margin-top: 14px;
}
.foot>.tab>.right{
     margin-top: 8px;
    margin-left: 10px;
}
.foot>.tab>.right>.til>span:nth-child(1){

font-size: 26px;
font-family: Arial;
font-weight: 400;
color: #E2B03A;
}
.foot>.tab>.right>.til>span:nth-child(2){

font-size: 15px;
font-family: Arial;
font-weight: 400;
color: #E2B03A;
}
.foot>.tab>.right>p{
    
font-size: 15px;
font-family: Montserrat;
font-weight: 500;
color: #909090;
}
.foot>.tab1{
      display: flex;
    justify-content: space-between;
}
.foot>.tab1>.left{
    width: 38px;
    height: 38px;
    background: url(../../assets/img/home/circle.png);
    background-size: 100% 100%;
    text-align: center;
    line-height: 38px;
       margin-top: 14px;
}
.foot>.tab1>.left>span{
    
font-size: 16px;
font-family: Montserrat;
font-weight: bold;
color: #E2B03A;

}

.foot>.tab1>.right>.til>span:nth-child(1){

font-size: 26px;
font-family: Arial;
font-weight: 400;
color: #E2B03A;
}
.foot>.tab1>.right>.til>span:nth-child(2){

font-size: 15px;
font-family: Arial;
font-weight: 400;
color: #E2B03A;
}
.foot>.tab1>.right>p{
    
font-size: 15px;
font-family: Montserrat;
font-weight: 500;
color: #909090;
}
.foot>.tab1>.right{
     margin-top: 8px;
    margin-left: 10px;
}
</style>