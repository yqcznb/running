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
    
        if (!(/^1[34578]\d{9}$/.test(this.username))) {
            alert("电话号码格式错误");
        
          
        } else if (this.username == "" || !this.username) {
               alert("请输入电话号码");
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
   
</style>

