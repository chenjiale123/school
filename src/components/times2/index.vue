<template>
  <div class="time">
    <div id="chart1"></div>
    <img src="../../assets/img/detail/back1.png" alt="" @click="back" />
  </div>
</template>
<script>
import { month3 } from "../../api/detail";
import { week3 } from "../../api/detail";
import { day3 } from "../../api/detail";
export default {
  data() {
    return {
      option: "",
      num3: [],
      datearr: [],
      dataweek: [],
      dataweek1: [],
      weekday: [],
    };
  },
  mounted() {
    this.getMonth3();
  },
  methods: {
    getArrEqual(arr1, arr2) {
      console.log(arr1, arr2);
      var a;
      let newArr = [];
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (i == 0) {
            if (arr1[i] == arr2[j]) {
              console.log(this.weeklist1[i].usage);
              console.log(j + "1111111111111");
              a = j;
              newArr[a] = this.weeklist1[i].usage;
              console.log(a + "3333333");
            } else {
              newArr[j] = 0;
            }
          }

          if (i > 0) {
            if (arr1[i] == arr2[j]) {
              newArr[j] = this.weeklist1[i].usage;
              console.log(j + "222222222222");
              a = j;
              console.log(a + "444444444444");
            }
          }
        }
      }
      return newArr;
    },
    getMonth3() {
      month3()
        .then((res) => {
          console.log(res);
          this.weeklist1 = res.data.data;
          for (let i in res.data.data) {
            if (res.data.data[i].type == "JYHP01") {
              this.num.push(res.data.data[i].data);
            } else {
              this.num3.push(res.data.data[i].usage);
            }
          }

          var dataArr = [];
          var data = new Date();
          var year = data.getFullYear();
          data.setMonth(data.getMonth() + 1, 1);
          for (var i = 0; i < 12; i++) {
            data.setMonth(data.getMonth() - 1);
            var m = data.getMonth() + 1;
            m = m < 10 ? "0" + m : m;
            dataArr.unshift(data.getFullYear() + "-" + m);
          }

          this.datearr = dataArr;
          var a = this.getArrEqual(this.num3, dataArr);
          console.log(a);
          this.getChart(a, this.num3,dataArr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getChart(a, b,c) {
      var that = this;
      let myChart6 = echarts.init(document.getElementById("chart1"));

      this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ",
          confine: true,
          extraCssText: {
            zIndex: 999999,
          },
        },
        legend: {
          data: ["智能超微雾化机-手提版", "智能超微雾化机-手推版"],
          left: 30,
          bottom: 0,
          icon: "circle",

          itemWidth: 10, // 设置宽度

          itemHeight: 10, // 设置高度
          textStyle: {
            color: "#fff",
          },
        },

        xAxis: {
          type: "category",
          data: c,
          axisTick: {
            //y轴刻度线
            show: false,
          },
          axisLine: {
            //y轴
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        yAxis: [
          {
            type: "value",
            axisTick: {
              //y轴刻度线
              show: false,
            },
            axisLine: {
              //y轴
              show: false,
            },
            splitLine: {
              //网格线
              show: true,
              lineStyle: {
                color: ["rgba(65, 144, 177, 1)"],
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
          {
            type: "value",
            axisTick: {
              //y轴刻度线
              show: false,
            },
            axisLine: {
              //y轴
              show: false,
            },
            splitLine: {
              //网格线
              show: true,
              lineStyle: {
                color: ["rgba(65, 144, 177, 1)"],
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        series: [
          {
            barWidth: "6px",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            name: "智能超微雾化机-手提版",
            color: ["RGBA(2, 255, 234, 1)"],
            data: a,
            type: "bar",
            
                  itemStyle: {
                    emphasis: {
                      barBorderRadius: 10,
                    },
                    normal: {
                      //柱形图圆角，初始化效果
                      barBorderRadius: [6, 6, 0, 0],
                    },
                  },
          },
          {
            barWidth: "6px",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            name: "智能超微雾化机-手推版",
            color: ["RGBA(255, 175, 2, 1)"],
            data: b,
            type: "bar",
          
                  itemStyle: {
                    emphasis: {
                      barBorderRadius: 10,
                    },
                    normal: {
                      //柱形图圆角，初始化效果
                      barBorderRadius: [6, 6, 0, 0],
                    },
                  },
          },
          {
            name: "智能超微雾化机-手提版",
            color: ["RGBA(2, 255, 234, 1)"],
            data: a,
            type: "line",
          },
          {
            name: "智能超微雾化机-手推版",
            color: ["RGBA(255, 175, 2, 1)"],
            data: b,
            type: "line",
          },
        ],
      };

      myChart6.setOption(this.option, true);

      myChart6.on("click", function (params) {
        console.log(params);
        var dataweek = [];
        var dataweek1 = [];
        week3(that.datearr[params.dataIndex] + "-01").then((res) => {
          console.log(res);

          this.weekday = res.data.data;
          for (let i in res.data.data) {
            if (res.data.data[i].type == "JYHP01") {
              dataweek.push(0);
            } else {
              dataweek1.push(res.data.data[i].usage);
            }
          }
          console.log(dataweek, dataweek1);

          this.option = {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}: {c} ",
              confine: true,
              extraCssText: {
                zIndex: 999999,
              },
            },
            legend: {
              icon: "circle",
              data: ["智能超微雾化机-手提版", "智能超微雾化机-手推版"],
              left: 10,
              bottom: 0,
              textStyle: {
                color: "#fff",
              },
            },

            xAxis: {
              type: "category",
              data: ["第一周", "第二周", "第三周", "第四周", "第五周"],
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisLabel: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            yAxis: [
              {
                type: "value",
                axisTick: {
                  show: false,
                },
                axisLine: {
                  show: false,
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: ["rgba(65, 144, 177, 1)"],
                    width: 1,
                    type: "solid",
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              {
                type: "value",
                axisTick: {
                  show: false,
                },
                axisLine: {
                  show: false,
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: ["rgba(65, 144, 177, 1)"],
                    width: 1,
                    type: "solid",
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
            ],
            series: [
              {
            
                name: "智能超微雾化机-手提版",
                color: ["RGBA(2, 255, 234, 1)"],
                data: dataweek,
                type: "bar",
                   barWidth:'13px',
                  itemStyle: {
                    emphasis: {
                      barBorderRadius: 10,
                    },
                    normal: {
                      //柱形图圆角，初始化效果
                      barBorderRadius: [14, 14, 0, 0],
                    },
                  },
              },
              {
     
                name: "智能超微雾化机-手推版",
                color: ["RGBA(255, 175, 2, 1)"],
                data: dataweek1,
                type: "bar",
                   barWidth:'13px',
                  itemStyle: {
                    emphasis: {
                      barBorderRadius: 10,
                    },
                    normal: {
                      //柱形图圆角，初始化效果
                      barBorderRadius: [14, 14, 0, 0],
                    },
                  },
              },

              {
                name: "智能超微雾化机-手提版1",
                color: ["RGBA(2, 255, 234, 1)"],
                data: dataweek,
                type: "line",
              },
              {
                name: "智能超微雾化机-手推版1",
                color: ["RGBA(255, 175, 2, 1)"],
                data: dataweek1,
                type: "line",
              },
            ],
          };
          myChart6.setOption(this.option, true);

          myChart6.on("click", function (params) {
            console.log(params);

            var dataday = [];
            var dataday1 = [];
            day3(this.weekday[params.dataIndex].week).then((res) => {
              console.log(res);
              for (let i in res.data.data) {
                if (res.data.data[i].type == "JYHP01") {
                  dataday.push(res.data.data[i].usage);
                } else {
                  dataday1.push(res.data.data[i].usage);
                }
              }
              console.log(dataday,dataday1)
              this.option = {
                tooltip: {
                  trigger: "item",
                  formatter: "{a} <br/>{b}: {c} ",
                  confine: true,
                  extraCssText: {
                    zIndex: 999999,
                  },
                },
                legend: {
                  icon: "circle",
                  data: ["智能超微雾化机-手提版", "智能超微雾化机-手推版"],
                  left: 10,
                  bottom: 0,
                  textStyle: {
                    color: "#fff",
                  },
                },

                xAxis: {
                  type: "category",
                  data: [
                    "周一",
                    "周二",
                    "周三",
                    "周四",
                    "周五",
                    "周六",
                    "周日",
                  ],
                  axisTick: {
                    show: false,
                  },
                  axisLine: {
                    show: false,
                  },
                  axisLabel: {
                    textStyle: {
                      color: "#fff",
                    },
                  },
                },
                yAxis: [
                  {
                    type: "value",
                    axisTick: {
                      show: false,
                    },
                    axisLine: {
                      show: false,
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: ["rgba(65, 144, 177, 1)"],
                        width: 1,
                        type: "solid",
                      },
                    },
                    axisLabel: {
                      textStyle: {
                        color: "#fff",
                      },
                    },
                  },
                  {
                    type: "value",
                    axisTick: {
                      show: false,
                    },
                    axisLine: {
                      show: false,
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: ["rgba(65, 144, 177, 1)"],
                        width: 1,
                        type: "solid",
                      },
                    },
                    axisLabel: {
                      textStyle: {
                        color: "#fff",
                      },
                    },
                  },
                ],
                series: [
                  {
                      barWidth:'13px',
                  itemStyle: {
                    emphasis: {
                      barBorderRadius: 10,
                    },
                    normal: {
                      //柱形图圆角，初始化效果
                      barBorderRadius: [14, 14, 0, 0],
                    },
                  },
                    name: "智能超微雾化机-手提版",
                    color: ["RGBA(2, 255, 234, 1)"],
                    data: dataday,
                    type: "bar",
                  },
                  {
                      barWidth:'13px',
                  itemStyle: {
                    emphasis: {
                      barBorderRadius: 10,
                    },
                    normal: {
                      //柱形图圆角，初始化效果
                      barBorderRadius: [14, 14, 0, 0],
                    },
                  },
                    name: "智能超微雾化机-手推版",
                    color: ["RGBA(255, 175, 2, 1)"],
                    data: dataday1,
                    type: "bar",
                  },

                  {
                    name: "智能超微雾化机-手提版1",
                    color: ["RGBA(2, 255, 234, 1)"],
                    data: dataday,
                    type: "line",
                  },
                  {
                    name: "智能超微雾化机-手推版1",
                    color: ["RGBA(255, 175, 2, 1)"],
                    data: dataday1,
                    type: "line",
                  },
                ],
              };
              myChart6.setOption(this.option, true);
            });
          });
        });
      });
    },
    back() {
       this.datearr=[]
           this.num=[]
         this.num1=[]
      this.getMonth();
    },
  },
};
</script>
<style  scoped>
.time {
  width: 100%;
  height: 75%;
  position: relative;
}
#chart1 {
  width: 100%;
  height: 100%;
}
.time > img {
  display: inline-block;
  width: 19px;
  height: 19px;
  position: absolute;
  bottom: 0;
  right: 100px;
}
</style>