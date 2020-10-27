<template>
  <div id="Map">
    <div class="top">
      <span>滨江区校园卫生安全防控系统</span>
    </div>
    <div v-show="!menuActive" class="main">
    
      <div class="center">
   
        <div id="allmap" class="allmap"></div>

        <div class="map-button">
          <el-select :value="city" popper-class="map-select">
            <el-option :value="city">
              <el-card class="select-card" shadow="never">
                <div slot="header" class="clearfix select-header">
                  <span>选择区域</span>
                  <!-- <el-button style="float: right;margin-right:10px;font-size:20px;" type="text" size="mini">x</el-button> -->
                </div>
                <div class="select-tip">
                  <div>当前区域： {{city}}</div>
                  <p class="history">
                    <span @click="getBoundary('滨江区')">全区</span>
                  </p>
                </div>
              </el-card>
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MP from "./map";
import dataList from "./data";
import Date from "./../../components/Date";

import { screenSize } from "@/assets/js/utils";
export default {
  name: "Map",
  components: {
    Date,
  },
  created() {
    console.log("33333");

    this.dataList = this.convert.getCity(dataList, 1);

    this.cityList = this.convert.getCity(dataList);
    this.mapWidth = `width:${window.innerWidth - 400}px;`;
    window.onresize = () => {
      this.mapWidth = `width:${window.innerWidth - 400}px;`;
    };
  },
  watch: {
    overlayTools() {
      console.log("我监听到了");
    },
  },
  mounted() {
    this.$nextTick(() => {
      // 在此调用api
      MP(this.ak).then((BMap) => {
        console.log(BMap);
        this.map = new BMap.Map("allmap", {
          enableMapClick: false,
          minZoom: 14,
        }); 
  
  
        this.map.enableScrollWheelZoom(true); 
        this.map.addControl(
          // 平移缩放控件
          new BMap.NavigationControl({
            // eslint-disable-next-line
            type: BMAP_NAVIGATION_CONTROL_SMALL,
            // eslint-disable-next-line
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            offset: new BMap.Size(15, 15),
          })
        );
        this.getBoundary("滨江区");
        this.checkhHtml5();
        this.markerShow(); // 标注

        this.map.addEventListener("click", this.mapClick);
        this.map.addEventListener("mousemove", this.mapMouseMove);
      });
    });
  },
  data() {
    return {
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
    };
  },
  methods: {
    checkhHtml5() {
      if (typeof Worker === "undefined") {
        if (navigator.userAgent.indexOf("MSIE 9.0") <= 0) {
          console.log(
            "定制个性地图示例：IE9以下不兼容，推荐使用百度浏览器、chrome、firefox、safari、IE10"
          );
        }
      }
    },

    // 向地图添加标注
    markerShow(val) {
      var that = this;
      this.markerArr = [];
      const pointArray = [];
      for (let i = 0; i < this.dataList.length; i += 1) {
        const item = this.dataList[i];
        console.log(this.dataList[i]);

        const marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
          // 设置Marker的icon属性为Symbol-样式与偏移
          // eslint-disable-next-line
          icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
            scale: 1, // 图标缩放大小
            fillColor: "red", // 填充颜色
            fillOpacity: 0.8, // 填充透明度
          }),
          // 设置标注的标题，当鼠标移至标注上时显示此标题
          title: `${item.addr}学校`,
        }); // 创建标注

        pointArray[i] = new BMap.Point(item.lng, item.lat);
        this.map.addOverlay(marker); // 将标注添加到地图中
        const label = new BMap.Label(`${item.addr}`, {
          offset: new BMap.Size(-20, -20),
        });
        marker.setLabel(label);

        this.addClickHandler(item.count, item.addr, marker, item.id);

        this.markerArr.push(marker);
      }

      this.markerClusterer = new BMapLib.MarkerClusterer(that.map, {
        markers: this.markerArr,
      });

      this.map.setViewport(pointArray); // 让所有点在视野范围内
    },
    // 标注点击事件
    addClickHandler(count, addr, marker, id) {
      marker.addEventListener("click", (e) => {
        this.openInfo(count, addr, id, e);
      });
    },
    // 标注信息窗口
    openInfo(count, addr, id, e) {
      var that = this;
      const p = e.target;
      console.log(id);
      const point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      const infoWindow = new BMap.InfoWindow(
        `${addr}-${count}台设备 <br/> <button id="btn"">查看设备详情信息</button>`,
        this.optStyle
      ); // 创建信息窗口对象
      this.map.openInfoWindow(infoWindow, point); // 开启信息窗口

      if (!infoWindow.isOpen()) {
        //如果没有打开，则监听打开事件，获取按钮，添加事件
        infoWindow.addEventListener("open", function () {
          document.getElementById("btn").onclick = function (e) {
            that.$router.push({
              path: "./home",
              query: {
                id: id,
              },
            });
          };
        });
      } else {
        //如果已经打开，直接获取按钮，添加事件
        document.getElementById("btn").onclick = function (e) {
          that.$router.push({
            path: "./home",
            query: {
              id: id,
            },
          });
        };
      }
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
        var E_JW = "170.672126, 39.623555;"; //东
        var EN_JW = "170.672126, 81.291804;"; //东北角
        var N_JW = "105.913641, 81.291804;"; //北
        var NW_JW = "-169.604276,  81.291804;"; //西北角
        var W_JW = "-169.604276, 38.244136;"; //西
        var WS_JW = "-169.604276, -68.045308;"; //西南角
        var S_JW = "114.15563, -68.045308;"; //南
        var SE_JW = "170.672126, -68.045308 ;"; //东南角

     
        var ply1 = new BMap.Polygon(
          ENWS +
            E_JW +
            SE_JW +
            S_JW +
            WS_JW +
            W_JW +
            NW_JW +
            N_JW +
            EN_JW +
            E_JW,
          {
            strokeColor: "none",
            strokeOpacity: 1,
            fillColor: "#fff",
            fillOpacity: "1",
          }
        );
        this.map.addOverlay(ply1); //遮罩物是半透明的，如果需要纯色可以多添加几层

        var ply = new BMap.Polygon(rs.boundaries[0], {
          strokeWeight: 2,
          strokeColor: "#ff0000",
          fillColor: "",
        });
        this.map.addOverlay(ply);
        this.map.setViewport(pointArray); // 调整视野

  
      });
    },
    // 加载覆盖物内的标注和热力图
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  position: relative;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
.sn-container {
  width: 23% !important;
  height: 30.5% !important;
}
.sn-container1 {
  width: 23% !important;
  height: 32% !important;
}
.sn-container2 {
  width: 23% !important;
  height: 32% !important;
}
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.home-container1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 99%;
}
.wrap {
  transform-origin: 0px 0px 0px;

  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  overflow: hidden;
  transform: scale(1, 1) !important;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 25%;
  height: 100%;
  overflow: hidden;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
}
.right {
  width: 25%;
  height: 100%;
  overflow: hidden;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
}
.item {
  height: 30%;
}
.item1 {
  margin-top: 40px;

  height: 33% !important;
}
.item2 {
  height: 33% !important;
}
.btn-clear {
  width: 100%;
  margin-top: 20px;
}
.iconfont {
  color: #0095ff;
  margin-right: 10px;
  font-size: 18px;
}
.map-button {
  position: absolute;

  top: 23%;
  right: 30px;
  height: 30px;
  z-index: 1;
}
#Map {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: #05172b;
}
.top {
  width: 100%;
  height: auto;
  text-align: center;
  position: relative;
  z-index: 999999;
  top: 10px;
}
.top > span {
  font-size: 40px;
  color: #fff;
}
.center {
  width: 50%;
  position: relative;
  height: 100%;
  top: 0;
  left: 25%;
}
.num {
  position: absolute;
  width: 100%;
  height: 28.5%;
  top: 0;
  right: 0;
  z-index: 1;
  text-align: center;
}
.num > h2 {
  font-size: 23px;
  color: #fff;
  margin-top: 20px;
}
.tun {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.tun > .numitem {
  width: 23%;
  height: 50px;
  text-align: center;
  padding: 15px;

  border: 2px solid rgba(92, 255, 255, 0.1);
  background: rgba(10, 106, 255, 0.1) url(../../assets/img/wg.png) repeat 50%
    50% !important;
  background-blend-mode: screen;
  overflow: visible;
}
.tun > .numitem h3 {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}

.tun > .numitem span {
  font-size: 24px;
  margin-top: 15px;
  display: block;
  color: #fff;
}
.allmap {
  position: absolute;
  width: 100%;
  height: 80%;
  top: 20%;
  right: 0;
  z-index: 1;
}
.leftnav {
  position: absolute;
  top: 0;
  right: 30px;
  height: 100%;
  width: 300px;
  background: #fff;
  color: #585858;
  z-index: 2;
  overflow-y: auto;
}
.title {
  width: 100%;
  font-size: 16px;
  border-bottom: 2px solid #ccc;
  height: 42px;
  line-height: 42px;
}
.title span {
  margin-left: 20px;
}
.card {
  margin-top: 15px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);
  padding-bottom: 15px;
}
.card-title {
  width: 100%;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background: #f5f7fa;
  border-bottom: 1px solid #ccc;
}
.card-title span {
  margin-left: 30px;
}
.card-list {
  width: 100%;
  font-size: 14px;
  height: 42px;
  line-height: 42px;
  cursor: pointer;
}
.card-list span {
  margin-left: 60px;
}
.tip-img {
  position: absolute;
  z-index: 10;
  left: 320px;
  bottom: 6px;
  width: auto;
  height: 60px;
}
.tip-img img {
  height: 100%;
}
.map-date {
  position: absolute;
  z-index: 10;
  left: 470px;
  top: 6px;
}
</style>
<style>
.el-submenu__title {
  padding-left: 25px !important;
}
.el-submenu .el-menu-item {
  padding-left: 90px !important;
}
.dg-message {
  max-height: 120px;
  overflow-y: auto;
}
.map-button .el-select {
  width: 130px;
}
.map-button input {
  font-size: 13px;
  height: 35px;
}
.map-button .el-input__icon {
  line-height: 35px;
}
.map-select .el-select-dropdown__item {
  height: 100%;
  padding: 0px;
}
.map-select .el-select-dropdown__list {
  padding: 0px;
}
.map-select .el-card__body {
  width: 474px;
  padding: 5px 0px;
  box-sizing: content-box;
  margin-left: 12px;
}
.map-select .el-card__header {
  padding: 0px 7px;
}
.map-select .el-scrollbar__wrap {
  max-height: 600px;
  margin-bottom: 0px !important;
  margin-right: 0px !important;
  overflow: hidden;
}
.map-select .select-tip {
  border-bottom: 1px solid #dadada;
}
.select-tip div {
  padding: 0px 5px;
  border-bottom: 1px solid #dadada;
  cursor: auto;
}
.select-tip .history {
  overflow: hidden;
  padding: 4px 0;
}
.select-tip .history span {
  padding: 0px 5px;
  float: left;
  color: #3d6dcc;
  height: 28px;
  line-height: 28px;
}
.select-card {
  font-weight: normal !important;
  font-size: 13px;
}
.select-content {
  height: 240px;
  overflow-y: auto;
}
.select-content div {
  padding: 2px 5px;
  overflow: hidden;
}
.select-content .s-title {
  font-weight: bold;
  float: left;
  color: #3d6dcc;
}
.select-content .s-txt {
  padding: 0px 5px;
  float: left;
  color: #3d6dcc;
  font-size: 12px;
}
</style>
