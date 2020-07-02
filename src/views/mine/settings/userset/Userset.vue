<template>

    <!--登录页面-->

    <div class="userset">
        <van-nav-bar
                title="用户名更改"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="phone-content">
            <div style="padding-left:4%;width:100%;backgroundColor:white;border-bottom:1px solid #f5f5f5;font-size:15px">用户名：</div>
            <van-form @submit="onSubmit">
               
                <van-field
                        v-model="username"
                        name="username"
                        placeholder="请输入用户名"
                        
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
    import { NavBar , Form, Field, Button } from 'vant';
    import { Toast } from 'vant';

    Vue.use(NavBar).use(Form).use(Field).use(Button);

    export default {
        name: "Phone",
        data(){
            return {
                username: '',
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
    .userset{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #f5f5f5;
        .register-Forgot-password{
            margin: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

</style>