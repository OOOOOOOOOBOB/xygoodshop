<template>

    <!--支付-->
    <div class="pay">
        <headers class="pay-header">
            <img src="@/assets/img/icon/back.png" class="back icon" slot="left" @click="$router.push('/first/page')">
            <div class="title" slot="center">支付订单</div>
        </headers>
        <div class="pay-content">
            <div class="pay-list" v-for="(item,index) in list" :key="index">
                <!--商店名称-->
                <div class="pay-header-item">
                    <div class="img"><img src="../../assets/img/icon/personal.png"></div>
                    <div class="title">{{item.title}}</div>
                </div>
                <div class="pay-money">
                    <div class="pay-money-title">消费金额</div>
                    <div class="money">
                        <div class="img"><img src="../../assets/img/icon/pay.png"></div>

                        <input class="input" placeholder="请输入消费金额" v-model="value">

                    </div>
                    <div class="pay-remind">
                        <div class="pay-remind-text" @click="renovate">无法支付,请点击这里</div>
                        <div class="out-of-pocket">{{'实付：' + '￥' + getPrice}}</div>
                    </div>
                </div>
                <!--优惠券-->
                <div class="coupons-content">
                    <div class="coupon-amount">
                        <div class="left">
                            <div class="coupon">{{'优惠券剩余: ' + item.coupon}}</div>
                            <div class="area">{{'(' + item.area + ')'}}</div>
                        </div>
                        <!--优惠金额-->
                        <div class="employ-coupon">{{getCoupon + '元'}}</div>
                    </div>
                    <!--消费券-->
                    <div class="consumer-coupons-amount">
                        <div class="consumer-coupons">{{'消费券剩余: ' + item.consumer}}</div>
                        <div class="employ-consumer">{{getConsumer + '元'}}</div>
                    </div>
                </div>
                <div class="kindly-reminder">
                    <div class="text">1.温馨提示</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Headers from "@/components/headers/Headers";

    export default {
        name: "Pay",
        components: {
            Headers
        },
        data(){
            return {
                list: [
                    {
                        title: '楼下猪脚店',
                        coupon: 10000, //优惠券
                        area: '深圳市',
                        consumer: 10, //消费券
                    }
                ],
                isShow: false,
                value: '',
            }
        },
        watch: {},
        computed: {

            //实付金额
            getPrice: function () {

                var priceCurrentIndex = 0

                if (this.value.length === 0){
                    console.log('1q11')
                    return 0
                }else {

                    var coupon = this.getCoupon

                    console.log('coupon',coupon)

                    //实际支付金额 = 总金额 - 优惠券金额 - 消费券金额
                    priceCurrentIndex = this.value - this.getCoupon - this.getConsumer

                    return  priceCurrentIndex
                }
            },

            //优惠券使用金额: value / 10
            getCoupon: function () {

                //输入金额 / 10 大于 优惠券的值时候,最大使用优惠券金额为最大优惠券金额

                if (this.value / 10 > this.list[0].coupon){

                    return this.list[0].coupon

                }else {

                    return this.value / 10
                }


            },

            //消费券金额
            getConsumer: function() {

                //value值小于消费券时,使用消费券的金额为: 总金额 - 总金额 / 10 - ((总金额 - 总金额 / 10) / 2)
                //consumerCurrentIndex = 1 - 1 / 10 - ((1 - 1 / 10) / 2)
                if (this.value < this.list[0].consumer){

                    //1 - 0.1 - ((1-0.1) / 2)
                    const consumerCurrentIndex = this.value - this.getCoupon - ((this.value- (this.value / 10) ) / 2)

                    console.log('consumerCurrentIndex',consumerCurrentIndex)

                    return consumerCurrentIndex

                }else if (this.value > this.list[0].consumer){

                    //20
                    const consumerCurrentIndex = this.list[0].consumer / 2

                    return consumerCurrentIndex

                }else {
                    return 1
                }

            },
        },
        methods: {

            //无法支付,点击更新
            renovate(){

            },

            getValue(){
                console.log('value',this.value)

            }
        }
    }
</script>

<style scoped lang="less">
    .pay{
        .pay-header{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            //background-color: white;
            height: 40px;
            z-index: 100;
            background-color: #333333;
            .title {
                margin: auto;
                color: red;
            }
        }
        .pay-content{
            position: relative;
            top: 35px;
            overflow-y: scroll;
            .pay-list{
                .pay-header-item{
                    margin: 10px;
                    border-radius: 10px;
                    display: flex;
                    height: 130px;
                    background-color: #FF3709;
                    .img{
                        width: 70px;
                        line-height: 50px;
                        display: flex;
                        img{
                            margin: 40px auto;
                            width: 50px;
                            height: 50px;
                        }
                    }
                    .title{
                        margin: 50px 0;
                        font-size: 20px;
                        font-weight: 700;
                        color: white;
                    }
                }
                .pay-money{
                    margin: 10px;
                    background-color: white;
                    border-radius: 10px;
                    .pay-money-title{
                        padding: 10px 0 10px 15px;
                        font-size: 20px;
                    }
                    .money{
                        display: flex;
                        justify-content: space-between;
                        margin: 0 15px;
                        .img{
                            width: 20%;
                            img{
                                width: 40px;
                                height: 40px;
                            }
                        }
                        .input{

                            margin-left: 10px;
                            width: 150px;
                            text-align: right;
                            font-size: 18px;
                            color: #FF3709;
                        }

                    }
                    .pay-remind{
                        display: flex;
                        margin: 10px 15px;
                        justify-content: space-between;
                        padding-bottom: 10px;
                        .out-of-pocket{
                            color: #FF3709;
                        }
                        .pay-remind-text{
                            color: blue;
                        }

                    }

                }
                .coupons-content{
                    margin: 10px;
                    border-radius: 10px;
                    background-color: white;
                    padding: 20px 0;
                    .coupon-amount{
                        display: flex;
                        margin: 0 15px;
                        height: 50px;
                        line-height: 50px;
                        justify-content: space-between;
                        font-size: 18px;
                        font-weight: 500;
                        .left{
                            display: flex;
                            width: 70%;
                            .coupon{
                                width: 80%;
                            }
                            .area{
                                width: 30%;
                                font-size: 14px;
                            }
                        }

                        .employ-coupon{
                            color: red;
                        }
                    }
                    .consumer-coupons-amount{
                        display: flex;
                        margin: 0 15px;
                        height: 50px;
                        line-height: 50px;
                        justify-content: space-between;
                        font-size: 18px;
                        font-weight: 500;
                        .consumer-coupons{

                        }
                        .employ-consumer{
                            color: #FF3709;
                        }


                    }

                }
                .kindly-reminder{
                    margin: 10px;
                    background-color: white;
                    height: 100px;
                    border-radius: 10px;
                }

            }

        }
        .icon{
            margin: auto;

            width: 20px;
            height: 20px;
        }

    }

</style>