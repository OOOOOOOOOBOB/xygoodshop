<template>

    <!--个人详情-->

    <div class="personal">
        <!--展示头部-->
        <div class="bg">
            <!-- <div class="set-up"><img src="../../assets/img/personal/shezhi.png"></div> -->
            <!-- 设置图标 -->
            <div class="set-up"><van-icon name="setting-o" size="1.5rem" /></div>
            <!-- 消息图标 -->
            <div class="set-chat"><van-icon name="chat-o" size="1.5rem" /></div>
            <div class="personal-desc">
                <div class="portrait" @click="$router.push('/personal/details')"><img src="../../assets/img/personal/touxiang.png"></div>
                <div class="text" @click="$router.push('/login')">点击登录</div>
                <!-- <div class="sign-in" @click="$router.push('/signed')"><img src="../../assets/img/personal/qiandao.png"></div> -->
            </div>
        </div>
        <!--展示content-->
        <div class="personal-content">
            <!-- <div class="information">
                <div class="money item">
                    <div class="number">0</div>
                    <div class="text">金额</div>
                </div>
                <div class="integral item">
                    <div class="number">0</div>
                    积分
                </div>
                <div class="coupon item">
                    <div class="number">0</div>
                    优惠券
                </div>
            </div> -->
            <div class="information">
                <div class="goods item">
                    <div class="number">0</div>
                    <div class="text">商品关注</div>
                </div>
                <div class="shop item">
                    <div class="number">0</div>
                    店铺关注
                </div>
                <div class="like item">
                    <div class="number">0</div>
                    喜欢的内容
                </div>
                <div class="browse item">
                    <div class="number">0</div>
                    浏览记录
                </div>
            </div>
            <div class="my-order">
                <!-- <van-cell title="我的订单" is-link/> -->
                <van-grid :column-num="5">
                    <van-grid-item v-for="(item, index) in list" :key="index">
                        <div class="img"><img :src="item.icon"></div>
                        <div class="text">{{item.name}}</div>
                    </van-grid-item>
                </van-grid>
            </div>
            <div class="essential">
                <van-cell title="必备功能" is-link/>
                <van-grid :column-num="4">
                    <van-grid-item v-for="(item, index) in items" :key="index" @click="handNavClick(index)">
                        <div class="img"><img :src="item.icon"></div>
                        <div class="text">{{item.name}}</div>
                    </van-grid-item>
                </van-grid>
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
        name: "Personal",
        data(){
            return {
                list: [
                    {name: '待付款', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '待收货', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '待评价', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '退还/售后', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的订单', icon:  require('../../assets/img/personal/qiandao.png')}
                ],
                items: [
                    {name: '我的评价', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '拼团订单', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的海报', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的分销', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '虚拟订单', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '积分商城', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '领劵中心', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '浏览记录', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '地址管理', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我要开店', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的签到', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的签到', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的签到', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的签到', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的签到', icon:  require('../../assets/img/personal/qiandao.png')},
                    {name: '我的签到', icon:  require('../../assets/img/personal/qiandao.png')},
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
    .personal{
        width: 100%;
        background-color: #f5f5f5;
        .bg{
            width: 100%;
            height: 150px;
            background-image: url("../../assets/img/personal/bg.jpg");
            .set-up{
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
            .set-chat{
                width: 20px;
                height: 20px;
                position: relative;
                left: 345px;
                top: -10px;
            }
            .personal-desc{
                position: relative;
                top: 20px;
                display: flex;
                .portrait{
                    width: 50px;
                    margin: 0 10px;
                    img{
                        width: 100%;
                    }
                }
                .text{
                    margin-top: 20px;
                    font-size: 15px;
                    color: black;
                }
                .sign-in{
                    position: absolute;
                    top: 0;
                    right: 13px;
                    width: 25px;
                    img{
                        width: 100%;
                    }
                }
            }

        }
        .personal-content{
            margin: 0 10px;
            position: relative;
            bottom: 30px;
            .information{
                display: flex;
                background: white;
                border-radius: 5px;
                height: 60px;
                text-align: center;
                .item{
                    margin: auto;
                    width: 33.3%;
                    font-size: 15px;
                    .number{
                        color: red;
                    }
                }
            }
            .my-order{
                margin-top: 10px;
                border-radius: 10px;
                .img{
                    width: 30px;
                    img{
                        width: 100%;
                    }
                }
                .text{
                    font-size: 10px;
                }
            }
            .essential{
                margin-top: 10px;
                .van-grid{
                    .img{
                        width: 30px;
                        img{
                            width: 100%;
                        }
                    }
                    .text{
                        font-size: 10px;
                    }

                }
            }
        }

    }

</style>
