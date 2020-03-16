<template>
    <div>
        <div>
            <van-nav-bar title="艺术概论" left-text="" left-arrow @click-left="fun()">

</van-nav-bar>
        </div>
        <div class="shipin">
            <video src="../../../public/shipin.mp4" controls="controls"></video>
        </div>
        <div class="jiaqian">
             <p>艺术概论</p>
             <p class="price">￥<span>550</span></p>
        </div>



        <van-tabs @click="onClick">
            <van-tab title="课程目录">
                <fu1 :proparr="arr"></fu1>
            </van-tab>
            <van-tab title="课程介绍">
                <fu2 :proparr="arr"></fu2>
                
            </van-tab>
        </van-tabs>



    <!-- 立即购买 -->
    <div class="buy">
        <el-button type="text" @click="open1" class="gouwuche">加入购物车</el-button>

        <el-button type="text" @click="open">立即购买</el-button>
        
    </div>
    


        <bottombar></bottombar>
    </div>
</template>
<script>
import fu1 from '@/components/zu/fu1.vue'
import fu2 from '@/components/zu/fu2.vue'
import bottombar from '@/components/bottombar/bottombar.vue'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    data(){
        return{
            arr:[],
            title:String,
            price:Number
        }
    },
    methods: {
    onClick(name, title) {
      this.$toast(title);
    },
    fun(){
        this.$router.go(-1)
    },
    open() {
        this.$confirm('确定是否需要购买, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已成功添加至已购课程!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
      open1(){
            Toast('已成功加入购物车');
      }
      
  },
    components: {
        fu1,
        fu2,
        bottombar
  },
  created() {
        this.axios({
            url:"/api/mulu/mululist/2?id=w",
            method:"get"
        }).then((ok)=>{
            window.console.log(ok.data)
            this.arr = ok.data
        })
    },
}
</script>
<style scoped>
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
.buy{
   width: 100%;
    height: 0.4rem;
    position: fixed;
    bottom: 0.5rem;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content:space-around;
    font-size: 0.15rem;
    line-height: 0.4rem;
    border-top:1px solid #f3f7f8; 
    background:white;
    z-index: 10;

}
.van-button--normal{
    font-size: 0.14rem;
}
.van-button--info{
    background: orangered;
    border: 1px solid orangered;
}
.van-button--normal{
    height: 0.3rem;
}
.el-button--text{
    color: black;
    height: 0.35rem;
    width: 1.5rem;
    background: orangered;
    border-radius: 0.4rem;
}
.gouwuche{
    background: yellowgreen;
}
video {
    object-fit:fill;
    width:100%;
    height:1.5rem;
    
}

</style>