<template>
        <div style="height: 360px;width:420px;">

            <div >
                <div class="element1">
                    <div id="child1">
                        <div id="arrowContainer1">
                            <svg style="display: inline-block;height: 150%;overflow: visible" id="arrow1" t="1602220873765" class="icon" viewBox="0 300 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3295" height="120px" width="120px">
                                <path fill="#0287E9" id="realArrow1" d="M537.6 230.4L704 390.4c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L544 326.4v448c0 19.2-12.8 32-32 32s-32-12.8-32-32v-448L364.8 441.6c-12.8 6.4-32 6.4-44.8-6.4-12.8-12.8-12.8-32 0-44.8l160-160c6.4-6.4 32-32 57.6 0z"  p-id="3296"></path>
                                <path fill="#02EFD6" id="realArrow2" d="M537.6 230.4L704 390.4c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L544 326.4v448c0 19.2-12.8 32-32 32s-32-12.8-32-32v-448L364.8 441.6c-12.8 6.4-32 6.4-44.8-6.4-12.8-12.8-12.8-32 0-44.8l160-160c6.4-6.4 32-32 57.6 0z"  p-id="3296"></path>
                            </svg>
                           <!-- <div  style="display: inline-block;height: 150%;overflow: visible; height:120px; width:120px" id="arrow1"  class="icon" >
                             <img src="../assets/img/detail/arrow.png" alt="" id="realArrow1" style="width:135px;height:37px">
                               <img src="../assets/img/detail/arrow.png" alt="" id="realArrow2"  style="width:135px;height:37px">
                           </div> -->
                        </div>
                    </div>
                </div>
            </div>




        

        </div>
</template>


<script>
    //计算角度函数
    function getAngle(px, py, mx, my){
      //获得旋转中心和鼠标坐标连线，与y轴正半轴之间的夹角
      var x = Math.abs(px - mx);
      var y = Math.abs(py - my);
      var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      var cos = y / z;
      var radina = Math.acos(cos);//用反三角函数求弧度
      var angle = Math.floor(180 / (Math.PI / radina));//将弧度转换成角度

      if (mx > px && my > py) {//鼠标在第四象限
        angle = 180 - angle;
      }
      if (mx == px && my > py) {//鼠标在y轴负方向上
        angle = 180;
      }
      if (mx > px && my == py) {//鼠标在x轴正方向上
        angle = 90;
      }
      if (mx < px && my > py) {//鼠标在第三象限
        angle = 180 + angle;
      }
      if (mx < px && my == py) {//鼠标在x轴负方向
        angle = 270;
      }
      if (mx < px && my < py) {//鼠标在第二象限
        angle = 360 - angle;
      }
      return angle;
    }

  export default {

    name: 'drawClock',

    data(){
      return{
        arrow1Deg:0,
        arrow2Deg:0,
        startTime:'',       //开始时间
        endTime:''          //结束时间
      }
    },

    mounted(){
  //第一个箭头
      var midDiv1 = document.getElementById("arrowContainer1")
      var clientX1,clientY1

      //格式化坐标轴
      let x = midDiv1.parentElement.offsetLeft+midDiv1.parentElement.offsetWidth/2
      let y = midDiv1.parentElement.offsetTop+midDiv1.parentElement.offsetHeight/2

      //旋转中心
      var realArrow1 =document.getElementById("realArrow1")
      realArrow1.style.transformOrigin = "50% 78%"

      //触发事件
      realArrow1.onmousedown = function (event) {
        //拖动旋转
        console.log(event)

   
              document.onmousemove = function (e) {
          clientX1 = e.clientX
          clientY1 = e.clientY
          this.arrow1Deg = getAngle(x,y,clientX1,clientY1)
          console.log(this.arrow1Deg)
          that.degToStartTime(this.arrow1Deg)
          // if(this.arrow1Deg<this.arrow2Deg){
          realArrow1.style.transform ="rotate("+this.arrow1Deg+"deg)"
           
          // }
        }
        
      
        //点击释放
        document.onclick = function (ev) {
          document.onmousemove = null
        }
      }

  //第二个箭头
      var clientX2,clientY2

      //触发事件
      var realArrow2 =document.getElementById("realArrow2")
      realArrow2.style.transformOrigin = "50% 78%"
      let that = this
      realArrow2.onmousedown = function (event) {
        //拖动旋转
        console.log("22222")

        document.onmousemove = function (e) {
          clientX2 = e.clientX
          clientY2 = e.clientY
          this.arrow2Deg = getAngle(x,y,clientX2,clientY2)
          that.degToEndTime(this.arrow2Deg)
          // if( this.arrow2Deg< 270){
          realArrow2.style.transform ="rotate("+this.arrow2Deg+"deg)"
             
          // }

                console.log(this.arrow2Deg)
        }
        //点击释放
        document.onclick = function (ev) {
          document.onmousemove = null
        }
      }


    },

    methods:{

      //角度换算时间
      degToStartTime(deg){
        let percent = deg/360
        let minutes = percent*12*60
        let h       =  parseInt(JSON.stringify(minutes/60));
        let m       = Math.round(minutes%60 * 100) / 100

        // console.log(JSON.stringify(minutes/60))
        this.startTime = (h+12)+":"+m

        console.log(deg)

      },

      //角度换算时间
      degToEndTime(deg){
        let percent = deg/360
        let minutes = percent*12*60
        let h       =  parseInt(JSON.stringify(minutes/60));
        let m       = Math.round(minutes%60 * 100) / 100

        // console.log(JSON.stringify(minutes/60))
        this.endTime = (h+12)+":"+m

      },

      //时间换算角度
      timeToDeg1() {
        console.log(this.startTime)
        let str  = this.startTime.split(":")
        let h    = str[0]
        let m    = str[1]
        this.arrow1Deg = ((h-12)*60+m)/24/60*180
        document.getElementById("realArrow1").style.transform ="rotate("+this.arrow1Deg+"deg)"
        console.log(this.arrow1Deg)

      },

      //时间换算角度
      timeToDeg2() {
        console.log(22222)
        let str  = this.endTime.split(":")
        let h    = str[0]
        let m    = str[1]
        this.arrow2Deg = ((h-12)*60+m)/24/60*180
        document.getElementById("realArrow2").style.transform ="rotate("+this.arrow2Deg+"deg)"
        console.log(this.arrow2Deg)

      },
    },


  }

</script>
<style >
    .element1{
        width: 420px;
        height: 360px;
        background: url(../assets/img/detail/bg.png);
        border-radius: 50%;
        background-size: 100% 100%;
        margin-top: 30px;
  
    }
    #child1{
        width: 180px;
        height: 180px;
        border-radius: 50%;

        position: relative;
        top: 90px;
        left: 140px;
           transform:rotate(-135deg);
            -webkit-transform:rotate(-135deg);  /*兼容-webkit-引擎浏览器*/
            -moz-transform:rotate(-135deg); 
    }

    #arrowContainer1{
        height: 120px;
        width: 120px;
        position: absolute;
        top: 0px;
        margin-left: 30px;
    }

    #arrowContainer2{
        height: 120px;
        width: 120px;
        position: absolute;
        top: 0px;
        margin-left: 30px;
        z-index: 1;
    }

    .timeFont{
        color: grey;
        font-family: '宋体', 'Microsoft Yahei', '微软雅黑', Tahoma, Helvetica, Arial, sans-serif;
        font-size: 15px;
        padding: 7px;
    }
</style>