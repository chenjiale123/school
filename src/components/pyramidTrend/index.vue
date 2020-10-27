<!--
 描述: 金字塔趋势
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="rander">
    <div class="item" v-show="active==0"> 
      <div id="charts1"></div>
      <div class="side">
        <div class="list1">
          <span class="poit"></span>
          <span class="num">1</span>
          <p>在线机器数量</p>
        </div>

        <div class="list1">
          <span class="poit"></span>
          <span class="num">1</span>
          <p>离线线机器数量</p>
        </div>
      </div>
    </div>

     <div class="item" v-show="active==1">
      <div id="charts2"></div>
      <div class="side">
        <div class="list2">
          <span class="poit"></span>
          <span class="num">0</span>
          <p>在线机器数量</p>
        </div>

        <div class="list2">
          <span class="poit"></span>
          <span class="num">0</span>
          <p>离线线机器数量</p>
        </div>
      </div>
    </div>

    <div class="list">

      <div class="bide" v-for="(item,index) in list" :key="index"     @click="toggle(index,list.name)">
        <span></span>
         <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
message:String
},
  name: "pyramidTrend",
  data() {
    return {
      childrenMessage:'',
      active:0,
      option1:null,
      option: null,
      list:[{
        name:'智能超微雾化机-手推版'
      },{
        name:'智能超微雾化机-手提版'
      }]
    };
  },
  created(){

  },
  mounted() {
    this.$nextTick(()=>{
          this.getEchart();
     this.getEchart1()
    })

  },
  watch:{
message(val){ //message即为父组件的值，val参数为值
 //将父组件的值赋给childrenMessage 子组件的值
console.log(val)

  this.childrenMessage = Number(val) *10
console.log(this.childrenMessage)
 this.getEchart()

}
},
  methods: {
      toggle(i, v) {
            this.$nextTick(()=>{
          this.getEchart();
     this.getEchart1()
    })
      this.active = i;
      this.currentView = v;

    },
    getEchart() {
      var that=this
      let myChart = echarts.init(document.getElementById("charts1"));
      var seriesData = 50;
      var data = [
        {
          value: seriesData,
          name: "已完成",
          itemStyle: {
            color: "RGBA(0, 229, 255, 1)",
          },
        },
        {
          value: 80 - seriesData,
          name: "进行中",
          itemStyle: {
            color: "RGBA(181, 247, 255, 1)",
          },
        },
        {
          value: 20,
          name: "进行中",
          itemStyle: {
            color: "transparent",
          },
        },
      ];
      var Filldata = that.childrenMessage/100;
      this.option = {
        tooltip: {
          trigger: "item",
          formatter: function (res) {
            if (res.componentSubType == "liquidFill") {
              return "";
            } else {
              return "" + res.name + "：" + res.data.value + "项";
            }
          },
        },
        title: {
          text: (Filldata * 100).toFixed(0) + "%",
          left: "center",
          top: "47%",
          textStyle: {
            fontSize: 50,
            fontWeight: "normal",
            color: "rgba(2, 252, 231, 1)",
          },
        },
        series: [
          {
            type: "liquidFill",
            data: [
              {
                value: Filldata,
              },
              {
                value: Filldata,
              },
            ],
            backgroundStyle: {
              color: "transparent",
            },
            color: ["RGBA(216, 234, 243, 1)", "RGBA(216, 234, 243, 1)"],
            radius: "66%",
            center: ["50%", "50%"],
            label: {
              normal: {
                formatter: "",
              },
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 10,
                borderColor: "RGBA(63, 225, 219, 1)",
                globalCoord: false,

                shadowBlur: 10,
              },
            },
          },
          {
            type: "pie",
            radius: ["86%", "92%"],
            label: {
              show: false,
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            hoverAnimation: false,
            data: data,
          },
        ],
      };
      myChart.setOption(this.option, true);
    },
     getEchart1() {
      let myChart1 = echarts.init(document.getElementById("charts2"));
      var seriesData = 50;
      var data = [
        {
          value: seriesData,
          name: "已完成",
          itemStyle: {
            color: "RGBA(225, 255, 2, 1)",
          },
        },
        {
          value: 80 - seriesData,
          name: "进行中",
          itemStyle: {
            color: "RGBA(240, 253, 149, 1)",
          },
        },
        {
          value: 20,
          name: "进行中",
          itemStyle: {
            color: "transparent",
          },
        },
      ];
      var Filldata = data[0].value / (data[0].value + data[1].value);
      this.option1 = {
        tooltip: {
          trigger: "item",
          formatter: function (res) {
            if (res.componentSubType == "liquidFill") {
              return "";
            } else {
              return "" + res.name + "：" + res.data.value + "项";
            }
          },
        },
        title: {
          text: (Filldata * 100).toFixed(0) + "%",
          left: "center",
          top: "47%",
          textStyle: {
            fontSize: 50,
            fontWeight: "normal",
            color: "rgba(255, 175, 2, 1)",
          },
        },
        series: [
          {
            type: "liquidFill",
            data: [
              {
                value: Filldata,
              },
              {
                value: Filldata,
              },
            ],
            backgroundStyle: {
              color: "transparent",
            },
            color: ["RGBA(216, 234, 243, 1)", "RGBA(216, 234, 243, 1)"],
            radius: "66%",
            center: ["50%", "50%"],
            label: {
              normal: {
                formatter: "",
              },
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 10,
                borderColor: "RGBA(255, 175, 2, 1)",
                globalCoord: false,

                shadowBlur: 10,
              },
            },
          },
          {
            type: "pie",
            radius: ["86%", "92%"],
            label: {
              show: false,
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            hoverAnimation: false,
            data: data,
          },
        ],
      };
      myChart1.setOption(this.option1, true);
    },
 
 },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.rander {
  width: 100%;
  height: 100%;
}
.item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#charts1 {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: url(../../assets/img/detail/databj2.png);
  background-size: 100% 100%;
}

#charts2 {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: url(../../assets/img/detail/databj1.png);
  background-size: 100% 100%;
}
.side {
  width: 130px;
  height: auto;
  overflow: hidden;
}
.side > .list1 {
  margin-top: 53px;
}
.side > .list1:nth-child(1) > .poit {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: #00e5ff;
  border-radius: 50%;
  position: relative;
  top: -8px;
}
.side > .list1:nth-child(1) > .num {
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 500;
  color: #00e5ff;
}

.side > .list1:nth-child(2) > .poit {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: rgba(181, 247, 255, 1);
  border-radius: 50%;
  position: relative;
  top: -8px;
}
.side > .list1:nth-child(2) > .num {
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 500;
  color: rgba(181, 247, 255, 1);
}
.side > .list1 > p {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  
}


.side > .list2 {
  margin-top: 53px;
}
.side > .list2:nth-child(1) > .poit {
  display: inline-block;
  width: 13px;
  height: 13px;
  background: RGBA(225, 255, 2, 1);
  border-radius: 50%;
  position: relative;
  top: -8px;
}
.side > .list2:nth-child(1) > .num {
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 500;
  color: RGBA(225, 255, 2, 1);
}

.side > .list2:nth-child(2) > .poit {
  display: inline-block;
  width: 13px;
  height: 13px;
  background:RGBA(242, 255, 148, 1);
  border-radius: 50%;
  position: relative;
  top: -8px;
}
.side > .list2:nth-child(2) > .num {
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 500;
  color:RGBA(242, 255, 148, 1);
}
.side > .list2 > p {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  
}
.list{
  display: flex;
  justify-content: space-between;
}
.bide:nth-child(1)>span:nth-child(1){
  display: inline-block;
  width: 13px;
height: 13px;
background: #02FCE7;
border-radius: 50%;
}

.bide:nth-child(1)>span:nth-child(2){

font-size: 16px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #FFFFFF;
}

.bide:nth-child(2)>span:nth-child(1){
    display: inline-block;
  width: 13px;
height: 13px;
background: rgba(181, 247, 255, 1);
border-radius: 50%;
}

.bide:nth-child(2)>span:nth-child(2){

font-size: 16px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #FFFFFF;
}
</style>
