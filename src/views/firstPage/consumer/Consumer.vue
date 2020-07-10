<template>

    <!--消费券-->
    <div class="consumer">

        <headers class="consumer-headers">

            <img class="back" src="@/assets/img/firstpage/back.png" slot="left"
                 @click="$router.push('/first/page')">

            <div slot="center" class="title">优惠券详情</div>

        </headers>

        <div class="consumer-list">

            <div class="consumer-item" v-for="(item,index) in list" :key="index" v-show="list.length > 0">

                <div class="num">{{item.num}}</div>

                <div class="name">优惠券</div>

                <div class="text" @click="$router.replace({path: '/signed'})">签到</div>

            </div>

            <div class="consumer-item-null" v-show="list.length === 0">
                你还没有消费券，立即去
                <span class="text" @click="$router.push('/signed')">签到</span>
            </div>

        </div>

    </div>
</template>

<script>
    //import NavBar from "@/components/navbar/NavBar";
    import Headers from "@/components/headers/Headers";
    export default {
        name: "Consumer",
        components: {
            //NavBar
            Headers
        },
        data(){
            return {

                list: [
                    {
                        num: 100
                    },
                    {
                        num: 100
                    },
                    {
                        num: 100
                    }
                ]

            }
        }
    }
</script>

<style scoped lang="less">

    .consumer{

        .consumer-headers{
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
            .input{
                margin: auto 0;
                font-size: 16px;
                color: #d4237a;
                width: 100%;
                border-radius: 5px;
            }
            .title{
                margin: auto;
                color: linen;
            }
        }
        .consumer-list{
            position: relative;
            top: 40px;
            .consumer-item{
                display: flex;
                height: 50px;
                line-height: 50px;
                justify-content: space-between;
                margin: 10px;
                background-color: white;
                border-radius: 10px;
                text-align: center;
                .num{
                    width: 30%;
                    text-align: center;
                    background-color: #FF3709;
                    font-size: 30px;
                    color: white;
                    border-radius: 10px;

                }
                .name{
                    width: 40%;
                    margin: auto;
                    font-size: 20px;
                    font-weight: 500;
                }
                .text{
                    width: 20%;
                    height: 40px;
                    line-height: 40px;
                    margin: auto;
                    color: white;
                    border-radius: 10px;
                    font-size: 20px;
                    font-weight: 500;
                    background-color: #FF3709;
                }
            }
            .consumer-item-null{
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

</style>