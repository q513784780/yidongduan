<template>
    <div>
        <van-collapse v-model="activeNames">
            <van-collapse-item :title="title" name="1" id="van-cell">
                <van-radio-group>

                    <div class="neirong">
                        <h3><van-icon name="circle" />{{title}}</h3>
                        <p><van-icon name="play-circle-o" />{{title}}</p>
                    </div>
                    
                </van-radio-group>
            </van-collapse-item>
        </van-collapse>

    </div>
</template>
<script>
export default {
    data() {
        return {
        activeNames: ['0'],
        }
    },

    props:{
        title:String,
    },
}
</script>
<style scoped>
.van-cell--clickable{
    font-size: 0.18rem;
}
.van-icon {
    margin: 0.1rem 0.08rem 0.1rem 0.16rem;
}
.van-icon{
    color: blue;
}
.neirong p{
    margin-left: 0.16rem;
}
.neirong{
    background: #F0F0F0;
}

</style>