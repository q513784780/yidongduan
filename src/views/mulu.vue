<template>
    <div>
        <fu :proparr="arr"></fu>

        
    </div>

</template>
<script>
import fu from '@/components/fenlei/fu.vue'

export default {
    props:{
        mname:String,
        mid:Number
    },
    components:{
        fu,
    },
  data() {
    return {
        arr:[]

    }
  },
  created() {
        this.axios({
            url:"/neirong",
            method:"get",
            
        }).then((ok)=>{
            window.console.log(ok.data)
            this.arr = ok.data
        })
    },
};
</script>
<style scoped>
.mulu{
    font-size: 0.16rem;
}
.diyijie{
    display: flex;
    padding : 5px 5px;
}
.diyijie h3{
    margin-left: 0.15rem;
}
.neirong{
    display: flex;
}
/* .van-icon-success{
    margin: 5px 5px 0 10px;

} */
i{
    margin: 5px 5px 0 .2rem;
    color: aquamarine;
}
.box{
    background: #F0F0F0;
}
</style>