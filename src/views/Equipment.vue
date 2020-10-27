<template>
  <div class="equip">
    <div class="top1">
      <div class="left">
        <img src="../assets/img/detail/logo.png" alt class="logo" @click="index"/>
        <h2>设备使用详情</h2>
      </div>
      <div class="right" @click="returnBack">
        <img src="../assets/img/detail/back.png" alt />
        <span>返回</span>
      </div>
    </div>

    <div class="centerMain">
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
          <div class="lefttop">
            <div class="title">
              <h2>总使用数据</h2>
              <p>TOTAL USER DATA</p>
            </div>
            <Num1 />
          </div>
          <img src="../assets/img/heng.png" alt="" class="heng" />
          <div class="leftbottom">
            <div class="title">
              <h2>分时段使用数据(万次)</h2>
              <p>USER DATA BY TIME</p>
            </div>
            <Times1 />
          </div>
        </div>
        <div class="right">
          <div class="righttop">
            <div class="daytime">
              <div class="real">
                <div class="title">
                  <h2>实时使用数据（次）</h2>
                  <p>REAL_TIME USER TIME</p>
                </div>
              </div>
              <span>{{ this.sxj1+this.sxj2 }}</span>
              <div class="day">
                <div class="title1">
                  <div class="span">
                    <h2>{{ hour }}:{{ min }}</h2>
                    <span>Time</span>
                  </div>

                  <p>HANGZHOU 2020.{{ mouth }}.{{ day }}</p>
                </div>
              </div>
            </div>
            <div class="errorData">
              <div class="left">
                <div class="title">
                  <h2>设备状况</h2>
                  <p>EQUIPMENT CONDITION</p>
                </div>
                <div class="list">
                  <div class="item">
                    <span></span>
                    <span>泡沫免洗手机器人卡通版</span>
                  </div>
                  <div class="item">
                    <span></span>
                    <span>泡沫免洗手机器人公共版</span>
                  </div>
                </div>
                <div id="charterror1"></div>
              </div>
              <div class="right">
                <div class="title">
                  <h2>耗材状况（瓶）</h2>
                  <p>SUPPLIES MARGIN</p>
                </div>
                <div class="list1">
                  <div class="item">
                    <span></span>
                    <span>泡沫免洗手机器人卡通版</span>
                  </div>
                  <div class="item">
                    <span></span>
                    <span>泡沫免洗手机器人公共版</span>
                  </div>
                </div>
                <div id="charterror2"></div>
              </div>
            </div>
          </div>

          <div class="rightbottom">
            <div class="title">
              <h2>学校使用数据</h2>
              <p>SCHOOL USE DATA</p>
            </div>
            <School @fromChild="getChild" />
          </div>
        </div>
      </div>

      <div class="main1" v-if="active == 1">
        <div class="top3">
          <div class="left1">
            <div class="title">
              <h2>设备数据</h2>
              <p>Equipment data</p>
            </div>
            <Equip1 />
          </div>
          <div class="right1">
            <div class="righttop">
              <div class="daytime">
                <div class="real">
                  <div class="title">
                    <h2>实时使用数据(升)</h2>
                    <p>REAL_TIME USER TIME</p>
                  </div>
                </div>
                <span> 341 </span>
                <div class="day">
                  <div class="title1">
                    <div class="span">
                      <h2>{{ hour }}:{{ min }}</h2>
                    <span>Time</span>
                    </div>

                    <p>HANGZHOU 2020.{{ mouth }}.{{ day }}</p>
                  </div>
                </div>
              </div>
              <div class="errorData">
                <div class="left">
                  <div class="title">
                    <h2>设备状况</h2>
                    <p>EQUIPMENT CONDITION</p>
                  </div>
                  <div class="list2">
                    <div class="item">
                      <span></span>
                      <span>次氯酸生成器</span>
                    </div>
                  </div>
                  <div id="charterror3"></div>
                </div>
                <div class="right">
                  <div class="title">
                    <h2>耗材状况（升）</h2>
                    <p>SUPPLIES MARGIN</p>
                  </div>
                  <div class="list3">
                    <div class="item">
                      <span></span>
                      <span>次氯酸生成器</span>
                    </div>
                  </div>
                  <div id="charterror4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="centerH">
          <img src="../assets/img/heng.png" alt="" class="heng1" />
          <img src="../assets/img/heng.png" alt="" class="heng1" />
        </div>
        <div class="bottom1">
          <div class="left1">
            <div class="title">
              <h2>使用数据（升）</h2>
              <p>USAGE COUNT</p>
            </div>
            <Times5 />
          </div>
          <div class="right1">
            <div class="title">
              <h2>学校使用数据</h2>
              <p>SCHOOL USE DATA</p>
            </div>
            <School2 @fromChild="getChild" />
          </div>
        </div>
      </div>

      <div class="main2" v-if="active == 2">
        <div class="top2">
          <div class="left2">
            <pyramidTrend  :message="clickData"  />
          </div>
          <div class="center2">
            <div class="title">
              <h2>流量调节</h2>
              <p>TOTAL USER DATA</p>
            </div>
            <div class="lider">
              <el-slider
                v-model="value"
                vertical
                height="300px"
                :step="3"
                :max="9"
                :show-tooltip="false"
                @change="numchange"
              >
              </el-slider>

              <div class="ceji">
                <span
                  v-for="(item, index) in listitem"
                  :key="index"
                  :class="active1 / 3 == item.index ? 'active1' : ''"
                >
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
          <div class="right2">
            <div class="righttop">
              <div class="daytime">
                <div class="real">
                  <div class="title">
                    <h2>实时使用数据（m3）</h2>
                    <p>REAL_TIME USER TIME</p>
                  </div>
                </div>
                <span> 236 </span>
                <div class="day">
                  <div class="title1">
                    <div class="span">
                      <h2>{{ hour }}:{{ min }}</h2>
                      <span>Time</span>
                    </div>

                    <p>HANGZHOU 2020.{{ mouth }}.{{ day }}</p>
                  </div>
                </div>
              </div>
              <div class="errorData">
                <div class="left">
                  <div class="title">
                    <h2>设备状况</h2>
                    <p>EQUIPMENT CONDITION</p>
                  </div>
                  <div class="list">
                    <div class="item">
                      <span></span>
                      <span>智能超微雾化机手提版</span>
                    </div>
                    <div class="item">
                      <span></span>
                      <span>智能超微雾化机手推版</span>
                    </div>
                  </div>
                  <div id="charterror5"></div>
                </div>
                <div class="right">
                  <div class="title">
                    <h2>耗材状况（m3）</h2>
                    <p>SUPPLIES MARGIN</p>
                  </div>
                  <div class="list1">
                    <div class="item">
                      <span></span>
                      <span>智能超微雾化机手提版</span>
                    </div>
                    <div class="item">
                      <span></span>
                      <span>智能超微雾化机手推版</span>
                    </div>
                  </div>
                  <div id="charterror6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="centerW">
          <img src="../assets/img/heng.png" alt="" class="heng1" />
          <img src="../assets/img/heng.png" alt="" class="heng1" />
        </div>
        <div class="bottom2">
          <div class="left3">
            <div class="title">
              <h2>使用数据（m3）</h2>
              <p>USAGE COUNT</p>
            </div>
            <Times2 />
          </div>
          <div class="right3">
            <div class="title">
              <h2>学校使用数据</h2>
              <p>SCHOOL USE DATA</p>
            </div>
            <School1 @fromChild="getChild" />
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      style="z-index: 99999999999999"
      custom-class="class1"
    >
      <div class="hover">
        <img src="../assets/img/detail/error.png" alt="" class="mainimg" />
        <h1>此区域所有设备流量将调节至该档位</h1>

        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="sure"
            >确 定</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Num1 from "../components/number1";
import Times1 from "../components/times1";
import Times2 from "../components/times2";
import Times5 from "../components/times5";
import School from "../components/schoolData";
import School1 from "../components/schoolData1";
import School2 from "../components/schoolData2";
import Equip1 from "../components/equip1";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import  eventBus from '../utils/eventBus.js'
// import "../assets/styles/moude.scss";
export default {
  name: "equip",

  components: {
    Num1,
    Times1,
    School,
    School1,
    School2,
    Times2,
    Times5,
    Equip1,
  },
  data() {
    return {
      clickData:'',
      sxj1:'',
      sxj2:'',
      dialogVisible: false,
      active1: 0,
      listitem: [
        { index: 3, name: "- 高档" },
        {
          index: 2,
          name: "- 中档",
        },
        {
          index: 1,
          name: "- 低档",
        },
      ],

      value: 0,
      childVal: "",
      num: 8254,
      timer1: "",
      num1: 265,
      num2: 965,
      mouth: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
      option6: "",
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
      timer: "",
      timer2: "",
      timer1: "",
     active2:''

    };
  },
  mounted() {
    var that = this;
    console.log(this.active1 / 3);
    if (this.hour < 10) {
      this.hour = "0" + this.hour;
    }
    if (this.min < 10) {
      this.min = "0" + this.min;
    }


    this.timer1 = setInterval(that.getnum1, 2000);
    this.timer2 = setInterval(that.getnum2, 2000);

    this.getChart1();
    this.getChart2();
 this.initWebSocket()
  },
  methods: {
    cancel(){
       console.log(this.active1)  
      this.dialogVisible = false;
  console.log(this.value)
    },
    sure(){
            // this.active1 = e;

           this.dialogVisible = false;

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
            "/topic/show",
            (msg) => {
              // 订阅服务端提供的某个topic
              console.log("广播成功");
              console.log(JSON.parse(msg.body));
              that.sxj1 = JSON.parse(msg.body).usageInfos[0].count;
              that.sxj2 = JSON.parse(msg.body).usageInfos[1].count;
               that.hdmExceptionList=JSON.parse(msg.body).hdmExceptionList.length
      
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
    numchange(e) {
      console.log(e);

      this.dialogVisible = true;

            this.active1 = e;

 
       console.log(this.value)
this.clickData=this.active1
   
    },
    getChild(v) {
      this.childVal = v;
      console.log(v);
      if (v == "浙江警察学院") {
        let myChart = echarts.init(document.getElementById("charterror1"));
        this.option1.series[0].data = [
          { value: 39, name: "正常使用" },
          { value: 4, name: "机器故障" },
          { value: 2, name: "异常使用" },
        ];
        myChart.setOption(this.option1);

        let myChart1 = echarts.init(document.getElementById("charterror2"));
        this.option2.series[0].data = [
          { value: 5, name: "剩余量" },
          { value: 5, name: "使用量" },
        ];
        myChart1.setOption(this.option2);
      } else if (v == "浙江中医药大学") {
        let myChart = echarts.init(document.getElementById("charterror1"));
        this.option1.series[0].data = [
          { value: 30, name: "正常使用" },
          { value: 2, name: "机器故障" },
          { value: 2, name: "异常使用" },
        ];
        myChart.setOption(this.option1);

        let myChart1 = echarts.init(document.getElementById("charterror2"));
        this.option2.series[0].data = [
          { value: 6, name: "剩余量" },
          { value: 4, name: "使用量" },
        ];
        myChart1.setOption(this.option2);
      }
    },
    returnBack() {
      this.$router.go(-1);
    },
    toggle(i, v) {
      var that = this;
      this.active = i;
      this.currentView = v;
      if (i == 0) {
        console.log(i);
        that.$nextTick(() => {
          that.getChart1();
          that.getChart2();
        });
      } else if (i == 1) {
        that.$nextTick(() => {
          that.getChart3();
          that.getChart4();
        });
      } else if (i == 2) {
        that.$nextTick(() => {
          that.getChart5();
          that.getChart6();
        });
      }
    },
    // getnum() {
    //   this.num = this.num + 173;
    // },
    getnum1() {
      this.num1 = this.num1 + 73;
    },
    getnum2() {
      this.num2 = this.num2 + 123;
    },
    getChart1() {
      let myChart = echarts.init(document.getElementById("charterror1"));
      this.option1 = {
        color: [
          "RGBA(255, 151, 0, 1)",
          "RGBA(255, 106, 84, 1)",
          "RGBA(255, 73, 47, 1)",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          left: 10,
          data: [],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: "RGBA(255, 151, 0, 1)",
              },
              //   }
            },
            data: [
              { value: 36, name: "正常使用" },
              { value: 3, name: "机器故障" },
              { value: 2, name: "异常使用" },
            ],
          },
          ,
          {
            color: ["RGBA(255, 255, 255, 1)"],
            name: "",
            type: "pie",
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                formatter: " {c} \n\r 机器总数量", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 15, name: "正常工作数量" }],
          },
        ],
      };
      myChart.setOption(this.option1);
    },
    getChart2() {
      let myChart1 = echarts.init(document.getElementById("charterror2"));
      this.option2 = {
        color: ["RGBA(255, 151, 0, 1)", "RGBA(255, 187, 89, 1)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          left: 10,
          data: [],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: "RGBA(255, 151, 0, 1)",
              },
              //   }
            },
            data: [
              { value: 7, name: "剩余量" },
              { value: 3, name: "使用量" },
            ],
          },
          {
            color: ["RGBA(255, 255, 255, 1)"],
            name: "",
            type: "pie",
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                formatter: " {c} \n\r 耗材总数量", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 316, name: "耗材总数量" }],
          },
        ],
      };
      myChart1.setOption(this.option2);
    },

    getChart3() {
      let myChart3 = echarts.init(document.getElementById("charterror3"));
      this.option3 = {
        color: ["#02FCE7", "#FF6A54", "RGBA(255, 73, 47, 1)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          left: 10,
          data: [],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: "RGBA(255, 151, 0, 1)",
              },
              //   }
            },
            data: [
              { value: 36, name: "正常使用" },
              { value: 3, name: "机器故障" },
              { value: 2, name: "异常使用" },
            ],
          },
          {
            color: ["RGBA(255, 255, 255, 1)"],
            name: "",
            type: "pie",
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                formatter: " {c} \n\r 机器总数量", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 3, name: "机器总数量" }],
          },
        ],
      };
      myChart3.setOption(this.option3);
    },
    getChart4() {
      let myChart4 = echarts.init(document.getElementById("charterror4"));
      this.option4 = {
        color: ["#02FCE7", "#02C2FC"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          left: 10,
          data: [],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: "RGBA(255, 151, 0, 1)",
              },
              //   }
            },
            data: [
              { value: 7, name: "剩余量" },
              { value: 3, name: "使用量" },
            ],
          },
          {
            color: ["RGBA(255, 255, 255, 1)"],
            name: "",
            type: "pie",
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                formatter: " {c} \n\r 耗材总数量", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 314, name: "耗材总数量" }],
          },
        ],
      };
      myChart4.setOption(this.option4);
    },

    getChart5() {
      let myChart5 = echarts.init(document.getElementById("charterror5"));
      this.option5 = {
        color: [
          "RGBA(255, 151, 0, 1)",
          "RGBA(255, 106, 84, 1)",
          "RGBA(255, 73, 47, 1)",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          left: 10,
          data: [],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: "RGBA(255, 151, 0, 1)",
              },
              //   }
            },
            data: [
              { value: 36, name: "正常使用" },
              { value: 3, name: "机器故障" },
              { value: 2, name: "异常使用" },
            ],
          },
          {
            color: ["RGBA(255, 255, 255, 1)"],
            name: "",
            type: "pie",
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                formatter: " {c} \n\r 机器总数量", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 2, name: "机器总数量" }],
          },
        ],
      };
      myChart5.setOption(this.option5);
    },
    getChart6() {
      let myChart6 = echarts.init(document.getElementById("charterror6"));
      this.option6 = {
        color: ["RGBA(255, 151, 0, 1)", "RGBA(255, 187, 89, 1)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          left: 10,
          data: [],
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              //   normal: {
              show: true,
              length: 5,
              length2: 5,
              lineStyle: {
                color: "RGBA(255, 151, 0, 1)",
              },
              //   }
            },
            data: [
              { value: 7, name: "剩余量" },
              { value: 3, name: "使用量" },
            ],
          },
          {
            color: ["RGBA(255, 255, 255, 1)"],
            name: "",
            type: "pie",
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: "center",
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                formatter: " {c} \n\r 耗材总数量", // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 456, name: "耗材总数量" }],
          },
        ],
      };
      myChart6.setOption(this.option6);
    },
   index(){
      this.$router.push('/home')
    }
 },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  },
};
</script>
<style lang='scss'  scoped>
/deep/ .el-slider {
  width: 400px;
  margin: 0 auto;
  width: 56px !important;
  margin-top: 44px;

  /deep/.el-slider__runway {
    height: 100%;
    width: 56px !important;
    margin: 0 auto;
    background-color: RGBA(51, 68, 82, 1);

    border-radius: 10px 10px 10px 10px;

    /deep/ .el-slider__bar {
      width: 56px;
      background: RGBA(255, 175, 2, 1);
      border-radius: 10px 10px 10px 10px;
    }

    /deep/ .el-slider__button-wrapper {
      width: 103px;
      height: 103px;
    }
    /deep/ .el-slider__button {
      position: relative;
      width: 103px;
      height: 103px;
      margin: 0 auto;

      border: none;
      border-radius: 50%;
      box-sizing: border-box;

      background: url(../assets/img/detail/icon.png);
      background-size: 100% 100%;
      left: -6%;
    }
  }
  /deep/ .el-slider__stop {
    width: 1px;
    height: 31px;
    border-radius: 0;
    background-color: #dcdfe6;
  }
  /deep/ .el-slider__marks-text {
    color: #717171;
    margin-top: 0;
  }
}

.heng {
  width: 100%;
  height: 1px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: -20px;
}

.centerH {
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.centerW {
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 38px;
}

.heng1 {
  width: 50%;
  height: 1px;
  display: block;
}
.hover {
  width: 100%;
  height: 500px;
  text-align: center;
  position: relative;
}
/deep/ .el-dialog{
    width: 65%!important;
  height:600px!important ;
}
.class1 {
  border-radius: 20% !important;
  width: 60%!important;
  height:600px!important ;
}

.hover > h1 {
  width: 50%;
  font-size: 44px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #171717;
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
  line-height: 50px;
}
.mainimg {
  display: block;
  width: 106px;
  height: 106px;
  margin: 0 auto;
  margin-bottom: 34px;
}
.active1 {
  color: rgba(255, 175, 2, 1) !important;
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
.ceji {
  display: inline-block;
  height: 100%;
  margin-right: 30%;
  position: relative;
  left: -16px;
}
.ceji > span {
  display: block;
  line-height: 110px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #334452;
}

.top3 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
}

.bottom1 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
}
.top3 > .left1 {
  width: 45%;
  height: 100%;
}

.top3 > .right1 {
  width: 55%;
  height: 100%;
}

.bottom1 > .left1 {
  width: 45%;
  height: 100%;
}

.bottom1 > .right1 {
  width: 55%;
  height: 100%;
}
.top2 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
}

.bottom2 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
}
.left2 {
  width: 33%;
  height: 100%;
}
.center2 {
  width: 17%;
  height: 100%;
}
.right2 {
  width: 50%;
  height: 100%;
}
.left3 {
  width: 45%;
  height: 100%;
}
.right3 {
  width: 55%;
  height: 100%;
}
.bottom2 {
  width: 100%;
  height: 50%;
  padding-top: 70px;
  box-sizing: border-box;
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
  /* border-bottom: 1px dashed RGBA(139, 180, 198, 1); */
  align-items: center;
}
.top1 > .left {
  width: 26%;
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
.main {
  width: 100%;
  height: 95%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  box-sizing: border-box;
}

.main2 {
  width: 100%;
  height: 95%;
  overflow: hidden;

  padding-left: 40px;
  box-sizing: border-box;
}
.main1 {
  width: 100%;
  height: 95%;
  overflow: hidden;

  padding-left: 40px;
  box-sizing: border-box;
}
.centerMain {
  width: 100%;
  height: 95%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  box-sizing: border-box;
}
.lider {
  width: 100%;
  height: auto;
  /* overflow: hidden; */
  display: flex;
  justify-content: space-around;
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
  display: flex;
  justify-content: space-between;
}
.main > .left {
  width: 45%;
  height: 100%;
  border-right: 1px dashed RGBA(150, 220, 249, 1);
  padding-right: 2.5%;
  box-sizing: border-box;
}
.main > .right {
  width: 50%;
  height: 100%;
}
.lefttop {
  width: 100%;
  height: 45%;
}
.leftbottom {
  width: 100%;
  height: 45%;
}

.righttop {
  width: 100%;
  height: 45%;
}
.rightbottom {
  width: 100%;
  height: 45%;
  // margin-top: 60px;
}
.title > h2 {
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  // margin-top: 36px;
}
.title > p {
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 300;
  color: #ffffff;
  margin-top: 13px;
}
.daytime {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.real {
  width: 30%;
  height: 100%;
}
.day {
  width: 35%;
  height: 100%;
  position: relative;
  top: -36px;
}
.span > h2 {
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  margin-top: 36px;
  display: inline-block;
}
.span > span {
  font-size: 16px;
  font-family: Montserrat;

  color: #ffffff;
  position: relative;
  top: -8px;
  left: 10px;
}
.title1 > p {
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 300;
  color: #ffffff;
  margin-top: 13px;
}
.daytime > span {
  font-size: 91px;
  font-family: Montserrat;
  font-weight: 200;
  color: #ffffff;
  margin-top: 27px;
}
.errorData {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  margin-top: 49px;
}
.errorData > .left {
  width: 48%;
  height: 100%;
  position: relative;
}
#charterror1 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
}
#charterror5 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
}
#charterror6 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
}
.errorData > .right {
  width: 48%;
  height: 100%;
  position: relative;
}
#charterror2 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
}
#charterror3 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
}
#charterror4 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 100px;
}
.list {
  top: 90px;
  left: 0;
  position: absolute;
  width: 130px;
  height: 100%;
}
.list > .item {
  margin-top: 12px;
}
.list > .item:nth-child(1) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: #ffaf02;
  border-radius: 50%;
}
.list > .item:nth-child(1) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list > .item:nth-child(2) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(100, 100, 100, 1);
  border-radius: 50%;
}
.list > .item:nth-child(2) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list1 {
  top: 90px;
  left: 0;
  position: absolute;
  width: 130px;
  height: 100%;
}
.list1 > .item {
  margin-top: 12px;
}
.list1 > .item:nth-child(1) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: #ffaf02;
  border-radius: 50%;
}
.list1 > .item:nth-child(1) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list1 > .item:nth-child(2) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(100, 100, 100, 1);
  border-radius: 50%;
}
.list1 > .item:nth-child(2) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list2 {
  top: 90px;
  left: 0;
  position: absolute;
  width: 130px;
  height: 100%;
}
.list2 > .item {
  margin-top: 12px;
}
.list2 > .item:nth-child(1) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: #02fce7;
  border-radius: 50%;
}
.list2 > .item:nth-child(1) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list2 > .item:nth-child(2) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(100, 100, 100, 1);
  border-radius: 50%;
}
.list2 > .item:nth-child(2) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list3 {
  top: 90px;
  left: 0;
  position: absolute;
  width: 130px;
  height: 100%;
}
.list3 > .item {
  margin-top: 12px;
}
.list3 > .item:nth-child(1) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: #02fce7;
  border-radius: 50%;
}
.list3 > .item:nth-child(1) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}

.list3 > .item:nth-child(2) > span:nth-child(1) {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: rgba(100, 100, 100, 1);
  border-radius: 50%;
}
.list3 > .item:nth-child(2) > span:nth-child(2) {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}
</style>