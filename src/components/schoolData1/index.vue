<template>
  <div class="school">
    <div id="chartData"></div>

  </div>
</template>
<script>
 import Equip from '../../views/Equipment'
export default {
  components:{
    Equip
  },
  data() {
    return {
      option: "",

    };
  },
  mounted() {
      this.getChart()
  },
  methods: {
    getChart() {
      let myChart = echarts.init(document.getElementById("chartData"));

    
    
      this.option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
                 axisTick: {
            //y轴刻度线
            show: false,
          },
          axisLine: {
            //y轴
            show: false,
          },
          axisLabel: {
            
                interval:0,
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
            type: "category",
            data: ["浙江警察学院", "浙江中医药大学", "杭州市滨江区职业高级中学", "浙江省杭州长河高中", "杭州浦沿中学", "浙江省杭州西兴中学", "长河中学"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
               nameTextStyle:{//y轴上方单位的颜色
              color:'#fff'  
            },
              name:'m3',
            type: "value",
           "axisTick":{       //y轴刻度线
          "show":false
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
          }
          },
        ],
        series: [
          {
                 itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'RGBA(255, 151, 129, 1)'},
                  
                        {offset: 1, color: 'RGBA(255, 118, 77, 1)'}
                    ]
                )
            },
            name: "",
            type: "bar",
            barWidth: "20%",
            data: [35241, 32105, 20935, 21524, 22390, 25330, 26220],
             showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.2)'
        }
          },
        ],
        dataZoom: {
          show: true, // 为true 滚动条出现
          realtime: true,
          type: "slider", // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
          height: 5, // 表示滚动条的高度，也就是粗细
          start: 20, // 表示默认展示20%～80%这一段。
          end: 80,
          bottom:5
        },
      };
      myChart.setOption(this.option, true);
      var that=this
          myChart.on('click', function (params) { 
            console.log(params)
          that.$emit('fromChild', params.name)
          })
  
    },
  },
};
</script>
<style  scoped>
.school {
  width: 100%;
  height:100%;
}
#chartData {
  width: 100%;
  height: 75%;
}


</style>