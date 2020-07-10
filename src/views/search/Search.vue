<template>
    <!--搜索页面-->
    <div class="search">
        <form action="/" class="search-header">
            <van-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
            >
                <template #left>
                    <div @click="$router.push('/home')" class="back-home">《</div>
                </template>
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>

            </van-search>
        </form>
        <div class="hot-search">
            <div class="hot-search-title">热门搜索</div>
            <div class="hot-search-list">
                <div class="hot-search-item" v-for="(item, index) in items" :key="index" @click="handHotClick(item,index)">
                    <span class="hot-name">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="search-history">
            <div class="search-history-title">
                <div class="title">搜索历史</div>
                <div class="img" @click="handDelBtnClick"><img src="../../assets/img/personal/delete.png"></div>
            </div>
            <div class="search-history-list">
                <div class="search-history-item" v-for="(item,index) in list" :key="index" @click="handHistoryClick(index)">
                    <span class="name">{{item.name}}</span>
                    <span class="delete" @click="handDeleteClick(index)"><img src="../../assets/img/personal/delete.png"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Toast, Search} from 'vant';

    Vue.use(Toast).use(Search)

    export default {
        name: "Search",
        data(){
            return {
                value: '',
                items: [{id: 1,name:'啦啦'},{id: 2,name: '呵呵'},{id: 3,name: '嘻嘻'}],
                list: [
                    {id:5, name: '呵呵'},
                    {id:6, name: '哈哈'},
                    {id:7, name: '你好呀'},
                    {id:8, name: '是的'},
                    {id:9, name: '是的sdasu'},
                    {id:10, name: '是的asjdhas'},
                ]
            }
        },
        methods: {


            //搜索完成发送请求
            onSearch(){
                if (this.value.length === 0){
                    Toast('请输入搜索关键字')
                }else {
                    Toast('搜索成功')
                    console.log('val',this.value)
                }

            },

            //热门搜索
            handHotClick({id},index){
                console.log('id',id)
                console.log('index',index)
                Toast('发送成功')
            },

            //搜索历史
            handHistoryClick(index){
                console.log('index',index)
            },

            //清空历史记录
            handDelBtnClick(){
                this.list = []

            },

            //删除历史搜索
            handDeleteClick(index){
                console.log('shanchu',index)
                this.list.splice(index, 1)
            }
        }
    }
</script>

<style scoped lang="less">
    .search{
        background-color: white;
        height: 100vh;
        .search-header{
            .back-home{
                margin-right: 10px;
            }
        }
        .hot-search{
            margin: 10px;
            background-color: white;
            .hot-search-title{
                font-weight: bold;
                font-size: 20px;
            }
            .hot-search-list{
                display: flex;
                margin: 10px 0;
                .hot-search-item{
                    margin: 10px 5px 10px 0;
                    .hot-name{
                        margin-right: 10px;
                        height: 10px;
                        line-height: 10px;
                        border: 1px solid;
                        border-radius: 40px;
                        padding: 10px 5px;
                        background-color: #f5f5f5;
                    }
                }
            }
        }
        .search-history{
            margin: 10px;
            background-color: white;
            .search-history-title{
                display: flex;
                justify-content: space-between;
                .title{
                    font-size: 20px;
                    font-weight: bold;
                }
                .img{
                    width: 20px;
                    margin-right: 15px;
                    img{
                        margin-top: 5px;
                        width: 100%;
                    }
                }
            }
            .search-history-list{
                margin-top: 10px;
                .search-history-item{
                    display: flex;
                    justify-content: space-between;
                    .name{
                        padding: 10px 5px;
                    }
                    .delete{
                        width: 20px;
                        margin-right: 15px;
                        display: flex;
                        img{
                            margin: auto 0;
                            width: 100%;

                        }
                    }
                }
            }
        }
    }

</style>