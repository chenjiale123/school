<template>
  <div class="data">
    <div id="dataChart"  >
        <img src="../../assets/img/detail/d.png" alt="" class="d">
          <img src="../../assets/img/detail/e.png" alt="" class="e">
            <img src="../../assets/img/detail/f.png" alt="" class="f">
              <img src="../../assets/img/detail/g.png" alt="" class="g">
       <span class="span">86.0</span>

           <span class="span1">卫生安全指数</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: "",
      timer2: "",
    };
  },
  mounted() {
   
  },
  methods: {

  },
  beforeDestroy(){
      clearInterval(this.time2)
  }
};
</script>
<style scoped>
.data {
  width: 90%;
  height: 90%;
  margin-top: 30px;
}

@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}

@-webkit-keyframes rotation1{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(-360deg);}
}


#dataChart {
  width: 76%;
  height: 90%;
  margin: 0 auto;
 

  text-align: center;
  line-height: 100%;

position: relative;

}
.g{
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotate(360deg);
animation: rotation1 10s linear infinite;
-moz-animation: rotation1 10s linear infinite;
-webkit-animation: rotation1 10s linear infinite;
-o-animation: rotation1 10s linear infinite;
}

.f{
    width: 94%;
    height: 94%;
    display: inline-block;
    position: absolute;
    top: 3%;
    left: 3%;
    -webkit-transform: rotate(360deg);
animation: rotation 10s linear infinite;
-moz-animation: rotation 10s linear infinite;
-webkit-animation: rotation 10s linear infinite;
-o-animation: rotation 10s linear infinite;
}

.d{
    width: 80%;
    height: 80%;
    display: inline-block;
    position: absolute;
    top: 10%;
    left: 10%;
    -webkit-transform: rotate(-360deg);
animation: rotation1 10s linear infinite;
-moz-animation: rotation1 10s linear infinite;
-webkit-animation: rotation1 10s linear infinite;
-o-animation: rotation1 10s linear infinite;
}
.e{
    width: 80%;
    height: 80%;
    display: inline-block;
    position: absolute;
    top: 10%;
    left: 10%;
    -webkit-transform: rotate(360deg);
animation: rotation 10s linear infinite;
-moz-animation: rotation 10s linear infinite;
-webkit-animation: rotation 10s linear infinite;
-o-animation: rotation 10s linear infinite;
}

#dataChart>span{
    position: absolute;
font-size: 55px;
font-family: Impact;
font-weight: 400;
color: #A7F6EB;
text-shadow: 1px 3px 0px rgba(37, 37, 37, 0.38);
z-index: 99;
left: 50%;
top: 50%;
margin-left: -50px;
margin-top: -20px;

}
#dataChart>.span1{
    position: absolute;
font-size: 15px;
font-family: Impact;
font-weight: 400;
color: #A7F6EB;
text-shadow: 1px 3px 0px rgba(37, 37, 37, 0.38);
z-index: 99;
left: 50%;
top: 50%;
margin-left: -50px;
margin-top: 20px;

}
</style>