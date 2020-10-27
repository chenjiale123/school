<!--
 描述: 金字塔趋势
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">学校异常情况</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_ptrend"></div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>

export default {
  name: "pyramidTrend",
  data() {
    return {
      option: null,
      dataMap: {}
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    dataFormatter(obj) {
      let pList = ['Mon','Tues','Wed','Thur','Fri','Sat','Sun'];
      let temp;
      for (let x = 0; x < 2; x++) {
          let max = 0;
          let sum = 0;
          temp = obj[x];
          for (let i = 0, l = temp.length; i < l; i++) {
              max = Math.max(max, temp[i]);
              sum += temp[i];
              obj[x][i] = {
                name: pList[i],
                value: temp[i]
              };
          }
          obj[x + 'max'] = Math.floor(max / 100) * 100;
          obj[x + 'sum'] = sum;
      }
      return obj;
    },
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_ptrend'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff'
      }

      this.dataMap.dataType = this.dataFormatter({
        1:[124,145,261,54,195,131,150],
        0:[136,159,205,41,306,7,77]
      
      });

      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            data: ['上周', '本周'],
            left: 80,
            right: 80,
            bottom: 10,
            lineStyle: {
              color: '#179bf1'
            },
            label: {
              color: '#fff'
            },
            checkpointStyle: {
              color: '#01d8ff',
              symbolSize: 10,
              borderColor: 'rgba(1, 216, 255, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              show: false,
            }, 
            itemStyle: {
              borderColor: '#004b85',
              borderWidth: 1,
              shadowColor: 'rgba(1, 216, 225, 0.5)',
              shadowBlur: 5
            },
            emphasis: {
              label: {
                color: '#01d8ff',
                show: false
              },
              checkpointStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 255, 0.5)',
                borderWidth: 5,
              },
              itemStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 225, 0.5)',
                borderWidth: 5
              } 
            }
          },
          calculable: true,
          grid: {
            top: '10%',
            bottom: '25%'
          },
          xAxis: [{
            type: 'category',
            axisLabel: {
              interval: 0
            },
            data: ['滨江小学','长一幼儿园','西兴中学','实验小学','滨河小学','闻涛小学','欧文幼儿园'],
            splitLine: { 
              show: false 
            },
            axisTick: {
              show: false
            }, 
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8',
              }
            },
          }],
          yAxis: [{
            type: 'value',
            name: '人数',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }, 
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8'
              }
            }
          }],
          series: [{
            name: '上周', 
            type: 'bar',
            barWidth: 15,
            legendHoverLink: true,
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
          }]
        },
        options: [{
          series: [{
            data: this.dataMap.dataType['0'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['1'],
            itemStyle: itemStyle
          }]
        }]
      }

      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  // left: 666px;
  // top: 1548px;
  width: 35%;
  height: 50%;

  .chartsdom {
    width: 100%;
    height: 100%;
  }
}


</style>
