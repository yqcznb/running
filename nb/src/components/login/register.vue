<template>
    <div class="register">
        <div class="login_continue">
            <span>趣跑注册</span> 
        </div>
        <form>
            <input type="text" placeholder="手机号" v-model="username">
            <input type="password" placeholder="密码"  v-model="password">
            <input type="password" placeholder="确认密码"  v-model="password2">
            <div class="jump_bar">
              <button @click="register">注册</button>
              <button @click="back">返回</button>
            </div>
        </form>
       
    </div>
</template>
<script>
export default {
    name: 'register',
    data() {
        return {
          username:"",
          password:"",
          password2:"",
          num:"",
        }
    },
    methods:
    {
        register(){
    
        if (this.username == "" || !this.username) {
               alert("请输入电话号码");
        } else if (!(/^1[34578]\d{9}$/.test(this.username))) {
            alert("电话号码格式错误");
        }
        else if(this.password==""){
                alert("请输入密码！")
            }
        else if(this.password!==this.password2){
                alert("两次密码输入不一样，请重新输入！")
            }else{
                this.axios.get('http://no37.store:8080/AK/zhuce1',{
                params: {
                    yhzh:this.username,  
                    yhmm:this.password   
                }
            }).then(response=>{
                    console.log(response);
                    this.num=response.data;
                    console.log(this.num)
                    if(this.num==1){
                        alert("恭喜你注册成功")
                        this.$router.replace('/');
                    }else if(this.num==0){
                        alert("手机号已被注册，请重新注册")
                    }
                    
                })      //获取失败
                .catch(error=>{
                    console.log(error);
                    alert('网络错误，不能访问');
                })
             }
                
        },
        back(){
             this.$router.replace('/');
        }
    }
}
</script>
<style scoped>
    .register {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: white;
    }
    form{
        margin-top: 60px;  
      }
    a {
        text-decoration: none;
    }
    .jump_bar {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        margin: 0 1em;
    }
    .jump {
        font-size: 12px;
        color: #8a8c8e;
    }
    .register {
        position: fixed;
        left: 0;
        /* margin-left: 1.5em; */
    }
    .forget {
        position: fixed;
        right: 0;
        margin-right: 1.5em;
    }
    .login_continue {
        width: 100%;
        height: 44px;
        position: fixed;
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
        width: 9ex;
        height: 4ex;
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

