<template>
    <!--订单-->
    <div class="order">
        <div class="order-header">
            <van-nav-bar
                title="确定订单"
                left-text="返回"
                right-text="新增收货地址"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        </div>
<!--        <div class="add-ress-list">-->
<!--            <van-address-list-->
<!--                    v-model="chosenAddressId"-->
<!--                    :list="list"-->
<!--                    default-tag-text="默认"-->
<!--                    @add="onAdd"-->
<!--                    @edit="onEdit"-->
<!--            />-->
<!--        </div>-->
        <div class="order-content">
<!--            <div class="order-list">-->
<!--                <div class="order-item" v-for="(item, index) in goods" :key="index">-->
<!--                    <div class="name">121221</div>-->
<!--                    <div class="item-content">-->
<!--                        <div class="img"><img src="../../assets/img/personal/bg.jpg"></div>-->
<!--                        <div class="desc">2121221</div>-->
<!--                    </div>-->
<!--                    <div class="receipt"><van-cell title="发票" is-link/></div>-->
<!--                    <div class="leave-word"><van-field v-model="text" label="买家留言" placeholder="请输入留言"/></div>-->
<!--                    <div class="freight">-->
<!--                        <span class="freight-name">运费</span>-->
<!--                        <span class="freight-price">￥121</span>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->


<!--            <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认"/>-->

            <van-address-edit
                    :area-list="areaList"
                    :search-result="searchResult"
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
                    @change-default="onChangeDefault"
            />
        </div>
<!--        <div class="order-content" v-else>-->
<!--        </div>-->
    </div>
</template>

<script>

    import areaList from '../../utils/areaList'
    import Vue from 'vue';
    import { NavBar, AddressEdit, Toast, AddressList, Cell, CellGroup, Field } from 'vant';

    Vue.use(NavBar).use(AddressEdit).use(Toast).use(AddressList).use(Cell).use(CellGroup).use(Field);

    export default {
        name: "Order",
        data(){
            return {
                areaList,
                chosenAddressId: 0,
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                        isDefault: true,
                    },
                    {
                        id: '2',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    }
                ],
                goods: [
                    {}
                ],
                text: '',

                freight: '',


                searchResult: ['1'],
                area: ['请选择','请选择','请选择'],


            }
        },
        methods: {
            onAdd(item, index){
                Toast('编辑地址:' + index);
            },
            onEdit(index){
                Toast('编辑地址:' + index);
            },

            //默认选择地址
            onSave() {
                Toast('save');
            },

            //默认选择地址
            onDelete() {
                Toast('delete');
            },

            //默认选择地址
            onChangeDetail(val) {
                this.searchResult = [];

                console.log('val',val)
                // if (val) {
                //     this.searchResult = [
                //         {
                //             name: val,
                //             address: val,
                //         },
                //     ];
                // } else {
                //     this.searchResult = [];
                //
                // }
            },


            //切换默认地址
            onChangeDefault(val){
                console.log('val',val)

            },

            onClickLeft(){
                this.$router.push('/cart')
            },

            onClickRight(){}

        }
    }
</script>

<style scoped lang="less">
    .order{
        .order-header{}

        .order-content{
            .van-address-list{

                .van-address-list__bottom{
                    display: none;
                    .van-button{
                        display: none;
                    }
                }
            }
            .freight{
                display: flex;
                margin: 10px;

                justify-content: space-between;
                .freight-name{

                }
            }

        }

    }



</style>