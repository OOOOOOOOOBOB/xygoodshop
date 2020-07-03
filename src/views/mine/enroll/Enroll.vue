<template>

    <!--登录页面-->

    <div class="enroll">
        <van-nav-bar
                title="手机号验证"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="enroll-content">
            <van-form @submit="onSubmit">
                <van-field
                        type="tel"
                        name="phoneNumber"
                        label="手机号码"
                        placeholder="请输入手机号码"
                        readonly
                        clickable
                        :value="phoneNumber"
                        :focused="show"
                        @focus="show = true"
                />
                <van-number-keyboard
                        v-model="phoneNumber"
                        :show="show"
                        maxlength="11"
                        @blur="show = false"
                />
                <van-field
                        v-model="verify"
                        type="password"
                        name="verify"
                        label="验证码"
                        maxlength="6"
                        placeholder="请输入验证码"
                        :value="verify"
                        :focused="show"
                        @focus="show = true"
                >
                <van-number-keyboard
                        v-model="verify"
                        :show="show"
                        maxlength="6"
                        @blur="show = false"
                />
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
                        :value="password"
                        :focused="show"
                        @focus="show = true"
                />
                <van-number-keyboard
                        v-model="password"
                        :show="show"
                        maxlength="11"
                        @blur="show = false"
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
    import { NavBar , Form, Field, Button,NumberKeyboard,PasswordInput  } from 'vant';
    import { Toast } from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Button).use(NumberKeyboard).use(PasswordInput);

    export default {
        name: "Enroll",
        data(){
            return {
                phoneNumber: '',
                verify: '',
                password: '',
                status: 200,
                isShowTime: true,
                count: '',
                show: false,
                value: '',
            }
        },
        methods: {

            onClickLeft(){
                this.$router.push('/mine')
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
    .enroll{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #f5f5f5;
        .enroll-content{
            // margin: 50px 10px 20px 10px;
        }
        .register-Forgot-password{
            margin: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

</style>