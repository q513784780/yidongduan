<template>
    <div>
         <div class="bot">
             <li>
                 <router-link to="/myclass">
                    <span><van-icon name="tv-o" /> </span> 
                    <p>我的课程</p>
                </router-link>
             </li>
            <li>
                <router-link to="/classfen/hot">
                    <span><van-icon name="apps-o" /></span>
                    <p>课程分类</p>
                </router-link>

            </li>
            <li>
                <router-link to="/am">
                    <span><van-icon name="user-o" /></span>
                    <p>我的</p>
                </router-link>

            </li>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>


    .bot{
        width: 100%;
        height: 0.5rem;
        position: fixed;
        bottom: 0px;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content:space-around;
        font-size: 0.2rem;
        line-height: 0.15rem;
        border-top:1px solid #f3f7f8; 
        background:white;
        z-index: 10;
    }
   
    li{
        text-align: center;
    }
    p{
        margin-top: 0.1rem;
    }
    .router-link-exact-active span{
    color: #39aaff;
    }
    .router-link-exact-active p{
    color: #39aaff;
}

</style>