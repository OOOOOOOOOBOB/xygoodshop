<template>
    <div class="store-recommend">
        <headers class="store-recommend-headers">
            <img class="sweep" src="../../assets/img/firstpage/back.png" slot="left"
                 @click="$router.push('/first/page')">
            <input slot="center" class="input" placeholder="搜索商家" v-model="value">
            <div slot="right" class="title" @click="searchClick">搜索</div>
        </headers>

        <scroll class="store-recommend-scroll"
                @pullUp="pullUp"
                @refreshing="refreshing"
                ref="scroll">
            <div class="store-recommend-content">
                <store-list :list="list" :isClass="true"/>
            </div>
        </scroll>

    </div>
</template>

<script>
    import Headers from "@/components/headers/Headers";
    import StoreList from "@/components/common/StoreList";
    import Scroll from "@/components/scroll/Scroll";
    export default {
        name: "StoreRecommend",
        components: {
            Headers,
            StoreList,
            Scroll
        },
        data(){
            return {
                value: '',
                list: [
                    {
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 2,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 3,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 4,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 5,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    }
                ]
            }
        },
        methods: {

            searchClick(){
                if (this.value.length === 0){
                    console.log('请输入搜索内容')
                }else {
                    console.log('value',this.value)
                    console.log('发送请求',)
                }

            },
            //上拉加载
            pullUp(){

                let list = [
                    {
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    },
                    {
                        id: 1,
                        img: require('../../assets/img/firstpage/store.png'),
                        title: '美容美甲店',
                        sales: 0,
                        address: '广东省深圳市福田区',
                        distance: 1.9,
                        subhead: '美容'
                    }
                ]
                this.list.push(...list)
                console.log('11')

                setTimeout(() => {

                    this.$refs.scroll.closeOnLoad()

                },2000)

                if (this.list.length > 20){

                    this.$refs.scroll.openFinished()
                }
            },

            //下拉刷新
            refreshing(){

                console.log('下拉了')

                setTimeout(() => {

                    this.$refs.scroll.closeRefresh()

                },2000)

            }

        }
    }
</script>

<style scoped lang="less">
    .store-recommend{

        .store-recommend-headers{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 40px;
            background-color: gold;
            z-index: 100;
            .sweep{
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
        .store-recommend-content{
            background-color: #f5f5f5;
        }
        .store-recommend-scroll{
            position: absolute;
            top: 31px;
            bottom: 50px;
            overflow: hidden;
            left: 0;
            right: 0;
            z-index: 10;
            overflow-y: scroll;

            background-color: yellow;
        }

    }

</style>