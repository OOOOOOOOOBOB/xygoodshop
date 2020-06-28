<template>

    <!--忘记密码-->

    <div class="forgot">

        <van-nav-bar title="忘记密码" left-arrow @click-left="onClickLeft"/>
        <van-form @submit="onSubmit" class="forgot-content">
            <van-field
                    v-model="phone"
                    name="phone"
                    label="手机号码"
                    placeholder="手机号码"
                    maxlength="11"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            >
                <template #button>
                    <van-button size="small" native-type="button" color="blue" @click="smallBtnClick" v-if="isShowTime">发送验证码</van-button>
                    <van-button size="small" native-type="button" color="blue" disabled v-else>{{count}}</van-button>
                </template>
            </van-field>
            <van-field
                    v-model="code"
                    name="password"
                    label="验证码"
                    placeholder="请输入验证码"
                    :rules="[{ required: true, message: '请输入验证码' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="请输入新密码"
                    :rules="[{ required: true, message: '请输入新密码' }]"
            />
            <van-field
                    v-model="Cpassword"
                    type="password"
                    name="Cpassword"
                    label="确认密码"
                    placeholder="请确认输入新密码"
                    :rules="[{ required: true, message: '请确认输入新密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" :disabled="isDisabled">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar, Form, Field, Toast, List, PullRefresh, Cell} from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Toast).use(List).use(PullRefresh).use(Cell);

    export default {
        name: "Forgot",
        data(){
            return {
                sms: '',
                phone: '',
                code: '',
                password: '',
                Cpassword: '',
                isShowTime: true,
                count: '',
                isDisabled: false,
                //list数据


            }
        },
        methods: {
            //下拉刷新


            //表单提交
            onSubmit(values){
                if(values.password === values.Cpassword){
                    Toast('修改成功')
                    this.isDisabled = true
                    this.$router.push('/login')
                }else {
                    Toast('两次输入密码不一致')
                    setTimeout(() => {

                    },3000)

                }
            },

            //发送验证码
            smallBtnClick(){
                if (this.phone.length < 11){
                    Toast('请输入电话号码')
                }else {
                    this.count = 5
                    this.isShowTime = false
                    //定时器
                    let interval = setInterval(() => {
                        this.count--
                        if (this.count <= 0 ){
                            this.isShowTime = true
                            //清除定时器
                            clearInterval(interval)
                        }
                    },1000)
                    Toast('发送短信成功')
                }
            },

            //返回登录
            onClickLeft(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="less">
    .forgot{
        .forgot-content{
            margin-top: 50px;
        }

    }

</style>