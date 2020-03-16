<template>
    <div>
        
        <fu :proparr="arr"></fu>    
            
    </div>
</template>
<script>
import fu from '@/components/zu/fu.vue'

export default {
    data(){
        return{
            arr:[]
        }
    },
    components:{
        fu,
    },
    created() {
        this.axios({
            url:"/hot",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data)
            this.arr = ok.data
        })
    },
}
</script>
<style scoped>

</style>