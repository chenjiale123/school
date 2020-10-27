<template>
    <div class="equip">
        <div class="top1">
      <div class="left">
        <img src="../assets/img/detail/logo.png" alt class="logo" @click="index"/>
        <h2>设备防控监测</h2>
     

     
      </div>
      <div class="right" @click="returnBack">
        <img src="../assets/img/detail/back.png" alt />
        <span>返回</span>
      </div>
    </div>

        <div class="centerMain">

      <div class="main">
         <div class="left">
           <div class="lefttop">
  <div class="title">
              <h2>异常设备总量（台）</h2>
              <p>TOTAL AMOUNT OF ABNORMAL EQUIPMENT</p>
            </div>
            <Ring />
           </div>
  <div class="leftbottom">
  <div class="title">
              <h2>设备异常原因</h2>
              <p>CAUSE OF EQUIPMENT ABNORMALITY</p>
            </div>
            <Radar />
         
  </div>
         </div>
          <div class="right">
           <div class="righttop">
                 <div class="title">
              <h2>学校异常设备总量</h2>
              <p>TOTAL AMOUNT OF ABNORMAL EQUIPMENT IN THE SCHOOL</p>
            </div>
 <Rose/>
           </div>
  <div class="rightbottom">
         <div class="title">
              <h2>异常设备状态</h2>
              <p>ABNORMAL EQUIPMENT STATUS</p>
            </div>
 <seamless3/>
  </div>

          </div>
          </div>
</div>
    </div>
</template>

<script>
import Ring from "../components/ring";
import Rose from "../components/rose";
import Radar from "../components/radar";
export default {
    components:{
Ring,
Rose,
Radar
    },
    data(){
        return{
   active: 0,
      currentView: "泡沫免洗手机器人",
      list: [
        {
          img: require("../assets/img/detail/sxj.png"),
          img1: require("../assets/img/detail/sxj1.png"),
          text: "泡沫免洗手机器人",
        },
        {
          img: require("../assets/img/detail/xdj1.png"),
          img1: require("../assets/img/detail/xdj.png"),
          text: "次氯酸发生器",
        },
        {
          img: require("../assets/img/detail/whj1.png"),
          img1: require("../assets/img/detail/whj.png"),
          text: "智能超微雾化机",
        },
      ],
        }
    }, methods: {
    returnBack() {
      this.$router.go(-1);
    },
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    },
    index(){
      this.$router.push('/home')
    }
  },
}
</script>
<style scoped>

.equip {
  width: 100%;
  height: 100%;
  background: url(../assets/img/detail/bj.png);
  background-size: 100% 100%;
}
.top1 {
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  border-bottom: 1px dashed RGBA(139, 180, 198, 1);
  align-items: center;
}
.top1 > .left {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 143px;
  height: 51px;
  display: inline-block;
}
.top1 > .left > h2 {
  font-size: 35px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  display: inline-block;
}
.feng {
  width: 1px;
  height: 23px;
  display: inline-block;
}
.top1 > .left > h3 {
  font-size: 35px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  display: inline-block;
}
.top1 > .right > img {
  display: inline-block;
  width: 24px;
  height: 24px;
}
.top1 > .right > span {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #ffffff;
}
.main{
    width: 100%;
  height: calc(100%-85px);
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
}


.centerMain {
  width: 100%;
  height: 95%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
}

.main {
  width: 100%;
  height: 98%;

  margin-left: 32px;
  display: flex;
  justify-content: space-between;
}
.main>.left{
    width: 45%;
    height: 100%;
       border-right: 1px dashed RGBA(150, 220, 249, 1);
   padding-right: 2.5%;
   box-sizing: border-box;
}
.main>.right{
    width: 52%;
    height: 100%;
    
}
.lefttop{
    width: 100%;
    height: 45%;
}
.leftbottom{
    width: 100%;
    height: 45%;
    margin-top: 10%;
}

.righttop{
    width: 100%;
    height: 45%;
    /* overflow: hidden; */
}
.rightbottom{
    width: 100%;
    height: 45%;
    margin-top: 0%;
}
.title > h2 {
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  margin-top: 36px;
}
.title > p {
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 300;
  color: #ffffff;
  margin-top: 13px;
}


</style>