<template>
    <!--签到页面-->
    <div class="signed">


        <headers class="signed-header">
            <img class="back icon" src="@/assets/img/firstpage/back.png" slot="left" @click="$router.push('/first/page')">
            <div slot="center" class="title"><span class="text">签到</span></div>
        </headers>

        <div class="signed-content">
            <activity class="activity"/>
            <div class="signed--title">
                天天签到,拿大奖
            </div>
            <div class="signed--title-subhead">
                每日签到享福利
            </div>
            <div class="signed-num-list">
                <div class="signed-item" v-for="(item,index) in list" :key="index">
                    <div class="title">您已经累积签到<span class="num">{{item.num}}</span>次</div>
                    <div class="subhead">累计签到满15次，即可开启大奖</div>
                    <div class="signed-status" >
                    <span class="signed"
                          v-show="item.status === 1"
                          @click="checkClick">签到</span>
                        <span class="check"
                              v-show="item.status === 2"
                              @click="checkClickOff">已签到</span>
                    </div>
                    <div class="amount">
                        <div class="line"></div>
                        累计获得
                        <div class="money">{{item.amount}}</div>
                        元
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <div class="signed-check">
                <div class="check-list-title">您已经签到</div>
                <div class="check-list">
                    <div class="check-item" v-for="(item, index) in items"
                         :key="index"
                         :class="{active: item.status === 2}">
                        <div class="day">{{'第' + (index + 1) + '天'}}</div>
                        <div class="img"><img src="@/assets/img/icon/money.png" class="icon"></div>
                        <div class="money">{{item.money + '元'}}</div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import Headers from "@/components/headers/Headers";
    import activity from "@/components/common/activity";

    export default {
        name: "Signed",
        components: {
            Headers,
            activity
        },
        data() {
            return {
                list: [
                    {
                        num: 1,
                        status: 1,
                        amount: 330
                    }
                ],
                items: [
                    {money: 3.8,status: 2},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1},
                    {money: 3.8,status: 1}
                ],
                day: 0
            }
        },
        methods: {

            checkClick(){

                this.list[0].status = 2
                this.list[0].num += 1;
                this.day = this.day + 1
                this.items[this.day].status = 2


                console.log('items',this.items[this.day].status)

                console.log('index',this.day)
            },

            checkClickOff(){
                console.log('今天已经签到了')
            }
        }

    }
</script>

<style scoped lang="less">
    .signed{
        .signed-header{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            //background-color: white;
            height: 40px;
            z-index: 100;
            background-color: #333333;
            .title{
                margin: auto;
                color: red;
            }
        }
        .signed-content{

            position: relative;
            top: 40px;
            overflow-y: scroll;
            height: calc(100vh - 94px);

            background-color: gold;
            text-align: center;
            .signed--title{
                padding-top: 40px;
                font-size: 30px;
                color: white;
                font-weight: 700;
            }
            .signed--title-subhead{
                margin-top: 20px;
                font-size: 20px;
                color: white;
                font-weight: 700;
            }
            .signed-num-list{
                margin-top: 20px;
                .signed-item{
                    margin: 10px;
                    background-color: white;
                    border-radius: 10px;
                    font-weight: 700;
                    .title{
                        font-size: 20px;
                        padding-top: 20px;
                        .num{
                            margin: 0 5px;
                            color: #FF3709;
                            font-size: 24px;
                        }
                    }
                    .subhead{
                        margin: 5px 0;
                        font-size: 16px;
                        color: red;
                    }
                    .signed-status{
                        margin: 30px;
                        .signed{
                            color: black;
                            font-weight: 700;
                            margin: 10px;
                            padding: 10px 70px;
                            border-radius: 30px;
                            background-color: yellow;
                        }
                        .check{
                            color: black;
                            font-weight: 700;
                            margin: 10px;
                            padding: 10px 70px;
                            border-radius: 30px;
                            background-color: #707070;
                        }
                    }
                    .amount{
                        padding-bottom: 30px;
                        font-size: 18px;
                        color: #707070;
                        display: flex;
                        .line{
                            margin: auto;
                            width: 25%;
                            height: 1px;
                            background-color: #707070;
                        }
                        .money{
                            margin: auto 5px;
                            color: #FF3709;
                        }
                    }

                }

            }
            .signed-check{
                background-color: white;
                margin: 0 10px;
                border-radius: 10px;
                .check-list-title{
                    padding-top: 20px;
                    font-size: 20px;
                    font-weight: 700;
                }
                .check-list{
                    margin: 20px;
                    background-color: white;
                    border-radius: 10px;
                    padding-bottom: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    .check-item{
                        background-color: #E5E5E5;
                        padding: 5px 0;
                        margin: 5px auto;
                        width: 17%;
                        border-radius: 10px;
                        .day{
                            margin-bottom: 2px;
                            font-size: 12px;
                        }
                        .img{
                            display: flex;
                        }
                        .money{
                            margin-top: 2px;
                            font-size: 12px;
                        }
                    }
                    .active{
                        color: blue;
                        background-color: yellow;
                    }

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