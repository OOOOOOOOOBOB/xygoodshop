<template>
    <div class="about">

        <van-nav-bar
                title="个人设置"
                left-arrow
                @click-left="onClickLeft"
        />

        <van-cell-group>
            <van-cell center value="头像修改" class="head-photo"  is-link />
            
            <van-cell center icon="manager" class="body-photo" value="客服QQ群：694507187" label="描述信息" />
            <van-cell center icon="chat" value="客服微信：szizsh" label="描述信息" />
        </van-cell-group>
    </div>
</template>

<script>

import Vue from 'vue';
import { NavBar,Cell, CellGroup,Toast,Divider  } from 'vant';

Vue.use(Cell).use(NavBar).use(CellGroup).use(Toast).use(Divider );

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
