<template>
    <!--主页-->

    <div class="home">
        <div class="header">
            <van-search placeholder="请输入搜索关键词" @click="handSearchClick"/>
        </div>
        <div class="home-content">
            <van-pull-refresh class="content"
                              v-model="refreshing"
                              @refresh="onRefresh"
                              success-text="加载成功">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="已经到底了！"
                        @load="onLoad"
                >
                    <div class="swipe">
                        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                            <van-swipe-item v-for="(item,index) in items" :key="index" @click="handSwipeClick(index)">
                                <div class="img"><img :src="item.img"></div>
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                    <div class="nav">
                        <van-grid :column-num="4">
                            <van-grid-item v-for="(item, index) in nav_list" :key="index" @click="handNavClick(index)">
                                <div class="img"><img :src="item.img"></div>
                                <div class="name">{{item.name}}</div>
                            </van-grid-item>
                        </van-grid>
                    </div>
                    <div class="broadcast">
                        <van-notice-bar left-icon="volume-o" :scrollable="false">
                            <van-swipe
                                    vertical
                                    class="notice-swipe"
                                    :autoplay="3000"
                                    :show-indicators="false"
                            >
                                <van-swipe-item v-for="(item, index) in swipe_list" :key="index">
                                    {{item.title}}
                                </van-swipe-item>
                            </van-swipe>
                        </van-notice-bar>
                    </div>
                    <van-cell title="秒杀活动" is-link value="暂无" @click="handSecKillClick"/>
                    <div class="recommendations">特色推荐</div>
                    <div class="goods-list">
                        <div class="goods-list-item" v-for="(item, index) in goods" :key="index" @click="handItemClick(index)">
                            <div class="goods-img"><img :src="item.img"></div>
                            <div class="goods-desc">{{item.title}}</div>
                        </div>
                    </div>
                </van-list>
            </van-pull-refresh>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Search , Swipe , SwipeItem , Grid ,
        GridItem , Cell , CellGroup, NoticeBar , List, PullRefresh } from 'vant';

    Vue.use(Search).use(Swipe).use(SwipeItem).use(Grid)
        .use(GridItem).use(Cell).use(CellGroup).use(NoticeBar)
        .use(List).use(PullRefresh);

    export default {
        name: "Home",
        data(){
            return {
                value: '',
                items: [
                    {img: 'https://img.yzcdn.cn/vant/apple-3.jpg'},
                    {img: 'https://img.yzcdn.cn/vant/apple-2.jpg'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                ],
                nav_list: [
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                    {name: '全部分类',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                ],
                swipe_list: [
                    {id: 1, title: '啦啦啦啦啦'},
                    {id: 2, title: '明天的ppp'},
                    {id: 3, title: '今天的pppp'},
                    {id: 4, title: '啦ppppp'},
                ],
                goods: [
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'}
                ],
                page: 0,
                finished: false,
                loading: false,
                refreshing: false
            }
        },
        methods: {
            getData(){
                this.page += 1;
                console.log('page',this.page)
                //发送ajax请求
                let good_list = [
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'}
                ]

                this.goods.push(...good_list)
                //console.log('list',this.list)

            },

            onRefresh(){
                this.finished = false;
                this.loading = true;
                this.onLoad();
            },
            onLoad(){
                //下拉加载刷新
                if (this.refreshing) {
                    this.page = 0;
                    this.goods = []
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
                    if (this.goods.length >= 20){
                        this.finished = true;
                    }
                }
                //发送请求
                this.getData()
            },


            //点击搜索id
            handSearchClick(){
                this.$router.push('/search')
                console.log('搜索')
            },
            handNavClick(index){
                console.log('nav',index)
            },
            //点击秒杀
            handSecKillClick(){
                console.log('秒杀')
            },
            handSwipeClick(index){
                console.log('swipe',index)
            },
            //点击商品id
            handItemClick(index){
                this.$router.push('/details')
                console.log('goods',index)
            }
        }
    }
</script>

<style scoped lang="less">
    .home{
        background-color: #f5f5f5;
        .header{
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
        }
        .home-content{
            .content{
                background-color: #f5f5f5;
                position: absolute;
                top: 54px;
                bottom: 50px;
                overflow: hidden;
                left: 0;
                right: 0;
                z-index: 10;
                overflow-y: scroll;
                .recommendations{
                    margin: 10px 10px;
                    background-color: white;
                }
                .goods-list{
                    margin: 10px 10px;
                    .goods-list-item{
                        background-color: white;
                        display: flex;
                        border-radius: 10px;
                        margin: 10px 0;
                        .goods-img{
                            width: 40%;
                            img{
                                width: 100%;
                                border-radius: 10px;
                            }
                        }
                        .goods-desc{
                            margin-left: 10px;
                        }
                    }
                }
            }

        }

    }

</style>