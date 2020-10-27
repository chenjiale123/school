<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">安全防控天数</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="date">
             <span>
                 第
             </span>
             <h1>{{aq}}</h1>
             <span>天</span>
          </div>
          <p>{{nowTime}}</p>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  name: "alldate",
   data() {
    return {
    nowTime:'',
    aq:''
    }
  },
  created(){
   this.nowTimes()
   let date=new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
   console.log(date.toString())
this.aq= this.DateDiff("2020-8-20",date.toString())

  },
  methods:{
    //显示当前时间（年月日时分秒）
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss ;
    },
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes,1000);
      this.clear()
    },
    clear(){
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
      DateDiff(strDateStart, strDateEnd){
        var strSeparator = "-"; //日期分隔符
   var oDate1;
   var oDate2;
   var iDays;
   oDate1= strDateStart.split(strSeparator);
   oDate2= strDateEnd.split(strSeparator);
   var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
   var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
   iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数
   return iDays ;
	   
      },
  }
}
</script>
<style scoped>
.wrap-container{
  
  
}
.date{
  width: 180px;
  height: auto;
  overflow: hidden;
  vertical-align: middle;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 15%;
}
.date>span{
  font-size: 16px;
  color: #fff;
    vertical-align: middle;
}
.date>h1{
  color: #fff;
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
    vertical-align: middle;
    font-size: 40px;
    width: 70px;
    height: 48px;
    overflow: hidden;
  border: 2px solid rgba(92,255,255,0.1);
  background: rgba(10,106,255,0.1) url(../../assets/img/wg.png) repeat 50% 50% !important;
  background-blend-mode: screen;
  overflow: visible;
  text-align: center;
  vertical-align: middle;
padding: 10px 0;
box-sizing: border-box;

}
p{
  font-size: 16px;
  margin-top: 20px;
  color: #fff;
  font-weight: normal;
  text-align: center;
}
</style>>



