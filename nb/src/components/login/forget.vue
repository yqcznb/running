<template>
    <div class="forget">
        <div class="login_continue">
            <span>忘记密码</span> 
             </div>
        <form>
            <span>抱歉</span>
            <button @click="back">返回首页</button>
           
        </form>
       
    </div>
</template>
<script>
export default {
    name: 'forget',
    data() {
        return {
        }
    },
    methods:
    {
        back(){
             this.$router.replace('/');
        }
    }
}
</script>
<style scoped>
    .forget {
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
        width: 15ex;
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

