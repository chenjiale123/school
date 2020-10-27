<!--
 描述: 新闻无缝滚动
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="sn-container">
  

    <div class="sn-body">
      <div class="wrap-container">
        <div class="table">
          <table border="0" cellpadding="0" cellspacing="0" class="table-header">
            <tbody>
              <tr>
                <td class="title">
                  <span>ID </span>
          
                </td>
                <td >
                  <span>名称 </span>
          

                </td>
                <td >
                  <span>位置 </span>
          

                </td>
                <td >
                  <span>负责人 </span>
          

                </td>
                <td >
                  <span>激活时 </span>
          

                </td>
                <td >
                  <span>最近 </span>
          

                </td>
                <td >
                  <span>总使用数 </span>

                </td>
             
              </tr>
            </tbody>
          </table>
       <div class="states"  >
          <div :data="listData" class="seamless-warp" :class-option="optionSetting">
           
            <table border="0" cellpadding="0" cellspacing="0" class="item">
              <tbody>
                <tr v-for="(item, index) in listData" :key="index">
                  <td  class="title">
                    <span>{{ item.ID }}</span>
                  </td>
                  <td >
                        <span>{{ item.name }}</span>
                        <img class="etc" src="../../assets/img/detail/edit.png" alt="">
                  </td>

                  <td >
                        <span>{{ item.address }}</span>
                        <img class="etc" src="../../assets/img/detail/edit.png" alt="">

                  </td>
                  <td >
                        <span>{{ item.people }}</span>
                        <img class="etc" src="../../assets/img/detail/edit.png" alt="">

                  </td>
                  <td >
                        <span>{{ item.jhtime }}</span>
                  </td>
                  <td >
                        <span>{{ item.now }}</span>
                  </td>
                  <td  @click='showDialog(index)'>
                        <span>{{ item.times }}</span>
                    <img src="../../assets/img/detail/in.png" alt="">

                  </td>
               
                </tr>
              </tbody>
            </table>
             
          </div>
         </div>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="50%"  style="z-index:99999999999999;" custom-class="class1">
      <div class="list">
        <div class="item">
          <h2>ID</h2>
          <h3>{{datainfo.ID}}</h3>
        </div>

        <div class="item">
          <h2>名称</h2>
          <h3>{{datainfo.name}}</h3>
        </div>
        <div class="item">
          <h2>位置</h2>
          <h3>{{datainfo.address}}</h3>
        </div>
        <div class="item">
          <h2>负责人</h2>
          <h3>{{datainfo.people}}</h3>
        </div>
        <div class="item">
          <h2>激活时间</h2>
          <h3>{{datainfo.jhtime}}</h3>
        </div>
        <div class="item">
          <h2>最近更新时间</h2>
          <h3>{{datainfo.now}}</h3>
        </div>
      </div>

      <div class="echart">
        <div class="header">

          <h1>总使用量（m3）</h1>
          <!-- <img src="../../assets/img/detail/back2.png" alt=""> -->
        </div>
         <div class="chartsdom" id="biaoge"></div>

      </div>
    </el-dialog>

  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "seamless6",
  components: {
    vueSeamlessScroll,
  },

  data() {
    return {
      option:'',
      datainfo:'',
      dialogVisible:false,
      listData: [
        {
          ID:'9682530e65b1b051',
          name:'jmbot07',
          address:'S3-14楼',
          people:'杨羊',
          jhtime:'2018-11-19',
          now:'2020-9-13',
          times:'1541',
         dateArr:[0,0,0,0,0,0,0]
        },
        {
          ID:'1c0168d76b42ac44',
          name:'jmbot01',
          address:'S3-2楼',
          people:'杨羊',
          jhtime:'2018-12-7',
          now:'2020-9-25',
          times:'801',
          dateArr:[0,0,0,0,0,0,0]
        },
    
        
      ],
    };
  },
  computed: {
    optionSetting() {
      return {
        step: 0, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {
    this.$nextTick(() => {

        var myDate = new Date(); //获取今天日期
          myDate.setDate(myDate.getDate() - 7);
          var dateArray = [];
          var dateTemp;
          var flag = 1;

          for (var i = 0; i < 7; i++) {
            var day = myDate.getDate();
            if (day < 10) {
              day = "0" + day;
            }
            dateTemp = "2020-" + (myDate.getMonth() + 1) + "-" + day;
            dateArray.push(dateTemp);
            myDate.setDate(myDate.getDate() + flag);
          }
          console.log(dateArray)
   this.getEchart(dateArray)
});
 
  },
  methods: {

    showDialog(e){
      console.log(e)

       this.datainfo= this.listData[e]
      this.dialogVisible=true

      this.$nextTick(() => {
           var myDate = new Date(); //获取今天日期
          myDate.setDate(myDate.getDate() - 7);
          var dateArray = [];
          var dateTemp;
          var flag = 1;

          for (var i = 0; i < 7; i++) {
            var day = myDate.getDate();
            if (day < 10) {
              day = "0" + day;
            }
            dateTemp =  (myDate.getMonth() + 1) + "-" + day;
            dateArray.push(dateTemp);
            myDate.setDate(myDate.getDate() + flag);
          }
this.getEchart(dateArray,this.listData[e].dateArr)
  });
    },
     
  getEchart(a,base) {
       let myChart15 = echarts.init(document.getElementById("biaoge"));

      this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} : {c} ",
          confine: true,
          extraCssText: {
            zIndex: 999999,
          },
        },
          grid: {
          left: "1%",
         
        
          containLabel: true,
        },
        legend: {
          data: [],
         
        },

        xAxis: {
          type: "category",
          data: a,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "rgba(29, 29, 27, 1)",
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
                color: "rgba(29, 29, 27, 1)",
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
            name: "总使用数(次)",
             barWidth : 30,
            color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(150, 150, 218, 1)'},                   //柱图渐变色
                        {offset: 1, color: 'rgba(132, 214, 230, 1)'},                   //柱图渐变色
                    ]
                ),
            data: base,
              itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [14, 14, 0, 0],
              },
            },
            type: "bar",
          },
         
     ],
      };

      myChart15.setOption(this.option, true);
    },

  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.class1{
  border-radius: 20px!important;
  height:800px!important;


}
.point{
  width: 41px;
  height: 11px;
  display: flex;
  justify-content: space-between;
}
.point>span{
  display: inline-block;
  width: 9px;
height: 9px;
background: #00E9D1;
border-radius: 4px;
}

.point1{
  width: 41px;
  height: 11px;
  display: flex;
  justify-content: space-between;
}
.point1>span{
  display: inline-block;
  width: 9px;
height: 9px;
background: rgba(255, 198, 0, 1);
border-radius: 4px;
}

.point2{
  width: 41px;
  height: 11px;
  display: flex;
  justify-content: space-between;
}
.point2>span{
  display: inline-block;
  width: 9px;
height: 9px;
background: rgba(255, 0, 0, 1);
border-radius: 4px;
}
.xia{
        display: inline-block;
        width: 16px;
        height: 11px;
        margin-left: 6px;
      }
.sn-container {
  width: 100%;
  height: 300px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
}
.bt {
  display: flex;
  justify-content: space-between;
  // padding: 0 30px;
  box-sizing: border-box;
  align-items: center;
  background: #eaecf2;
}
.top {
  width: 100%;
  height: 76px;
  background: #eaecf2;
  padding: 25px 39px;
  box-sizing: border-box;
}
.top > h2 {
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #595f6f;
  display: inline-block;
}
.eng {
  display: inline-block;
  margin-left: 10px;
}
.eng > span {
  display: block;

  font-size: 10px;
  font-family: Montserrat;
  font-weight: 500;
  color: #595f6f;
  position: relative;
  top: 6px;
}
.bt > img {
  width: 35px;
  height: 14px;
  display: inline-block;
  margin-right: 30px;
}
.sn-container {
  // left: 1370px;
  // top: 110px;



  %table-style {
    width: 100%;
    height: 35px;
    table-layout: fixed;
    tr {
      td {
        padding: 10px 5px;
        text-align: center;
        // background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
        font-size: 14px;
         overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
      background:transparent;
      tr {
      td {
        padding: 10px 5px;
        text-align: center;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
        font-size: 15px;
        
font-family: Source Han Sans CN;
font-weight: bold;

      }
      
    }
    }
    .seamless-warp {
      height: 420px;
      overflow: auto;
      visibility: visible;
      .colorRed {
        color: #ff4669;
      }
      .colorOrange {
        color: #ffc956;
      }
      .item {
        height: auto;
        @extend %table-style;
        tr {
          td {
             .etc{
                      width: 13px;
              height: 13px;
                 display: inline-block;
             }
            img{
              width: 32px;
              height: 13px;
              display: inline-block;
            }
            // &.title {
            //   text-overflow: ellipsis;
            //   display: inline-block;
            // }
          }
        }
      }
    }
  .seamless-warp::-webkit-scrollbar {/*滚动条整体样式*/
		width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
		height: 4px;
	}
	.seamless-warp::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 1);
		background: rgba(255, 255, 255, 1);
	}
	.seamless-warp::-webkit-scrollbar-track {/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 1);
		border-radius: 0;
		background: rgba(255, 255, 255, 1);
	}
  }
}


.list{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // overflow: hidden;
}
.list>.item{
  margin-top: 50px;
  width: 33%;
}
.list>.item>h2{

font-size: 30px;
font-family: Montserrat;
font-weight: 500;
color: #181818;
}
.list>.item>h3{
  
font-size: 30px;
font-family: Montserrat;
font-weight: 300;
color: #181818;
margin-top: 26px;
line-height: 30px;

}

.echart{

  width: 100%;
  height: 480px;
  margin-top: 52px;
}
.echart>.header{
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.echart>.header>h1{
  
font-size: 25px;
font-family: Source Han Sans CN;
font-weight: 500;
color: #181818;
}
.echart>.header>img{
  display: inline-block;
  width: 23px;
  height: 23px;
}
#biaoge{
  width: 100%;
  height: 480px;
  margin-top: 10px;
}
</style>
