<template>
    <div class="about">

        <van-nav-bar
                title="关于我们"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="van-multi-ellipsis--20">
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略

        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import { NavBar,Cell, CellGroup,Toast } from 'vant';

Vue.use(Cell).use(NavBar).use(CellGroup).use(Toast);

export default {
    name: "Concerning",
    data(){
        return{
            
        }
    },
    methods: {
        onClickLeft(){
                this.$router.push('/mine')
                Toast('返回')
            },
    },
}
</script>


<style lang="less" scoped>
    .about{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #f5f5f5;

    }
</style>
