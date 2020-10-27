<template>
  <div class="mac">
    <div class="top">
      <h2>设备数据</h2>
      <div class="eng">
        <span>DEVICE</span>
        <span>DATA</span>
      </div>
    </div>
    <div class="pinList">
      <div class="item">
        <div class="left">
          <h2>{{ num + num1 }}(台)</h2>
          <h5>The total number</h5>
          <div class="gg">
            <div class="pot"></div>
            <span>泡沫免洗手机器人-公共版</span>
            <h3>{{ num1 }}(台)</h3>
          </div>

          <div class="et">
            <div class="pot"></div>
            <span>泡沫免洗手机器人-卡通版</span>
            <h3>{{ num }}(台)</h3>
          </div>
        </div>
        <div class="right">
          <div id="pain"></div>
        </div>
      </div>

      <div class="item">
        <div class="left">
          <h2>11(台)</h2>
          <h5>The total number</h5>
          <div class="gg">
            <div class="pot"></div>
            <span>次氯酸发生器</span>
            <h3>11(台)</h3>
          </div>
        </div>
        <div class="right">
          <div id="pain1"></div>
        </div>
      </div>

      <div class="item">
        <div class="left">
          <h2>{{num3}}(台)</h2>
          <h5>The total number</h5>
          <div class="gg">
            <div class="pot1"></div>
            <span>智能超微雾化机-手提版</span>
            <h3>0(台)</h3>
          </div>

          <div class="et">
            <div class="pot1"></div>
            <span>智能超微雾化机-手推版</span>
            <h3>{{num3}}(台)</h3>
          </div>
        </div>
        <div class="right">
          <div id="pain2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { total } from "../../api/main";
import{kxj_st} from "../../api/main";

export default {
  data() {
    return {
      option: "",
      option1: "",
      option2: "",
      num: 0,
      num1: 0,
          num3: 0,
    };
  },
  mounted() {
    this.xNum();
    this.xNum2()
  },
  methods: {
    xNum() {
      total("杭州市滨江区").then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          for (let i in res.data.data) {
            if (res.data.data[i].type == "CARTOON") {
              this.num += res.data.data[i].amount;
            } else {
              this.num1 += res.data.data[i].amount;
            }
          }
          console.log(this.num, this.num1);

          this.getpain(this.num, this.num1);
          this.getpain1();
      
        }
      });
    },
    xNum2(){
           kxj_st().then((res) => {
      
        if (res.data.code == 200) {
                console.log(res.data.data);
         this.num3=res.data.data.length

      this.getpain2(res.data.data.length);
      
        }
      });
    },
    getpain(a, b) {
      var that = this;
      let myChart2 = echarts.init(document.getElementById("pain"));
      this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [],
        },
        series: [
          {
            hoverAnimation: false,
            color: ["RGBA(107, 193, 233, 1)", "RGBA(241, 140, 37, 1)"],
            name: "",
            type: "pie",
            radius: ["80%", "100%"],
            avoidLabelOverlap: false,
            calculable: false,
            label: {
              //   show: true,
              //   position: "center",
              normal: {
                show: false,
                position: "center",
                textStyle: {
                  fontSize: 13,
                  fontWeight: "bold",
                },
                formatter: "{d}%",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "13",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: b,
                name: "手消机公共款",
                label: {
                  normal: {
                    show: true,
                  },
                },
              },

              { value: a, name: "手消机卡通款" },
            ],
          },
        ],
      };
      myChart2.setOption(this.option, true);
    },

    getpain1() {
      let myChart3 = echarts.init(document.getElementById("pain1"));
      this.option1 = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [],
        },
        series: [
          {
            hoverAnimation: false,
            color: ["RGBA(107, 193, 233, 1)"],
            name: "",
            type: "pie",
            radius: ["80%", "100%"],
            avoidLabelOverlap: false,
            label: {
              //   show: true,
              //   position: "center",
              normal: {
                show: false,
                position: "center",
                textStyle: {
                  fontSize: 13,
                  fontWeight: "bold",
                },
                formatter: "{d}%",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "13",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 11,
                name: "次氯酸发生器",
                label: {
                  normal: {
                    show: true,
                  },
                },
              },
            ],
          },
        ],
      };
      myChart3.setOption(this.option1, true);
    },
    getpain2(d) {
      let myChart4 = echarts.init(document.getElementById("pain2"));
      this.option2 = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [],
        },
        series: [
          {
            hoverAnimation: false,
            color: [ "#003767","#91A6BA"],
            name: "",
            type: "pie",
            radius: ["80%", "100%"],
            avoidLabelOverlap: false,
            label: {
              //   show: true,
              //   position: "center",
              normal: {
                show: false,
                position: "center",
                textStyle: {
                  fontSize: 13,
                  fontWeight: "bold",
                },
                formatter: "{d}%",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "13",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: d,
                name: "智能超微雾化机-手推版",
                label: {
                  normal: {
                    show: true,
                  },
                },
              },

              { value: 0, name: "智能超微雾化机-手提版" },
            ],
          },
        ],
      };
      myChart4.setOption(this.option2, true);
    },
  },
};
</script>
<style  scoped>
.mac {
  width: 100%;
  height: 30%;
  background: #f7f8fd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
}
.pinList {
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  margin-top: 16px;
}
.item {
  width: 32%;
  height: 138px;

  background: #ffffff;
  box-shadow: 0px 0px 3px 0px rgba(45, 66, 58, 0.35);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 14px 14px;
  box-sizing: border-box;
}
.item > .left > h2 {
  font-size: 16px;
  font-family: Poppins;
  font-weight: 400;
  color: #455a64;
}
.item > .left > h5 {
  font-size: 10px;
  font-family: Poppins;
  font-weight: 400;
  color: #99abb4;
}
.gg > .pot {
  width: 6px;
  height: 6px;
  background: #00a7e1;
  border-radius: 50%;
  display: inline-block;
}

.gg > .pot1 {
  width: 6px;
  height: 6px;
  background: #91a6ba;
  border-radius: 50%;
  display: inline-block;
}

.gg > span {
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #455a64;
  display: inline-block;
}
.gg > h3 {
  display: inline-block;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: #455a64;
}

.et > .pot {
  width: 6px;
  height: 6px;
  background: #f18c25;
  border-radius: 50%;
  display: inline-block;
}

.et > .pot1 {
  width: 6px;
  height: 6px;
  background: #003767;
  border-radius: 50%;
  display: inline-block;
}
.et > span {
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #455a64;
}
.et > h3 {
  display: inline-block;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: #455a64;
}

.item > .right {
  width: 85px;
  height: 85px;
}
.item > .right > #pain {
  width: 95%;
  height: 95%;
  margin-top: 27px;
}
.item > .right > #pain1 {
  width: 95%;
  height: 95%;
  margin-top: 27px;
}
.item > .right > #pain2 {
  width: 95%;
  height: 95%;
  margin-top: 27px;
}
</style>