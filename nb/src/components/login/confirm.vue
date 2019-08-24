<template>
    <div class="confirm">
        <mt-header title="身份认证">
        <router-link to="/footer/index" slot="left">
            <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
        <mt-button slot="right">修改信息</mt-button>
        </mt-header>
        <mt-field label="学校" v-model="yhxh" :disabled="disabled"></mt-field>
        <mt-field label="院系"   v-model="yhxy" :disabled="disabled"></mt-field>
        <mt-field label="专业"   v-modal="yhzy" :disabled="disabled"></mt-field>
        <mt-field label="姓名"  v-model="name" :disabled="disabled"></mt-field>
        <mt-field label="学号"  v-model="stunumber" :disabled="disabled"></mt-field>
        <mt-field label="性别"  v-model="xy" :disabled="disabled"></mt-field>
        <mt-field label="入学年份" v-model="schage" :disabled="disabled"></mt-field>
        <mt-button type="primary" :disabled="disabled" @click="renzhen">认证</mt-button>     
</div>
</template>
<script>
export default {
    name: 'confirm',
    data() {
        return {
            disabled:false,
        }
    },
    created(){
         axios.get('http://no37.store:8080/AK/SelectXsID',{
    params: {
        yhid:localStorage.getItem("yhid"),     
    }
}).then(response=>{
          if(response.data.yhxx!=""&&response.data.yhxx!=null&&response.data.yhxx!=undefined){
              this.disabled = true
          }
        
      })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
    },
    methods:
    {
       
        back(){
                this.$router.push({
                    path: '/footer/index'
                });
                 window.location.reload();
        },
        renzhen(){
               axios.get('http://no37.store:8080/AK/xsID',{
        params: {
            yhid:localStorage.getItem("yhid"),    
            
        }
    }).then(response=>{
           
            
        })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
        }
    }
}
</script>
<style scoped>
   
</style>

