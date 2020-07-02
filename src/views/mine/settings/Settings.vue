<template>
    <div class="about">

        <van-nav-bar
                title="个人设置"
                left-arrow
                @click-left="onClickLeft"
        />

        <van-cell-group>
            <van-cell center value="头像修改" class="head-photo"  is-link />
            <van-cell center class="body-photo" value="昵称" to="/mine/settings/userset" is-link />
            <van-cell center value="绑定手机号" is-link to="/mine/settings/phone"/>
            <van-cell center value="性别" is-link />
            <van-cell center value="生日" is-link />
        </van-cell-group>
    </div>
</template>

<script>

import Vue from 'vue';
import { NavBar,Cell, CellGroup,Toast,Divider,NumberKeyboard } from 'vant';

Vue.use(Cell).use(NavBar).use(CellGroup).use(Toast).use(Divider ).use(NumberKeyboard );

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
        .body-photo{
            margin-top: 1%;
        }

    }
</style>
