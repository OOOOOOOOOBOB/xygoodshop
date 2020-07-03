<template>
    <div class="store">

        <div :class="isClass ? 'homePage' : 'subPage'"
             v-for="(item, index) in list"
             :key="index"
             @click="$router.push({path: '/store/details', query: {id: item.id}})">
            <div class="store-img"><img :src="item.img"></div>
            <div class="store-desc">
                <div class="title-list">
                    <div class="title">{{item.title}}</div>
                    <div class="subhead">{{item.subhead}}</div>
                </div>
                <div class="sales">{{'销量 ' + item.sales}}</div>
                <div class="address-list">
                    <div class="address">{{item.address}}</div>
                    <div class="distance">{{item.distance + 'km'}}</div>
                </div>
                <div class="pay"><span class="text">去买单</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StoreList",
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            },
            isClass: {
                type: Boolean,
                default() {
                    return true;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .store{
        .homePage{
            display: flex;
            height: 130px;
            //margin-top: 10px;
            margin: 10px;
            background-color: white;
            border-radius: 10px;
            .store-img{
                width: 30%;
                height: 100px;
                margin: auto 0;
                display: flex;
                img{
                    width: 80%;
                    height: 80%;
                    border-radius: 10px;
                    margin: auto;
                }
            }
            .store-desc{
                flex: 1;
                margin-top: 24px;
                margin-left: 10px;

                .title-list{

                    display: flex;
                    .title{
                        width: 60%;
                        font-size: 16px;
                        color: #2c2c2c;
                    }
                    .subhead{
                        font-size: 14px;
                        color: #707070;
                    }
                }
                .sales{
                    font-size: 14px;
                    color: #FF3709;
                    margin: 5px 0;
                }
                .address-list{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    font-size: 14px;
                    .address{
                        width: 75%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .distance{
                        margin-right: 5px;
                    }
                }
                .pay{
                    display: flex;
                    .text{
                        padding: 5px 10px;
                        margin-right: 10px;
                        margin-top: 2px;
                        border-radius: 5px;
                        background-color: #FF3709;
                        margin-left: auto;
                        color: white;
                        font-size: 14px;
                    }

                }
            }
        }
        .subPage{
            display: flex;
            height: 130px;
            margin-top: 10px;
            background-color: white;
            border-radius: 10px;
            .store-img{
                width: 30%;
                height: 100px;
                margin: auto 0;
                display: flex;
                img{
                    width: 80%;
                    height: 80%;
                    border-radius: 10px;
                    margin: auto;
                }
            }
            .store-desc{
                flex: 1;
                margin-top: 24px;
                margin-left: 10px;

                .title-list{

                    display: flex;
                    .title{
                        width: 60%;
                        font-size: 16px;
                        color: #2c2c2c;
                    }
                    .subhead{
                        font-size: 14px;
                        color: #707070;
                    }
                }
                .sales{
                    font-size: 14px;
                    color: #FF3709;
                    margin: 5px 0;
                }
                .address-list{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    font-size: 14px;
                    .address{
                        width: 75%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .distance{
                        margin-right: 5px;
                    }
                }
                .pay{
                    display: flex;
                    .text{
                        padding: 5px 10px;
                        margin-right: 10px;
                        margin-top: 2px;
                        border-radius: 5px;
                        background-color: #FF3709;
                        margin-left: auto;
                        color: white;
                        font-size: 14px;
                    }

                }
            }
        }

    }


</style>