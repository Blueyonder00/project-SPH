import Vue from 'vue'
import App from './App.vue'

// 三级联动组件--全局组件
import MyNav from '@/components/MyNav/MyNav.vue'
Vue.component(MyNav.name,MyNav)

Vue.config.productionTip = false
// 引入路由
import router from '@/router/router'

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
