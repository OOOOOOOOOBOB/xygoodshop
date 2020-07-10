<template>
    <!--评论详情-->
    <div class="comments">


        <div class="comments-header">
            <van-nav-bar
                    title="评论详情"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="comments-list">
            <div class="comments-list-item" v-for="(item,index) in list" :key="index" @click="handItemClick(index)">
                <span class="title">{{item.title}}</span>
            </div>
        </div>
        <div class="comments-content">
            <div class="comments-list-item" v-for="(item,index) in goods[currentIndex]" :key="index">
                <div class="img"><img :src="item.img"></div>
                <div class="comments-desc">
                    <div class="name">{{item.name}}</div>
                    <div class="comments-details">{{item.desc}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    Vue.use(NavBar)
    export default {
        name: "Comments",
        data(){
            return {
                list: [
                    {title: '全部'},
                    {title: '有图'},
                    {title: '差评'},
                    {title: '一般'},
                ],
                goods: {
                    0: [
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 11233331,
                            desc: '靓仔'

                        },
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 1121,
                            desc: '靓仔'

                        },
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 1121,
                            desc: '靓仔'

                        },
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 1121,
                            desc: '靓仔'

                        },
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 1121,
                            desc: '靓仔'

                        },
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 1121,
                            desc: '靓仔'

                        },
                        {
                            img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                            name: 1121,
                            desc: '靓仔'

                        },

                    ],
                    1: [
                        {
                            img: '',
                            name: 112331,
                            desc: '靓仔'

                        },
                        {
                            img: '',
                            name: 1121,
                            desc: '靓仔'

                        },
                    ],
                    2: [
                        {
                        img: '',
                        name: 11233331,
                        desc: '靓222仔'

                    },
                        {
                            img: '',
                            name: 12132121,
                            desc: '靓222仔'

                        }
                    ],
                    3: [
                        {
                            img: '',
                            name: 112888833331,
                            desc: '靓222仔'

                        },
                        {
                            img: '',
                            name: 121321424214121,
                            desc: '靓222仔'

                        },
                        {
                            img: '',
                            name: 121321424214121,
                            desc: '靓222仔'

                        },
                        {
                            img: '',
                            name: 121321424214121,
                            desc: '靓222仔'

                        },
                        {
                            img: '',
                            name: 121321424214121,
                            desc: '靓222仔'

                        },
                        {
                            img: '',
                            name: 121321424214121,
                            desc: '靓222仔'

                        }
                    ],

                },
                currentIndex: 0
            }
        },
        methods: {
            onClickLeft(){
                this.$router.push('/details')
            },
            handItemClick(index){
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped lang="less">
    .comments{
        .comments-list{
            margin: 10px;
            display: flex;
            .comments-list-item{
                margin: 0 10px;
                .title{
                    padding: 10px;
                    border: 1px solid;
                    border-radius: 30px;
                }

            }
        }
        .comments-content{
            margin: 30px 10px;
            .comments-list-item{
                display: flex;
                margin: 10px 0;
                .img{
                    width: 20%;
                    img{
                        width: 70%;
                        border-radius: 50px;

                    }
                }
            }

        }

    }

</style>