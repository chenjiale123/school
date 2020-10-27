<!--
 描述: 新闻无缝滚动
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="sn-container">
    <div class="bt">
      <div class="top">
        <h2>卫生防控监测</h2>
        <!-- <div class="eng">
          <span>SANITATION ,</span>
          <span> PREVENTION CONTROL  </span>
         
        </div> -->
      </div>

      <img src="../../assets/img/home/in.png" alt @click="detail" />
    </div>

    <div class="sn-body">
      <div class="wrap-container">
        <div class="table">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="table-header"
          >
            <tbody>
              <tr>
                <td width="65%" class="title">
                  <span>学校 </span>
                  <img src="../../assets/img/home/xia.png" alt="" class="xia"      @click="bindStatus1"/>
                   <div class="status1" v-if="status1">
                    <ul>
                      <li>幼儿园</li>
                      <li>小学</li>
                      <li>初中</li>
                         <li>高中</li>
                           <li>大学</li>
                    </ul>
                  </div>
                </td>
                <td width="35%">
                  <span>防控状态 </span>
                  <img
                    src="../../assets/img/home/xia.png"
                    alt=""
                    class="xia"
                    @click="bindStatus"
                  />
                  <div class="status" v-if="status">
                    <ul>
                      <li>正常状态</li>
                      <li>警告状态</li>
                      <li>异常状态</li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <vue-seamless-scroll
            :data="listData"
            class="seamless-warp"
            :class-option="optionSetting"
          >
            <div class="all">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="item"
                @click="showDialog($event)"
              >
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">
                    <td width="75%" class="title" :data-start="item.start">
                      <span>{{ item.start }}</span>
                    </td>
                    <td width="25%" :data-end="item.end">
                      <div v-if="item.end == '1'" class="point">
                        <img src="../../assets/img/home/ac.png" alt="" />
                      </div>
                      <div v-if="item.end == '2'" class="point1">
                        <img src="../../assets/img/home/war.png" alt="" />
                      </div>
                      <div v-if="item.end == '3'" class="point2">
                        <img src="../../assets/img/home/err.png" alt="" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll,
  },

  data() {
    return {
      status: false,
         status1: false,
      listData: [
        {
          start: "杭州浦沿中学",
          end: "2",
        },
        {
          start: "浙江省杭州西兴中学",
          end: "2",
        },
        {
          start: "杭州市钱塘实验小学",
          end: "3",
        },
        {
          start: "杭州市东冠小学",
          end: "1",
        },
        {
          start: "杭州市博文小学",
          end: "1",
        },
        {
          start: "杭州市闻涛小学",
          end: "2",
        },
        {
          start: "钱塘春晓幼儿园",
          end: "2",
        },
        {
          start: "杭州市滨江区月亮湾学前教育集团",
          end: "3",
        },
        {
          start: "杭州市滨江区新天地幼儿园",
          end: "1",
        },
        {
          start: "杭州市滨江区东方郡幼儿园",
          end: "1",
        },
        {
          start: "杭州市滨江区滨兴幼儿园",
          end: "2",
        },
        {
          start: "杭州市滨江区武林门儿童之家幼儿园",
          end: "2",
        },
        {
          start: "杭州市滨江区硅谷蒙学幼儿园",
          end: "3",
        },
        {
          start: "杭州市滨江区欧文幼儿园",
          end: "1",
        },
        {
          start: "杭州市滨江区唯诗礼幼儿园",
          end: "1",
        },
        {
          start: "杭州市滨江区华媒维翰彩虹幼儿园",
          end: "1",
        },
        {
          start: "滨江区长一幼儿园",
          end: "1",
        },
      ],
    };
  },
  computed: {
    optionSetting() {
      return {
        step: 0.1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
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

  },
  methods: {
  
    bindStatus() {
      this.status = !this.status;
    },
     bindStatus1() {
      this.status1 = !this.status1;
    },
    showDialog(row) {
      console.log(row);
    },
    detail() {
      this.$router.push("/unusual");
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.point {
  width: 41px;
  height: 11px;
  display: flex;
  justify-content: space-between;
}
.point > img {
  width: 25px;
  height: 25px;
  display: block;
  position: relative;
  top: -4px;
}

.point1 {
  width: 41px;
  height: 11px;
  display: flex;
  justify-content: space-between;
}

.point1 > img {
  width: 25px;
  height: 25px;
  display: block;
  position: relative;
  top: -4px;
}
.point2 {
  width: 41px;
  height: 11px;
  display: flex;
  justify-content: space-between;
}
.point2 > img {
  width: 25px;
  height: 25px;
  display: block;
  position: relative;
  top: -4px;
}
.xia {
  display: inline-block;
  width: 16px;
  height: 11px;
  margin-left: 6px;
}
.sn-container {
  width: 100%;
  height: 53%;
  background: #f7f8fd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
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
    tr:nth-child(odd) {
      /* 匹配奇数行 */
      background-color: #fff;
      color: black;
    }

    tr:nth-child(even) {
      /* 匹配偶数行 */
      background-color: RGBA(247, 248, 253, 1);
      color: black;
    }

    tr {
      td {
        padding: 10px 5px;
        text-align: center;
        // background-color: transparent;
        white-space: nowrap;
        // color: #e2e5ff;
        font-size: 14px;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
      background: #fff;
      tr {
        td {
          padding: 10px 5px;
          text-align: center;
          background-color: transparent;
          white-space: nowrap;
          color: rgba(15, 53, 141, 1);
          font-size: 15px;

          font-family: Source Han Sans CN;
          font-weight: bold;
          position: relative;
           .status1 {
            width: 100%;
            height: 200px;
            position: absolute;
            top: 50px;
            left: 0;
            z-index: 999999999999999;
            background: #fff;

            ul {
              width: 100%;
              height: 100%;
              li {
                width: 100%;
                height: 40px;
                font-size: 15px;
                text-align: center;
                line-height: 40px;
              }
            }
          }
          .status {
            width: 100%;
            height: 120px;
            position: absolute;
            top: 50px;
            left: 0;
            z-index: 999999999999999;
            background: #fff;

            ul {
              width: 100%;
              height: 100%;
              li {
                width: 100%;
                height: 40px;
                font-size: 15px;
                text-align: center;
                line-height: 40px;
              }
            }
          }
        }
      }
    }
    .seamless-warp {
      height: 400px;
      overflow: hidden;
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
            // &.title {
            //   text-overflow: ellipsis;
            //   display: inline-block;
            // }
          }
        }
      }
    }
  }
}
</style>
