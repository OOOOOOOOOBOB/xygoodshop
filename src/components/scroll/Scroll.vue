<template>
    <div class="scroll">
        <van-pull-refresh v-model="refreshing"
                          @refresh="onRefresh"
                          class="content"
                          :success-text="successText">
            <van-list v-model="loading"
                      :finished="finished"
                      :finished-text="finishedText"
                      @load="onLoad">

                <slot></slot>

            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar, Form, Field, Toast, List, PullRefresh, Cell} from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Toast).use(List).use(PullRefresh).use(Cell);

    export default {
        name: "Scroll",
        props: {
            //没有数据时候
            finishedText: {
                type: String,
                default: 'END'
            },
            //下拉刷新
            successText: {
                type: String,
                default: '加载成功'
            }
        },
        data() {
            return {
                goods: [],
                list: [],
                page: 0,
                loading: false,
                finished: false,
                refreshing: false
            }
        },
        methods: {
            onRefresh(){
                this.finished = false;
                this.loading = true;
                this.onLoad();
            },
            onLoad(){
                //下拉加载更多
                if (this.refreshing) {
                    this.page = 0;
                    this.list = []
                    //下拉刷新提示
                    setTimeout(() => {
                        this.refreshing = false;
                        //console.log('下拉刷新成功')
                        Toast('下拉加载成功')
                    },2000)
                    this.loading = false;
                }else {
                    //上拉加载更多提示
                    setTimeout(() => {
                        console.log('上拉加载成功')
                        //Toast('上拉加载成功')
                        this.loading = false;
                    },1000)

                    //当返回的长度
                    if (this.list.length >= 20){
                        this.finished = true;
                    }
                }
                //发送请求
                this.getData()
            },
            getData(){
                this.page += 1;
                console.log('page',this.page)
                //发送ajax请求
                let data = [
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'},
                    {img: 'https://img.yzcdn.cn/vant/apple-1.jpg',title: '碎花裙'}
                ]
                this.list.push(...data)
                console.log('list',this.list)
            }
        }
    }
</script>

<style scoped>

</style>