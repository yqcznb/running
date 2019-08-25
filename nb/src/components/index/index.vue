<template>
  <div class="index">
    <ul class="heard">
        <router-link to="/confirm" v-if="show">
               <li class="xiaoqu">{{xiaoqu}}</li>
        </router-link>
         <li class="xiaoqu" v-if="ow" >{{xiaoqu}}</li>
        <li class="tongzhi"><i  class="iconfont icongonggao"></i>{{ggnr}}</li>
    </ul>
    <router-view :key="aa"></router-view>
    <div class="caochang">
        <div class="xinxi">
            <div>
              <router-link to="/footer/index/run" append>
              <i class="iconfont iconpaobu"></i>
				      <span>开跑</span>
              </router-link>
            </div>
            <p>当前已跑</p>
            <p>{{dqyp}}次</p>
            <p>晨跑</p>
            <p>{{cp}}次</p>
            <p>夜跑</p>
            <p>{{yp}}次</p>
            <p>学期目标</p>
            <p>{{xqmb}}次</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data(){
    return{
        xiaoqu:'未认证(点击认证)',
        id:"",
        cp:"",
        yp:"",
        xqmb:"",
        ggnr:"",
        show:true,
        ow:false
    }
  },created(){
 
      axios.get('http://no37.store:8080/AK/zhuye1',{
    params: {
        yhid: 1,     
    }
}).then(response=>{
        // console.log(response);
         this.dqyp=response.data.dqyp;
          this.cp=response.data.cp;
           this.yp=response.data.yp;
         this.xqmb=response.data.xqmb;
      })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
      
  axios.get('http://no37.store:8080/AK/gonggao1',{
    params: {
        ggid:1,     
    }
}).then(response=>{
       
         this.ggnr=response.data.ggnr; 
      })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  

   axios.get('http://no37.store:8080/AK/SelectXsID',{
    params: {
        yhid:localStorage.getItem("yhid"),     
    }
}).then(response=>{
          if(response.data.yhxx!=""&&response.data.yhxx!=null&&response.data.yhxx!=undefined){
                this.xiaoqu = response.data.yhxx;
                this.show = false;
                this.ow = true;
          }
        
      })      //获取失败
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
  }
 
  
  

}
</script>

<style scoped>
.index{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
}
.index .heard{
display: flex;
text-align: left;
padding: 0;
width: 100%;
margin-top: 0;
flex-direction: column;
}
.index .heard .xiaoqu{
 border-bottom:2px solid rgb(102, 96, 92);
 text-align: left;
 font-size: 20px;
 background:rgb(238, 242, 243);
 padding: 10px;
}
.index .heard li{
  list-style: none;
}
.index .heard li i{
  padding: 5px 10px;
  color: rgb(231, 46, 170);
  font-size: 20px; 
}
.index .heard .tongzhi{
 text-align: left;
 background:rgb(208, 210, 211);
 padding: 3px;
}
.index .caochang{
  display: flex;
  justify-content: center;
  align-content:center;
  background-image: url(../../assets/img/paodao.png);
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;
  background-size:auto 90%;
  height:75%;
}
.index .caochang .xinxi{
   display: flex;
  
   flex-direction: column;
   justify-content: center;
}
a{
      color: #dec674;
}
.index .caochang .xinxi span,.index .caochang .xinxi i{
  color: rgb(235, 14, 198)
}
</style>
