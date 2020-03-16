<template>
    <div> 
        <div class="luncom">
             <zi1 v-for="(v,i) in proparr" :key="i"  :title="v.title"></zi1>
        </div>
    </div>
</template>
<script>
import zi1 from '@/components/zu/zi1.vue'
export default {
    props:{
        proparr:Array
    },
    components:{
        zi1,
    }
}
</script>
<style scoped>
.luncom{
    width: 100%;
    margin: 0.1rem 0 0.1rem 0;
}






.shipin{
    width: 100%;
    height: 1.5rem;
    background: pink;
}
p{
    font-size: 0.16rem;
}
.price{
    font-size: 0.25rem;
    color: orange;
}
.jiaqian{
    border-bottom: 3px solid #F5F5F5; 
}
span{
    font-size: 0.16rem;
}
.biaoti{
    display: flex
}
</style>