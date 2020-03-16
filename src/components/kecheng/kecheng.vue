<template>
    <div>
        
         <div class="topbar">
            <router-link to="mulu"><span>课程目录</span></router-link>
            <router-link to="jieshao"><span>课程介绍</span></router-link>
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
    flex: 1;
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