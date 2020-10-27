<template>
  <div class="ring">
    <div class="item">
      <div id="chartData1"></div>
    </div>
    <div class="item">
      <div id="chartData2"></div>
    </div>
    <div class="item">
      <div id="chartData3"></div>
    </div>
  </div>
</template>
<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      option: "",
      hdmExceptionList:0,
      hdmExceptionList1:0,
      timer:''
    };
  },
  mounted() {

     this.initWebSocket()

  },
  methods: {
     initWebSocket() {
      this.connection();
      let that = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      this.timer = setInterval(() => {
        try {
          that.stompClient.send(
            "/app/show",
            JSON.stringify({ sender: "123" })
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
         
                      that.hdmExceptionList=JSON.parse(msg.body).errorMap.JYHP01.length

                    that.hdmExceptionList1=JSON.parse(msg.body).errorMap.CARTOON.length

                    var na=that.hdmExceptionList+that.hdmExceptionList1
                 that.getChart(that.hdmExceptionList,that.hdmExceptionList1,na);
                 console.log(that.hdmExceptionList+that.hdmExceptionList1)
               
    that.getChart1();
    that.getChart2();
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
    getChart(a,b,c) {
      let myChart = echarts.init(document.getElementById("chartData1"));
      var dataStyle = {
        normal: {
          stack: "sum",

          label: {
            show: true,
          },
          labelLine: {
            show: false,
          },
          // shadowBlur: 15,
          // shadowColor: 'white',
        },
      };
      var placeHolderStyle = {
        normal: {
          color: "rgba(0,0,0,0)",
          label: {
            show: true,
          },
          labelLine: {
            show: false,
          },
        },
        emphasis: {
          color: "rgba(0,0,0,0)",
        },
      };
      var placeHolderStyle1 = {
        normal: {
          color: "#fff",
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        emphasis: {
          color: "#fff",
        },
      };
      this.option = {
       
        color: ["RGBA(0, 197, 219, 1)", "RGBA(249, 134, 74, 1)", "#fff"],
        tooltip: {
          show: true,
          formatter: "{b} : {c}",
             confine:true,
              extraCssText:{
                zIndex:999999
              }
        },

        legend: {
               icon: 'circle',
          bottom: "0",
      
          left: "0",

          data: ["泡沫免洗手机器人-卡通版", "泡沫免洗手机器人-公共版"],

          textStyle: {
            color: "#fff",
            align: "right",
            x: "right",
            textAlign: "right",
          },

          selectedMode: true,
          orient: "vertical",
        },

        series: [
          {
            title: "泡沫免洗手机器人-公共版",
            name: "Line 4",
            type: "pie",

            clockWise: true,
            hoverAnimation: false,
            radius: ["90%", "100%"],
            itemStyle: dataStyle,
             label:{
              show:false,
              position:'top'
             },
            data: [
              {
                value: a,
                name: "泡沫免洗手机器人-公共版",
              },
              {
                value: c,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            title: "泡沫免洗手机器人-卡通版",
            name: "Line 3",
            type: "pie",
            clockWise: true,
            radius: ["70%", "80%"],
            // itemStyle: dataStyle,
              label:{
              show:false,
              position:'top'
             },
            hoverAnimation: false,

            data: [
              {
                value: b,
                name: "泡沫免洗手机器人-卡通版",
              },
              {
                value: c,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 2",
            type: "pie",

            label: {
              normal: {
                show: true,
                position: "center",
                color: "#fff",
                formatter: "{c}" + "\n\r" + "泡沫免洗手机器人",
                rich: {
                  total: {
                    fontSize: 35,
                    fontFamily: "微软雅黑",
                    color: "#fff",
                  },
                  active: {
                    fontFamily: "微软雅黑",
                    fontSize: 16,
                    color: "#6c7a89",
                    lineHeight: 30,
                  },
                },
              },
              emphasis: {
                //中间文字显示
                show: true,
              },
            },
            hoverAnimation: false,
            radius: ["50%", "60%"],
            itemStyle: dataStyle,

            data: [
              {
                value: c,
                name: "泡沫免洗手机器人",
              },
            ],
          },
        ],
      };

      myChart.setOption(this.option, true);
    },
    getChart1() {
      let myChart = echarts.init(document.getElementById("chartData2"));
      var dataStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          // shadowBlur: 15,
          // shadowColor: 'white',
        },
      };
      var placeHolderStyle = {
        normal: {
          color: "rgba(0,0,0,0)",
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        emphasis: {
          color: "rgba(0,0,0,0)",
        },
      };
      this.option1 = {
        color: ["#24FDD7","#fff"],
        tooltip: {
          show: true,
          formatter: "{b} : {c}",
              confine:true,
              extraCssText:{
                zIndex:999999
              }
        },

        legend: {
          icon: 'circle',
          bottom: "0",
      
          left: "0",

          data: ["次氯酸发生器"],

          textStyle: {
            color: "#fff",
            align: "right",
            x: "right",
            textAlign: "right",
          },

          selectedMode: true,
          orient: "vertical",
        },
        series: [
          {
            name: "Line 4",
            type: "pie",
            clockWise: true,
            hoverAnimation: false,
            radius: ["80%", "100%"],
            itemStyle: dataStyle,

            data: [
              {
                value: 5,
                name: "次氯酸发生器",
              },
              {
                value: 5,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
           {
            name: "Line 2",
            type: "pie",

            label: {
              normal: {
                show: true,
                position: "center",
                color: "#fff",
                formatter: "{c}" + "\n\r" + "次氯酸消毒机",
                rich: {
                  total: {
                    fontSize: 35,
                    fontFamily: "微软雅黑",
                    color: "#fff",
                  },
                  active: {
                    fontFamily: "微软雅黑",
                    fontSize: 16,
                    color: "#6c7a89",
                    lineHeight: 30,
                  },
                },
              },
              emphasis: {
                //中间文字显示
                show: true,
              },
            },
            hoverAnimation: false,
            radius: ["50%", "60%"],
            itemStyle: dataStyle,

            data: [
              {
                value: 5,
                name: "泡沫免洗手机器人",
              },
            ],
          },
      
     ],
      };

      myChart.setOption(this.option1, true);
    },
    getChart2() {
      let myChart = echarts.init(document.getElementById("chartData3"));
      var dataStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          // shadowBlur: 15,
          // shadowColor: 'white',
        },
      };
      var placeHolderStyle = {
        normal: {
          color: "rgba(0,0,0,0)",
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        emphasis: {
          color: "rgba(0,0,0,0)",
        },
      };
      this.option2 = {
       
        color: ["#5544FF", "#4C92D3", "#fff"],
        tooltip: {
          show: true,
          formatter: "{b} : {c}",
          default:false
        },

        legend: {
               icon: 'circle',
          bottom: "0",
      
          left: "0",

          data: ["智能超微雾化机-手推版", "智能超微雾化机-手提版"],

          textStyle: {
            color: "#fff",
            align: "right",
            x: "right",
            textAlign: "right",
         
          },

          selectedMode: true,
          orient: "vertical",
        },

        series: [
          {
            title: "智能超微雾化机-手推版",
            name: "Line 4",
            type: "pie",

            clockWise: true,
            hoverAnimation: false,
            radius: ["90%", "100%"],
            itemStyle: dataStyle,
             label:{
              show:true
             },
            data: [
              {
                value: 4,
                name: "智能超微雾化机-手推版",
              },
              {
                value: 10,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            title: "智能超微雾化机-手提版",
            name: "Line 3",
            type: "pie",
            clockWise: true,
            radius: ["70%", "80%"],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [
              {
                value: 6,
                name: "智能超微雾化机-手提版",
              },
              {
                value: 10,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 2",
            type: "pie",

            label: {
              normal: {
                show: true,
                position: "center",
                color: "#fff",
                formatter: "{c}" + "\n\r" + "智能超微雾化机",
                rich: {
                  total: {
                    fontSize: 35,
                    fontFamily: "微软雅黑",
                    color: "#fff",
                  },
                  active: {
                    fontFamily: "微软雅黑",
                    fontSize: 16,
                    color: "#6c7a89",
                    lineHeight: 30,
                  },
                },
              },
              emphasis: {
                //中间文字显示
                show: true,
              },
            },
            hoverAnimation: false,
            radius: ["50%", "60%"],
            itemStyle: dataStyle,

            data: [
              {
                value: 10,
                name: "智能超微雾化机",
              },
            ],
          },
        ],
      };

      myChart.setOption(this.option2, true);
    },
  },
  beforeDestroy(){
   clearInterval(this.timer )  
  }
};
</script>
<style  scoped>
.ring {
  width: 100%;
  height: 328px;
  display: flex;
  justify-content: space-between;
}
.item {
  width: 30%;
  height: 100%;
}
#chartData1 {
  width: 100%;
  height: 100%;
}
#chartData2 {
  width: 100%;
  height: 100%;
}
#chartData3 {
  width: 100%;
  height: 100%;
}
</style>