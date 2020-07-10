<template>
    <div class="bill">

        <headers class="bill-headers">
            <img class="back" src="@/assets/img/firstpage/back.png" slot="left"
                 @click="$router.push('/first/page')">
            <div slot="center" class="title">我的账单</div>
        </headers>
        <scroll class="bill-scroll"
                @pullUp="pullUp"
                @refreshing="refreshing"
                ref="scroll">
            <div class="bill-content">

                <div class="bill-content-list">
                    <div class="time-list"  @click="show = true">
                        <div class="time">

                            <div class="year">{{year}}</div>-

                            <div class="month">{{month}}</div>-

                            <div class="data">{{day}}</div>

                        </div>
                        <div class="img"><img src="@/assets/img/icon/develop.png"></div>
                    </div>
                    <div class="pay">{{'支出: ' + '￥' + getTotal}}</div>
                </div>
                <div class="bill-list">
                    <div class="bill-content-item" v-for="(item, index) in list" :key="index">
                        <div class="img"><img src="@/assets/img/icon/store.png"></div>
                        <div class="store">
                            <div class="name">{{item.name}}</div>
                            <div class="time">{{item.time}}</div>
                        </div>
                        <div class="price">{{'-' + item.price}}</div>
                    </div>
                </div>
            </div>
        </scroll>

        <div class="bill-list-null">
            <div class="bill-item-null" v-show="list.length === 0">
                暂时没有数据，立即去<span @click="$router.push('/first/page')">消费</span>吧！
            </div>
        </div>

        <van-calendar v-model="show" type="range" @confirm="onConfirm"/>

    </div>

</template>

<script>

    import Headers from "@/components/headers/Headers";
    import Scroll from "@/components/scroll/Scroll";

    import Vue from 'vue';

    import { Calendar } from 'vant';

    Vue.use(Calendar);

    export default {
        name: "Bill",
        components: {
            Headers,
            Scroll
        },
        data() {
            return {
                show: false,
                year: '',
                month: '',
                day: '',
                list: [
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                ]
            };
        },
        created() {
            this.getData()
        },
        mounted: function() {

            //监控滚动条滚动距离
            window.addEventListener('scroll', this.handleScroll, true)

        },
        computed: {

            //总支出
            getTotal: function () {

                var total = 0
                for(let i = 0;i < this.list.length; i++) {

                    total = this.list[i].price + total
                }
                return total
            }

        },
        methods: {

            //获取滚动距离
            handleScroll(e){

                console.log('11',e.target.scrollTop)
            },

            //上拉加载更多
            pullUp(){

                let store_list = [

                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                    {
                        time: 12324464,
                        price: 15,
                        name: '楼下猪脚饭'
                    },
                ]

                this.list.push(...store_list)

                setTimeout(() => {

                    this.$refs.scroll.closeOnLoad()

                },2000)

                if (this.list.length > 50){

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

            //获取时间
            getData(){

                this.year = new Date().getFullYear()

                this.month = new Date().getMonth() + 1

                if (this.month < 10){
                    this.month = '0' + this.month
                }

                this.day = new Date().getDate()
                if (this.day < 10){

                    this.day = '0' + this.day

                }


            },

            //时间选择器
            onConfirm(data){

                console.log('data',data[0])
                let timeStart = new Date(data[0]).getTime();

                let timeEnd = new Date(data[1]).getTime();

                console.log('timeStart',timeStart)
                console.log('timeEnd',timeEnd)
                this.show = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .bill{

        .bill-headers{
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

        .bill-scroll{
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

        .bill-content{
            background-color: #f5f5f5;
            .bill-content-list{
                background-color: white;
                height: 60px;
                display: flex;
                flex-wrap: wrap;
                .time-list{
                    margin: auto 0;
                    width: 100%;
                    display: flex;
                    .time{
                        display: flex;
                        height: 30px;
                        line-height: 30px;
                        color: #FF3709;
                        .year{
                            margin-left: 10px;

                        }
                    }
                    .img{
                        margin: auto 10px;
                        img{
                            width: 25px;
                            height: 25px;
                        }
                    }
                }
                .pay{
                    margin: auto 0;
                    margin-left: 10px;
                    height: 20px;
                    line-height: 10px;
                }

                /*display: flex;*/
                /*margin: 10px;*/
                /*background-color: white;*/
                /*font-size: 18px;*/
                /*height: 40px;*/
                /*line-height: 40px;*/
            }
            .bill-list{
                margin: 0 10px;
                .bill-content-item{
                    display: flex;
                    margin: 10px 0;
                    background-color: white;
                    border-radius: 5px;
                    text-align: center;
                    height: 60px;
                    .img{
                        width: 20%;
                        display: flex;
                        img{
                            margin: auto;
                            width: 50px;
                            height: 50px;
                        }
                    }
                    .store{
                        width: 60%;
                        margin: auto 0;
                        font-size: 14px;

                        .name{
                            font-size: 16px;
                            margin-bottom: 10px;
                            color: red;
                        }
                        .time{

                            color: #333333;
                        }
                    }
                    .price{
                        font-size: 16px;
                        width: 20%;
                        margin: auto 0;
                        color: red;

                    }

                }


            }
        }

        .bill-list-null{

            text-align: center;
            height: 300px;
            line-height: 300px;
            span{
                margin: 0 5px;
                color: blue;
                border-bottom: .5px solid blue;
            }
        }

    }

</style>