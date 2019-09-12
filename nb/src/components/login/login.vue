<template>
    <div id="login">
        <div class="login_continue">
            <span>趣跑登录</span> 
        </div>
        <img src="../../assets/img/logo.jpg" alt="" class="fr_logo">
        <form>
            <input type="text" placeholder="手机号" v-model="username">
            <input type="password" placeholder="登录密码"  v-model="password">
            <button @click="login">登录</button>
            <div class="jump_bar">
                <router-link to="/register"><span class="jump register">手机快速注册</span></router-link>
                <router-link to="/forget"><span class="jump forget">忘记密码</span></router-link>
            </div>
        </form>
        <span class="other_login">第三方登录</span> <hr>
        <div class="login_bar">
            <img class="login_choose login_wechat" src="../../assets/img/wechat.png">
            <img class="login_choose login_QQ" src="../../assets/img/QQ.png">
            <img class="login_choose login_sina" src="../../assets/img/sina.png">
        </div>
    </div>
</template>
<script>
import {mapActions, mapState,mapGetters} from 'vuex' //注册 action 、 state 、getter
export default {
    name: 'login',
    data() {
        return {
            msg: 'Here is login component',
            username:"17860760925" ,
            password:"111" ,
            num:"",
        }
    },
    created:function(){
        if(localStorage.getItem("yhid")){
              this.$router.push('/footer/index');
              
        }
    },
    mounted() {
        prompt("由于本项目设计初衷为Web APP,考虑到项目特殊性，也为了您能更好的体验\"青宠趣跑\"Web APP的功能，推荐您复制下方连接选择下载Android APK安装文件，在安卓移动端体验本软件","http://no37.store/r&f%20%E9%9D%92%E5%AE%A0%E8%B6%A3%E8%B7%91.apk");
    },
    methods:
    {   
       
        login(){
            if (this.username == '' || this.password =='') {
                    alert('请输入用户名或密码')
                    }
            else{
                this.axios.get('http://no37.store:8080/AK/denglu1',{
                    params: {
                        yhzh:this.username,
                        yhmm:this.password,
                    }
                }).then(response=>{
                    this.num=response.data.jg;
                    // console.log(response.data.yhid);
                    console.log(response);
                    if(this.num==1){
                        alert("登录成功")
                        this.$router.replace('/footer/index');
                        this.$store.dispatch("login", true);
                        this.$store.dispatch("yh",response.data.yhid);
                        localStorage.setItem("yhid",response.data.yhid);
                        localStorage.setItem("password",this.password);
                        localStorage.setItem("yhsf",response.data.yhsf);
                        localStorage.setItem("egg_success",1)
                        localStorage.setItem("v",false);

                    }else if(this.num==0){
                        alert("账号或密码错误")
                    }
                })      //获取失败
                .catch(error=>{
                    // console.log(error);
                    alert('网络错误，不能访问');
                })
            }
        }
    }
}
</script>
<style scoped>
    #login {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: white;
    }
    .fr_logo {
        height: 15%;
        margin: 1em auto 1ex;
        border-radius: 50%;
    }
    a {
        text-decoration: none;
    }
    .jump_bar {
        margin-top: 12px;
        display: flex;
    }
    .jump {
        font-size: 12px;
        color: #8a8c8e;
    }
    .register {
        position: fixed;
        left: 0;
        margin-left: 1.5em;
    }
    .forget {
        position: fixed;
        right: 0;
        margin-right: 1.5em;
    }
    .login_continue {
        width: 100%;
        height: 44px;
        position: relative;
        top: 0;
        text-align: center;
        background-color: #fffbfb;
        line-height: 44px;
    }
    .continue {
        color: #2c3e50;
        font-size: 15px;
        position: fixed;
        right: 0;
        margin-right: 1.1em;
    }
    input {
        width: 90%;
        height: 44px;
        border: 0;
        background-color: #d1cfcf94;
        margin: 10px auto;
        display: block;
        font-size: 13px;
        text-indent: 1em;
    }
    button {
        width: 90%;
        height: 44px;
        background-color: #dec674;
        color: #FFF;
        font-weight: bolder;
        border: 0;
    }
    .other_login {
        width: 6em;
        text-align: center;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 99px;
        font-size: 13px;
        color: #a9a9a9;
        background-color: white;
        z-index: 10;
    }
    hr {
        width: 80%;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 105px;
    }
    .login_bar {
        width: 100%;
        position: fixed;
        bottom: 30px;
    }
    .login_choose {
        width: 30px;
        height: 30px;  
    }
    .login_bar {
        display: flex;
        /* flex-direction: row; */
        justify-content: space-around;
    }
</style>

