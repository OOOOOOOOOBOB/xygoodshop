<template>

    <!--个人详情-->

    <div class="mine">
        <!--展示头部-->
        <div class="mine-head">
            <!-- <div class="set-up"><img src="../../assets/img/personal/shezhi.png"></div> -->
            <!-- 设置图标 -->
            <div class="mine-up"><van-icon name="setting-o" size="1.5rem" @click="$router.push('mine/settings')" /></div>
            <!-- 消息图标 -->
            <div class="mine-chat"><van-icon name="chat-o" size="1.5rem" /></div>
            <div class="mine-desc">
                <div class="mine-portrait" @click="$router.push('/personal/details')"><img src="../../assets/img/personal/touxiang.png"></div>
                <div class="mine-text" @click="$router.push('/login')">点击登录</div>
            </div>
        </div>
        <!-- 广告栏部分 -->
        <div class="mine-advert">
            <van-cell class="mine-adv" title="省钱月卡|帮你省190元" is-link/>
        </div>

        <!--展示content-->
        <div class="mine-content">
            <van-cell title="我的订单" is-link value="全部订单"/>
            <van-grid class="mine-pay"> 
                <van-grid-item icon="pending-payment" text="待付款" />
                <van-grid-item icon="clock-o" text="待发货" />
                <van-grid-item icon="logistics" text="待收货" />
                <van-grid-item icon="records" text="待评价" />
            </van-grid>
            

            <van-grid class="mine-pay1" :column-num="5"> 
                <van-grid-item icon="coupon-o" text="优惠券" />
                <van-grid-item icon="like-o" text="我的收藏" />
                <van-grid-item icon="eye-o" text="我的脚印" />
                <van-grid-item icon="gold-coin-o" text="退款售后" />
                <van-grid-item icon="notes-o" text="我的评价" />
            </van-grid>
           
        </div>

        <!-- 底部部分 -->
        <div class="mine-footer">
            <div class="footer-top" ><van-icon name="gem-o" color="red" />精品推荐</div>
            <div class="footer-content">
                <div class="footer-list" v-for="(item, index) in list" :key="index">
                    <div class="goods-img"><img :src="item.img"></div>
                    <div class="goods-desc">{{item.des}}</div>
                    <div class="goods-desc1">{{item.des1}}</div>
                    <div class="goods-price">{{item.price}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Cell, CellGroup , Grid , GridItem, Icon } from 'vant';

    Vue.use(Cell).use(CellGroup).use(Grid).use(GridItem).use(Icon )
    export default {
        //个人
        name: "Mine",
        data(){
            return {
                list:[
                    { 
                        id: "1",
                        shop_name: "IphoneX",
                        des: "苹果手机iphone 7/8/11/X",
                        img: "https://img.yzcdn.cn/vant/apple-1.jpg",
                        price: 6999,
                        des1: "退货包运费",
                    },
                    { 
                        id: "2",
                        shop_name: "Iphone11",
                        des: "苹果手机iphone 7/8/11/X",
                        img: "https://img.yzcdn.cn/vant/apple-1.jpg",
                        price: 7999,
                        des1: "退货包运费",
                    },
                    { 
                        id: "3",
                        shop_name: "Iphone11Pro",
                        des: "苹果手机iphone 7/8/11/X",
                        img: "https://img.yzcdn.cn/vant/apple-1.jpg",
                        price: 10999,
                        // des1: "退货包运费",
                    },
                    { 
                        id: "4",
                        shop_name: "Iphone7",
                        des: "苹果手机iphone 7/8/11/X",
                        img: "https://img.yzcdn.cn/vant/apple-1.jpg",
                        price: 6999,
                        // des1: "退货包运费",
                    },
                    { 
                        id: "5",
                        shop_name: "Iphone8",
                        des: "苹果手机iphone 7/8/11/X",
                        img: "https://img.yzcdn.cn/vant/apple-1.jpg",
                        price: 3213,
                        des1: "退货包运费",
                    },
                    { 
                        id: "6",
                        shop_name: "Iphone9",
                        des: "苹果手机iphone 7/8/11/X",
                        img: "https://img.yzcdn.cn/vant/apple-1.jpg",
                        price: 4345,
                        // des1: "退货包运费",
                    },
                ]
            }
        },
        methods: {
            //Nav导航
            handNavClick(index){
                console.log('index',index)
            }
        }

    }
</script>

<style scoped lang="less">
     .mine{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #f5f5f5;
        .mine-head{
            width: 100%;
            height: 100px;
            // background-image: url("../../assets/img/personal/bg.jpg");
            background-color: white;
            .mine-up{
                width: 20px;
                height: 20px;
                position: relative;
                left: 310px;
                top: 10px;
                // img{
                //     width: 100%;
                //     height: 100%;
                // }
            }
            .mine-chat{
                width: 20px;
                height: 20px;
                position: relative;
                left: 345px;
                top: -10px;
            }
            .mine-desc{
                position: relative;
                // top: 20px;
                display: flex;
                .mine-text{
                    font-size: 16px;
                    line-height: 3;
                }
                .mine-portrait{
                    width: 50px;
                    margin: 0 10px;
                    img{
                        width: 100%;
                    }
                }
                .minetext{
                    margin-top: 5px;
                    font-size: 13px;
                    color: black;
                }
            }
        }
        .mine-advert{
            position: relative;
            margin: 0 5px;
            .mine-adv{                
                background-color: pink;
                border-radius: 10px 10px 0 0;
            }
        }
        .mine-content{
            // margin: 5px 5px;
            position: relative;
            bottom: 0;
            .mine-pay{
                margin-bottom:5px;
            }
            .mine-pay1{
                .van-grid-item__icon{
                    color: red !important;
            }
            }
            
        }
        .mine-footer{
            margin-top: 5px;
            height: 100%;
            background-color: white;
            .footer-top{
                width: 100%;
                height: 40px;
                background-color: #fff;
                line-height: 3;
                text-align: center;
            }
            .footer-content{
                .footer-list{
                    width: 50%;
                    height: 240px;
                    margin-bottom: 5px;
                    float: left;
                    // background-color: yellow;
                    .goods-img{
                        height: 75%;
                        img{
                            width: 98%;
                            height: 100%;
                        }
                    }
                    .goods-desc1{
                        color: orange;
                    }
                }
            }
        }
    }

   

</style>
