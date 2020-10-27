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
        [23,24,34,36,18],
          0,0,0,
          [69,87,110,115,79],
          [145,134,167,89,128],
          0,0,[210,167,154,178,134],[125,134,0,0,0]
      ]
    };
  },
  mounted() {
    this.getChart();
  },
  methods: {

    getChart(a) {
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
            barWidth: "6px",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            name: "智能超微雾化机-手提版",
            color: ["RGBA(2, 255, 234, 1)"],
            data: [
0,0,0,0,0,0,0,0,0,0,0,0
            ],
            type: "bar",
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
            data: [
              117,0,0,0,460,660,0,0,843,259,0,0
            ],
            type: "bar",
          },
          {
            name: "智能超微雾化机-手提版",
            color: ["RGBA(2, 255, 234, 1)"],
            data: [
         0,0,0,0,0,0,0,0,0,0,0,0
            ],
            type: "line",
          },
          {
            name: "智能超微雾化机-手推版",
            color: ["RGBA(255, 175, 2, 1)"],
            data: [
                        117,0,0,0,460,660,0,0,843,259,0,0
            ],
            type: "line",
          },
        ],
      };

      myChart6.setOption(this.option, true);

      myChart6.on("click", function (params) {
        console.log(params);

       that.arr1=that.datalist[params.dataIndex]
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
              barWidth: "6px",
              name: "智能超微雾化机-手提版",
              color: ["RGBA(2, 255, 234, 1)"],
              data: [0,0,0,0,0],
              type: "bar",
            },
            {
              barWidth: "6px",
              name: "智能超微雾化机-手推版",
              color: ["RGBA(255, 175, 2, 1)"],
              data: that.arr1,
              type: "bar",
            },

            {
              name: "智能超微雾化机-手提版1",
              color: ["RGBA(2, 255, 234, 1)"],
                  data: [0,0,0,0,0],
              type: "line",
            },
            {
              name: "智能超微雾化机-手推版1",
              color: ["RGBA(255, 175, 2, 1)"],
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
              data: ["智能超微雾化机-手提版", "智能超微雾化机-手推版"],
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
                barWidth: "6px",
                name: "智能超微雾化机-手提版",
                color: ["RGBA(2, 255, 234, 1)"],
                data: [241300, 251520, 255430, 263520, 256370, 251210, 23030],
                type: "bar",
              },
              {
                barWidth: "6px",
                name: "智能超微雾化机-手推版",
                color: ["RGBA(255, 175, 2, 1)"],
                data: [35682, 36214, 32548, 33458, 33695, 10268, 11254],
                type: "bar",
              },

              {
                name: "智能超微雾化机-手提版1",
                color: ["RGBA(2, 255, 234, 1)"],
                data: [241300, 251520, 255430, 263520, 256370, 251210, 23030],
                type: "line",
              },
              {
                name: "智能超微雾化机-手推版1",
                color: ["RGBA(255, 175, 2, 1)"],
                data: [35682, 36214, 32548, 33458, 33695, 10268, 11254],
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
                data: ["智能超微雾化机-手提版", "智能超微雾化机-手推版"],
                left: 10,
                bottom: 0,
                textStyle: {
                  color: "#fff",
                },
              },

              xAxis: {
                type: "category",
                data: ["7时", "9时", "11时", "13时", "15时", "17时", "19时"],
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
                  barWidth: "6px",
                  name: "智能超微雾化机-手提版",
                  color: ["RGBA(2, 255, 234, 1)"],
                  data: [16521, 16069, 16526, 15523, 16202, 15296, 15300],
                  type: "bar",
                },
                {
                  barWidth: "6px",

                  name: "智能超微雾化机-手推版",
                  color: ["RGBA(255, 175, 2, 1)"],
                  data: [1260, 1230, 1250, 1261, 1252, 1280, 1260, 1281, 1263],
                  type: "bar",
                },

                {
                  name: "智能超微雾化机-手提版1",
                  color: ["RGBA(2, 255, 234, 1)"],
                  data: [16521, 16069, 16526, 15523, 16202, 15296, 15300],
                  type: "line",
                },
                {
                  name: "智能超微雾化机-手推版1",
                  color: ["RGBA(255, 175, 2, 1)"],
                  data: [
                    1260,
                    1230,
                    1250,
                    1261,
                    1252,
                    1280,
                    1260,
                    1281,
                    1263,
                    1275,
                    1240,
                  ],
                  type: "line",
                },
              ],
            };
            myChart6.setOption(this.option, true);
          });
        });
      });
    },
    back() {
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