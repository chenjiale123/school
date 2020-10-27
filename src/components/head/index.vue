<template>
  <div class="head">
    <div class="left">
      <img src="../../assets/img/home/LOGO@2x.png" alt />
      <span>智慧校园卫生安全防控系统</span>

      <div class="nav">
        <div class="navIn"
        >
          <div :index="index" v-for="(item,index) in item" :key="index" class="act" @click="handleSelect(item,index)">
            <img :src="activeIndex==index?item.src:item.src1" alt />
            <span :class="activeIndex==index?'etc':'etc1'">{{item.name}}</span>
          </div>
     </div>
      </div>
    </div>
    <div class="right" @click="back">
             <img src="../../assets/img/home/yz.png" alt />
            <span>退出</span>

    </div>
  </div>
</template>
<script>
export default {
   data(){
       return{
            activeIndex: 0,
            item:[
              {
                name:'首页',
                src:require('../../assets/img/home/home.png'),
                src1:require('../../assets/img/home/home.png'),
                path:'/home'
              },
               {
                name:'设备详情',
                src:require('../../assets/img/home/sb.png'),
                src1:require('../../assets/img/home/sb1.png'),
                path:'/equip'
              },
               
               {
                name:'设置',
                src:require('../../assets/img/home/sz.png'),
                src1:require('../../assets/img/home/sz1.png'),
                path:'/register'
              }
            ]
       }
   },
   methods:{
       handleSelect(item, index) {
      
                 this.activeIndex=index;
                 this.$router.push(item.path)
      },
      back(){
        this.$router.push('/login')
      },
      detail(){
          this.$router.push('/equip')
      },
      error(){
          this.$router.push('/unusual')
      }
}

};
</script>


<style scoped>

.el-menu{
    background: transparent;
}
.el-menu--horizontal>.el-menu-item.is-active{
  
    /* border-bottom:6px solid #595F6F; */
    border: none;
   
}

.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: transparent;
}
.head{
    width: 100%;
    height: 84px;
    background:#EAECF2;
    display: flex;
    justify-content: space-between;
    padding: 0 46px;
    box-sizing: border-box;
    align-items: center;
    overflow: hidden;
}
.left{
    height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
    
  
}
.left>img{
width: 143px;
height: 51px;

display: inline-block;

}
.left>span{
    
font-size: 35px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #595F6F;
margin-left: 22px;
display: inline-block;



}
.nav{
    margin-left: 84px;
    display: inline-block;
    line-height: 51px;
}
.navIn{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.act{
  margin-left: 60px;
}
.nav img{
    display: inline-block;
    width: 28px;
    height: 24px;
    position: relative;
    top: 2px;
}
 .etc1{
    
font-size: 24px;
font-family: PingFang SC;
font-weight: 800;
color: rgba(89, 95, 111, 0.35);
margin-left: 8px;
}
 .etc{
    
font-size: 24px;
font-family: PingFang SC;
font-weight: 800;
color: rgba(89, 95, 111, 1);
margin-left: 8px;
}
.right{
     vertical-align: middle;
}
.right>img{
  display: inline-block;
    width: 28px;
    height: 24px;
    vertical-align: middle;
}
.right span{
    font-size: 24px;
font-family: PingFang SC;
font-weight: 800;
color: #595F6F;
margin-left: 8px;
 vertical-align: middle;
}

</style>