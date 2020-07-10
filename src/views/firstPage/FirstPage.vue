<template>
    <div class="first-page">


        <headers class="first-page-header">

            <img class="sweep" src="../../assets/img/firstpage/Sweep.png" slot="left">

            <div slot="center" class="search" @click="$router.push('/store/recommend')"><span class="text">搜索商家</span></div>

        </headers>

        <scroll class="first-scroll"
                @pullUp="pullUp"
                @refreshing="refreshing"
                ref="scroll">
            <div class="content">
                <!--领券导航-->
                <div class="nav-list">
                    <div class="nav-item" v-for="(item,index) in items" :key="index" @click="navClick(index)">
                        <div class="img"><img :src="item.icon"></div>
                        <div class="name">{{item.name}}</div>
                    </div>
                </div>
                <!--商店导航-->
                <div class="nav-bar-list">
                    <div class="nav-bar-item" v-for="(item, index) in bar_list"
                         :key="index"
                         @click="$router.push('/store/recommend')">
                        <div class="img"><img :src="item.icon"></div>
                        <div class="name">{{item.name}}</div>
                    </div>
                </div>
                <!--广播-->
                <div class="broadcast">
                    <div class="broadcast-desc">
                        <van-swipe style="height: 40px;" vertical autoplay="3000"
                                   loop :show-indicators="showIndicators">
                            <van-swipe-item v-for="(item, index) in broadcast_list" :key="index">
                                {{item.name}}
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                    <div class="broadcast-img"><img src="../../assets/img/firstpage/broadcast.png"></div>
                </div>
                <!--签到-->
                <div class="sign-in">
                    <div class="sign-in-img" @click="$router.push('/signed')"><img src="../../assets/img/firstpage/signin.png"></div>
                </div>
                <!--为你推荐-->
                <div class="recommend-list">
                    <div class="recommend-header">
                        <div class="img"><img src="../../assets/img/firstpage/recommend.png"></div>
                        <div class="title">为你推荐</div>
                    </div>
                    <store-list :list="list" :isClass="true"/>
                </div>
            </div>

        </scroll>


    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Dialog } from 'vant';

    Vue.use(Swipe);
    Vue.use(SwipeItem);
    Vue.use(Dialog);

    import Headers from "@/components/headers/Headers";
    import StoreList from "@/components/common/StoreList";
    import Scroll from "@/components/scroll/Scroll";

    export default {
        name: "FirstPage",
        components: {
            Headers,
            StoreList,
            Scroll
        },
        data(){
            return {
                opp: '',
                items: [
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '优惠券'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '消费券'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '我的账单'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '商家入驻'
                    },
                ],
                bar_list: [
                    {
                        icon: require('../../assets/img/firstpage/shop.png'),
                        name: '便利店'
                    },
                    {
                        icon: require('../../assets/img/firstpage/fruit.png'),
                        name: '水果店'
                    },
                    {
                        icon: require('../../assets/img/firstpage/shop.png'),
                        name: '生鲜店'
                    },
                    {
                        icon: require('../../assets/img/firstpage/fruit.png'),
                        name: '停车场'
                    },
                    {
                        icon: require('../../assets/img/firstpage/shop.png'),
                        name: '加油站'
                    },
                    {
                        icon: require('../../assets/img/firstpage/fruit.png'),
                        name: '银行'
                    },
                    {
                        icon: require('../../assets/img/firstpage/shop.png'),
                        name: '超市'
                    },
                    {
                        icon: require('../../assets/img/firstpage/fruit.png'),
                        name: '宾馆'
                    },
                ],
                broadcast_list: [
                    {name: '恭喜用户18888888888获得免单'},
                    {name: '恭喜用户18888888888获得免单'},
                    {name: '恭喜用户18888888888获得免单'},
                ],
                list: [
                    {
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 2,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 3,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 4,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 5,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 6,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区八卦岭',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 7,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区八卦岭',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 8,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区八卦岭',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 9,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区八卦岭',
                        distance: 1.9,
                        subhead: '美容'
                    }
                ],
                showIndicators: false
            }
        },
        mounted() {
            this.Tmap()
        },
        methods: {

            //上拉加载更多
            pullUp(){

                let store_list = [
                    {
                        id: 10,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 11,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                ]

                this.list.push(...store_list)

                setTimeout(() => {



                    this.$refs.scroll.closeOnLoad()

                },2000)
                this.$toast('12212')

                if (this.list.length > 20){

                    this.$refs.scroll.openFinished()
                }
            },

            //下拉刷新
            refreshing(){

                console.log('下拉了')

                setTimeout(() => {

                    this.$refs.scroll.closeRefresh()

                },2000)
            },


            //nav跳转
            navClick(index){

                if (index === 0){
                    this.$router.push('/consumer')
                }
                if (index === 1){
                    this.$router.push('/coupon')
                }
                if (index === 2){
                    this.$router.push('/bill')
                }

            },


            Tmap() {

                window.addEventListener('message', function(event) {
                    console.log('event',event)

                    var loc = event.data;

                    this.opp = loc.city;

                    // 显示你当前位置
                    console.log(this.opp)

                }, false);

            }
        }
    }
</script>

<style scoped lang="less">
    .first-page{

        background-color: #f5f5f5;
        .first-page-header{
            position: fixed;
            display: flex;
            width: 100%;
            left: 0;
            top: 0;
            height: 40px;
            background-color: #FF3709;
            z-index: 100;
            .sweep{
                width: 50%;
                margin: auto;
            }
            .search{
                display: flex;
                margin: auto 0;
                width: 100%;
                .text{
                    width: 100%;
                    margin: auto;
                    height: 30px;
                    line-height: 30px;
                    background-color: white;
                    border: 1px solid white;
                    border-radius: 5px;
                    color: gray;
                    font-size: 14px;

                }
            }
        }
        .content{
            background-color: #f5f5f5;
            .nav-list{
                display: flex;
                text-align: center;
                margin: 0 15px;
                background-color: white;
                border-radius: 10px;
                height: 100px;
                .nav-item{
                    width: 25%;
                    margin: auto;
                    .img{
                        width: 40%;
                        margin: auto;
                        img{
                            width: 100%;
                        }
                    }
                    .name{
                        font-size: 15px;
                    }
                }
            }
            .nav-bar-list{
                margin: 10px 15px;
                background-color: white;
                border-radius: 10px;
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                .nav-bar-item{
                    width: 20%;
                    margin: 15px 0;
                    .img{
                        width: 60%;
                        margin: auto;
                        img{
                            width: 100%;
                        }
                    }
                    .name{
                        font-size: 15px;
                    }
                }
            }
            .broadcast{
                height: 40px;
                line-height: 40px;
                display: flex;
                margin: 10px 15px;
                background-color: white;
                border-radius: 10px;
                justify-content: space-between;
                .broadcast-desc{
                    width: 85%;
                    margin-left: 30px;
                    color: red;
                }
                .broadcast-img{
                    width: 15%;
                    display: flex;
                    img{
                        margin: auto 0;
                        width: 30px;
                        height: 30px;
                    }
                }
            }
            .sign-in{
                margin: 10px 15px;
                .sign-in-img{
                    width: 100%;
                    img{
                        width: 100%;
                        border-radius: 15px;
                    }
                }
            }
            .recommend-list{
                .recommend-header{
                    display: flex;
                    height: 40px;
                    background-color: white;
                    margin: 0 10px;
                    border-radius: 10px;
                    .img{
                        width: 15%;
                        height: 35px;
                        display: flex;
                        img{
                            margin: auto;
                            width: 30px;
                            height: 30px;
                        }
                    }
                    .title{
                        font-size: 20px;
                        margin: auto 10px;
                    }
                }
            }
        }
        .first-scroll{
            position: absolute;
            top: 41px;
            bottom: 50px;
            overflow: hidden;
            left: 0;
            right: 0;
            z-index: 10;
            overflow-y: scroll;
            background-color: yellow;
        }
    }

</style>