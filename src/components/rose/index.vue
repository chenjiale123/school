<template>
  <div class="rose">
    <div id="roseChart"></div>
    <div class="list">
      <div class="item" @click="kt">
        <span></span>
        <span>泡沫免洗手机器人卡通版</span>
      </div>
      <div class="item" @click="gg">
        <span></span>
        <span>泡沫免洗手机器人公共版</span>
      </div>
      <div class="item" @click="cls">
        <span></span>
        <span>次氯酸发生器</span>
      </div>
      <div class="item" @click="st1">
        <span></span>
        <span>智能超微雾化机手提版</span>
      </div>
      <div class="item" @click="st">
        <span></span>
        <span>智能超微雾化机手推版</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: "",
    };
  },
  mounted() {
    this.getChart();
  },
  methods: {
    getChart() {
      let myChart = echarts.init(document.getElementById("roseChart"));

      this.option = {
        calculable: true,

        calculable: true,
        series: [
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "半圆",
            type: "pie",
            radius: ["0%", "15%"],
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "半圆",
                label: {
                  show: false,
                },
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "第一条圆弧",
            type: "pie",
            radius: ["24.5%", "25%"],
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "第一条圆弧",
                label: {
                  show: false,
                },
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "第二条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["39.5%", "40%"],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "第二条圆弧",
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "第三条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["54.5%", "55%"],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "第三条圆弧",
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "第四条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["69.5%", "70%"],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "第四条圆弧",
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "第五条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["84.5%", "85%"],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "第五条圆弧",
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            color: ["RGBA(44, 166, 224, 1)"],
            name: "第六条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["99.5%", "100%"],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: "500",
                name: "第六条圆弧",
              },
              {
                value: "500",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "工作类型",
            type: "pie",
            radius: [37, 255],
            avoidLabelOverlap: false,
            startAngle: 0,
            center: ["50.1%", "50%"],
            roseType: "area",
            selectedMode: "single",
            label: {
              normal: {
                show: true,
                formatter: "{c}台\n\r {b}",
                position: "inside",
              },
              emphasis: {
                show: true,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 5,
                name: "",
                label: {
                  normal: {
                    rotate: 170, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f845f1",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 6,
                name: "滨江区长一幼儿园",
                label: {
                  normal: {
                    rotate: 150, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ad46f3",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 7,
                name: "杭州市滨江区华媒维翰彩虹幼儿园",
                label: {
                  normal: {
                    rotate: 130, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#5045f6",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 8,
                name: "杭州市滨江区唯诗礼幼儿园",
                label: {
                  normal: {
                    rotate: 110, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#4777f5",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 9,
                name: "繁华幼儿园",
                label: {
                  normal: {
                    rotate: 90, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#44aff0",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 10,
                name: "杭州市滨江区欧文幼儿园",
                label: {
                  normal: {
                    rotate: 70, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#45dbf7",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 11,
                name: "杭州市滨江区硅谷蒙学幼儿园",
                label: {
                  normal: {
                    rotate: 50, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f6d54a",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 12,
                name: "杭州市滨江区武林门儿童之家幼儿园",
                label: {
                  normal: {
                    rotate: 30, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f69846",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 13,
                name: "杭州市滨江区滨兴幼儿园",
                label: {
                  normal: {
                    rotate: 10, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ff4343",
                    borderWidth: 3,
                  },
                },
              },
            ],
          },
        ],
      };
      myChart.setOption(this.option, true);
    },
    kt() {
      let myChart = echarts.init(document.getElementById("roseChart"));
      this.option.series[7].data = [
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 15,
          name: "",
          label: {
            normal: {
              rotate: 170, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#f845f1",
              borderWidth: 3,
            },
          },
        },
        {
          value: 16,
          name: "滨江区长一幼儿园",
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#ad46f3",
              borderWidth: 3,
            },
          },
        },
        {
          value: 17,
          name: "杭州市滨江区华媒维翰彩虹幼儿园",
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#5045f6",
              borderWidth: 3,
            },
          },
        },
        {
          value: 8,
          name: "杭州市滨江区唯诗礼幼儿园",
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#4777f5",
              borderWidth: 3,
            },
          },
        },
        {
          value: 18,
          name: "繁华幼儿园",
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#44aff0",
              borderWidth: 3,
            },
          },
        },
        {
          value: 10,
          name: "杭州市滨江区欧文幼儿园",
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#45dbf7",
              borderWidth: 3,
            },
          },
        },
        {
          value: 19,
          name: "杭州市滨江区硅谷蒙学幼儿园",
          label: {
            normal: {
              rotate: 50, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#f6d54a",
              borderWidth: 3,
            },
          },
        },
        {
          value: 12,
          name: "杭州市滨江区武林门儿童之家幼儿园",
          label: {
            normal: {
              rotate: 30, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#f69846",
              borderWidth: 3,
            },
          },
        },
        {
          value: 20,
          name: "杭州市滨江区滨兴幼儿园",
          label: {
            normal: {
              rotate: 10, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#ff4343",
              borderWidth: 3,
            },
          },
        },
      ];
      myChart.setOption(this.option, true);
    },
    gg() {
      let myChart = echarts.init(document.getElementById("roseChart"));
      this.option.series[7].data = [
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: "",
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 15,
          name: "",
          label: {
            normal: {
              rotate: 170, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#f845f1",
              borderWidth: 3,
            },
          },
        },
        {
          value: 16,
          name: "滨江区长一幼儿园",
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#ad46f3",
              borderWidth: 3,
            },
          },
        },
        {
          value: 17,
          name: "杭州市滨江区华媒维翰彩虹幼儿园",
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#5045f6",
              borderWidth: 3,
            },
          },
        },
        {
          value: 18,
          name: "杭州市滨江区唯诗礼幼儿园",
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#4777f5",
              borderWidth: 3,
            },
          },
        },
        {
          value: 19,
          name: "繁华幼儿园",
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#44aff0",
              borderWidth: 3,
            },
          },
        },
        {
          value: 20,
          name: "杭州市滨江区欧文幼儿园",
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#45dbf7",
              borderWidth: 3,
            },
          },
        },
        {
          value: 21,
          name: "杭州市滨江区硅谷蒙学幼儿园",
          label: {
            normal: {
              rotate: 50, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#f6d54a",
              borderWidth: 3,
            },
          },
        },
        {
          value: 22,
          name: "杭州市滨江区武林门儿童之家幼儿园",
          label: {
            normal: {
              rotate: 30, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#f69846",
              borderWidth: 3,
            },
          },
        },
        {
          value: 23,
          name: "杭州市滨江区滨兴幼儿园",
          label: {
            normal: {
              rotate: 10, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            normal: {
              color: "#ff4343",
              borderWidth: 3,
            },
          },
        },
      ];
      myChart.setOption(this.option, true);
    },
    cls(){
          let myChart = echarts.init(document.getElementById("roseChart"));
    this.option.series[7].data=      [
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 9,
                name: "",
                label: {
                  normal: {
                    rotate: 170, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f845f1",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 10,
                name: "滨江区长一幼儿园",
                label: {
                  normal: {
                    rotate: 150, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ad46f3",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 11,
                name: "杭州市滨江区华媒维翰彩虹幼儿园",
                label: {
                  normal: {
                    rotate: 130, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#5045f6",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 12,
                name: "杭州市滨江区唯诗礼幼儿园",
                label: {
                  normal: {
                    rotate: 110, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#4777f5",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 13,
                name: "繁华幼儿园",
                label: {
                  normal: {
                    rotate: 90, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#44aff0",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 14,
                name: "杭州市滨江区欧文幼儿园",
                label: {
                  normal: {
                    rotate: 70, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#45dbf7",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 15,
                name: "杭州市滨江区硅谷蒙学幼儿园",
                label: {
                  normal: {
                    rotate: 50, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f6d54a",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 16,
                name: "杭州市滨江区武林门儿童之家幼儿园",
                label: {
                  normal: {
                    rotate: 30, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f69846",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 17,
                name: "杭州市滨江区滨兴幼儿园",
                label: {
                  normal: {
                    rotate: 10, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ff4343",
                    borderWidth: 3,
                  },
                },
              },
           
    ]   
       myChart.setOption(this.option, true);
 },
    st1(){
          let myChart = echarts.init(document.getElementById("roseChart"));
    this.option.series[7].data=      [
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 13,
                name: "",
                label: {
                  normal: {
                    rotate: 170, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f845f1",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 14,
                name: "滨江区长一幼儿园",
                label: {
                  normal: {
                    rotate: 150, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ad46f3",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 15,
                name: "杭州市滨江区华媒维翰彩虹幼儿园",
                label: {
                  normal: {
                    rotate: 130, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#5045f6",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 16,
                name: "杭州市滨江区唯诗礼幼儿园",
                label: {
                  normal: {
                    rotate: 110, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#4777f5",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 17,
                name: "繁华幼儿园",
                label: {
                  normal: {
                    rotate: 90, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#44aff0",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 18,
                name: "杭州市滨江区欧文幼儿园",
                label: {
                  normal: {
                    rotate: 70, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#45dbf7",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 19,
                name: "杭州市滨江区硅谷蒙学幼儿园",
                label: {
                  normal: {
                    rotate: 50, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f6d54a",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 20,
                name: "杭州市滨江区武林门儿童之家幼儿园",
                label: {
                  normal: {
                    rotate: 30, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f69846",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 21,
                name: "杭州市滨江区滨兴幼儿园",
                label: {
                  normal: {
                    rotate: 10, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ff4343",
                    borderWidth: 3,
                  },
                },
              },
           
    ]   
       myChart.setOption(this.option, true);
 },
    st(){
          let myChart = echarts.init(document.getElementById("roseChart"));
    this.option.series[7].data=      [
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 16,
                name: "",
                label: {
                  normal: {
                    rotate: 170, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f845f1",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 17,
                name: "滨江区长一幼儿园",
                label: {
                  normal: {
                    rotate: 150, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ad46f3",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 18,
                name: "杭州市滨江区华媒维翰彩虹幼儿园",
                label: {
                  normal: {
                    rotate: 130, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#5045f6",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 19,
                name: "杭州市滨江区唯诗礼幼儿园",
                label: {
                  normal: {
                    rotate: 110, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#4777f5",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 20,
                name: "繁华幼儿园",
                label: {
                  normal: {
                    rotate: 90, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#44aff0",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 21,
                name: "杭州市滨江区欧文幼儿园",
                label: {
                  normal: {
                    rotate: 70, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#45dbf7",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 22,
                name: "杭州市滨江区硅谷蒙学幼儿园",
                label: {
                  normal: {
                    rotate: 50, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f6d54a",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 23,
                name: "杭州市滨江区武林门儿童之家幼儿园",
                label: {
                  normal: {
                    rotate: 30, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#f69846",
                    borderWidth: 3,
                  },
                },
              },
              {
                value: 24,
                name: "杭州市滨江区滨兴幼儿园",
                label: {
                  normal: {
                    rotate: 10, //文字旋转角度，新版本只能单独设置
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#ff4343",
                    borderWidth: 3,
                  },
                },
              },
           
    ]   
       myChart.setOption(this.option, true);
 },
 
 },
};
</script>
<style  scoped>
.rose {
  width: 100%;
  height: 100%;
  position: relative;
}
#roseChart {
  width: 100%;
  height: 130%;
}

.list {
  width: 250px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0px;
}
.list > .item {
  margin-top: 20px;
}
.list > .item:nth-child(1) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: #ff7c36;
  border-radius: 50%;
}
.list > .item:nth-child(1) > span:nth-child(2) {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list > .item:nth-child(2) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(0, 197, 219, 1);
  border-radius: 50%;
}
.list > .item:nth-child(2) > span:nth-child(2) {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list > .item:nth-child(3) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(0, 210, 188, 1);
  border-radius: 50%;
}
.list > .item:nth-child(3) > span:nth-child(2) {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list > .item:nth-child(4) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(116, 158, 196, 1);
  border-radius: 50%;
}
.list > .item:nth-child(4) > span:nth-child(2) {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list > .item:nth-child(5) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(85, 108, 255, 1);
  border-radius: 50%;
}
.list > .item:nth-child(5) > span:nth-child(2) {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}
</style>