<template>
    <div class="radar">

        <div id="echart"></div>
        <!-- <div class="list">
          <div class="item">
              <span></span>
              <span>泡沫免洗手机器人卡通版</span>
          </div>
           <div class="item">
              <span></span>
              <span>泡沫免洗手机器人公共版</span>
          </div>
           <div class="item">
              <span></span>
              <span>次氯酸发生器</span>
          </div>
           <div class="item">
              <span></span>
              <span>智能超微雾化机手提版</span>
          </div>
           <div class="item">
              <span></span>
              <span>智能超微雾化机手推版</span>
          </div>

        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
           option:''
        }
    },
    mounted(){
        this.getChart()
    },
    methods:{
        getChart(){
              let myChart = echarts.init(document.getElementById("echart"));


            this.option = {
               grid: {
                top: '0%',
                left: '-5%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
    color:['rgba(255, 124, 54, 0.5)','rgba(0, 197, 219, 0.5)','rgba(0, 210, 188, 0.5)','rgba(116, 158, 196, 0.5)','rgba(85, 108, 255, 0.5)'],
    tooltip: {},
    legend: {
          icon: 'circle',
          bottom: "50",
      
          right: "0",
        data: ['泡沫免洗手机器人卡通版','泡沫免洗手机器人公共版','次氯酸发生器','智能超微雾化机手提版','智能超微雾化机手推版'],
          textStyle: {
            color: "#fff",
            align: "right",
            x: "right",
            textAlign: "right",
         
          },

          selectedMode: true,
          orient: "vertical",
    },
    radar: {
        shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '不出液', max: 12},
            { name: '无法充电', max: 12},
            { name: '泵堵塞', max: 12},
            { name: '使用异常', max: 12},
            { name: '缺液', max: 12},
             { name: '上传数据异常', max: 12},
        ],
          splitArea : {
                            show : false,   
                            areaStyle : {
                                color: ["#2a4a93"]  // 图表背景网格的颜色
                            }
                        },
                        splitLine : {
                            show : true,
                            lineStyle : {
                                width : 1,
                                color : '#fff' // 图表背景网格线的颜色
                            }
                        }
    },
    
    series: [{
        name: '消毒机',
        type: 'radar',
        areaStyle: {normal: {}},
        data: [
            {
                value: [4, 3, 4, 6, 2, 1],
                name: '泡沫免洗手机器人卡通版'
            },
              {
                value: [8, 6, 8, 12, 4, 2],
                name: '泡沫免洗手机器人公共版'
            },
              {
                value: [0, 0, 0, 1, 2, 2],
                name: '次氯酸发生器'
            },
              {
                value: [0, 0, 0, 3, 1, 2],
                name: '智能超微雾化机手提版'
            },
              {
                value: [0, 0, 0, 1, 1, 2],
                name: '智能超微雾化机手推版'
            },
          
        ]
    }]
};
        
            myChart.setOption(this.option, true);
        }
    }
}
</script>

<style  scoped>

.radar {
  width: 100%;
  height: 328px;


}
#echart{
    width: 95%;
    height: 100%;
}
.list{
    width: 30%;
    height: 100%;
}
.list>.item{
    margin-top: 20px;
}
.list>.item:nth-child(1)>span:nth-child(1){
    display: inline-block;
    width: 11px;
height: 11px;
background: #FF7C36;
border-radius: 50%;
}
.list>.item:nth-child(1)>span:nth-child(2){
    
font-size: 16px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;
}

.list>.item:nth-child(2)>span:nth-child(1){
    display: inline-block;
    width: 11px;
height: 11px;
background: rgba(0, 197, 219, 1);
border-radius: 50%;
}
.list>.item:nth-child(2)>span:nth-child(2){
    
font-size: 16px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;
}

.list>.item:nth-child(3)>span:nth-child(1){
    display: inline-block;
    width: 11px;
height: 11px;
background: rgba(0, 210, 188, 1);
border-radius: 50%;
}
.list>.item:nth-child(3)>span:nth-child(2){
    
font-size: 16px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;
}

.list>.item:nth-child(4)>span:nth-child(1){
    display: inline-block;
    width: 11px;
height: 11px;
background: rgba(116, 158, 196, 1);
border-radius: 50%;
}
.list>.item:nth-child(4)>span:nth-child(2){
    
font-size: 16px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;
}

.list>.item:nth-child(5)>span:nth-child(1){
    display: inline-block;
    width: 11px;
height: 11px;
background: rgba(85, 108, 255, 1);
border-radius: 50%;
}
.list>.item:nth-child(5)>span:nth-child(2){
    
font-size: 16px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;
}
</style>