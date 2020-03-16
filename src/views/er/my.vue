<template>
    <div>
        <div class="fenlei">
            <fu :proparr="arr"></fu>
        </div>
    </div>
</template>
<script>
import fu from '@/components/fenlei/fu.vue'
export default {
    
     data(){
        return{
            arr:[]
        }
    },
    components: {
        fu,
  },
  created() {
        this.axios({
            url:"/fenlei",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data)
            this.arr = ok.data
        })
    },
}
</script>
<style scoped>
.fenlei{
    border-bottom: 3px 
}
</style>