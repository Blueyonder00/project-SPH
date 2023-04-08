import Vue from "vue";
import Vuex from 'vuex';
// 需要使用插件一次
Vue.use(Vuex);
/* // state仓库存储数据的地方
const state = {};
// 修改state的唯一手段
const mutations = {};
// 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 这里可以书写业务逻辑，但是不能修改state
    add({commit}) {
        commit('ADD');

    },
    minus({commit}) {
        commit('MINUS');
    }
};
// getters理解为计算属性，用于简化仓库数据，让组件获取数据更加方便
const getters = {}; */
// 引入小仓库
import home from './home'
import search from './search'
import login from './login'
import register from './register'

// 对外暴露一个store类的实例，store是vuex中的一个构造函数
export default new Vuex.Store({
    // 注册相应的小仓库
    modules:{
        home,search,login,register
    }

});
