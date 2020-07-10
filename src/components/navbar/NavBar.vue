<template>

    <div class="nav-bar">
        <div class="nav-bar-list">
            <div class="nav-bar-item" v-for="(item,index) in items" :key="index">
                <div class="img"><img :src="item.icon"></div>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            list: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                items: [
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '优惠券'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '消费券'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '优惠券'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '商家入驻'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '商家入驻'
                    },
                    {
                        icon: require('../../assets/img/firstpage/youhuiquan.png'),
                        name: '商家入驻'
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="less">
    .nav-bar{
        .nav-bar-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            text-align: center;
            .nav-bar-item{
                .img{
                    display: flex;
                    width: 100%;
                    height: 20px;
                    img{
                        margin: auto;
                        width: 20px;
                        height: 20px;
                    }
                }
            }

        }

    }

</style>