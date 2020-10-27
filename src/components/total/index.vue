<template>
  <div class="total">
    <div class="top">
      <h2>区域日消毒总量</h2>
      <div class="eng">
        <span>DATA FOR REGIONAL</span>
        <span>DISINFECTION</span>
      </div>
    </div>
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, i) in pictures"
            :key="i"
            :class="{ active: active == item.index }"
            @click="selected(item.index)"
          >
            <img :src="item.img" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="tab" v-if="active == 2">
      <div class="item">
        <div class="icon9"></div>
        <div class="info">
          <div class="title">
            <h5 class="num1">
              <!-- <countTo :startVal='0' :endVal='sxj1' :duration='1000'></countTo>(次) -->
              {{ sxj1 }}(次)
            </h5>
            <!-- <span>The total number</span> -->
          </div>
          <h3>泡沫免洗手机器人-卡通版</h3>
          <p>FOAMING HAND WASH-FREE ROBOTCartoon version</p>
        </div>
      </div>

      <div class="item">
        <div class="icon9"></div>
        <div class="info">
          <div class="title">
            <h5 class="num2">
              <!-- <countTo :startVal='0' :endVal='sxj2' :duration='1000'></countTo>(次) -->

              {{ sxj2 }}(次)
            </h5>
            <!-- <span>The total number</span> -->
          </div>
          <h3>泡沫免洗手机器人-公共款</h3>
          <p>FOAMING HAND WASH-FREE ROBOTCartoon version</p>
        </div>
      </div>
    </div>

    <div class="tab" v-if="active == 1">
      <div class="item">
        <div class="icon9"></div>
        <div class="info">
          <div class="title">
            <h5 class="num3">
              <!-- <countTo :startVal='0' :endVal='cls' :duration='1000'></countTo> (L) -->
              {{ cls }}(L)
            </h5>
            <!-- <span>The total number</span> -->
          </div>
          <h3>次氯酸发生器</h3>
          <p>FOAMING HAND WASH-FREE ROBOTCartoon version</p>
        </div>
      </div>
    </div>

    <div class="tab" v-if="active == 3">
      <div class="item">
        <div class="icon9"></div>
        <div class="info">
          <div class="title">
            <h5 class="num4">
              <!-- <countTo :startVal='0' :endVal='whj' :duration='1000'></countTo> -->
              {{ whj }} (m3)
            </h5>
            <!-- <span>The total number</span> -->
          </div>
          <h3>智能超微雾化机-手提版</h3>
          <p>FOAMING HAND WASH-FREE ROBOTCartoon version</p>
        </div>
      </div>

      <div class="item">
        <div class="icon9"></div>
        <div class="info">
          <div class="title">
            <h5 class="num5">
              <!-- <countTo :startVal='0' :endVal='xdj' :duration='1000'></countTo>  -->
              {{ xdj }} (m3)
            </h5>
            <!-- <span>The total number</span> -->
          </div>
          <h3>智能超微雾化机-手推版</h3>
          <p>FOAMING HAND WASH-FREE ROBOTCartoon version</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { list } from "../../api/main";
import "swiper/swiper-bundle.js";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      stompClient: "",
      time: "",
      active: 2,
      sxj1: undefined,
      sxj2: undefined,
      cls: 341,
      whj: 0,
      xdj: 243,
      timer1: "",
      timer: "",
      pictures: [
        {
          index: 1,
          img: require("../../assets/img/home/li1.png"),
        },
        {
          index: 2,
          img: require("../../assets/img/home/li3.png"),
        },
        {
          index: 3,
          img: require("../../assets/img/home/li5.png"),
        },
      ],
    };
  },

  methods: {
    // 次氯酸列表
    menulist() {
      list(sessionStorage.getItem("uid")).then((res) => {
        console.log(res);
      });
    },
    // 手消机

    selected(name) {
      this.active = name;
    },
    getUserInfo() {
      if (this.active <= 2) {
        this.active++;
      } else {
        this.active = 1;
      }
    },

    initWebSocket() {
      this.connection();
      let that = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      // this.timer = setInterval(() => {
        try {
       
          that.stompClient.send(
            "/app/show",
            JSON.stringify({ sender: "123" })
          );
         
        } catch (err) {
            
          console.log("断线了: " + err);
          that.connection();
        }
      // }, 1000);
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
            "/topic/show",
            (msg) => {
              // 订阅服务端提供的某个topic
              console.log("广播成功");
              console.log(JSON.parse(msg.body));
              that.sxj1 = JSON.parse(msg.body).usageInfos[0].count;
              that.sxj2 = JSON.parse(msg.body).usageInfos[1].count;
              //     that.numFun(0, that.sxj1);
              // that.numFun1(0, that.sxj2);
            },
            headers
          );
          this.stompClient.send(
            "/app/show",
            headers,
            JSON.stringify({ sender: "123" })
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
    numFun(startNum, maxNum) {
      var that = this;
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun() {
        // 数字动画
        numText += 80; // 速度的计算可以为小数 。数字越大，滚动越快
        if (numText >= maxNum) {
          numText = maxNum;
          cancelAnimationFrame(golb);
        } else {
          golb = requestAnimationFrame(numSlideFun);
        }
        that.sxj1 = numText;

        // console.log(numText)
      }
      numSlideFun(); // 调用数字动画
    },
    numFun1(startNum, maxNum) {
      var that = this;
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun() {
        // 数字动画
        numText += 500; // 速度的计算可以为小数 。数字越大，滚动越快
        if (numText >= maxNum) {
          numText = maxNum;
          cancelAnimationFrame(golb);
        } else {
          golb = requestAnimationFrame(numSlideFun);
        }
        that.sxj2 = numText;

        // console.log(numText)
      }
      numSlideFun(); // 调用数字动画
    },
    numFun2(startNum, maxNum) {
      var that = this;
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun() {
        // 数字动画
        numText += 200; // 速度的计算可以为小数 。数字越大，滚动越快
        if (numText >= maxNum) {
          numText = maxNum;
          cancelAnimationFrame(golb);
        } else {
          golb = requestAnimationFrame(numSlideFun);
        }
        that.cls = numText;

        // console.log(numText)
      }
      numSlideFun(); // 调用数字动画
    },

    numFun3(startNum, maxNum) {
      var that = this;
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun() {
        // 数字动画
        numText += 400; // 速度的计算可以为小数 。数字越大，滚动越快
        if (numText >= maxNum) {
          numText = maxNum;
          cancelAnimationFrame(golb);
        } else {
          golb = requestAnimationFrame(numSlideFun);
        }
        that.whj = numText;

        // console.log(numText)
      }
      numSlideFun(); // 调用数字动画
    },
    numFun4(startNum, maxNum) {
      var that = this;
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun() {
        // 数字动画
        numText += 500; // 速度的计算可以为小数 。数字越大，滚动越快
        if (numText >= maxNum) {
          numText = maxNum;
          cancelAnimationFrame(golb);
        } else {
          golb = requestAnimationFrame(numSlideFun);
        }
        that.xdj = numText;

        // console.log(numText)
      }
      numSlideFun(); // 调用数字动画
    },
    // getdata(){
    //     this.sxj1= this.sxj1+256
    //      this.sxj2= this.sxj2+389
    //       this.xdj=this.xdj+246
    //        this.whj=this.whj+230
    //         this.cls=this.cls+53
    // }
  },

  mounted() {
    var that = this;
    this.menulist();
    this.initWebSocket();

    // this.timer = setInterval(this.getUserInfo, 6000);

    that.numFun2(0, that.cls);
    that.numFun3(0, that.whj);
    that.numFun4(0, that.xdj);
  },
  beforeDestroy() {
    this.disconnect();
    // clearInterval(this.time);
    clearInterval(this.timer);
    clearInterval(this.timer1);
  },
};
</script>
<style  scoped>
.total {
  width: 100%;
  height: 50%;
  background: #f7f8fd;
  border-radius: 5px;
  overflow: hidden;
}

.lunbo {
  width: 100%;
  height: 40%;
  margin-top: 14px;
}
.swiper-container {
  width: 100% !important;
  padding: 20px 0;
  height: 100%;
}
.swiper-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  height: 100%;
}
.swiper-slide {
  width: 86px !important;
  height: 86px;
  background: #ffffff;
  box-shadow: 0px 9px 32px 0px rgba(156, 156, 156, 0.2);
  border-radius: 50%;
  line-height: 87px;
  text-align: center;
  margin-right: 0px !important;
}

.active {
  /* width: 190px !important;
  height: 190px; */
  　transform: scale(2.1);
  background: #ffffff;
  box-shadow: 0px 9px 32px 0px rgba(156, 156, 156, 0.2);
  border-radius: 50%;
  text-align: center;
  　transition: all 0.8s;
}
.swiper-slide:nth-child(1) > img {
  width: 43px;
  height: 40px;
  display: inline-block;

  margin-top: 25px;
}
.swiper-slide:nth-child(2) > img {
  width: 43px;
  height: 54px;
  display: inline-block;
  line-height: 87px;
  margin-top: 15px;
}
.swiper-slide:nth-child(3) > img {
  width: 30px;
  height: 54px;
  display: inline-block;
  line-height: 87px;
  margin-top: 15px;
}
.active > img {
  /* width: 40%!important;
  height: 60%!important; */
  display: inline-block;
}

.tab {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 0 30px;
  box-sizing: border-box;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
}
.item {
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.item > .icon9 {
  width: 10px !important;
  height: 10px;
  background: #e9a424;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 4px;
}
.item > .info {
  height: 100%;
}
.item > .info > .title > h5 {
  display: inline-block;

  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  color: #455a64;
}
.item > .info > .title > span {
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  color: #99abb4;
}
.item > .info > h3 {
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #455a64;
}
.item > .info > p {
  font-size: 8px;
  font-family: Montserrat;
  font-weight: 400;
  color: #595757;
}
</style>