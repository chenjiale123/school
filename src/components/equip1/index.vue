<template>
  <div class="equip1">
    <div id="charts"></div>
  </div>
</template>
<script>

export default {
    name:'equip1',
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
      let myChart6 = echarts.init(document.getElementById("charts"));
var num1 = 3;
var num2 = 8;
var num3 = 10;
var num4 = 1;
var num5 = 1;
this.option = {
    graphic: {
        elements: [{
            type: "image",
            z: 6,
            style: {
                image: "",
                width: 40,
                height: 40
            },
            left: 'center',
            top: "42%",
            position: [100, 100]
        }]
    },

    series: [
        {
            // background:'RGBA(133, 117, 180, 1)',
            type: 'pie',
            radius: ['25%', '0%'],
            center: ['50%', '50%'],
            data: [{
               label: { //  饼图图形上的文本标签
                normal: { // normal 是图形在默认状态下的样式
                  show: true,
                  position: 'center',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  formatter: ' {c}\n\ 设备总台数' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                }
              },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 11,
                hoverAnimation: false,
                itemStyle: {
                    color: "#8575B4",
                    shadowBlur: 5,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowOffsetX:'3',
                    shadowOffsetY:'3',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['30%', '45%'],
            center: ['50%', '50%'],
            startAngle: -150,
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        color: '#02FCE7',
                    
                        borderWidth:'1',
                    },
                       label: {
                           color:'#fff',
              show: true,
              position: "outside",
                formatter: ' {c} \n\r 在线设备（台）'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 16,
              length2: 80,
              lineStyle: {
                color: "#02FCE7",
              },
              //   }
            },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 3,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['50%', '50%'],
            startAngle: 70,
            data: [{
                    hoverOffset: 1,
                    value: num2,
                    name: '',
                    itemStyle: {
                        color: '#02C2FC',
                    
                        borderWidth:'1',
                    },
                     label: {
                           color:'#fff',
              show: true,
              position: "outside",
                formatter: ' {c} \n\r 离线设备（台）'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 16,
              length2: 60,
              lineStyle: {
                color: "#02C2FC",
              },
              //   }
            },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                      
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 6,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['60%', '75%'],
            center: ['50%', '50%'],
            startAngle: -70,
            data: [{
                    hoverOffset: 1,
                    value: num3,
                    name: '',
                    itemStyle: {
                        color: '#FDD252',
                    
                        borderWidth:'1',
                    },
                     label: {
                           color:'#fff',
              show: true,
              position: "outside",
                formatter: ' {c} \n\r 正常工作设备（台）'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
                    
              //   normal: {
              show: true,
              length: 16,
              length2: 40,
              lineStyle: {
                color: "#FDD252",
              },
              //   }
            },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 5,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['75%', '90%'],
            center: ['50%', '50%'],
            startAngle: 80,
            data: [{
                    hoverOffset: 1,
                    value: num4,
                    name: '',
                    itemStyle: {
                        color: '#ED7050',
                    
                        borderWidth:'1',
                    },
                     label: {
                           color:'#fff',
              show: true,
              position: "outside",
                formatter: ' {c} \n\r 异常设备（台）'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 16,
              length2: 16,
              lineStyle: {
                color: "#ED7050",
              },
              //   }
            },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 10,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
   ]
};
      myChart6.setOption(this.option, true);
   },
    back(){
        this.getChart();
    }
  },
};
</script>
<style  scoped>
.equip1 {
  width: 100%;
  height: 100%;
  position: relative;
  top: -30px;
}
#charts {
  width: 90%;
  height: 90%;
  
}
.equip1>img{
  display: inline-block;
  width: 19px;
  height: 19px;
  position: absolute;
  bottom: 0;
  right: 100px;
}
</style>