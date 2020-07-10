<template>

    <!--登录页面-->

    <div class="login">
        <van-nav-bar
                title="商城登录"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="login-content">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="username"
                        name="username"
                        label="用户名"
                        placeholder="用户名"
                        maxlength="10"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
        <div class="register-Forgot-password">
            <span class="register" @click="$router.push('/register')">手机快速注册</span>
            <span class="Forgot-password" @click="$router.push('/forgot/password')">找回密码</span>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar , Form, Field, Button } from 'vant';
    import { Toast } from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Button);

    export default {
        name: "Login",
        data(){
            return {
                username: '',
                password: '',
                status: 200,
                name: ''
            }
        },
        mounted() {

        },
        methods: {

            onClickLeft(){
                this.$router.push('/personal')
                Toast('返回')
            },

            //登录
            onSubmit(values){

                if (this.status === 200){
                    Toast('登录成功')
                    this.$router.push('/personal')
                }else {
                    Toast('登录失败')
                }
                console.log('values',values)
            }
        }

    }
</script>

<style scoped lang="less">
    .login{
        .header{
            position: fixed;
            width: 100%;
            height: 50px;
            top: 0;
            background-color: #FF3709;
        }
        .content{
            position: relative;
            top: 50px;
            height: calc(100vh - 100px);
            overflow-y: scroll;
            .text{
                height: 50px;
                margin-bottom: 10px;
            }
            .tttt{
                .input{
                    border: 1px solid red;
                    height: 50px;
                }
            }
        }
        .tttt{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50px;
            border: 1px solid yellow;
            .input{
                border: 1px solid red;
                height: 50px;
            }
        }

        .van-nav-bar{
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
        }

        .login-content{
            margin: 300px 10px 20px 10px;
        }
        .register-Forgot-password{
            margin: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

</style>