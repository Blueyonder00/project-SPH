<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="entershow">
        <h2 class="all">全部商品分类</h2>
        <!-- 实现在home首页中显示商品分类的一级菜单，在search中不会显示的功能，如果只写show是有不bug的 -->
        <transition name="sort">
          <div class="sort" v-show="$route.name == 'home' || show">
          <!-- 利用事件委派+编程式导航实现路由跳转和参数传递 -->
          <div class="all-sort-list2" @click.prevent="goSearch">
            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{ cur: index == currentIndex }"
              @mouseenter="changeIndex(index)">
              <h3>
                <a herf="" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              </h3>
              <div class="item-list clearfix" v-show="currentIndex==index">
                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a herf="" :data-categoryName="c2.categoryName" :data-category1Id="c2.categoryId">{{ c2.categoryName }}</a>
                      <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a herf="" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>
          </div>
        </transition>
        
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">蘑菇屋超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
// 引入lodash库，按需引入
import throttle from 'lodash/throttle';
import { mapState } from 'vuex';
export default {
  name: 'MyNav',
  data() {
    return {
      currentIndex: -1,
      show: false,
    }
  },

  computed: {
    ...mapState(
      // 右侧需要一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数，state，其实即为大仓库的数据
      {
        categoryList: (state) => {
          // 因为数据存储在home中，不能采用数组直接映射
          return state.home.categoryList
        }
      })
  },
  methods: {
    //正常情况，鼠标进入每一个一级分类标签，都会触发鼠标进入事件
    //非正常情况，本身全部的一级分类都应该触发鼠标进入事件，当鼠标快速划过的时候，只有几个h3可以触发鼠标分类事件
    //可能导致卡顿，需要引入节流
    
    changeIndex:throttle(function(index) {
        this.currentIndex = index;
      },10),
   
    // 最好的解决方案是编程式导航+事件委派
    // 事件委派如何确定点击的是哪个标签，如何获取参数【1.2.3级导航？】
    // 给每个a添加自定义属性，首先选出来a标签，再选择1，2，3导航
    goSearch(e) {
      let element = e.target;
      let {categoryname,category1id,category2id,category3id} = element.dataset;
      if (categoryname) { 
        // 整理路由跳转的参数
        let location = {name:'search',query:{categoryName:categoryname}};
        if (category1id) {
          location.query.category1Id = category1id;
        }else if (category2id) {
          location.query.category2Id = category2id;
        }else {
          location.query.category3Id = category3id;
        }
        this.$router.push(location);
      }
      



    },
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.name != 'home') {
        this.show = false;
      }
      
    },
    entershow() {
      if (this.$route.name != 'home') {
        this.show = true;
        
      }
      
    },
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;


    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        height: 461px;
        overflow: hidden;

        .item {
        
          h3 {
            cursor: pointer;
            line-height: 31px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
         
            a {
              
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  cursor: pointer;
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 450px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    cursor: pointer;
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {

          //   // 使用css使得背景颜色变化
          //   // background-color: skyblue;
          //   .item-list {
          //     display: block;
          //   }
          // }
        }

        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter {
      opacity: 0;

    }
    .sort-enter-to {
      opacity: 1;

    }
    .sort-enter-active {
      transition: all 0.18s linear;

    }
  }
}</style>