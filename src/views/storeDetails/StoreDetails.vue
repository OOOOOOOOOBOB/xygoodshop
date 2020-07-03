<template>
    <div class="store-details">
        <headers class="store-details-headers">
            <img class="sweep" src="../../assets/img/firstpage/back.png" slot="left"
                 @click="$router.push('/first/page')">

            <div slot="center" class="title">商家详情</div>
        </headers>
        <scroll class="store-scroll"
                @pullUp="pullUp"
                @refreshing="refreshing"
                ref="scroll">

            <div class="store-details-content">
                <!--轮播图-->
                <div class="my-swipe-list">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item class="swipe-item" v-for="(item,index) in img_list" :key="index">
                            <img :src="item.img" class="swipe-img">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <!--详情-->
                <div class="store-desc">
                    <div class="store-desc-item" v-for="(item, index) in store_list" :key="index">
                        <div class="title-list">
                            <div class="title">{{item.title}}</div>
                            <div class="subhead">{{item.subhead}}</div>
                        </div>
                        <div class="sales">{{'月销: ' + item.sales}}</div>
                        <div class="service-time">
                            <div class="icon"><img src="@/assets/img/icon/time.png"></div>
                            <div class="time">
                                <span class="service-title">营业时间 : </span>
                                <span class="start">{{item.time_start}}</span>
                                :
                                <span class="start">{{item.time_start}}</span>
                                -
                                <span class="end">{{item.time_end}}</span>
                                :
                                <span class="end">{{item.time_end}}</span>
                            </div>
                        </div>
                        <div class="go-title">
                            <span class="go"><img src="@/assets/img/icon/go.png"></span>
                            <span class="title">立即购买</span>
                        </div>
                        <div class="sign-in">
                            <span class="every-sign-in">天天签到，领券优惠更多~</span>
                            <span class="shop-go-pay">去买单</span>
                        </div>
                        <div class="store-introduce-title">店铺介绍：</div>
                        <div class="store-introduce-details">
                            {{item.introduce}}
                        </div>
                        <div class="address">
                            <span class="icon"><img src="@/assets/img/icon/address.png"></span>
                            <span class="text">{{item.address}}</span>
                        </div>
                        <div class="phone">
                            <span class="icon"><img src="@/assets/img/icon/phone.png"></span>
                            <a :href="'tel:' + item.phone" class="call">
                                <span class="text">{{item.phone}}</span>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="like-tile">猜你喜欢</div>
                <div class="like-list">

                    <store-list :list="like_list" :isClass="false"/>

                </div>
            </div>

        </scroll>

        <position :show="false"/>

    </div>
</template>

<script>
    import StoreList from "@/components/common/StoreList";
    import Headers from "@/components/headers/Headers";
    import Scroll from "@/components/scroll/Scroll";
    import Position from "@/components/common/Position";
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';

    Vue.use(Swipe);
    Vue.use(SwipeItem);

    export default {
        name: "StoreDetails",
        components: {
            Headers,
            StoreList,
            Scroll,
            Position
        },
        data(){
            return {
                Refreshing: true,
                isShow: [],
                img_list: [
                    {img: require('../../assets/img/firstpage/store.png')},
                    {img: require('../../assets/img/firstpage/store.png')},
                    {img: require('../../assets/img/firstpage/store.png')}
                ],
                store_list: [
                    {
                        title: '烧烤店',
                        subhead: '美食',
                        sales: 1,
                        time_start: '00',
                        time_end: '00',
                        introduce: '正宗好吃,味道正,免费配送',
                        address: '深圳市福田区',
                        phone: 18888888888

                    }
                ],
                like_list: [
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
                ]
            }
        },
        created() {
            const id = this.$route.query.id

            console.log(id)
        },
        methods: {

            //上拉加载
            pullUp(){

                let list = [
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
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
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
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    }
                ]
                this.like_list.push(...list)
                console.log('11')

                setTimeout(() => {

                    this.$refs.scroll.closeOnLoad()

                },2000)

                if (this.like_list.length > 20){

                    this.$refs.scroll.openFinished()
                }

            },

            //下拉刷新
            refreshing(){

                console.log('下拉了')

                setTimeout(() => {

                    this.$refs.scroll.closeRefresh()

                },2000)

                //当为空的时候isFinished变成true
            }


        }


    }
</script>

<style scoped lang="less">
    .store-details{
        background-color: #f5f5f5;
        .store-details-headers{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 40px;
            background-color: gold;
            z-index: 100;
            .sweep{
                margin: auto;
                width: 25px;
            }
            .title{
                margin: auto;
                font-size: 16px;
                color: #d4237a;
            }
        }
        .store-details-content{
            background-color: #f5f5f5;
            .my-swipe-list{
                .my-swipe{
                    margin: 0 10px;
                    height: 150px;
                    border-radius: 10px;
                    .swipe-item{
                        height: 150px;
                        width: 100%;
                        border-radius: 10px;
                        .swipe-img{
                            width: 100%;
                            height: 100%;
                            border-radius: 10px;
                        }

                    }
                }

            }
            .store-desc{
                margin: 10px 15px;
                background-color: white;
                border-radius: 10px;
                .store-desc-item{
                    .title-list{
                        display: flex;
                        justify-content: space-between;
                        height: 40px;
                        margin-left: 10px;
                        .title{
                            width: 80%;
                            margin: auto 0;
                            color: black;
                            font-size: 24px;
                            font-weight: 500;
                        }
                        .subhead{
                            width: 20%;
                            margin: auto 15px;
                            color: #707070;
                        }
                    }
                    .sales{
                        margin: 10px;
                    }
                    .service-time{
                        margin: 15px 10px;
                        font-size: 14px;
                        display: flex;
                        .icon{
                            height: 30px;
                            display: flex;
                            img{
                                margin: auto;
                                width: 20px;
                                height: 20px;
                            }
                        }
                        .time{
                            height: 30px;
                            line-height: 30px;
                            margin-left: 5px;
                            .service-title{
                                font-size: 16px;
                            }
                            .start{
                                background-color: red;
                                color: white;
                                padding: 5px;
                            }
                            .end{
                                background-color: red;
                                color: white;
                                padding: 5px;
                            }
                        }
                    }
                    .go-title{
                        height: 40px;
                        line-height: 40px;
                        display: flex;
                        margin: 10px;
                        .go{
                            display: flex;
                            img{
                                margin: auto;
                                width: 30px;
                                height: 30px;
                            }
                        }
                        .title{
                            margin-left: 15px;
                            font-size: 20px;
                            font-weight: 600;
                        }
                    }
                    .sign-in{
                        display: flex;
                        margin-left: 10px;
                        .every-sign-in{
                            width: 70%;
                            height: 70px;
                            line-height: 70px;
                            text-align: center;
                            background-color: gold;
                            color: white;
                            border-radius: 10px;

                        }
                        .shop-go-pay{
                            width: 25%;
                            margin-left: 10px;
                            margin-right: 10px;
                            text-align: center;
                            height: 70px;
                            line-height: 70px;
                            background-color: #FF3709;
                            color: white;
                            border-radius: 10px;

                        }

                    }
                    .store-introduce-title{
                        margin: 10px 10px;
                        font-size: 16px;
                    }
                    .store-introduce-details{
                        margin: 10px;
                        color: #707070;
                        font-size: 14px;
                        border-bottom: .5px solid #f5f5f5;
                        padding-bottom: 20px;
                    }
                    .address{
                        margin-left: 10px;
                        display: flex;
                        height: 30px;
                        line-height: 30px;
                        .text{
                            margin-left: 10px;
                            font-size: 14px;
                        }
                    }
                    .phone{
                        height: 30px;
                        line-height: 30px;
                        margin-left: 10px;
                        display: flex;
                        padding-bottom: 10px;
                        .text{
                            margin-left: 10px;
                            font-size: 16px;
                        }
                    }

                }
            }
            .like-tile{
                height: 50px;
                line-height: 50px;
                text-align: center;
                margin: 10px;
                background-color: white;
                border-radius: 10px;
                font-size: 24px;
            }
            .like-list{
                margin: 10px;
                .like-item{
                    display: flex;
                    .store{
                        width: 100px;
                        height: 100px;
                        img{
                            width: 100px;
                            height: 100px;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
        .store-scroll{
            position: absolute;
            top: 40px;
            bottom: 50px;
            overflow: hidden;
            left: 0;
            right: 0;
            z-index: 10;
            overflow-y: scroll;
            background-color: yellow;
        }
        .icon{
            display: flex;
            img{
                margin: auto;
                width: 20px;
                height: 20px;
            }
        }
    }

</style>