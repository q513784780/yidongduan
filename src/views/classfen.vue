<template>
    <div>
        <div class="header">
        <img src="../../public/logo.png" alt="">
        <van-search placeholder="请输入课程名称"></van-search> 
    </div>
       <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../../public/banner1.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../public/0.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../public/banner1.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../public/0.jpg" alt=""></van-swipe-item>
        </van-swipe>
       </div>

        



        <topbar></topbar>
        <bottombar></bottombar>
    </div>
</template>
<script>
import topbar from '@/components/topbar/topbar.vue'
import bottombar from '@/components/bottombar/bottombar.vue'


export default {
    components: {
        topbar,
        bottombar
  }
}
</script>
<style scoped>
.banner{
    height: 1.7rem;
    font-size: 0;
}
.banner img{
    width: 100%;
    height: 1.7rem;
}


.header{
        width: 100%;
        height: 0.6rem;
        display: flex;
        flex: 1;
        align-items: center;
    }
    .header>img{
        width: 0.9rem;
        height: 0.25rem;
        margin-left: 0.15rem;
    }
    .header>a{
        display: flex;
    }
    .header>a>img{
        width: 0.4rem;
        height: 0.18rem;
    }
    .van-search__content{
        width: 1.8rem;
        height: 0.25rem;
        border-radius: 0.5rem;
        background-color: #fdfffe;
        border: 0.01rem solid #e2e2e2;
    }
    .van-cell{
        line-height: 0.17rem;
    }
</style>