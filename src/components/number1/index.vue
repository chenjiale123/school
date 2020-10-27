<template>
  <div class="num">
    <div id="chart"></div>
    <div class="list">
      <div class="left" @click="kt">
        <div class="one">
          <span></span> <span>泡沫免洗手机器人-卡通版</span>
        </div>
      </div>
      <div class="right" @click="gg">
        <div class="one">
          <span></span> <span>泡沫免洗手机器人-公共版</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { total } from "../../api/num";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      option: "",
      standSize: 100,
      standSize1: 100,
      sxj1:'',
      sxj2:'',
      hdmExceptionList:'',
      hdmExceptionList1:''
    };
  },
  mounted() {
    this.getChart();
    this.initWebSocket()
  },
  methods: {
    getChart() {
      var that = this;

      total("杭州市滨江区").then((res) => {
        console.log(res.data+'4894948498');
         var num=0
         var num1=0
        for(let i in res.data.data){
          if(res.data.data[i].type=="CARTOON"){
            num+=res.data.data[i].amount
          }else{
            num1+=res.data.data[i].amount

          }
        }
      
        console.log(num,num1)
          
          that.num=num
          that.num1=num1

        let myChart5 = echarts.init(document.getElementById("chart"));
        this.option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            confine: true,
            extraCssText: {
              zIndex: 999999,
            },
          },
          legend: {
            data: [],
          },
          series: [
            {
              hoverAnimation: false,
              color: [ "RGBA(9, 112, 202, 1)","RGBA(247, 133, 0, 1)"],
              name: "",
              type: "pie",
              radius: ["90%", "100%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "outside",
              },
              emphasis: {
                label: {
                  show: false,
                  fontSize: "12",
                  fontWeight: "500",
                },
              },
              labelLine: {
                //   normal: {
                show: false,
                smooth: 0.1,
                length: 10,
                length2: 50,
                lineStyle: {
                  color: "rgba(248, 35, 96, 1)",
                },
                //   }
              },
              data: [
                { value: num1, name: "泡沫免洗手机器人-公共版" },
                { value: num, name: "泡沫免洗手机器人-卡通版" },
              ],
            },
            {
              color: [
                "rgba(248, 35, 96, 1)",
                "rgba(230, 0, 66, 1)",
                "RGBA(255, 255, 255, 1)",
              ],
              name: "",
              type: "pie",
              radius: ["65%", "85%"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: "outside",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                //   normal: {
                show: true,
                length: 16,
                length2: 16,
                lineStyle: {
                  color: "rgba(248, 35, 96, 1)",
                },
                //   }
              },
              data: [
                { value: 0, name: "异常使用" },
                { value: that.hdmExceptionList, name: "机器故障" },
                { value: num-that.hdmExceptionList, name: "正常使用" },
              ],
            },
            {
              color: ["RGBA(255, 255, 255, 1)"],
              name: "",
              type: "pie",
              radius: ["50%", "50%"],
              avoidLabelOverlap: false,
              label: {
                //  饼图图形上的文本标签
                normal: {
                  // normal 是图形在默认状态下的样式
                  show: true,
                  position: "center",
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: "bold",
                  formatter: "正常工作数量 \n\r{c}", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                },
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [{ value: num-that.hdmExceptionList, name: "正常工作数量" }],
            },
          ],
        };
        myChart5.setOption(this.option, true);
      });
    },
    kt() {
      var that=this
      console.log(that.num)
      let myChart5 = echarts.init(document.getElementById("chart"));
      this.option.series[1].data = [
        { value: 5, name: "异常使用" },
        { value: that.hdmExceptionList1, name: "机器故障" },
        { value: that.num-that.hdmExceptionList1, name: "正常使用" },
      ];
      this.option.series[2].data =    [{ value: that.num-that.hdmExceptionList1, name: "正常使用" }],
      myChart5.setOption(this.option, true);
    },
    gg() {
         var that=this
               console.log(that.num1)
      let myChart5 = echarts.init(document.getElementById("chart"));
      this.option.series[1].data = [
          { value: 7, name: "异常使用" },
        { value: that.hdmExceptionList, name: "机器故障" },
        { value: that.num1-that.hdmExceptionList, name: "正常使用" },
      ];
      this.option.series[2].data =   [{ value: that.num1-that.hdmExceptionList, name: "正常使用" }],
      myChart5.setOption(this.option, true);
    },
 
 initWebSocket() {
      this.connection();
      let that = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      this.timer = setInterval(() => {
        try {
          that.stompClient.send(
            "/app/show",
            JSON.stringify({ sender: "123", chatType: "JOIN" })
          );
        } catch (err) {
          console.log("断线了: " + err);
          that.connection();
        }
      }, 5000);
    },

    connection() {
      var that = this;
      // 建立连接对象
      let socket = new SockJS("http://192.168.101.24:8080/stomp");
      // 获取STOMP子协议的客户端对象
      this.stompClient = Stomp.over(socket);
      // 定义客户端的认证信息,按需求配置
      let headers = {
        Authorization: "",
      };
      // 向服务器发起websocket连接
      this.stompClient.connect(
        headers,
        () => {
          this.stompClient.subscribe(
            "/topic/show",
            (msg) => {
              // 订阅服务端提供的某个topic
              console.log("广播成功");
              // console.log(JSON.parse(msg.body));
              that.sxj1 = JSON.parse(msg.body).usageInfos[0].count;
              that.sxj2 = JSON.parse(msg.body).usageInfos[1].count;
                      that.hdmExceptionList=JSON.parse(msg.body).errorMap.JYHP01.length

                    that.hdmExceptionList1=JSON.parse(msg.body).errorMap.CARTOON.length
               that.getChart()
            },
            headers
          );
          this.stompClient.send(
            "/app/show",
            headers,
            JSON.stringify({ sender: "123", chatType: "JOIN" })
          ); //用户加入接口
        },
        (err) => {
          // 连接发生错误时的处理函数
          console.log("失败");
          console.log(err);
        }
      );
    },

    //连接 后台
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
    },
 },
};
</script>
<style scoped>
.num {
  width: 100%;
  height: 80%;
  position: relative;
}
#chart {
  width: 100%;
  height: 80%;
  margin-top: 39px;
  /* float: left; */
  position: absolute;
  left: -150px;
}
#chart > div {
  width: 70%;
  height: 70%;
}
.list {
  position: absolute;
  width: 200px;
  height: auto;

  top: 190px;
  right: 50px;
  overflow: hidden;
}
.list > .left,
.list > .right {
  width: 100%;
  height: auto;

  overflow: hidden;
}
.list > .left > .one > span:nth-child(1) {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: rgba(248, 134, 0, 1);
  border-radius: 50%;
}
.list > .left > .one > span:nth-child(2) {
  font-size: 11px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}

.list > .left > .two {
  margin-top: 9px;
}
.list > .left > .one {
  margin-top: 9px;
}
.list > .right > .two {
  margin-top: 9px;
}
.list > .right > .one {
  margin-top: 9px;
}
.list > .left > .two > span:nth-child(1) {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: rgba(248, 35, 96, 1);
  border-radius: 50%;
}
.list > .left > .two > span:nth-child(2) {
  font-size: 11px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}

.list > .right > .one > span:nth-child(1) {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #0060ff ;
 
  border-radius: 50%;
}
.list > .right > .one > span:nth-child(2) {
  font-size: 11px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}

.list > .right > .two {
  margin-top: 9px;
}
.list > .right > .two > span:nth-child(1) {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: rgba(230, 0, 66, 1);
  border-radius: 50%;
}
.list > .right > .two > span:nth-child(2) {
  font-size: 11px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}
</style>