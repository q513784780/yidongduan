<template>
    <div>
        
         <div class="topbar">
            <router-link to="hot"><span>热门推荐</span></router-link>
            <router-link to="my"><span>自学考试</span></router-link>
            <router-link to="chengren"><span>成人高考</span></router-link>
            <router-link to="zhiye"><span>职业资格</span></router-link>
        </div>
        <router-view></router-view>


    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.topbar{
    width: 100%;
    display: flex;
    /* flex: 1; */
    /* flex-direction: row; */
    justify-content:space-around;
    font-size: 0.2rem;
  }
  .topbar>a{
    flex: 1;
    font-size:0.16rem;
  }
.router-link-active span{
   border-bottom:2px solid orange; 
  }
</style>