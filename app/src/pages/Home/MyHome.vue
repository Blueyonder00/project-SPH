<template>
    <div>
        <!-- 三级联动已经注册为全局组件，可以直接使用 -->
        <MyNav />

        <MyListContainer />
        <MyRecommend />
        <MyRank />
        <MyLike />
        <MyFloor />
        <MyFloor />
        <MyBrand />
       
    </div>
</template>

<script>
import MyBrand from './Brand/MyBrand.vue';
import MyFloor from './Floor/MyFloor.vue';
import MyLike from './Like/MyLike.vue';
import MyListContainer from './ListContainer/MyListContainer.vue';
import MyRank from './Rank/MyRank.vue';
import MyRecommend from './Recommend/MyRecommend.vue';


export default {
    name: "MyHome",
    components: { MyListContainer, MyRecommend, MyRank, MyLike, MyFloor, MyBrand },
   
}
</script>


<style scoped>
</style>