<template>
    <!--商品详情-->

    <div class="details">
        <div class="details-header">
            <van-nav-bar
                    title="商品详情"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="details-content">
            <div class="goods-img-list">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item, index) in img_list" :key="index">
                        <img :src="item.img">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="goods-details">
                <div class="goods-title">{{goods.title}}</div>
                <div class="goods-money">{{'￥' + goods.money}}</div>
                <div class="goods-desc">
                    <span class="prime-cost">{{'原价 : ￥' + goods.prime_cost}}</span>
                    <span class="amount">{{'销量 : ' + goods.amount}}</span>
                    <span class="inventory">{{'库存 : ' + goods.inventory}}</span>
                </div>
            </div>
            <div class="user-criticism" @click="$router.push('/user/comments')">
                <van-cell value="好评" is-link>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title">用户评论</span>
                        <van-tag type="danger">{{goods.number}}</van-tag>
                    </template>
                </van-cell>
            </div>
            <div class="content">
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
                <div>content2545454545454545</div>
            </div>
        </div>

        <div class="footer">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" @click="customerClick"/>
                <van-goods-action-icon icon="cart-o" text="购物车" @click="shoppingTrolleyClick"/>
                <van-goods-action-icon icon="star" text="收藏" color="#ff5000" @click="collectClick"/>
                <van-goods-action-button type="warning" text="加入购物车" @click="addShoppingTrolleyClick"/>
                <van-goods-action-button type="danger" text="立即购买" @click="purchaseClick"/>
            </van-goods-action>
        </div>
        <!--加入购物车展示-->
        <van-popup v-model="cartShow" round position="bottom" :style="{ height: '50%' }">
            <div class="goods-desc">
                <div class="goods-img"><img :src="goods.img"></div>
                <div class="desc">
                    <div class="price">{{'￥' + goods.money}}</div>
                    <div class="inventory">{{'库存 ：' + goods.inventory}}</div>
                </div>
            </div>
            <div class="goods-spec">
                <div class="title">包装规格</div>
                <div class="spec"><span>{{goods.spec}}</span></div>
            </div>
            <div class="goods-number">
                <div class="title">数量</div>
                <van-stepper v-model="value"/>
            </div>
            <van-button class="confirm" @click="confirmClick">确认</van-button>
        </van-popup>

        <!--立即购买展示-->
        <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">
            <div class="goods-desc">
                <div class="goods-img"><img :src="goods.img"></div>
                <div class="desc">
                    <div class="price">{{'￥' + goods.money}}</div>
                    <div class="inventory">{{'库存 ：' + goods.inventory}}</div>
                </div>
            </div>
            <div class="goods-spec">
                <div class="title">包装规格</div>
                <div class="spec"><span>{{goods.spec}}</span></div>
            </div>
            <div class="goods-number">
                <div class="title">数量</div>
                <van-stepper v-model="value"/>
            </div>
            <van-button class="confirm" @click="$router.push('/cart')">确认</van-button>
        </van-popup>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast, NavBar, Swipe, SwipeItem, Cell, CellGroup, Tag, Sku,
        GoodsAction, GoodsActionIcon, GoodsActionButton, popup, Stepper  } from 'vant';

    Vue.use(Toast).use(NavBar).use(Swipe).use(SwipeItem).use(Cell)
        .use(CellGroup).use(Tag).use(Sku).use(GoodsAction)
        .use(GoodsActionIcon).use(GoodsActionButton).use(popup).use(Stepper)
    export default {
        name: "Details",
        data(){
            return {
                img_list: [
                    {img: 'https://img.yzcdn.cn/vant/apple-3.jpg'},
                    {img: 'https://img.yzcdn.cn/vant/apple-2.jpg'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                ],
                goods: {
                    title: '超豪华电脑',
                    money: 4499,
                    prime_cost: 6698,
                    amount: 0,
                    inventory: 5000,
                    number: 100,
                    goods_number: 100,
                    img: 'https://img.yzcdn.cn/vant/apple-3.jpg',
                    spec: '礼品盒100g111'
                },
                cartShow: false,
                show: false,
                value: 1,

            }
        },
        computed: {
        },
        components: {},
        methods: {
            //点击规格
            onClickLeft(){
                this.$router.push('/')
            },

            //客服click
            customerClick(){
                Toast('客服')
            },
            //购物车
            shoppingTrolleyClick(){
                this.$router.push('/cart')
                Toast('购物车')
            },
            //收藏
            collectClick(){
                Toast('收藏')
            },
            //加入购物车
            addShoppingTrolleyClick(){
                this.cartShow = true
                Toast('购物车')
            },

            //确认加入购物车
            confirmClick(){
                console.log('555')
                if (this.value > this.goods.inventory){
                    Toast('大于')
                }else {
                    this.cartShow = false
                    Toast('确认加入购物车成功')
                    this.value = 1
                }
                //Toast('加入购物车成功')

            },

            //立即购买
            purchaseClick(){
                console.log("value",this.value)
                if (this.value >= this.goods.inventory){
                    console.log('dayu')
                }
                this.show = true

            },

            //立即购买
            goodsConfirmClick(){
                if (this.value > this.goods.inventory){
                    Toast('大于')
                }else {
                    Toast('立即购买')
                }
                //this.$router.push('/goods/order')
            },



        }
    }
</script>

<style scoped lang="less">
    .details{
        background-color: #f5f5f5;
        height: 100%;
        .details-header{
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 100;

        }
        .details-content{
            position: relative;
            top: 50px;
            height: calc(100vh - 108px);
            overflow-y: scroll;
            .goods-img-list{
                width: 100%;
                img{
                    width: 100%;
                    height: 250px;
                }
            }
            .goods-details{
                padding: 10px;
                margin: 10px 0;
                background-color: white;
                .goods-title{
                    margin-top: 10px;
                    font-size: 15px;
                    font-weight: bold;
                }
                .goods-money{
                    color: red;
                }
                .goods-desc{
                    display: flex;
                    justify-content: space-between;
                    .prime-cost{
                        color: gray;
                    }
                }
            }
            .user-criticism{
                display: flex;
            }
            .content{
                margin-top: 10px;
                background-color: white;
            }

        }
        .footer{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
        }
        .van-popup{
            .goods-desc{
                display: flex;
                margin: 50px 10px;
                .goods-img{
                    margin-right: 20px;
                    width: 20%;
                    img{
                        width: 100%;
                    }
                }
                .desc{
                    .price{
                        margin-top: 10px;
                        color: red;
                    }
                    .inventory{
                        font-size: 15px;
                    }
                }

            }
            .goods-spec{
                margin: 10px;
                .title{
                    font-size: 20px;
                    font-weight: bold;
                }
                .spec{
                    margin-top: 15px;
                    span{
                        padding: 10px;
                        font-size: 10px;
                        font-weight: bold;
                        color: white;
                        border: 1px solid;
                        border-radius: 30px;
                        background-color: orange;
                    }
                }
            }
            .goods-number{
                margin: 15px 10px;
                display: flex;
                justify-content: space-between;
                .title{
                    margin: auto 0;
                    font-size: 15px;
                    font-weight: bold;
                }
            }
            .confirm{
                text-align: center;
                position: fixed;
                bottom: 0;
                background-color: red;
                width: 100%;
                height: 50px;
                line-height: 50px;
                border-radius: 50px;
            }
        }

    }

</style>