<template>
    <div> 
        <div class="luncom">
            <p>{{name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"",

        }
    },
    props:{
        proparr:Array
    },
    
     created() {
        this.axios({
            url:"/xiangxi",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data[0].name)
            this.name = ok.data[0].name
        })
    },
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