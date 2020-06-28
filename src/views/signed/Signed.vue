<template>
    <!--签到页面-->
    <div class="signed">
        <div class="header">121212</div>
        <div class="signed-content">
            <van-pull-refresh class="content"
                              v-model="refreshing"
                              @refresh="onRefresh"
                              success-text="加载成功">
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad"
                    >
                        <div class="goods-item" v-for="(item, index) in list" :key="index">
                            <div class="img"><img :src="item.img"></div>
                            <div class="title">{{item.title}}</div>
                        </div>
                    </van-list>
                </van-pull-refresh>
        </div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar, Form, Field, Toast, List, PullRefresh, Cell} from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Toast).use(List).use(PullRefresh).use(Cell);
    export default {
        name: "Signed",
        data() {
            return {
                goods: [],
                list: [],
                page: 0,
                loading: false,
                finished: false,
                refreshing: false
            }
        },
        created() {
            this.getData()
        },
        methods: {
            //发送请求
            getData(){
                this.page += 1;
                console.log('page',this.page)
                //发送ajax请求
                let data = [
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'}
                ]
                this.list.push(...data)
                console.log('list',this.list)
            },
            onRefresh(){

                this.finished = false;
                this.loading = true;
                this.onLoad();
            },
            onLoad(){

                //下拉加载更多
                if (this.refreshing) {
                    this.page = 0;
                    this.list = []
                    //下拉刷新提示
                    setTimeout(() => {
                        this.refreshing = false;
                        console.log('下拉刷新成功')
                        //Toast('下拉加载成功')
                    },2000)
                    this.loading = false;
                }else {
                    //上拉加载更多提示
                    setTimeout(() => {
                        console.log('上拉加载成功')
                        //Toast('上拉加载成功')
                        this.loading = false;
                    },3000)

                    //当返回的长度
                    if (this.list.length >= 20){
                        this.finished = true;
                    }
                }
                //发送请求
                this.getData()

            },
        }
    }
</script>

<style scoped lang="less">
    .signed{
        .header{
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            height: 50px;
            background-color: red;
        }
        .signed-content{
            .content{
                position: absolute;
                top: 50px;
                bottom: 50px;
                overflow: hidden;
                left: 0;
                right: 0;
                z-index: 10;
                overflow-y: scroll;
                .goods-item{
                    display: flex;
                    .img{
                        width: 50%;
                        height: 50%;
                        img{
                            width: 100%;
                        }
                    }
                }

            }
        }


        .footer{
            width: 100%;
            position: fixed;
            left: 0;
            bottom: 0;
            height: 50px;
            background-color: red;
        }

    }

</style>