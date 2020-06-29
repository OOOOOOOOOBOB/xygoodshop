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
        @refresh="onRefresh"
        success-text="加载成功"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="已经到底了！"
          @load="onLoad"
        >
          <van-checkbox-group v-model="result" ref="checkboxGroup">
            <div class="cart-list">
              <div
                class="cart-list-item"
                v-for="(item, index) in list"
                :key="index"
              >
                <div class="shop-name">{{ item.shop_name }}</div>
                <van-swipe-cell :before-close="beforeClose">
                  <div class="goods-desc">
                    <van-checkbox
                      :name="index"
                      class="cart-list-item"
                    ></van-checkbox>
                    <div class="img"><img :src="item.img" /></div>
                    <div class="desc">
                      <div class="desc-name">{{ item.name }}</div>
                      <!--                                        <button @click="getModel(index,item)">+</button>-->
                      <div class="total">{{ item.total + "元" }}</div>
                      <!--                                        <div class="price">{{money + '元'}}</div>-->
                      <van-stepper
                        class="stepper"
                        @change="getValue"
                        @plus="plus(item)"
                        @minus="minus(item)"
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
        </van-list>
      </van-pull-refresh>
    </div>
    <div class="footer">
      <div class="primary" v-if="isShow">
        <van-checkbox   @click="checkAll(isShow)">全选</van-checkbox>
      </div>
      <!-- <div class="primary" v-else>
        <van-button type="primary" @click="checkAll(isShow)">取消</van-button>
      </div> -->

      <!--                <div class="summation">{{'合计 : ' + item.total}}</div>-->
      <div class="info">
        <van-button type="info" @click="toggleAll">去结算</van-button>
      </div>

      <!-- <div class="paybox">
        <div class="payleft"> -->
          <!--选择全部商品-->
          <!-- <span
            class="check"
            :class="{ checked: isCheckAll }"
            @click="checkAll()"
          ></span>
          <b>全选</b>
        </div>

        <button>结算({{ allCount }})</button>
        <span>总计：{{ allPrice }}</span>
      </div> -->
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
} from "vant";

Vue.use(NavBar)
  .use(PullRefresh)
  .use(List)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Button)
  .use(Stepper)
  .use(SwipeCell)
  .use(Dialog);
export default {
  name: "Cart",
  data() {
    return {
      list: [
        {
          shop_name: "小悠商城",
          name: "小悠商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 15,
          total: 15,
        },
      ],
      page: 0,
      finished: false,
      loading: false,
      refreshing: false,
      result: [],
      value: 1,
      money: 15,
      values: 1,
      isShow: true,
    };
  },

  methods: {
    //发送请求
    getData() {
      this.page += 1;
      console.log("page", this.page);
      //发送ajax请求
      let good_list = [
        {
          shop_name: "商城",
          name: "商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 30,
          total: 30,
        },
        {
          shop_name: "商城",
          name: "商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 20,
          total: 20,
        },
        {
          shop_name: "商城",
          name: "商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 10,
          total: 10,
        },
        {
          shop_name: "商城",
          name: "商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 50,
          total: 50,
        },
        {
          shop_name: "商城",
          name: "商城",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          price: 90,
          total: 90,
        },
      ];

      this.list.push(...good_list);
      //console.log('list',this.list)
    },
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

    getValue(value) {
      // console.log('value11111',value)
      this.values = value;
    },

    //购物车增加
    plus(item) {
      console.log("item", item.price);
      //console.log('values',this.values)

      item.total += item.price;
    },
    //购物车减少
    minus(item) {
      console.log("item", item.price);

      item.total -= item.price;
    },
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
              width: 40%;
              height: 100px;
              img {
                height: 100%;
                width: 100%;
              }
            }
            .desc {
              .desc-name {
              }
              .stepper {
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
