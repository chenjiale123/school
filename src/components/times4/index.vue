<template>
  <div class="time">
    <div id="chart1"></div>
    <img src="../../assets/img/detail/back1.png" alt="" @click="back" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: "",
      arr1:[],
          datalist:[
      0,0,0,0,0,0,0,[321,
456,
368,
462,
210,
],[412,
378,
319,
561,
329,
],
[539,
521,
0,0,0
],0,0
      ]
    };
  },
  mounted() {
    this.getChart();
  },
  methods: {
    
    getChart() {
      var that=this
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
          data: ["次氯酸发生器"],
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
          data: ["2019-11", "2019-12", "2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10",
          ],
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
               markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [14, 14, 0, 0],
              },
            },
            barWidth: "6px",

            name: "次氯酸发生器",
            color: ["rgba(2, 249, 228, 1)"],
            data: [
             0,0,0,0,0,0,0,1817,1999,1060,0,0
            ],
            type: "bar",
          },
                  {
           

            name: "次氯酸发生器",
            color: ["rgba(2, 249, 228, 1)"],
            data: [
                0,0,0,0,0,0,0,1817,1999,1060,0,0
            ],
            type: "line",
          },
     
        ],
      };

      myChart6.setOption(this.option, true);

      myChart6.on("click", function (params) {
           that.arr1=that.datalist[params.dataIndex]
        console.log(params);
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
            data: ["次氯酸发生器"],
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
              itemStyle: {
                emphasis: {
                  barBorderRadius: 10,
                },
                normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius: [14, 14, 0, 0],
                },
              },
              barWidth: "13px",
              name: "次氯酸发生器",
              color: ["RGBA(2, 255, 234, 1)"],
              data: that.arr1,
              type: "bar",
            },
             {
              itemStyle: {
                emphasis: {
                  barBorderRadius: 10,
                },
                normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius: [14, 14, 0, 0],
                },
              },
              barWidth: "13px",
              name: "次氯酸发生器",
              color: ["RGBA(2, 255, 234, 1)"],
              data: that.arr1,
              type: "line",
            },
          ],
        };
        myChart6.setOption(this.option, true);
        myChart6.on("click", function (params) {
          console.log(params);
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
              data: ["次氯酸发生器"],
              left: 10,
              bottom: 0,
              textStyle: {
                color: "#fff",
              },
            },

            xAxis: {
              type: "category",
              data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
                itemStyle: {
                  emphasis: {
                    barBorderRadius: 10,
                  },
                  normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [14, 14, 0, 0],
                  },
                },
                barWidth: "13px",
                name: "次氯酸发生器",
                color: ["RGBA(2, 255, 234, 1)"],
                data: [241300, 251520, 255430, 263520, 256370, 251210, 23030],
                type: "bar",
              },
               {
                itemStyle: {
                  emphasis: {
                    barBorderRadius: 10,
                  },
                  normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [14, 14, 0, 0],
                  },
                },
                barWidth: "13px",
                name: "次氯酸发生器",
                color: ["RGBA(2, 255, 234, 1)"],
                data: [241300, 251520, 255430, 263520, 256370, 251210, 23030],
                type: "line",
              },
            ],
          };
          myChart6.setOption(this.option, true);
        });
      });
    },
    back() {
      this.getChart();
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