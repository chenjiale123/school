<template>
  <div class="num">
    <div class="item">
      <div id="chartData1"></div>
      <h2>泡沫免洗手机器人卡通款</h2>
    </div>
    <div class="item">
      <div id="chartData2"></div>
      <h2>泡沫免洗手机器人公共款</h2>
    </div>
  </div>
</template>
<script>
import { total } from "../../api/school";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      option: "",
      hdmExceptionList:"",
      hdmExceptionList1:'',
      sxj1:'',
      sxj2:'',
      timer:''
    };
  },
  mounted() {
    this.getChart();
    this.getChart1();
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
            "/app/jydx",
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
            "/topic/jydx",
            (msg) => {
              // 订阅服务端提供的某个topic
              console.log("广播成功");
              console.log(JSON.parse(msg.body));
              // that.sxj1 = JSON.parse(msg.body).usageInfos[0].count;
              // that.sxj2 = JSON.parse(msg.body).usageInfos[1].count;
               that.hdmExceptionList=JSON.parse(msg.body).JYHP01.length

                    that.hdmExceptionList1=JSON.parse(msg.body).CARTOON.length
                    console.log(that.hdmExceptionList1)
               that.getChart()
                that.getChart1()
            },
            headers
          );
          this.stompClient.send(
            "/app/jydx",
            headers,
            JSON.stringify({ sender: "123" })
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
    getChart1() {
      var that=this
      total("吉叶大学").then((res) => {

        console.log(res)
                var arr=0
        console.log(res)
        for(let i in res.data.data){
            if(res.data.data[i].type=="JYHP01"){
              arr+=res.data.data[i].amount
            }
        }
             console.log(that.hdmExceptionList)
      let myChart = echarts.init(document.getElementById("chartData2"));
      var data = [
        {
          name: "正常机器数量",
          value: arr-that.hdmExceptionList,
          sum: 1,
        },
        {
          name: "异常使用机器数量",
          value: 0,
          sum: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "RGBA(227, 78, 80, 0.8)",
                  },
                  {
                    offset: 0.7,
                    color: "RGBA(227, 78, 80, 1)",
                  },
                  {
                    offset: 1,
                    color: "#5EDEE5",
                  },
                ],
                false
              ),
              barBorderRadius: 10,
            },

            barBorderRadius: 4,
          },
        },
        {
          name: "故障机器数量",
          value:that.hdmExceptionList,
          sum: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "RGBA(228, 45, 48, 0.8)",
                  },
                  {
                    offset: 0.7,
                    color: "RGBA(228, 45, 48, 1)",
                  },
                  {
                    offset: 1,
                    color: "#5EDEE5",
                  },
                ],
                false
              ),
              barBorderRadius: 10,
            },

            barBorderRadius: 4,
          },
        },
       ];

      var opt = {
        index: 0,
      };
      var color = ["#A71A2B"];
      data = data.sort((a, b) => {
        return b.value - a.value;
      });
      console.log(this.getSymbolData(data));
      this.option = {
        grid: {
          top: 10,
          bottom: -15,
          right: 30,
          left: 10,
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(data, "name"),
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              interval: 0,
              color: "#fff",
              align: "left",
              margin: 80,
              fontSize: 13,
              formatter: function (value, index) {
                return "{title|" + value + "}";
              },
              rich: {
                title: {
                  width: 165,
                },
              },
            },
          },
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(data, "name"),
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              shadowOffsetX: "-20px",
              color: ["#fff"],
              align: "right",
              verticalAlign: "bottom",
              lineHeight: 30,
              fontSize: 18,
              formatter: function (value, index) {
                return (data[index].value / data[index].sum) * 1 + "台";
              },
            },
          },
        ],
        series: [
          {
            name: "XXX",
            type: "pictorialBar",
            symbol:
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==",
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            itemStyle: {
              normal: {
                color: "#14b1eb",
              },
            },
            data: this.getSymbolData(data),
          },
          {
            name: "条",
            type: "bar",
            showBackground: true,
            barBorderRadius: 30,
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            // align: left,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "RGBA(243, 131, 0, 0.8)",
                    },
                    {
                      offset: 0.7,
                      color: "RGBA(243, 131, 0, 1)",
                    },
                    {
                      offset: 1,
                      color: "#5EDEE5",
                    },
                  ],
                  false
                ),
                barBorderRadius: 10,
              },

              barBorderRadius: 4,
            },
            label: {
              normal: {
                color: "#fff",
                show: true,
                position: [0, "-20px"],
                textStyle: {
                  fontSize: 11,
                },
                formatter: function (a, b) {
                  return a.name;
                },
              },
            },
          },
        ],
      };

      myChart.setOption(this.option, true);
      });

    },

    getChart() {
      var that=this
        total("吉叶大学").then((res) => {
         var arr=0
        console.log(res)
        for(let i in res.data.data){
            if(res.data.data[i].type=="CARTOON"){
              arr+=res.data.data[i].amount
            }
        }
        console.log(arr)
        console.log(that.hdmExceptionList1)
      let myChart = echarts.init(document.getElementById("chartData1"));
      var data = [
        {
          name: "正常机器数量",
          value: arr-that.hdmExceptionList1,
          sum: 1,
        },
        {
          name: "异常使用机器数量",
          value: 0,
          sum: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "RGBA(227, 78, 80, 0.8)",
                  },
                  {
                    offset: 0.7,
                    color: "RGBA(227, 78, 80, 1)",
                  },
                  {
                    offset: 1,
                    color: "#5EDEE5",
                  },
                ],
                false
              ),
              barBorderRadius: 10,
            },

            barBorderRadius: 4,
          },
        },
        {
          name: "故障机器数量",
          value: that.hdmExceptionList1,
          sum: 1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "RGBA(228, 45, 48, 0.8)",
                  },
                  {
                    offset: 0.7,
                    color: "RGBA(228, 45, 48, 1)",
                  },
                  {
                    offset: 1,
                    color: "#5EDEE5",
                  },
                ],
                false
              ),
              barBorderRadius: 10,
            },

            barBorderRadius: 4,
          },
        },
      ];

      var opt = {
        index: 0,
      };
      var color = ["#A71A2B"];
      data = data.sort((a, b) => {
        return b.value - a.value;
      });
      console.log(this.getSymbolData(data));
      this.option = {
        grid: {
          top: 10,
          bottom: -15,
          right: 30,
          left: 10,
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(data, "name"),
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              interval: 0,
              color: "#fff",
              align: "left",
              margin: 80,
              fontSize: 13,
              formatter: function (value, index) {
                return "{title|" + value + "}";
              },
              rich: {
                title: {
                  width: 165,
                },
              },
            },
          },
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(data, "name"),
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              shadowOffsetX: "-20px",
              color: ["#fff"],
              align: "right",
              verticalAlign: "bottom",
              lineHeight: 30,
              fontSize: 18,
              formatter: function (value, index) {
                return (data[index].value / data[index].sum) * 1 + "台";
              },
            },
          },
        ],
        series: [
          {
            name: "XXX",
            type: "pictorialBar",
            symbol:
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==",
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            itemStyle: {
              normal: {
                color: "#14b1eb",
              },
            },
            data: this.getSymbolData(data),
          },
          {
            name: "条",
            type: "bar",
            showBackground: true,
            barBorderRadius: 30,
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            // align: left,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "RGBA(0, 116, 255, 0.8)",
                    },
                    {
                      offset: 0.7,
                      color: "RGBA(0, 116, 255, 1)",
                    },
                    {
                      offset: 1,
                      color: "#5EDEE5",
                    },
                  ],
                  false
                ),
                barBorderRadius: 10,
              },

              barBorderRadius: 4,
            },
            label: {
              normal: {
                color: "#fff",
                show: true,
                position: [0, "-20px"],
                textStyle: {
                  fontSize: 11,
                },
                formatter: function (a, b) {
                  return a.name;
                },
              },
            },
          },
        ],
      };

      myChart.setOption(this.option, true);
        })
    },
    getArrByKey(data, k) {
      let key = k || "value";
      let res = [];
      if (data) {
        data.forEach(function (t) {
          res.push(t[key]);
        });
      }
      return res;
    },
    getSymbolData(data) {
      let arr = [];
      for (var i = 0; i < data.length; i++) {
        arr.push({
          value: data[i].value,
          symbolPosition: "end",
        });
      }
      return arr;
    },
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
};
</script>
<style scoped>
.num {
  width: 100%;
  height: 80%;
  position: relative;
}

.item {
  width: 100%;
  height: 38%;
  margin-top: 25px;
}
.item > h2 {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}
#chartData1 {
  width: 100%;
  height: 100%;
}
#chartData2 {
  width: 100%;
  height: 100%;
}
</style>