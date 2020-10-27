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
                  <span>设备类型 </span>
          
                </td>
                <td >
                  <span>学校 </span>
          

                </td>
                <td >
                  <span>机器类型 </span>
          

                </td>
                <td >
                  <span>异常原因 </span>
          

                </td>
                <td >
                  <span>负责人 </span>
          

                </td>
                  <td >
                  <span>联系方式 </span>
          

                </td>
                  <td >
                  <span>消毒体积 </span>
          

                </td>
                <td >
                  <span>开机时间 </span>
                

                </td>
                 <td >
                  <span>结束时间 </span>
                

                </td>
                   <td >
                  <span>单次消毒体积 </span>
                

                </td>
              <td >
                  <span>喷射角度 </span>
                

                </td>
                <td >
                  <span>环境温度 </span>
                

                </td>
                  <td >
                  <span>空气湿度 </span>
                

                </td>
              </tr>
            </tbody>
          </table>

          <div :data="listData" class="seamless-warp" :class-option="optionSetting">
            <div class="error" @click="showError($event)">
            <table border="0" cellpadding="0" cellspacing="0" class="item">
              <tbody>
                <tr v-for="(item, index) in listData" :key="index">
                  <td  class="title">
                    <span>{{ item.ID }}</span>
                  </td>
                    <td >
                        <span>{{ item.equip }}</span>
                  </td>
                  <td >
                        <span>{{ item.school }}</span>
                  </td>

                  <td >
                        <span>{{ item.type }}</span>
                  </td>
                  <td >
                        <span>{{ item.result }}</span>
                  </td>
                 <td >
                        <span>{{ item.people }}</span>
                  </td>
                  <td >
                        <span>{{ item.phone }}</span>
                  </td>
                   <td >
                        <span>{{ item.size }}</span>
                  </td>
                  <td >
                      <span>{{item.start}}</span>
                  </td>
                 <td >
                      <span>{{item.end}}</span>
                  </td>
                    <td >
                      <span>{{item.singerSize}}</span>
                  </td>
                   <td >
                      <span>{{item.ger}}</span>
                  </td>
                  <td >
                      <span>{{item.wen}}</span>
                  </td>
                   <td >
                      <span>{{item.water}}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "seamless4",
  components: {
    vueSeamlessScroll,
  },

  data() {
    return {
      listData: [
        {
          water:'76%-81%',
          wen:'26°',
          ger:'80°∠',
          singerSize:'80m³',
          size:'1080m³',
          phone:'15795632586',
          equip:"智能超微雾化机-手提版",
          ID:'1254554524245',
          school:'杭州市滨江区武林门儿童之家幼儿园',
          type:'次氯酸发生器',
          people:'李三',
        result:'缺液',
        way:'2',
          start:'20.09.08',
           end:'20.09.08',

        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524262',
          school:'杭州市滨江区滨兴幼儿园',
          type:'泡沫免洗手机器人',
          people:'王继',
        result:'使用不当',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524275',
          school:'杭州市滨江区新天地幼儿园',
          type:'智能超微雾化机',
          people:'李师师',
        result:'使用不当',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524285',
          school:'杭州市闻涛小学',
          type:'泡沫免洗手机器人',
          people:'李达',
        result:'上传数据错误',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524292',
          school:'杭州市东冠小学',
          type:'智能超微雾化机',
          people:'李旺',
        result:'缺液',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
       
           {
          water:'76%-81%',
          wen:'26°',
          ger:'80°∠',
          singerSize:'80m³',
          size:'1080m³',
          phone:'15795632586',
          equip:"智能超微雾化机-手提版",
          ID:'1254554524245',
          school:'杭州市滨江区武林门儿童之家幼儿园',
          type:'次氯酸发生器',
          people:'李三',
        result:'缺液',
        way:'2',
          start:'20.09.08',
           end:'20.09.08',

        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524262',
          school:'杭州市滨江区滨兴幼儿园',
          type:'泡沫免洗手机器人',
          people:'王继',
        result:'使用不当',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524275',
          school:'杭州市滨江区新天地幼儿园',
          type:'智能超微雾化机',
          people:'李师师',
        result:'使用不当',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524285',
          school:'杭州市闻涛小学',
          type:'泡沫免洗手机器人',
          people:'李达',
        result:'上传数据错误',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524292',
          school:'杭州市东冠小学',
          type:'智能超微雾化机',
          people:'李旺',
        result:'缺液',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524275',
          school:'杭州市滨江区新天地幼儿园',
          type:'智能超微雾化机',
          people:'李师师',
        result:'使用不当',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524285',
          school:'杭州市闻涛小学',
          type:'泡沫免洗手机器人',
          people:'李达',
        result:'上传数据错误',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
        {
          water:'76%-81%',
           wen:'26°',
            ger:'80°∠',
               singerSize:'80m³',
                size:'1080m³',
            phone:'15795632586',
           equip:"智能超微雾化机-手提版",
          ID:'1254554524292',
          school:'杭州市东冠小学',
          type:'智能超微雾化机',
          people:'李旺',
        result:'缺液',
        way:'2',
          start:'20.09.08',
           end:'20.09.08'
        },
      ],
    };
  },
  computed: {
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
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
    console.log(this.message);
  },
  methods: {

 
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.yij{
  width: 81px;
height: 22px;
background: #BAB5B7;
border-radius: 6px;

font-size: 17px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #FFFFFF;
text-align: center;
line-height: 22px;
}
.wei{
  width: 81px;
height: 22px;
background: RGBA(248, 134, 0, 1);
border-radius: 6px;

font-size: 17px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #FFFFFF;
text-align: center;
line-height: 22px;
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
  height: 340px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 30px;
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
.table {
  overflow: auto;
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
    
        color: #fff;
        font-size: 15px;
        
font-family: Source Han Sans CN;
font-weight: bold;
    

      }
      
    }
    }
        .seamless-warp {
      height: 400px;
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
            // &.title {
            //   text-overflow: ellipsis;
            //   display: inline-block;
            // }
          }
        }
      }
    }
    .seamless-warp::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
    }
    .seamless-warp::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 1);
      background: rgba(255, 255, 255, 1);
    }
    .seamless-warp::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 1);
      border-radius: 0;
      background: rgba(255, 255, 255, 1);
    }
    .seamless-warp {
      height: 400px;
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
