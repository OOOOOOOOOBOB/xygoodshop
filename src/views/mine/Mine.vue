<template>

    <!--个人详情-->

    <div class="mine">
        <!--展示头部-->
        <div class="mine-head">
            <!-- <div class="set-up"><img src="../../assets/img/personal/shezhi.png"></div> -->
            <!-- 设置图标 -->
            <div class="mine-up"><van-icon name="setting-o" size="1.5rem" /></div>
            <!-- 消息图标 -->
            <div class="mine-chat"><van-icon name="chat-o" size="1.5rem" /></div>
            <div class="mine-desc">
                <div class="mine-portrait" @click="$router.push('/personal/details')"><img src="../../assets/img/personal/touxiang.png"></div>
                <div class="mine-text" @click="$router.push('/login')">XYshop-001 <p style="margin-top:10px">手机号:请验证手机</p></div>
            </div>
        </div>
        <!--展示content-->
        <div class="mine-content">
            
            <div class="mine-order">
                <van-grid :column-num="2">
                    <van-grid-item icon="photo-o" text="积分" />
                    <van-grid-item icon="photo-o" text="消费券" />
                </van-grid>
            </div>
            <div class="mine-essential">
                <van-cell title="我的优惠券" is-link/>
                <van-cell title="商家服务" is-link  to="home"/>
                <van-cell title="我的账单" is-link/>
                <van-cell title="联系我们" is-link/>
                <van-cell title="关于我们" is-link/>
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
            height: 120px;
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
        .mine-content{
            margin: 0 10px;
            position: relative;
            bottom: 0;

            .mine-order{
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
            .mine-essential{
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
