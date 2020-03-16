<template>
    <div class="header">
        <img src="../../../public/logo.png" alt="">
        <van-search placeholder="请输入课程名称"></van-search> 
        <a href="#"><img src="../../../public/qiandao.png" alt=""></a>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 0.6rem;
        display: flex;
        align-items: center;
    }
    .header>img{
        width: 0.9rem;
        height: 0.3rem;
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