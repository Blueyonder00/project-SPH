// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import MyHome from '@/pages/Home/MyHome.vue'
import MySearch from '@/pages/Search/MySearch.vue'
import MyLogin from '@/pages/Login/MyLogin.vue'
import MyRegister from '@/pages/Register/MyRegister.vue'

// 重写push|replace
let OriginPush = VueRouter.prototype.push;
let OriginReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location,resolve,reject) {
    if (reject && resolve) {
        OriginPush.call(this, location, resolve, reject)
    }
    else {
        OriginPush.call(this,location, ()=>{}, ()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject) {
    if (reject && resolve) {
        OriginReplace.call(this, location, resolve, reject)
    }
    else {
        OriginReplace.call(this,location, ()=>{}, ()=>{})
    }
}

// 配置路由，暴露实例
export default new VueRouter({
    routes: [
        {
            path:'/home',
            name:'home',
            component:MyHome,
            meta:{
                show:true
            }

        },
        {
            path:'/search/:keyword?',
            name:'search',
            component:MySearch,
            meta:{
                show:true
            },
            
        },
        {
            path:'/login',
            component:MyLogin,
            meta:{
                show:false
            }
        },
        {
            path:'/register',
            component:MyRegister,
            meta:{
                show:false
            }
        },
        // 重定向
        {
            path:'*',
            redirect:'/home'
        }

    ]
})