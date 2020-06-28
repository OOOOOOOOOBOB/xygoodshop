<template>

    <!--分类-->

    <div class="category">
        <div class="header">
            <van-search placeholder="请输入搜索关键词" @click="handSearchClick"/>
        </div>
        <div class="category-content">
            <div class="category-name-list">
                <div class="category-name-item"
                     :class="{active: currentIndex === index}"
                     v-for="(item, index) in list"
                     :key="index" @click="handItemClick(index)">
                    <div class="name">{{item}}</div>
                </div>
            </div>
            <div class="category-content-list">
                <div class="category-content-item" v-for="(item, index) in items[currentIndex]" :key="index">
                    <div class="title">{{item.name}}</div>
                    <div class="item-list">
                        <div class="item" v-for="(i,inx) in item.list" :key="inx" @click="handInxClick(inx)">
                            <div class="img"><img :src="i.img"></div>
                            <div class="name">{{i.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Sidebar, SidebarItem , Search} from 'vant';

    Vue.use(Sidebar).use(SidebarItem).use(Search);

    export default {
        name: "Category",
        data(){
            return {
                list: ['图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像','图书音像',],
                items: {
                    0: [{ name:'文学艺术', list:[{name: '小说',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                            {name: '名人传记',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'}] },
                        { name:'文学艺术', list:[{name: '小说',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                                {name: '名人传记',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'}] },
                        { name:'文学艺术', list:[{name: '小说',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                                {name: '名人传记',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'}] },
                        { name:'文学艺术', list:[{name: '小说',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
                                {name: '名人传记',img: 'https://img.yzcdn.cn/vant/apple-1.jpg'}] }],
                    1: [{ name:2, list:['333'] }],
                    2: [{ name:3, list:['55'] }],
                    3: [{ name:4, list:['777'] }],
                    4: [{ name:5, list:['2888'] }],
                    5: [{ name:6, list:['888'] }],

                },
                currentIndex: 0,
                isActive: false
                //activeKey: 0
            }
        },
        methods: {


            //搜索点击
            handSearchClick(){
                console.log('sousuo')
            },
            //商品详情点击
            handInxClick(inx){
                console.log('inx',inx)
            },
            //导航点击
            handItemClick(index){
                console.log('index')
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped lang="less">
    .category{
        .category-content{
            display: flex;
        }
        .category-name-list{
            width: 30%;
            text-align: center;
            background-color: white;
            overflow-y: scroll;
            height: calc(100vh - 109px);
            .active{
                background-color: #f5f5f5;
                color: red;
            }
            .category-name-item{
                height: 50px;
                line-height: 50px;
            }
        }
        .category-content-list{
            width: 70%;
            height: 500px;
            overflow-y: scroll;
            .category-content-item{
                .title{
                    font-size: 20px;
                    margin: 10px;
                    color: black;
                }
                .item-list{
                    display: flex;
                    margin: 10px;
                    background-color: white;
                    .item{
                        width: 30%;
                        .img{
                            width: 100%;
                            img{
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

</style>