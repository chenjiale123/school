/*
 * 描述: 封装组件库
 * 作者: Jack Chen
 * 日期: 2020-04-18
 */

import seamless from './seamless' // 新闻无缝滚动

import seamless1 from './seamless1' // 新闻无缝滚动
import seamless2 from './seamless2' // 新闻无缝滚动
import seamless3 from './seamless3' // 新闻无缝滚动
import seamless4 from './seamless4' // 新闻无缝滚动
import seamless5 from './seamless5' // 空消机异常
import seamless6 from './seamless6' //空消机状态
import seamless7 from './seamless7' // 次氯酸异常
import seamless8 from './seamless8' //次氯酸状态
import seamless9 from './seamless9' //次氯酸消毒记录
import pyramidTrend from './pyramidTrend' // 金字塔趋势




import business from './companySummary/business' // 业务范围
import talent from './companySummary/talent' // 人才队伍
import income from './companySummary/income' // 营业收入

import distribution from './companySummary/distribution' // 客户分布
import history from './companySummary/history' // 发展历程
import dynamicList from './dynamicList' // 动态列表动画
import colorfulArea from './colorfulArea' // 多彩轮播面积

const components = {

  seamless,
  seamless1,
  seamless2,
  seamless3,
  seamless4,
  seamless5,
  seamless6,
  seamless7,
  seamless8,
  seamless9,
  pyramidTrend,


  business,
  talent,
  income,

  distribution,
  history,
  dynamicList,

  colorfulArea
};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp
