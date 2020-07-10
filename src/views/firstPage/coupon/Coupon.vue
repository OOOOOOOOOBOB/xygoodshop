<template>
    <div class="coupon">

        <headers class="coupon-headers">
            <img class="back" src="@/assets/img/firstpage/back.png" slot="left"
                 @click="$router.push('/first/page')">
            <div slot="center" class="title">消费券详情</div>
        </headers>

        <div class="coupon-content">

            <div class="coupon-header"></div>

            <div class="coupon-list">

                <div class="coupon-item" v-for="(item, index) in list" :key="index">
                    <div class="coupon-item-header">
                        <div class="img">
                            <img src="@/assets/img/firstpage/youhuiquan.png">
                            <div class="title">
                                消费券可用余额
                                <span class="money">{{item.money}}</span>
                            </div>
                        </div>
                        <div class="regulations" @click="showClick">使用规则</div>
                    </div>
                    <div class="coupon-item-content">

                        <div class="coupon-gain">

                            {{'+' + item.gain}}

                            <div class="title">累计获取优惠券</div>

                        </div>

                        <div class="coupon-use">
                            {{'+' + item.use}}
                            <div class="title">累计使用优惠券</div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="coupon-record-list">

                <div class="record-title">消费券记录</div>

                <div class="coupon-record-item" v-for="(item,index) in items" :key="index" v-show="items.length > 0">
                    <div class="coupon-record-title">
                        <span class="gain">获取<span class="text">{{' +' + item.gain}}</span></span>
                        <span class="use">使用<span class="text">{{' -' + item.use}}</span></span>
                    </div>
                    <div class="my-consume">
                        <div class="left">
                            <div class="title">消费券-我的消费</div>
                            <div class="time">{{item.time}}</div>
                        </div>
                        <div class="center">{{item.store}}</div>
                        <div class="right">
                            <div class="my-consume-use">{{'+' + item.use}}</div>
                        </div>
                    </div>
                    <div class="my-consume-use">
                        <div class="left">
                            <div class="title">消费券-消费券支付</div>
                            <div class="time">{{item.time}}</div>
                        </div>
                        <div class="center">{{item.store}}</div>
                        <div class="right">
                            <div class="my-consume-use">{{'-' + item.use}}</div>
                        </div>
                    </div>
                </div>

                <div class="coupon-record-null" v-show="items.length === 0">
                    <span class="text" @click="$router.push('/first/page')">立即使用获取消费券吧！</span>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

    import Headers from "@/components/headers/Headers";

    export default {
        name: "Coupon",
        components: {
            Headers
        },
        data(){
            return {
                list: [
                    {
                        money: 12,
                        gain: 888,
                        use: 777
                    }
                ],
                items: [
                    // {
                    //     gain: 10,
                    //     use: 10,
                    //     store: '楼下猪脚饭',
                    //     time: '2020-07-04 19:36'
                    // },
                    // {
                    //     gain: 10,
                    //     use: 10,
                    //     store: '楼下猪脚饭',
                    //     time: '2020-07-04 19:36'
                    // }
                ]
            }
        },
        methods: {
            showClick(){
                console.log('11')
                this.show = !this.show
            },
        }
    }
</script>

<style scoped lang="less">
    .coupon{
        .active{
            display: none;
        }
        .show{
        }
        .coupon-headers{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 40px;
            background-color: #333333;
            z-index: 100;
            .back{
                margin: auto;
                width: 25px;
            }
            .title{
                margin: auto;
                color: linen;
            }
        }
        .coupon-content{
            position: relative;
            top: 40px;
            .coupon-header{
                height: 100px;
                width: 100%;
                background-color: #FF3709;
            }
            .coupon-list{
                margin: 10px;
                position: relative;
                bottom: 70px;
                color: black;
                .coupon-item{
                    border-radius: 10px;
                    padding: 10px;
                    background-color: white;
                    .coupon-item-header{
                        display: flex;
                        margin: 0 10px;
                        justify-content: space-between;

                        .img{
                            width: 80%;
                            height: 25px;
                            display: flex;
                            img{
                                width: 25px;
                                height: 25px;
                            }
                            .title{
                                margin-left: 10px;
                                font-size: 16px;
                                font-weight: bolder;
                                .money{
                                    color: red;
                                }
                            }
                        }

                        .regulations{
                            width: 20%;
                            margin: auto;
                        }
                    }
                    .coupon-item-content{
                        text-align: center;
                        display: flex;
                        margin: 10px;
                        font-size: 18px;

                        .coupon-gain{
                           margin: auto;
                            color: red;
                            .title{
                                margin: 10px 0;
                                color: black;
                                font-size: 16px;
                                font-weight: 500;
                            }

                        }
                        .coupon-use{
                            margin: auto;
                            color: gold;
                            .title{
                                margin: 10px 0;
                                color: black;
                                font-size: 16px;
                                font-weight: 500;
                            }
                        }
                    }

                }
                .record-title{
                    height: 40px;
                    line-height: 40px;
                    color: black;
                    font-weight: 700;
                }

            }
            .coupon-record-list{
                position: relative;
                bottom: 70px;
                margin: 10px;
                color: black;
                .record-title{
                    font-weight: 700;
                    color: black;
                }
                .coupon-record-item{
                    background-color: white;
                    border-radius: 10px;
                    margin-top: 10px;
                    .coupon-record-title{
                        margin: 0 10px;
                        height: 40px;
                        line-height: 40px;
                        border-bottom: 0.5px solid #f5f5f5;
                        .gain{

                            .text{
                                color: red;
                            }
                        }
                        .use{
                            margin-left: 40px;
                            .text{
                                color: black;
                            }
                        }
                    }
                    .my-consume{
                        margin-left: 10px;
                        display: flex;
                        padding: 10px 0;
                        font-size: 14px;
                        border-bottom: .5px solid #f5f5f5;
                        .left{
                            width: 40%;
                            margin: auto 0;

                            .time{
                                margin-top: 5px;
                                font-size: 12px;
                            }
                        }
                        .center{
                            width: 40%;
                            margin: auto 0;
                        }
                        .right{
                            width: 20%;
                            text-align: center;
                            margin: auto;
                            color: red;
                        }
                    }
                    .my-consume-use{
                        margin-left: 10px;
                        display: flex;
                        padding: 10px 0;
                        font-size: 14px;
                        .left{
                            width: 40%;
                            margin: auto 0;
                            .time{
                                margin-top: 5px;
                                font-size: 12px;
                            }
                        }
                        .center{
                            width: 40%;
                            margin: auto 0;
                        }
                        .right{
                            width: 20%;
                            text-align: center;
                            margin: auto;
                            color: black;
                        }

                    }
                }
                .coupon-record-null{
                    margin-top: 10px;
                    background-color: #f5f5f5;
                    height: 300px;
                    line-height: 300px;
                    text-align: center;
                    .text{
                        color: blue;
                        border-bottom: .5px solid blue;
                    }
                }
            }


        }

    }

</style>