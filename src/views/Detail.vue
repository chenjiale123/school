<template>
  <div class="detail">
    <div class="top1">
      <div class="left">
        <img src="../assets/img/detail/logo.png" alt class="logo" @click="index" />
        <h2>卫生防控监测</h2>
        <img src="../assets/img/detail/title.png" class="feng" alt />

        <h3>{{ name }}</h3>
      </div>
      <div class="right" @click="returnBack">
        <img src="../assets/img/detail/back.png" alt />
        <span>返回</span>
      </div>
    </div>
    <div class="centerMin">
      <ul class="tabbar">
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: active == index }"
          @click="toggle(index, list.text)"
        >
          <img :src="active == index ? item.img : item.img1" alt />
          <span>{{ item.text }}</span>
        </li>
      </ul>

      <div class="main" v-if="active == 0">
        <div class="left">
          <div class="sum">
            <div class="title">
              <h2>数量统计</h2>
              <p>Number of statistical</p>
            </div>
            <Num />
          </div>

          <div class="edata">
            <Data />
          </div>

          <div class="error">
            <div class="title">
              <h2>异常状态报警</h2>
              <p>Abnormal state alarm</p>
            </div>

            <seamless2 />
          </div>
        </div>
        <!-- <img src="../assets/img/detail/title.png" alt /> -->
       <div class="centerH">
               <img src="../assets/img/heng.png" alt="" class="heng1">
                    <img src="../assets/img/heng.png" alt="" class="heng1">
        </div>
        <div class="right">
          <div class="times">
            <div class="title">
              <h2>使用次数（次）</h2>
              <p>Use the number</p>
            </div>
            <Times />
          </div>

          <div class="status">
            <div class="title">
              <h2>设备状态</h2>
              <p>Equipment state</p>
            </div>

            <div class="table">
              <div class="seath">
                <img src="../assets/img/detail/seath.png" alt />
                <el-input placeholder="ID/名称...."></el-input>
              </div>
              <seamless1 />
            </div>
          </div>
        </div>
      </div>
      <div class="main" v-if="active == 1">

                <div class="left">
          <div class="sum">
            <div class="title">
              <h2>使用量(L)</h2>
              <p>USAGE COUNT</p>
            </div>
            <Times4 />
          </div>

          <div class="edata">
            <Data2 />
          </div>

          <div class="error">
            <div class="title">
              <h2>异常状态报警</h2>
              <p>Abnormal state alarm</p>
            </div>

            <seamless7 />
          </div>
        </div>
        <!-- <img src="../assets/img/detail/title.png" alt /> -->
        <div class="centerH">
               <img src="../assets/img/heng.png" alt="" class="heng1">
                    <img src="../assets/img/heng.png" alt="" class="heng1">
        </div>
        <div class="right">
          <div class="times">
  <div class="title">
              <h2>消毒记录</h2>
              <p>Disinfection record</p>
            </div>
            <seamless9/>
          </div>

          <div class="status">
            <div class="title">
              <h2>设备状态</h2>
              <p>Equipment state</p>
            </div>

            <div class="table">
              <div class="seath">
                <img src="../assets/img/detail/seath.png" alt />
                <el-input placeholder="ID/名称...."></el-input>
              </div>
              <seamless8 />
            </div>
          </div>
        </div>
      </div>
      <div class="main" v-if="active == 2">
        <div class="left">
          <div class="sum">
            <div class="title">
              <h2>使用量(m³)</h2>
              <p>USAGE COUNT</p>
            </div>
            <Times3 />
          </div>

          <div class="edata">
            <Data1 />
          </div>

          <div class="error">
            <div class="title">
              <h2>异常状态报警</h2>
              <p>Abnormal state alarm</p>
            </div>

            <seamless5 />
          </div>
        </div>
        <!-- <img src="../assets/img/detail/title.png" alt /> -->
     <div class="centerH">
               <img src="../assets/img/heng.png" alt="" class="heng1">
                    <img src="../assets/img/heng.png" alt="" class="heng1">
        </div>
        <div class="right">
          <div class="times">

            <Yibiao/>
          </div>

          <div class="status">
            <div class="title">
              <h2>设备状态</h2>
              <p>Equipment state</p>
            </div>

            <div class="table">
              <div class="seath">
                <img src="../assets/img/detail/seath.png" alt />
                <el-input placeholder="ID/名称...."></el-input>
              </div>
              <seamless6 />
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="45%"
      style="z-index: 99999999999999"
      custom-class="class1"
    >
      <div class="hover">
        <img src="../assets/img/detail/error.png" alt="" class="mainimg" />
        <h1>您的院校有5台设备异常</h1>
        <div class="etc">
          泡沫免洗手机器人-卡通版
          <span>{{sxj1}}台</span>
        </div>
        <div class="etc">
          泡沫免洗手机器人-公共版

          <span>{{sxj2}}台</span>
        </div>

        <div class="etc">
          次氯酸发生器

          <span>4台</span>
        </div>
        <div class="etc">
          智能超微雾化机-手提版

          <span>0台</span>
        </div>
        <div class="etc">
          智能超微雾化机-手推版

          <span>1台</span>
        </div>
        <!-- <img src="../assets/img/detail/click.png" alt="" class="click"> -->
        <div class="tiaoguo">
          <svg
            class="ring-container"
            :style="`width: ${size}; height: ${size}`"
          >
            <rect
              width="100"
              height="45"
              :stroke="backgroundColor"
              :stroke-width="width"
              stroke-linecap="round"
              fill="none"
            ></rect>
            <rect
              width="100"
              height="45"
              :stroke-width="width"
              :stroke="color"
              :stroke-dasharray="`${circum}`"
              fill="none"
            >
              <animate
                attributeName="stroke-dashoffset"
                :from="circum"
                :to="endCircum"
                :dur="originCountDown"
              />
            </rect>
            <text
              :x="cx + 29"
              :y="cx - 20"
              text-anchor="end"
              :font-size="fontSize"
              :fill="fontColor"
              @click="skip"
            >
              点击跳过
            </text>
          </svg>
        </div>
        <div class="day">
          <el-radio v-model="radio" label="1">
            <span>当天不在弹出</span></el-radio
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Num from "../components/number";
import Data from "../components/data";
import Data1 from "../components/data1";
import Data2 from "../components/data2";
import Times from "../components/times";
import Times3 from "../components/times3";
import Times4 from "../components/times4";

import Yibiao from "../components/yibiao";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default {
  components: {
    Num,
    Times,
    Times3,
    Times4,
    Data,
    Data1,
      Data2,
    Yibiao,
  },
  props: {
    fontSize: {
      type: Number,
      default: 15,
    },
    size: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 2,
    },
    backgroundColor: {
      type: String,
      default: "RGBA(82, 131, 255, 1)",
    },
    color: {
      type: String,
      default: "#eee",
    },
    fontColor: {
      type: String,
      default: "#999",
    },
    originCountDown: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      sxj1:'',
      sxj2:'',
      endCircum: 0,
      countDown: this.originCountDown,
      radio: false,
      dialogVisible: true,
      name: "",
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
    };
  },
  computed: {
    cx() {
      // 中心点位置
      return this.size / 2;
    },
    r() {
      // 半径
      return this.size / 2 - this.width;
    },
    circum() {
      return parseInt(this.r * Math.PI * 2);
    },
  },
  created() {
    console.log(this.$route.query.name);

    this.name = this.$route.query.name;
   
    this.getTimeSetCookieFun();
      
  },
  mounted() {
    this.interval = setInterval(() => {
      let diff = "1";
      this.countDown -= diff;
      if (this.countDown <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
    this.setime();
    this.initWebSocket()
  },
  methods: {
     initWebSocket() {
      this.connection();
      let that = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      // this.timer = setInterval(() => {
        try {
          that.stompClient.send(
            "/app/jydx",
            JSON.stringify({ sender: "123" })
          );
        } catch (err) {
          console.log("断线了: " + err);
          that.connection();
        }
      // }, 5000);
    },
        connection() {
      var that = this;
      // 建立连接对象
      let socket = new SockJS("http://192.168.101.24:8080/stomp");
      // 获取STOMP子协议的客户端对象
      this.stompClient = Stomp.over(socket);
      // 定义客户端的认证信息,按需求配置
      let headers = {
        Authorization: "",
      };
      // 向服务器发起websocket连接
      this.stompClient.connect(
        headers,
        () => {
          this.stompClient.subscribe(
            "/topic/jydx",
            (msg) => {
              // 订阅服务端提供的某个topic
              console.log("广播成功");
                 console.log(JSON.parse(msg.body));
              console.log(JSON.parse(msg.body)["JYHP01"].length);
                  console.log(JSON.parse(msg.body)["CARTOON"].length);
                this.sxj1=JSON.parse(msg.body)["CARTOON"].length
            this.sxj2=JSON.parse(msg.body)["JYHP01"].length
      
            },
            headers
          );
          this.stompClient.send(
            "/app/show",
            headers,
            JSON.stringify({ sender: "123", chatType: "JOIN" })
          ); //用户加入接口
        },
        (err) => {
          // 连接发生错误时的处理函数
          console.log("失败");
          console.log(err);
        }
      );
    },

    //连接 后台
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
    },
    setime() {
      var that = this;
      setTimeout(() => {
        that.skip()
      }, 6000);
    },
    skip() {
      this.dialogVisible = false;
         var newTime = new Date().getDate();
           if(this.radio==true){
      this.setcookieTimeFun("day", newTime, 1);
        
      }

    },
    returnBack() {
      this.$router.go(-1);
    },
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    },

    getTimeSetCookieFun() {
      var day = this.getCookieFun("day") == "" ? "" : this.getCookieFun("day");
      if (day == "") {
        // console.log('没有cookie,说明过期或者还没有存,弹窗22222,同时需要设置新的cookie')
        this.dialogVisible = true;
        var newTime = new Date().getDate();
        // this.setcookieTimeFun("day", newTime, 1);
      } else {
        var newTime = new Date().getDate();
        if (newTime > day) {
          // console.log('我是新的一天,我要弹窗')
          this.dialogVisible = true;
          this.setcookieTimeFun("day", newTime, 1);
        } else {
          this.dialogVisible = false;
        }
      }
    },
    // 设置cookie时间
    setcookieTimeFun(name, value, Days) {
      console.log(this.radio)
    
      value = new Date().getDate();
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
    },
    // 取出设置的cookie时间,存在就返回获取到的值,不存在返回''
    getCookieFun(c_name) {
      if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          let c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) {
            c_end = document.cookie.length;
          }
          return decodeURIComponent(document.cookie.substring(c_start, c_end));
        }
      }
      return "";
    },
    //移除某一个cookie
    delTimeCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookieFun(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
      index(){
      this.$router.push('/home')
    }
  },
};
</script>
<style scoped>

.centerH{
  width: 100%;
  height: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heng1{
  width: 50%;
  height: 1px;
  display: block;

}
.ring-container {
}
.ring {
  width: 119px;
  height: 49px;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
.day {
  position: absolute;
  bottom: 31px;
  right: 38px;
}
.day span {
  font-size: 21px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #171717;
}
.hover {
  width: 100%;
  height: 500px;
  text-align: center;
  position: relative;
}
.class1 {
  border-radius: 20% !important;
}
.hover > h1 {
  font-size: 44px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #171717;
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
}
.mainimg {
  display: block;
  width: 106px;
  height: 106px;
  margin: 0 auto;
  margin-bottom: 34px;
}
.click {
  width: 119px;
  height: 49px;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
}
.etc {
  margin: 15px auto;

  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #171717;
}
.etc > span {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #171717;
}
.detail {
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
  width: auto;
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
  margin-left: 24px;
}
.feng {
  width: 1px;
  height: 23px;
  display: inline-block;
    margin-left: 18px;
}
.top1 > .left > h3 {
  font-size: 35px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  display: inline-block;
    margin-left: 18px;
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
.centerMin {
  width: 100%;
  height: 95%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  box-sizing: border-box;
}
.tabbar {
  margin-top: 38px;
  width: 99px;
  height: 407px;
  background: rgba(49, 135, 172, 0.1);
  box-shadow: -7px 5px 188px 0px rgba(0, 0, 0, 0.09);

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 50px 0;
}
.tabbar > li {
  display: block;
  margin: 0 auto;
}
.tabbar > li > img {
  display: inline-block;
  width: 34px;
  height: 45px;
}
.tabbar > li > span {
  display: block;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(74, 144, 174, 1);
  width: 51px;
  white-space: wrap;
  text-align: center;
  margin-left: -6px;
}
.main {
  width: 95%;
  height: 100%;

  margin-left: 32px;
}
.main > .left {
  width: 100% !important;

  overflow: hidden;
  height: 48%;
  display: flex;
  justify-content: space-between;
}

.sum {
  width: 33.3%;
}
.num {
  height: 100%;
  width: 33.3%;
}
.times {
  height: 100%;
  width: 45%;
  border-right: 1px dashed RGBA(150, 220, 249, 1);
  padding-right: 2.5%;
  box-sizing: border-box;
}
.status {
  height: 100%;
  width: 50%;
}
.edata {
  height: 443px !important;
  width: 30%;
}
.error {
  height: 100%;
  width: 36%;
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
.main > .right {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
}
.main > .shu {
  width: 1px;

  margin-right: 50px;
}
.active > span {
  display: block;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgb(255, 255, 255) !important;
  width: 51px;
  white-space: wrap;
  text-align: center;
  margin-left: -6px;
}
.table {
  width: 100%;
  height: 100%;
}
.seath {
  float: right;
  width: 233px;
  height: 32px;
  position: relative;
  margin-right: 30px;
}
.seath > img {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: absolute;
  right: 9px;
  top: 6px;
  z-index: 999;
}
.seath > .el-input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.el-input >>> .el-input__inner {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>