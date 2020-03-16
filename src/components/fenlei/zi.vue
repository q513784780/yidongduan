<template>
    <div>
        <div class="biaoti">
            <h3>{{title}}</h3>
            <span  v-for="(v,i) in arr" :key="i">{{v.xname}}</span>
            
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            arr:[],
            xname:String,
            mId:Number
        }
    },
    
    props:{
        title:String,
    },
     created() {
        this.axios({
            url:"/xiangxi",
            method:"get",
            parmas:{}
        }).then((ok)=>{
            window.console.log(ok.data)
            this.arr = ok.data
        })
    },
}
</script>
<style scoped>
.biaoti{
    font-size: 0.17rem;
    border-bottom:3px solid #F1F1F1;
    margin-bottom: 0.15rem;
}
.biaoti span{
    font-size: 0.12rem;
    background: #F1F1F1;
    border-radius: 30px;
    margin: 0.15rem;
    padding-top:0.15rem; 
    margin-bottom: 0.15rem;
}

</style>