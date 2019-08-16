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
        }
    },
    methods:
    {
        register(){
            
        },
        back(){
             this.$router.replace('/');
        }
    }
}
</script>
<style scoped>
   
</style>

