// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles'
import Vcomp from './components/index'
import Toast from './components/toast'
import echarts  from 'echarts'
import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import "swiper/swiper-bundle.css"
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en'
import 'lib-flexible'
import './utils/flexible'
import BaiduMap from 'vue-baidu-map'
import './element';
import './assets/css/reset.css';
import './fonts/iconfont.css';

import comment from './utils/comment.js'
import VueCircleSlider from 'vue-circle-slider'
Vue.use(VueCircleSlider)
Vue.prototype.comment=comment
Vue.use(BaiduMap, {
  ak: 'd0XFrbp2BptpfgMaCWGw607d18e5lTwN'    //这个地方是官方提供的ak密钥
})


Vue.use(ElementUI)

Vue.use(vueParticles)
Vue.use(Vcomp)

Vue.config.productionTip = false

Vue.prototype.$Toast = Toast
Vue.prototype.$echarts = echarts


router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
