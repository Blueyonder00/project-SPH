import Vue from 'vue'
import App from './App.vue'

// 三级联动组件--全局组件
import MyNav from '@/components/MyNav/MyNav.vue'
Vue.component(MyNav.name,MyNav)

Vue.config.productionTip = false
// 引入路由
import router from '@/router/router';
// 引入仓库
import store from '@/store'
// 测试接口配置


new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库，组件实例的身上会多一个$store属性
  store,
}).$mount('#app')
