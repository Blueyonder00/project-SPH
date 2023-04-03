<template>
  <div id="app">
    <!-- 使用组件 -->
    <MyHeader />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <MyFooter v-show="$route.meta.show"/>
    <!-- <MyFooter v-show="$route.path =='/home' || $route.path =='/search'" /> -->
  </div>
</template>

<script>
// 引入组件
import MyHeader from './components/Header/Header.vue'
import MyFooter from './components/Footer/Footer.vue'

export default {
  name: 'App',
  // 注册组件
  components: {
    MyHeader,MyFooter
  },
}
</script>

<style>

</style>
