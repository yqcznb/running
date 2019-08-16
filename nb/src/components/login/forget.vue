<template>
    <div class="forget">
        <div class="login_continue">
            <span>忘记密码</span> 
             </div>
        <form>
          
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
   
</style>

