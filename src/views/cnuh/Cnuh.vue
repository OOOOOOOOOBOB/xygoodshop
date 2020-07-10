Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Jww-job 
Please verify your email address to access all of GitHub’s features.
An email containing verification instructions was sent to m18237157918@163.com.
OOOOOOOOOBOB
/
xygoodshop
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
xygoodshop/src/views/cart/Cart.vue
@Jww-job
Jww-job cart
Latest commit 01b7068 7 days ago
 History
 1 contributor
365 lines (350 sloc)  8.68 KB
  
<template>
  <!--购物车详情-->
  <div class="cart">
    <div class="cart-header">
      <van-nav-bar 
        border
        title="购物车"
        right-text="编辑"   
        @click-right="onClickRight"
      />
    </div>
    <div class="cart-content">
      <van-pull-refresh
        class="content"
        v-model="refreshing"
      >
        <!-- <van-list
          v-model="loading"
          :finished="finished"
          finished-text="已经到底了！"
          @load="onLoad"
        > -->
          <van-checkbox-group v-model="result" ref="checkboxGroup">
            <div class="cart-list">
              <div
                class="cart-list-item"
                v-for="(item, index) in list"
                :key="index"
              >
                <!-- <div class="shop-name">{{ item.shop_name }}</div> -->
                <van-swipe-cell :before-close="beforeClose">
                  <div class="goods-desc">
                    <van-checkbox
                      :name="index"
                      class="cart-list-item"
                      :disabled="!item.status"
                    ></van-checkbox>
                    <div class="img"><img :src="item.img" /></div>
                    <div class="desc">
                      <div class="desc-name">{{ item.name }}</div>
                      <!--                                        <button @click="getModel(index,item)">+</button>-->
                      <div class="total">{{ item.price + "元" }}</div>
                      <!--                                        <div class="price">{{money + '元'}}</div>-->
                      <van-stepper
                        class="stepper"

                      />
                    </div>
                  </div>
                  <template #right>
                    <van-button square type="danger" text="删除" />
                  </template>
                </van-swipe-cell>
              </div>
            </div>
          </van-checkbox-group>
        <!-- </van-list> -->
      </van-pull-refresh>
    </div>
    <div class="footer">
      <!-- <div class="primary" v-if="isShow">
        <van-checkbox   @click="checkAll(isShow)">全选</van-checkbox>
      </div>
      <div class="info">
        <van-button type="info" @click="toggleAll">去结算</van-button>
      </div> -->

      <van-submit-bar 
        :price="Number(totalPrice)"
        button-text="提交订单" 
        @submit="toggleAll" 
        style="bottom:6%;border-bottom:1px solid red">
        <van-checkbox @click="checkAll(isShow)" >全选</van-checkbox>
        <!-- <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
        </template> -->
      </van-submit-bar>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  List,
  PullRefresh,
  Checkbox,
  CheckboxGroup,
  Button,
  Stepper,
  SwipeCell,
  Dialog,
  SubmitBar 
} from "vant";
Vue.use(NavBar)
  .use(PullRefresh)
  .use(List)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Button)
  .use(Stepper)
  .use(SwipeCell)
  .use(Dialog)
  .use(SubmitBar);
export default {
  name: "Cart",
  data() {
    return {
      list: [
        { 
          id: "1",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 15,
          status: 1,
          // total: 15,
        },
        { 
          id: "2",
          num: 1,
          shop_name: "超好质量拖鞋",
          name: "超好质量拖鞋超好质量拖鞋超好质量拖鞋超好质量拖鞋超好质量拖鞋",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 20,
          status: 1,
        },
        { 
          id: "3",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 30,
          status: 1,
        },
        { 
          id: "4",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 40,
          status: 1,
        },
        { 
          id: "5",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 50,
          status: 1,
        },{ 
          id: "5",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 50,
          status: 1,
        },{ 
          id: "6",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 60,
          status: 1,
        },{ 
          id: "7",
          num: 1,
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 70,
          status: 1,
        },
        
      ],
      page: 0,
      finished: false,
      loading: false,
      refreshing: false,
      result: [],
      checkedGoods: [],
      isShow: false,
      checked:true
    };
  },
  methods: {
    
    //下拉刷新和上拉加载
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    //下拉刷新和上拉加载
    onLoad() {
      //下拉刷新
      if (this.refreshing) {
        this.page = 0;
        this.list = [];
        //下拉刷新提示
        setTimeout(() => {
          this.refreshing = false;
          this.isShow = false;
          this.checkAll(this.isShow);
          console.log("下拉刷新成功");
          //Toast('下拉加载成功')
        }, 2000);
        this.loading = false;
      } else {
        //上拉加载更多提示
        setTimeout(() => {
          console.log("上拉加载成功");
          //Toast('上拉加载成功')
          this.loading = false;
        }, 3000);
        //当返回的长度
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }
      //发送请求
      this.getData();
    },
    // getValue(value) {
      // console.log('value11111',value)
      // this.values = value;
    // },
    //购物车增加
    // plus(item) {
      // console.log("item", item.price);
      //console.log('values',this.values)
      // item.price += item.price;
      
    // },
    //购物车减少
    // minus(item) {
    //   console.log("item", item.price);
    //   item.price -= item.price;
      
    // },
    beforeClose({ position, instance }) {
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？",
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
    onClickLeft() {
      this.$router.push("/details");
    },
    onClickRight() {},
    //单选事件
    chooseChange(){

    },

    checkAll(event) {
      console.log("event", event);
      //this.isShow = !this.isShow
      if (this.isShow == true) {
        this.$refs.checkboxGroup.toggleAll(true);
        this.isShow = false;
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
        this.isShow = true;
      }
    },
    toggleAll() {
      this.$router.push("/order");
      //this.$refs.checkboxGroup.toggleAll();
    },
  },
  computed: {
    //总价
    totalPrice(){
      return this.list.reduce(
        (total, item) => 
          total+
          (this.checkedGoods.indexOf(item.id) != -1
          ? item.total * item.id
          : 0 ),
      )
    }
  },
};
</script>

<style scoped lang="less">
.cart {
  height: 100%;
  background-color: #f5f5f5;
  .cart-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .cart-content {
    .content {
      background-color: #f5f5f5;
      position: absolute;
      top: 46px;
      bottom: 50px;
      overflow: hidden;
      left: 0;
      right: 0;
      z-index: 10;
      overflow-y: scroll;
      .cart-list {
        height: calc(100vh - 145px);
        position: relative;
        overflow-y: scroll;
        .cart-list-item {
          border-bottom: 0.5px solid #f5f5f5;
          background-color: white;
          margin: 10px;
          .shop-name {
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            text-align: center;
            border-bottom: 0.5px solid #f5f5f5;
          }
          .goods-desc {
            display: flex;
            height: 150px;
            .cart-list-item {
              width: 10%;
            }
            .img {
              margin: auto 0;
              width: 35%;
              height: 100px;
              img {
                height: 100%;
                width: 100%;
              }
            }
            .desc {
              .desc-name {
                position: absolute;
                top: 30%;
                font-size: 12px;
              }
              .total{
                position: absolute;
                top: 70%;
              }
              .stepper {
                position: absolute;
                right: 3%;
                top: 65%;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 6%;
    background-color: white;
    z-index: 30;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    justify-content: space-between;
    .primary {
      width: 50%;
    }
    .info {
      width: 50%;
    }
  }
}
</style>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
