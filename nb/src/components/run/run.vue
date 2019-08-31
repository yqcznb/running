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
  methods: {
    //把经纬度传到父组件
    sendlnglat (){ 
      this.$emit('register', this.lng, this.lat)
    },
    yy(){
       MessageBox.confirm('', { 
         message: '当前时间不是学校规定锻炼时段，你可以自由跑，自由跑不会关联成绩', 
         title: '提示', 
         confirmButtonText: '自由跑', 
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
