<template>
  <div class="home">
    <Head />

    <div class="main">
      <div class="left">
        <Total />
        <colorfulArea />
      </div>
      <div class="center">
        <div class="map">
          <div class="topetc">
            <h2 @click="detail">地图 MAP</h2>
            <div class="seach">
              <el-input placeholder="Search..." v-model="mapName"></el-input>
              <img
                src="../assets/img/home/seach.png"
                alt
                @click="mapNameChange"
              />
            </div>
          </div>
          <div id="allmap" class="allmap"></div>
          <img src="../assets/img/home/local.png" alt="" @click="addressDetail" />
        </div>
        <machine />
      </div>
      <div class="right">
        <weather />
        <seamless />
      </div>
    </div>
  </div>
</template>
<script>
import Head from "../components/head";
import Total from "../components/total";
import machine from "../components/machine"; // 金字塔趋势
import weather from "../components/weather"; // 金字塔趋势

import MP from "./Map/map";
import dataList from "./Map/data";
let map = null,
  geoc = null;
export default {
  components: {
    Head,
    Total,
    machine,
    weather,
  },
  data() {
    return {
      dialogMap: false,
      mapName: "",
      mapPointName: "",
      loading: true,
      mapGetshow: true,
      dialogName: "",

      msg1: "最新异常情况",

      mapWidth: "", // 地图宽度
      ak: "d0XFrbp2BptpfgMaCWGw607d18e5lTwN",

      menuActive: "",
      dialogVisible: false,

      hotShow: true,
      numShow: true,
      dataList: [], // 基础所有数据
      cityList: [], // 城市集合
      city: "滨江区",

      labelStyle: {
        //  label样式
        color: "black",
        backgroundColor: "rgba(255,255,255,.9)",
        padding: "5px",
        border: "none",
        zIndex: 999,
      },
      // 标注信息窗口样式
      optStyle: {
        width: "", // 信息窗口宽度
        height: "", // 信息窗口高度
        enableMessage: true, // 设置允许信息窗发送短息
      },
      map: "",
      heatmapOverlay: "",
      markerClusterer: null, //  点聚合
      drawingManager: null,
      markerArr: [], // 标注点数组
      overlayTools: [], // 画图工具集合
      overlay: [], //  圆形选框/自定义选框
      mousePoint: { lng: 0, lat: 0 }, //  鼠标移动坐标
      circleLabel: null, //  绘制圆形标签 即半径显示
      myDrag: "",
      tipsLabel: null, //  鼠标提示标签
      isPolygonDraw: false, //  是否正在画多边形
      isPolygonIndex: 0, //  画多边形路上点击了多少次

      wuqian: [],
      infoWindowQ: "",
      geoc: "",
    };
  },
  created() {
    this.dataList = this.convert.getCity(dataList, 1);

    this.cityList = this.convert.getCity(dataList);
  },
  mounted() {
    this.$nextTick(() => {
      // 在此调用api
      MP(this.ak).then((BMap) => {
        console.log(BMap);
        this.map = new BMap.Map("allmap");
        this.geoc = new BMap.Geocoder();
        this.map.enableScrollWheelZoom(true);
        // this.map.addControl(
        //   // 平移缩放控件
        //   new BMap.NavigationControl({
        //     // eslint-disable-next-line
        //     type: BMAP_NAVIGATION_CONTROL_SMALL,
        //     // eslint-disable-next-line
        //     anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        //     offset: new BMap.Size(15, 15),
        //   })
        // );
        this.getBoundary("滨江区");

        this.markerShow();

        this.map.addEventListener("mousemove", this.mapMouseMove);
      });
    });
  },
  methods: {


    addressDetail(){ //获取地理位置 
    var self = this; 
    var geolocation = new BMap.Geolocation(); 
   geolocation.getCurrentPosition(function(r){ if(this.getStatus() == BMAP_STATUS_SUCCESS){ 
 var myGeo = new BMap.Geocoder();
 console.log(r.point)



      //  self.map.centerAndZoom(new BMap.Point(self.longitude, self.latitude), 14);
        // var point = new BMap.Point(self.longitude, self.latitude);
     r.point=   new BMap.Point(120.202251, 30.191708)
           var marker = new BMap.Marker(r.point);
        self.map.addOverlay(marker);
        self.map.panTo(r.point);


 } });
 },
    // 点击搜索
    mapNameChange() {
      console.log("89789899");
      let that = this,
        point,
        marker = null;
      let local = new BMap.LocalSearch(that.map, {
        renderOptions: { map: that.map },
        onSearchComplete: (res) => {
          console.log(res);
          if (local.getResults() != undefined) {
            if (local.getResults().getPoi(0)) {
              //
              point = new BMap.Point(120.202251, 30.191708); //获取第一个智能搜索的结果
              // console.log(point)
              that.map.centerAndZoom(new BMap.Point(120.201693, 30.191682), 14);
                  //  that.map.setZoom(10);
              marker = new BMap.Marker(point); // 创建标注
              that.map.addOverlay(marker); // 将标注添加到地图中
              marker.enableDragging(); // 可拖拽
              that.geoc.getLocation(point, function (rs) {
                var addComp = rs.addressComponents;
                console.log(addComp);
                that.mapPointName =
                  addComp.province +
                  ", " +
                  addComp.city +
                  ", " +
                  addComp.district +
                  ", " +
                  addComp.street +
                  ", " +
                  addComp.streetNumber;
              });
            } else {
              alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
            }
          } else {
            alert("未找到搜索结果");
          }
        },
      });
      // local.search(this.mapName);
      local.searchInBounds(this.mapName, this.map.getBounds());
    },

    detail() {
      this.$router.push("/detail");
    },
    // 向地图添加标注
    markerShow(val) {
      var that = this;
      this.markerArr = [];
      const pointArray = [];
      for (let i = 0; i < this.dataList.length; i += 1) {
        const item = this.dataList[i];
        console.log(item.count);
        if (item.rank == "2") {
          console.log("33");
          var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
            icon: new BMap.Icon(
              require("../assets/img/detail/xiao.png"),
              new BMap.Size(50, 59)
            ),

            title: ``,
          }); // 创建标注
        } else if (item.rank == "1") {
          if (item.cause == "3") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/you.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else if (item.cause == "2") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/you2.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/you1.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          }
        } else if (item.rank == "3") {
          if (item.cause == "3") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/zhong.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else if (item.cause == "2") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/zhong.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/zhong1.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          }
        } else if (item.rank == "4") {
          if (item.cause == "3") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/gao.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else if (item.cause == "2") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/gao.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/gao1.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          }
        } else {
          if (item.cause == "3") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/da2.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else if (item.cause == "2") {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/da1.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          } else {
            var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
              icon: new BMap.Icon(
                require("../assets/img/detail/da.png"),
                new BMap.Size(55, 59)
              ),

              title: ``,
            }); // 创建标注
          }
        }

        pointArray[i] = new BMap.Point(item.lng, item.lat);
        this.map.addOverlay(marker); // 将标注添加到地图中
        const label = new BMap.Label(`${item.addr}`, {
          offset: new BMap.Size(20, 20),
        });
        marker.setLabel(label);

        this.addClickHandler(
          item.count,
          item.count1,
          item.count2,
          item.addr,
          marker,
          item.id
        );

        this.markerArr.push(marker);
      }

      this.markerClusterer = new BMapLib.MarkerClusterer(that.map, {
        markers: this.markerArr,
      });

      this.map.setViewport(pointArray); // 让所有点在视野范围内
    },
    // 标注点击事件
    addClickHandler(count, count1, count2, addr, marker, id) {
      marker.addEventListener("mouseover", (e) => {
        this.openInfo(count, count1, count2, addr, id, e);
      });
      marker.addEventListener("mouseout", (e) => {
        this.closeInfo(count, addr, id, e);
      });
      marker.addEventListener("click", (e) => {
        this.clickman(count, addr, id, e);
      });
    },
    closeInfo(count, addr, id, e) {
      var that = this;
      const p = e.target;
      const point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      const infoWindow = new BMap.InfoWindow(
        `<h2>${addr}</h2>
        <p>泡沫免洗手机器人 ${count}</p> 
        <p>次氯酸发生器            ${count}</p>
        <p>智能超微雾化机        ${count}</p>`,
        this.optStyle
      );
      this.map.closeInfoWindow(infoWindow, point);
    },
    clickman(count, addr, id, e) {
      //如果没有打开，则监听打开事件，获取按钮，添加事件

      var that = this;
      console.log("333");

      // document.getElementById("btn").onclick = function (e) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
          name: addr,
        },
      });
      // };
    },
    // 标注信息窗口
    openInfo(count, count1, count2, addr, id, e) {
      var that = this;
      const p = e.target;

      const point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      const infoWindow = new BMap.InfoWindow(
        `<h2 class="h2" style="font-size: 13px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #2E3342;">${addr}</h2>
        <p class="p1" style="font-size: 12px;
font-family: Source Han Sans CN;
font-weight: 800;
color: #E9A424;">泡沫免洗手机器人 ${count}台</p> 
        <p class="p2" style="font-size: 12px;
font-family: Source Han Sans CN;
font-weight: 800;
color: #27C6DA;"> 次氯酸发生器            ${count1}台</p>
        <p class="p3" style="font-size: 12px;
font-family: Source Han Sans CN;
font-weight: 800;
color: #93A8BB;">智能超微雾化机        ${count2}台</p>`,
        this.optStyle
      ); // 创建信息窗口对象
      this.map.openInfoWindow(infoWindow, point); // 开启信息窗口
    },

    // 加载画图功能

    // 覆盖物上添加右键菜单

    //  地图移动事件
    mapMouseMove(e) {
      this.mousePoint = e.point;
      if (this.tipsLabel) {
        this.tipsLabel.setPosition(
          new BMap.Point(this.mousePoint.lng, this.mousePoint.lat)
        );
      }
    },

    //  监听地图点击事件
    mapClick(e) {
      this.isPolygonIndex += 1;
      if (this.tipsLabel && this.isPolygonIndex === 1) {
        this.tipsLabel.setContent("点击继续绘制");
      } else if (this.tipsLabel && this.isPolygonIndex) {
        this.tipsLabel.setContent("双击完成绘制,可右键保存该区域");
      }
    },

    // 添加行政区划边界框
    getBoundary(val) {
      var that = this;
      const bdary = new BMap.Boundary();
      // this.markerClusterer.clearMarkers();
      this.wuqian = [];
      for (let i = 0; i < this.overlayTools.length; i += 1) {
        this.map.removeOverlay(this.overlayTools[i].val);
      }
      this.overlayTools = [];
      bdary.get(val, (rs) => {
        // 获取行政区域
        // this.map.clearOverlays(); // 清除地图覆盖物
        const count = rs.boundaries.length; // 行政区域的点有多少个
        console.log(count);
        if (count === 0) {
          this.$message.error("未能获取当前输入行政区域");
          return;
        }
        let pointArray = [];
        for (let i = 0; i < count; i += 1) {
          const ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 2,
            strokeColor: "#ff0000",
            fillOpacity: 0.2, // 填充透明度
          }); // 建立多边形覆盖物
          this.map.addOverlay(ply); // 添加覆盖物
          this.overlayTools.push({ val: ply, type: "polygon" });
          pointArray = pointArray.concat(ply.getPath());

          const mypolygon = new BMap.Polygon(ply.getPath(), {
            strokeWeight: ply.getStrokeWeight(),
          });
          console.log(mypolygon);
          //  标点
          for (let j = 0; j < this.markerArr.length; j += 1) {
            console.log(this.markerArr[j]);
            const item = this.markerArr[j];
            if (BMapLib.GeoUtils.isPointInPolygon(item.point, mypolygon)) {
              console.log(this.markerClusterer);
              this.markerClusterer.addMarker(item);
            }
          }
        }

        this.map.clearOverlays(); //清除地图覆盖物
        //添加遮罩层
        //思路：利用行政区划点的集合与外围自定义东南西北形成一个环形遮罩层
        //1.获取选中行政区划边框点的集合  rs.boundaries[0]
        var strs = new Array();
        strs = rs.boundaries[0].split(";");
        var ENWS = "";
        for (var i = 0; i < strs.length; i++) {
          ENWS += strs[i] + ";";
        }

        //4.自定义外围边框点的集合
        // var E_JW = "170.672126, 40.623555;"; //东
        var EN_JW = "170.672126, 81.291804;"; //东北角
        // var N_JW = "105.913641, 81.291804;"; //北
        var NW_JW = "-169.604276,  81.291804;"; //西北角
        // var W_JW = "-169.604276, 38.244136;"; //西
        var WS_JW = "-169.604276, -68.045308;"; //西南角
        // var S_JW = "114.15563, -68.045308;"; //南
        var SE_JW = "170.672126, -68.045308 ;"; //东南角

        var ply1 = new BMap.Polygon(
          ENWS +
            // E_JW +
            EN_JW +
            SE_JW +
            // S_JW +
            WS_JW +
            // W_JW +
            NW_JW +
            // N_JW +

            EN_JW,
          {
            strokeColor: "none",
            strokeOpacity: 1,
            fillColor: "#F7F8FD",
            fillOpacity: "0.8",
          }
        );
        this.map.addOverlay(ply1); //遮罩物是半透明的，如果需要纯色可以多添加几层

        var ply = new BMap.Polygon(rs.boundaries[0], {
          strokeWeight: 2,
          strokeColor: "#eaecf2",
          fillColor: "",
        });
        this.map.addOverlay(ply);
        this.map.setViewport(pointArray); // 调整视野
        this.map.setZoom(17);
        this.map.centerAndZoom(new BMap.Point(120.201693, 30.191682), 16); // 初始化地图,设置中心点坐标和地图级别
      });
    },
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/img/home/bj1.png);
  background-size: 100% 100%;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 91%;
  padding: 10px;
  box-sizing: border-box;
}
.main > .left {
  width: 26%;
  height: 100%;
  position: relative;
  top: 0px;
}
.center {
  width: 52%;

  position: relative;
  height: 100%;
  /* top: -30px; */
}
.map {
  width: 100%;
  height: 70%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.map > img {
  width: 60px;
  height: 60px;
  display: inline-block;
  position: absolute;
  bottom: 23px;
  left: 23px;
}
.topetc {
  width: 100%;
  height: 76px;
  background: #eaecf2;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
}
.topetc > h2 {
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #595f6f;
  display: inline-block;
}
.seach {
  width: 338px;
  height: 52px;
  position: relative;
}
.el-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-input >>> .el-input__inner {
  width: 100%;
  height: 100%;
}
.seach > img {
  width: 26px;
  height: 26px;
  display: inline-block;
  position: absolute;
  right: 16px;
  top: 15px;
}

.allmap {
  width: 100%;
  height: 89%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.right {
  width: 21%;
  height: 100%;
  position: relative;
}
</style>