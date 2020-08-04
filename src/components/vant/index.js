/**
 * Author: fanqiang
 * Date: 2020年8月3日14:14:26
 * Description: 按需引入vant组件，需要什么组件在这里面引入即可
 */

 import Vue from 'vue'
//  引入
 import {
  Button,
  Icon,
  Toast
 } from 'vant'

//  注册
Vue.use(Button)
Vue.use(Icon)
Vue.use(Toast)