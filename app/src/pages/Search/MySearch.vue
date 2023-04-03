<template>
    <div>我是搜索
        <div>{{$route.params.keyword}}---{{ $route.query.k }}</div>
    </div>
    
</template>

<script>
export default {
    name:'MySearch'
}
</script>


<style scoped>
</style>