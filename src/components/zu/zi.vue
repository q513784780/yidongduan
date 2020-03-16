<template>
    <div>
       <div class="lunitem" @click="fun()">


           <div>
           <img :src="imgurl" >
    
           </div>
           <div>
               <p class="yishu">{{title}}</p>
               <p class="danke"> [单科类]</p>
               <p class="price">￥ <span>{{price}}</span><van-button type="primary" size="mini">课程试听</van-button></p>
           </div>
          
       </div>
    </div>
</template>
<script>
export default {
      methods: {
       fun(){
           this.$router.push('/gailun')
            this.axios({
            url:"/neirong?id="+name,
            method:"get",
            
        }).then((ok)=>{
            window.console.log(ok.data)
            this.arr = ok.data
        })
       }
    },
    
    props:{
        imgurl:String,
        title:String,
        id:Number,
        price:Number
    },
  
}
</script>
<style scoped>
.lunitem img{
    width: 1.8rem;
    height: 0.85rem;
}
.lunitem{
    display: flex;
    font-size:0.16rem;
    padding-bottom: 0.1rem;
}
.yishu{
    font-size: 0.18rem;
    font-weight: 700;
     width:0.5rem;
  word-break:keep-all;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
}
.danke{
    margin: .08rem;
}
.price{
    color: yellow;
}
span{
    font-size: 0.18rem;
    padding: 0.1rem;
}

</style>