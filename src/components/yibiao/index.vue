<template>
  <div class="meter">
    <div class="left">
      <!-- <div id="charts"></div> -->
<!-- <Zhuce/> -->


    <div style="height: 360px;width:420px;">

            <div >
                <div class="element1">
                    <div id="child1">
                        <div id="arrowContainer1">
                            <svg style="display: inline-block;height: 150%;overflow: visible" id="arrow1" t="1602220873765"  viewBox="0 300 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3295" height="120px" width="120px">
                                <path fill="#0287E9" id="realArrow1" d="M537.6 230.4L704 390.4c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L544 326.4v448c0 19.2-12.8 32-32 32s-32-12.8-32-32v-448L364.8 441.6c-12.8 6.4-32 6.4-44.8-6.4-12.8-12.8-12.8-32 0-44.8l160-160c6.4-6.4 32-32 57.6 0z"  p-id="3296"></path>
                                <path fill="#02EFD6" id="realArrow2" d="M537.6 230.4L704 390.4c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L544 326.4v448c0 19.2-12.8 32-32 32s-32-12.8-32-32v-448L364.8 441.6c-12.8 6.4-32 6.4-44.8-6.4-12.8-12.8-12.8-32 0-44.8l160-160c6.4-6.4 32-32 57.6 0z"  p-id="3296"></path>
                            </svg>
                   
                        </div>
                    </div>
                </div>
            </div>




        

        </div>
      <div class="txt">
        <h1>800</h1>
        <h2>剩余消毒时间(秒)</h2>
      </div>
    </div>
    <div class="formdata">
      <div class="title">
        <h2>远程控制</h2>
        <p>remote control</p>
      </div>

      <div class="start">
        <div class="item">
          <el-input value="ID" disabled class="input"></el-input>
          <el-select v-model="value" placeholder="请选择设备ID" class="input" >
            <el-option
              v-for="(item, index) in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click.native ="handleSelect(index)"
            >
            </el-option>
          </el-select>
        </div>

        <div class="item">
          <el-input value="名称" disabled class="input"></el-input>
          <el-input disabled v-model="classroom" class="input"></el-input>
          <div class="state">
            <img src="../../assets/img/detail/state.png" alt="" />
          </div>
        </div>

        <div class="item">
          <el-input value="状态" disabled class="input"></el-input>
          <el-input disabled v-model="ways" class="input"></el-input>
        </div>

            <div class="item">
          <el-input value="消毒体积" disabled class="input"></el-input>
          <el-input  v-model="ml" class="input" @input="weath"></el-input>
          <span>({{seco}}s)</span>
        </div>
        <div class="item1">

            <el-button class="button" type="primary"> <span class="xiaodu">开始消毒</span> 
                  <img src="../../assets/img/detail/bo.png" alt="" class="icon">
            </el-button>

        </div>
      </div>
    </div>
  </div>
</template>
<script>

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
import Zhuce from "../../views/Register";
export default {
  components:{
Zhuce
  },
  data() {
    return {
        arrow1Deg:0,
        arrow2Deg:0,
        startTime:'',       //开始时间
        endTime:'' ,         //结束时间
      seco:0,
        value:'',
        ml:'',
      classroom: "",
      ways: "",
      option: "",
      options: [
        {
          value: "4165666",
          label: "4854641641",
        },
        {
          value: "4165636",
          label: "4854641641",
        },
      ],
      Dataname:[{
        classroom:'4545',
        ways:'喷晒'
      },{
        classroom:'4546',
        ways:'喷晒'
      }]
    };
  },
  mounted() {
    // this.getChart();
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
  methods: {
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
    weath(){
      this.seco=this.ml*60
    },
    handleSelect(value){
           console.log(value)
           this.classroom=this.Dataname[value].classroom
              this.ways=this.Dataname[value].ways
    },
    getChart() {
var that=this
 var gauge = document.getElementById('charts');
    var myChart = echarts.init(gauge);
    var { width, height } = getComputedStyle(gauge);
    // 计算出中心点位置
    var x = parseInt(width.slice(0, -2), 0) / 2;
    var y = parseInt(height.slice(0, -2), 0) / 2;
    var minAngle = 0;
    var maxAngle = 180;
    var maxValue = 100;
    var dataRatio = maxValue / maxAngle;
      var option = {
           animation: false,
        series: [
          {
            name: "旋转角度",
            min: 0,
            max: 180,
            splitNumber: 18,
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 12,
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                      {
                        offset: 0.5,
                        color: "RGBA(2, 177, 242, 1)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                    ]),
                  ],
                ],
              },
            },
            splitLine: {
              length: -10,
            },
            axisLabel: {
              // 坐标轴小标记
              distance: 30,
              textStyle: {
                // 属性lineStyle控制线条样式
                color: "RGBA(2, 245, 220, 1)",
                fontSize: 12, //改变仪表盘内刻度数字的大小
                shadowColor: "RGBA(2, 245, 220, 1)", //默认透明
              },
            },
            axisTick: {
              //   splitNumber: 5
            },
            pointer: {
              width: 5,
            },
            title: {
              offsetCenter: ["-40%", "80%"],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 20,
              },
            },
            detail: {
              show: false,
            },

            data: [
              {
                value: 45,
                name: "",
              },
            ],
          },
          {
            name: "角度",
            type: "gauge",
            radius: "50%",
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                      {
                        offset: 0.5,
                        color: "RGBA(2, 177, 242, 1)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                    ]),
                  ],
                ],
              },
            },
            splitLine: {
              length: 10,
              color: "#203add",
            },
            axisLabel: {
              // 坐标轴小标记
              show: false,
              textStyle: {
                // 属性lineStyle控制线条样式
                color: "#000",
                fontSize: 15, //改变仪表盘内刻度数字的大小
                shadowColor: "#000", //默认透明
              },
            },
            axisTick: {
              splitNumber: 5,
              color: "#0d1758",
            },
            pointer: {
              width: 5,
            },
            title: {
              offsetCenter: ["-30%", "80%"],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 20,
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 40,
                name: "",
              },
            ],
          },
        ],
      };
      myChart.setOption(option, true);

         myChart._zr.on('mousedown', function(event) {
        //  that.changeValue(event);
        myChart._zr.on('mousemove', that.changeValue(event));
    });
    myChart._zr.on('mouseup', function(event) {
        myChart._zr.off('mousemove', that.changeValue(event));
    });
    },
   changeValue(event) {
        var gauge = document.getElementById('charts');
    var myChart = echarts.init(gauge);
    var { width, height } = getComputedStyle(gauge);
    // 计算出中心点位置
    var x = parseInt(width.slice(0, -2), 0) / 2;
    var y = parseInt(height.slice(0, -2), 0) / 2;
    var minAngle = 0;
    var maxAngle = 180;
    var maxValue = 180;
    var dataRatio = maxValue / maxAngle;

          var option = {
           animation: false,
        series: [
          {
            name: "旋转角度",
            min: 0,
            max: 180,
            splitNumber: 18,
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 12,
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                      {
                        offset: 0.5,
                        color: "RGBA(2, 177, 242, 1)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                    ]),
                  ],
                ],
              },
            },
            splitLine: {
              length: -10,
            },
            axisLabel: {
              // 坐标轴小标记
              distance: 30,
              textStyle: {
                // 属性lineStyle控制线条样式
                color: "RGBA(2, 245, 220, 1)",
                fontSize: 12, //改变仪表盘内刻度数字的大小
                shadowColor: "RGBA(2, 245, 220, 1)", //默认透明
              },
            },
            axisTick: {
              //   splitNumber: 5
            },
            pointer: {
              width: 5,
            },
            title: {
              offsetCenter: ["-40%", "80%"],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 20,
              },
            },
            detail: {
              show: false,
            },

            data: [
              {
                value: 45,
                name: "",
              },
            ],
          },
          {
            name: "角度",
            type: "gauge",
            radius: "50%",
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                      {
                        offset: 0.5,
                        color: "RGBA(2, 177, 242, 1)",
                      },
                      {
                        offset: 1,
                        color: "RGBA(2, 233, 196, 1)",
                      },
                    ]),
                  ],
                ],
              },
            },
            splitLine: {
              length: 10,
              color: "#203add",
            },
            axisLabel: {
              // 坐标轴小标记
              show: false,
              textStyle: {
                // 属性lineStyle控制线条样式
                color: "#000",
                fontSize: 15, //改变仪表盘内刻度数字的大小
                shadowColor: "#000", //默认透明
              },
            },
            axisTick: {
              splitNumber: 5,
              color: "#0d1758",
            },
            pointer: {
              width: 5,
            },
            title: {
              offsetCenter: ["-30%", "80%"],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 20,
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 40,
                name: "",
              },
            ],
          },
        ],
      };
   
        var x2 = event.offsetX;
        var y2 = event.offsetY;
        // 当前点击位置的角度.
        var currentAngle = Math.atan2(y - y2, x - x2) * 180 / Math.PI;
        // 边界处理
        if (currentAngle < minAngle || currentAngle > maxAngle) {
            let _angle = Math.abs(currentAngle);
            if (_angle > 90) {
                currentAngle = maxAngle;
            } else {
                currentAngle = minAngle;
            }
        }
        // 转换回数据值, 这里就是实际的值, 默认保留2位小数.
        let value = (currentAngle * dataRatio).toFixed(2);
        option.series[0].data[0].value = value;
        myChart.setOption(option);
    }
    // 这里使用 zrender 的事件监听可以监听到画布的所有鼠标事件.    
 
  },
};
</script>
<style  scoped>
/* @import '../../assets/styles/moude.scss'; */

 .element1{
        width: 420px;
        height: 360px;
        background: url(../../assets/img/detail/bg.png);
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
            -webkit-transform:rotate(-135deg);  
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
.item >>>.is-disabled .el-input__inner  {
    background: transparent;
      border: 1px solid #fff;
      color:#fff;
}
.input>>>.el-input__inner{
   width: 95px;
      height: 33px;
      border-radius: 10px;
 
      margin-right: 10px;    

      background: transparent;
      border: 1px solid #fff;
      color:#fff;
  }
  .input{
          display: inline-block;
             width: 95px;
      height: 33px;
  }
.meter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 60%;
  height: 100%;
  position: relative;
}
#charts {
  width: 100%;
  height: 100%;
}
.formdata {
  width: 40%;
  height: 100%;
}

.title > h2 {
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  margin-top: 36px;
}
.title > p {
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 300;
  color: #ffffff;
  margin-top: 13px;
}
.txt {
  position: absolute;
  left: 43%;
  bottom: 20%;
  margin-left: -60px;
  text-align: center;
}
.txt > h1 {
  font-size: 39px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #02f5dc;
}
.txt > h2 {
  font-size: 23px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  margin-top: 10px;
}
.start{
    width: 100%;
    height: auto;
    overflow: hidden;
 
}
.item{
    width: 100%;
    height: 33px;
    margin-top: 13px;
    /* display: flex; */
    /* justify-content: flex-start; */
    /* align-items: center; */
    justify-content: flex-start!important;
}
.item1{
    width: 100%;
    height: 65px;
    margin-top: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.state{
    display: inline-block;
    width: 46px;
height: 33px;
border: 1px solid #FFFFFF;
border-radius: 10px;
text-align: center;
line-height: 33px;
   vertical-align: middle;
}
.state>img{
width: 28px;
height: 22px;
display: inline-block;
   vertical-align: middle;
}
.item>span{
    
font-size: 19px;
font-family: Source Han Sans CN;
font-weight: 300;
color: #FFFFFF;
}
.el-button--primary {
    width: 181px;
    height: 60px;
    background:RGBA(8, 211, 190, 1);
    display: block;
    text-align: center;
    border: none;
    overflow: hidden;
}
.item1>.el-button{
    width: 181px;
    height: 57px;
    background:RGBA(8, 211, 190, 1);
    display: block;
    text-align: center;
    border: none;
    overflow: hidden;

}
.xiaodu{
    
font-size: 27px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #FFFFFF;
}
.icon{
    display: inline-block;
    width: 26px;
    height: 26px;
}
</style>