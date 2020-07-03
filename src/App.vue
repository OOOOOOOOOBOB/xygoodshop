<template>
  <div id="app">
    <router-view/>
    <div class="home-buttom" v-show="$route.meta.TabBarShow">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="wap-home-o" to="../home">首页</van-tabbar-item>
                <van-tabbar-item icon="comment-o" to="../category">分类</van-tabbar-item>
                <van-tabbar-item icon="cart-o" to="../cart">购物车</van-tabbar-item>
                <van-tabbar-item icon="manager-o" to="../personal">我的</van-tabbar-item>
            </van-tabbar>
        </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {  Tabbar, TabbarItem,Icon  } from 'vant';
  Vue.use(Tabbar).use(TabbarItem).use(Icon);

  export default {
    name : "App",
    data(){
      return {
        active: 0,
      }
    }
  }

</script>

<style lang="less">
#app {
  background-color: #f5f5f5;
}
body{
  margin: 0;
  padding: 0;
  //overflow-y: hidden;
}
body::-webkit-scrollbar{
  display: none;
}
</style>
