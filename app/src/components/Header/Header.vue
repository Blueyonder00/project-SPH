<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>蘑菇屋欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <!-- 声明式导航 -->
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a @click="logOut">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <a to="/center/myorder">我的订单</a>
          <a to="/shopcart">我的购物车</a>
          <a href="###">我的蘑菇屋</a>
          <a href="###">蘑菇屋会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注蘑菇屋</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- 点击图标变成显示home -->
        <router-link to="/home" class="logo" title="蘑菇屋">
          <img src="./images/shoppinglogo.jpg" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" @keyup.enter="goSearch"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch" >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  // 搜索按钮的回调函数,需要向search路由进行跳转
  data() {
    return { 
      keyword:''
    }
  },
  methods: {
    goSearch() {
      this.$router.push({name:'search',query:{k:this.keyword}})

    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add lang='less' attribute to set style former as less -->
<style scoped lang='less'>
.header {
  &>.top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          &+a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }

  &>.bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          height: 60px;
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
