// main.js是整个项目的入口文件

import Vue from 'vue'
//App.vue是所有组件的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

//创建vue的实例对象-vm
new Vue({
  //将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
