<template>
    <div class="about">

        <van-nav-bar
                title="联系我们"
                left-arrow
                @click-left="onClickLeft"
        />

        <van-cell-group>
            <van-cell center icon="phone"  value="联系电话: 0755-22677795" />
            <van-cell center icon="manager" value="客服QQ群：694507187" label="描述信息" />
            <van-cell center icon="chat" value="客服微信：szizsh" label="描述信息" />
        </van-cell-group>
    </div>
</template>

<script>

import Vue from 'vue';
import { NavBar,Cell, CellGroup,Toast } from 'vant';

Vue.use(Cell).use(NavBar).use(CellGroup).use(Toast);

export default {
    name: "About",
    data(){
        return{}
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
