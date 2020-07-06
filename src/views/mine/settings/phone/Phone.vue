<template>

    <!--登录页面-->

    <div class="phone">
        <van-nav-bar
                title="手机号验证"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="phone-content">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="phoneNumber"
                        name="phoneNumber"
                        label="手机号码"
                        placeholder="请输入手机号码"
                        maxlength="11"         
                />
                
                <van-field
                        v-model="verify"
                        type="password"
                        name="verify"
                        label="验证码"
                        placeholder="请输入验证码"
                >
                <template #button>
                        <van-button size="small" native-type="button" color="red" @click="smallBtnClick" v-if="isShowTime">获取验证码</van-button>
                        <van-button size="small" native-type="button" color="blue" disabled v-else>{{count}}</van-button>
                </template>
                </van-field>

                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="请输入密码"
                />
                <div style="margin: 16px;">
                    <van-button round block color="red" type="info" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
        
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar , Form, Field, Button, } from 'vant';
    import { Toast } from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Button);

    export default {
        name: "Phone",
        data(){
            return {
                phoneNumber: '',
                verify: '',
                password: '',
                status: 200,
                isShowTime: true,
                count: ''
            }
        },
        methods: {

            onClickLeft(){
                this.$router.push('../settings')
                Toast('返回')
            },
            
            // 获取短信验证码
            //发送短信验证
            smallBtnClick(){
                this.count = 60
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

            //登录
            onSubmit(values){

                if (this.status === 200){
                    Toast('登录成功')
                    this.$router.push('/mine')
                }else {
                    Toast('登录失败')
                }
                console.log('values',values)
            }
        }

    }
</script>

<style scoped lang="less">
    .phone{
        position: absolute;
        height: 100%;
        background-color: #f5f5f5;
        .register-Forgot-password{
            margin: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

</style>