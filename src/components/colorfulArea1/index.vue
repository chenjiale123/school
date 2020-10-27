<!--
 描述: 多彩轮播面积
 作者: Jack Chen
 日期: 2020-05-03
-->

<template>
  <div class="sn-container">
    <div class="chartsdom" id="chart_cra1"></div>
  </div>
</template>

<script>
export default {
  name: "colorfulArea",
  data() {
    return {
      option: null,
      dataMap: {},
      wdata:'',
      temList:[]
    };
  },
  mounted() {
    this.getWether()
  

  },
  methods: {
  getWether(){
    var that=this
axios.get('https://www.tianqiapi.com/api/?version=v9&appid=91464947&appsecret=a3D58GxD&city=杭州')
.then(res=>{


 
  that.temList=res.data.data[0].hours
  var arr=[]
  var arr1=[]
  for(let i in that.temList){
  arr.push(that.temList[i].hours)
   arr1.push(that.temList[i].tem)
  }

    that.getEchart( arr,arr1);
})
},
    getEchart(a,b) {
      let myChart1 = echarts.init(document.getElementById("chart_cra1"));
      var option = {
        tooltip: {
          
          position: ['50%', '50%'],
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        color: ["#F88600"],
        legend: {
          data: [],
        },
        toolbox: {
          feature: {
            // saveAsImage: {},
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            position :"top",
            axisLine: {
              //坐标轴轴线相关设置。
              show: false,
            },
            axisTick: {
              //y轴刻度线
              show: false,
            },
            type: "category",
            boundaryGap: false,
            data: a,
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              //坐标轴轴线相关设置。
              show: false,
            },
            axisTick: {
              //y轴刻度线
              show: false,
            },
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
              },
              show: false,
            },

            axisLabel: {
              show: false,

              textStyle: {
                color: "#1D1D1B",
              },
            },
          },
        ],
        series: [
          {
            name: "温度",
            type: "line",
            stack: "总量",

            data: b,

            lineStyle: {
              color: "#fff",
            },

    
            borderWidth: 2, //拐点边框大小
          },
        ],
      };

      myChart1.setOption(option, true);
    },
  },
  beforeDestroy() {},
};
</script>

<style  scoped>
.sn-container {
  width: 80%;
  height: auto;
    margin: 0 auto;
  
      box-sizing: border-box;
   overflow: hidden;
}

#chart_cra1 {
  width: 100%;
  height: 150px;


  margin-top: -60px;




}

</style>
