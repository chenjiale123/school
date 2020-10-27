<!--
 描述: 多彩轮播面积
 作者: Jack Chen
 日期: 2020-05-03
-->

<template>
  <div class="sn-container">
    <div class="top">
      <h2>消毒数据峰谷图</h2>
      <div class="eng">
        <span>PEAK-VALLEY GRAPH FOR</span>
        <span>DISINFECTION DATA</span>
      </div>
    </div>
    <div class="sn-body">
      <div class="chartsdom" id="chart_cra"></div>
    </div>
  </div>
</template>

<script>
import { week } from "../../api/main";

import { week1 } from "../../api/main";
export default {
  name: "colorfulArea",
  data() {
    return {
      option: null,
      dataMap: {},
      weeklist: [],
      weeklist1: [],
    };
  },
  created() {
    var that = this;
    var date = new Date();

    var totay =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    week( "杭州市滨江区").then((res) => {
      if (res.data.code == 200) {
        that.weeklist = res.data.data;

  console.log(res.data.data)
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
        var arr = [];
        for (let i in that.weeklist) {
          arr.push(that.weeklist[i].date);
        }
        // that.weeklist = arr;
            console.log(arr)
                console.log(dateArray)
              var a = this.getArrEqual1(arr, dateArray);
          this.weeklist = a;
            console.log(a);
  week1( )
  .then(res=>{
    if (res.data.code == 200) {
        that.weeklist1 = res.data.data;

  console.log(res.data.data)
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
        var arr = [];
        for (let i in that.weeklist1) {
          arr.push(that.weeklist1[i].date);
        }
        // that.weeklist = arr;
            console.log(arr)
                console.log(dateArray)
              var b = that.getArrEqual1(arr, dateArray);
          that.weeklist1 = b;
            console.log(b);
    that.getEchart(that.weeklist, that.weeklist1);
    }
  })


      }
    });

    // week1(totay)
    //   .then((res) => {
    //     if (res.data.code == 200) {
    //       that.weeklist1 = res.data.data;
    //       console.log( res.data.data)
    //       var myDate = new Date(); //获取今天日期
    //       myDate.setDate(myDate.getDate() - 7);
    //       var dateArray = [];
    //       var dateTemp;
    //       var flag = 1;

    //       for (var i = 0; i < 7; i++) {
    //         var day = myDate.getDate();
    //         if (day < 10) {
    //           day = "0" + day;
    //         }
    //         dateTemp = "2020-" + (myDate.getMonth() + 1) + "-" + day;
    //         dateArray.push(dateTemp);
    //         myDate.setDate(myDate.getDate() + flag);
    //       }

    //       var arr = [];
    //       for (let i in this.weeklist1) {
    //         arr.push(this.weeklist1[i].date);
    //       }
    //       console.log(this.weeklist1);
    //       console.log(dateArray);
    //       var a = this.getArrEqual(arr, dateArray);
    //       this.weeklist1 = a;
    //       console.log(a);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // setTimeout(() => {

    //         console.log(that.weeklist1);
    //   console.log(that.weeklist);
    //   this.getEchart(that.weeklist, that.weeklist1);
   
   
    // }, 1000);
  },
  methods: {

     getArrEqual(arr1, arr2) {
      
        console.log(arr1,arr2)
        var a;
        let newArr = [];
        for (let i = 0; i <arr1.length ; i++) {
          for (let j = 0; j <arr2.length ; j++) {
            if (i == 0) {
              if (arr1[i] == arr2[j]) {
                console.log(this.weeklist1[i].usage);
                console.log(j + "1111111111111");
                a = j;
                newArr[a] = this.weeklist1[i].usage;
                console.log(a + "3333333");
              } else {
                newArr[j] = 0;
              }
            }
    
            if (i > 0) {
              
              if (arr1[i] == arr2[j]) {
    
                  newArr[j] = this.weeklist1[i].usage;
                  console.log(j + "222222222222");
                  a = j;
                  console.log(a + "444444444444");
    
              }
            }
          }
        }
        return newArr;
      },

        getArrEqual1(arr1, arr2) {
      
        console.log(arr1,arr2)
        var a;
        let newArr = [];
        for (let i = 0; i <arr1.length ; i++) {
          for (let j = 0; j <arr2.length ; j++) {
            if (i == 0) {
              if (arr1[i] == arr2[j]) {
               
                console.log(this.weeklist[i].count);
                console.log(j + "1111111111111");
                a = j;
                newArr[a] = this.weeklist[i].count;
                console.log(a + "3333333");
              } else {
                newArr[j] = 0;
              }
            }
    
            if (i > 0) {
              
              if (arr1[i] == arr2[j]) {
    
                  newArr[j] = this.weeklist[i].count;
                  console.log(j + "222222222222");
                  a = j;
                  console.log(a + "444444444444");
    
              }
            }
          }
        }
        return newArr;
      },
    getWeek() {
      var date = new Date();

      var totay =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      week(totay, "杭州市滨江区").then((res) => {
        if (res.data.code == 200) {
          this.weeklist = res.data.data;
          console.log(res.data.data);
        }
      });
    },
    getWeek1() {
      var date = new Date();

      var totay =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      week1(totay)
        .then((res) => {
          if (res.code == 200) {
            this.weeklist1 = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getEchart(a, b) {
      var myDate = new Date();
      var that = this;
      let myChart6 = echarts.init(document.getElementById("chart_cra"));

      this.option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ",
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
          data: ["免洗手机器人(次)", "次氯酸发生器(L)", "智能超微雾化机(m3)"],
          left: 30,
          bottom: 15,
          icon: "circle",

          itemWidth: 10,

          itemHeight: 10,
          textStyle: {
            color: "rgba(29, 29, 27, 1)",
          },
        },

        xAxis: {
          type: "category",
          data: [
             (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 7),
              (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 6),
           (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 5),
            (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 4),
           (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 3),
           (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 2),
         (myDate.getMonth() + 1) + "-" + (myDate.getDate() - 1),
          ],
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
            name: "免洗手机器人(次)",
            color: ["rgba(248, 134, 0, 1)"],
            data: a,
            type: "bar",
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 0, 0],
              },
            },
          },
          {
            name: "次氯酸发生器(L)",
            color: ["rgba(39, 198, 218, 1)"],
            data: [237,
24,
38,
312,
289,
189,
369]
,
            type: "bar",
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 0, 0],
              },
            },
          },

          {
            name: "智能超微雾化机(m3)",
            color: ["rgba(145, 166, 186, 1)"],
            data: b,
            type: "bar",
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 0, 0],
              },
            },
          },
        ],
      };

      myChart6.setOption(this.option, true);
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.sn-container {
  width: 100%;
  height: 50%;
  background: #f7f8fd;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
}
.sn-body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
}
.chartsdom {
  width: 100%;
  height: 85%;
}
</style>
