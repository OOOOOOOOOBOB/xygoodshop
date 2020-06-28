<template>
    <!--注册页面-->
    <div class="register">
        <van-nav-bar
                title="用户注册"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="register-content">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="user.nickname"
                        name="nickname"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请输入昵称' }]"
                />
                <van-field
                        v-model="user.phone"
                        name="phone"
                        placeholder="请输入手机号"
                        maxlength="11"
                        :rules="[{ required: true, message: '请输入手机号' }]"
                >
                    <template #button>
                        <van-button size="small" native-type="button" color="blue" @click="smallBtnClick" v-if="isShowTime">发送验证码</van-button>
                        <van-button size="small" native-type="button" color="blue" disabled v-else>{{count}}</van-button>
                    </template>
                </van-field>
                <van-field
                        v-model="user.password"
                        type="password"
                        name="password"
                        placeholder="请输入密码"
                        :rules="[{ required: true, message: '请输入密码' }]"
                />
                <van-field
                        v-model="user.Cpassword"
                        type="password"
                        name="Cpassword"
                        placeholder="确认密码"
                        :rules="[{ required: true, message: '请确认密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
        <div class="protocol">
            注册即视为同意
            <span class="text-list" @click="$router.push('/protocol')">
                《<span class="text">用户注册协议</span>》
            </span>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import { NavBar , Form, Field, Button, Toast } from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Button)

    export default {
        name: "Register",
        data(){
            return {
                user: {
                    nickname: '',
                    phone: '',
                    password: '',
                    Cpassword: '',
                },
                isShowTime: true,
                count: ''

            }
        },
        methods: {

            //返回登录页面
            onClickLeft(){
                this.$router.push('/login')
                console.log('返回')
            },
            //发送短信验证
            smallBtnClick(){
                this.count = 5
                this.isShowTime = false
                let interval = setInterval(() => {
                    this.count--
                    if (this.count <= 0 ){
                        this.isShowTime = true
                        clearInterval(interval)
                    }
                },1000)
                Toast('发送短信成功')
            },

            //提交表单
            onSubmit(values){
                console.log('submit',values)
                if (this.password === this.Cpassword){
                    Toast('等于')
                }else {
                    Toast('密码输入不一致')
                }


            }

        }
    }
</script>

<style scoped lang="less">
    .register{
        height: 100vh;
        .register-content{
            margin: 50px 10px 0 10px;
            border-radius: 5px;
        }
        .protocol{
            text-align: center;
            font-size: 15px;
            .text-list{
                color: red;
                .text{
                    border-bottom: .5px solid;
                    padding: 1px;
                }
            }
        }
    }

</style>