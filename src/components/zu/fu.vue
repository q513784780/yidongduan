<template>
    <div>  


        <!-- 热门推荐那里的 -->
        <div class="luncom">
             <zi v-for="(v,i) in proparr" :key="i" :title="v.productname" :imgurl="v.productpic" :price="v.price"></zi>
        </div>
       

    </div>
</template>
<script>
import zi from '@/components/zu/zi.vue'

export default {
    props:{
        proparr:Array
    },
    components:{
        zi
    }
}
</script>
<style scoped>
.luncom{
    width: 100%;
    /* height: 2rem; */
    /* background: pink; */
    margin: 0.1rem 0 0.2rem 0;
    padding-bottom: 0.3rem;
}
</style>