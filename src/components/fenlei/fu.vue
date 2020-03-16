<template>
    <div>  
        <div class="luncom">
             <zi v-for="(v,i) in proparr" :key="i" :title="v.mname"></zi>
        </div>
       

    </div>
</template>
<script>
import zi from '@/components/fenlei/zi.vue'

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
    margin: 0.1rem 0 0.1rem 0;
}
</style>