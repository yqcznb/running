<template>
  <div class="run">
      <div class="amap-page-container">
    <div id="back_bar">
            <router-link to="/footer/index">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
    </div>
    <router-view></router-view>
      <div class="left">
        <div class="limbs">
          <div class="hands"></div>
          <div class="legs"></div>
        </div>
        <div class="yolk" @click="yy">
          <li>开</li>
          <li>跑</li>
        </div>
        <div class="face"></div>
      </div>
    <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >  
    </el-amap>
   <div class="toolbar">
        <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
    </div>
    <div>
      <mt-popup position='bottom' class="times" popup-transition="popup-fade" v-model="visible" style="width:100%;height:100%;background-color:rgb(132, 255, 255, 0.8);">
          <div class="big">{{count}}</div>
      </mt-popup>
    </div>
</div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'run',
  data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      zoom: 18,
      lng: 0,
      lat: 0,
      run_morn_time1:"",
      run_morn_time2:"",
      run_even_time1:"",
      run_even_time2:"",
      run_morn_time3:"",
      run_morn_time4:"",
      run_even_time3:"",
      run_even_time4:"",
      loaded: false,
      visible: false,
      count:"",//倒计时
      plugin: [   //一些工具插件
        {
          pName: 'Geolocation',   //定位
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];         //设置坐标
                  self.loaded = true;                         //load
                  self.$nextTick();                           //页面渲染好后
                }
              })
            }
          }
        },      
      ]
    }
  },
   activated: function() {
    this.getCase()
  },
  created(){
     this.axios.get('http://no37.store:8080/AK/backingOutCYP',{
            params: {
                yhid: localStorage.getItem("yhid"),     
            }
        })
        .then(response=>{
            // console.log(response);
            this.cpsj=response.data.cpsj;
            this.ypsj=response.data.ypsj;
            this.run_all_times=response.data.xqmb;
            this.run_morn_times=response.data.cpcs;
            this.run_even_times=response.data.ypcs;
            this.run_morn_time1=response.data.cpsj.substring(0,2);
            this.run_morn_time3=response.data.cpsj.substring(6,8);
            this.run_even_time1=response.data.ypsj.substring(0,2);
            this.run_even_time3=response.data.ypsj.substring(6,8);
            this.run_morn_time2=response.data.cpsj.substring(3,5);
            this.run_morn_time4=response.data.cpsj.substring(9,11);
            this.run_even_time2=response.data.ypsj.substring(3,5);
            this.run_even_time4=response.data.ypsj.substring(9,11);
            console.log("this.run_morn_time1:"+this.run_morn_time1)
        })      //获取失败
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
  },

  methods: {
    //把经纬度传到父组件
    sendlnglat (){ 
      this.$emit('register', this.lng, this.lat)
    },
    yy(){
        var aa = 0;
        var now = new Date();
        var hour = now.getHours().toString().padStart(2,'0');//得到小时
        var minu = now.getMinutes().toString().padStart(2,'0');//得到分钟
        if(hour==this.run_morn_time1&&minu>=this.run_morn_time2){
            aa =1;
        }else if(hour>this.run_morn_time1&&minu<this.run_morn_time3){
            aa=1;
        }
        else if(minu<this.run_morn_time4&&hour==this.run_morn_time3){
            aa=1;
        }
        else if(hour==this.run_even_time1&&minu>=this.run_even_time2){
            aa =2;
        }else if(hour>this.run_even_time1&&hour<this.run_even_time3){
            aa=2;
        }
        else if(minu<this.run_even_time4&&hour==this.run_even_time3){
            aa=2;
        }
        console.log("aa:"+aa)
         console.log("hour:"+hour)
          console.log("minu:"+minu)
            console.log("this.run_morn_time1:"+this.run_morn_time1)
          console.log("this.run_morn_time2:"+this.run_morn_time2)
           console.log("hour==this.run_even_time1:"+hour==this.run_morn_time1)
        if(aa==1){
             MessageBox.confirm('', { 
         message: '当前时间为晨跑时间，是否开始跑步', 
         title: '提示', 
         confirmButtonText: '晨跑', 
         cancelButtonText: '取消' 
         }).then(action => { 
         if (action == 'confirm') {     //确认的回调
            this.visible = true;
        const TIME_COUNT = 3;
        if(!this.timer){
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(()=>{
            if(this.count > 0 && this.count <= TIME_COUNT){
                this.count--;
                if(this.count==0){
                this.count="GO!"
            }
            } else{
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                localStorage.setItem("p",1)
                //跳转的页面写在此处
                this.$router.push({
                    path: '/time'
                });
              
            }
          },1000)
        }
         }
         }).catch(err => { 
         if (err == 'cancel') {     //取消的回调
         console.log(2);
         } 
         });
        }else if(aa==2){
             MessageBox.confirm('', { 
         message: '当前时间为夜跑时间，是否开始跑步', 
         title: '提示', 
         confirmButtonText: '夜跑', 
         cancelButtonText: '取消' 
         }).then(action => { 
         if (action == 'confirm') {     //确认的回调
            this.visible = true;
        const TIME_COUNT = 3;
        if(!this.timer){
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(()=>{
            if(this.count > 0 && this.count <= TIME_COUNT){
                this.count--;
                if(this.count==0){
                this.count="GO!"
            }
            } else{
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                 localStorage.setItem('p',2)
                //跳转的页面写在此处
                this.$router.push({
                    path: '/time'
                });
              
            }
          },1000)
        }
         }
         }).catch(err => { 
         if (err == 'cancel') {     //取消的回调
         console.log(2);
         } 
         });
        }else{
           MessageBox.confirm('', { 
         message: '当前时间为不是学校规定跑步时间，你可以选择自由跑，自由跑不会关联成绩', 
         title: '提示', 
         confirmButtonText: '晨跑', 
         cancelButtonText: '取消' 
         }).then(action => { 
         if (action == 'confirm') {     //确认的回调
            this.visible = true;
        const TIME_COUNT = 3;
        if(!this.timer){
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(()=>{
            if(this.count > 0 && this.count <= TIME_COUNT){
                this.count--;
                if(this.count==0){
                this.count="GO!"
            }
            } else{
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                //跳转的页面写在此处
                this.$router.push({
                    path: '/time'
                });
              
            }
          },1000)
        }
         }
         }).catch(err => { 
         if (err == 'cancel') {     //取消的回调
         console.log(2);
         } 
         });
        }
 
      
    }
  },
  
}
</script>

<style>
@import "../../../src/assets/css/kaishi.css";
.amap-page-container {
  margin-top: 0.03rem;
  font-size: 0.12rem;
  color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
 
}
.run{
  overflow: hidden;
}
#back_bar {
      text-align: left;
      text-indent: 0.3em;
      line-height: 200%;
      background-color: rgb(83, 83, 83);
      margin-bottom: 2%;
      font-size: 18px;
  }
a{
    color: #dec674;    
}
.times{
  display: flex;
  flex-direction:column;
  justify-content:center;
  color:  rgba(253, 185, 51, 0.89);
  font-weight: bold;
  font-size: 0px;
  animation: am1 1s linear infinite ;
  animation-fill-mode: forwards;
}
@keyframes am1 {      
            0% {  /* 或者写成这样:  from {} */    
                font-size: 0px;  /* 多个属性相当于多组动画一起执行 */  
            }      
            100% {  /* 或者写成这样:  to {} */    
              font-size: 200px;      
            }      
        }      
</style>
