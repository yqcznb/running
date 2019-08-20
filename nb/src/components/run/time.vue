<template>
  <div class="time">
    <div class="head">
     <div class="top">
          <div class="gl">{{miles}}<span>公里</span></div><br>
      </div>
      <div class="under">
           <div class="one">{{speed}}<p>平均配速</p></div>
           <div>{{str}}<p>用时</p></div>
           <div>{{ calories}}<p>热量（千卡）</p></div>
      </div>
    </div>
    <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >  
      <el-amap-bezier-curve v-for="line in lines" :key="line" :path="line.path" :stroke-color="line.strokeColor" :stroke-style="line.strokeStyle" :events="line.events" :stroke-opacity="line.strokeOpacity"></el-amap-bezier-curve>
   
    </el-amap>
      <button class="js"  @mouseenter="mouseEnter" v-if="show">长按结束</button>
      <mt-button class="left"  type="primary"  v-if="left" @click="con">继续</mt-button>
      <mt-button class="right"  type="danger"  v-if="right" @click="end">结束</mt-button>
    <div class="toolbar">
        <p v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
        </p>
        <p v-else>正在定位</p>
    </div>
  </div>
</template>

<script>
import { MessageBox, Button} from 'mint-ui'
export default {
  name: 'time',
   data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      zoom: 20,
      lng: 0,
      lat: 0,
      loaded: false,
      visible: false,
      show:true,
      left:false,
      right:false,
       distance: 0,  // 表示运动的累计距离
        miles: 0.0,    // 表示运动的累计距离，单位是公里用于界面显示
        // path: [],    // 运动坐标数据
        speed: "00'00\"",    // 配速 
        calories: 0.0,  // 运动的消耗，单位千卡
        h:0,//定义时，分，秒，毫秒并初始化为0；
        m:0,
        s:0,
        ms:0,
        time:0, //时间定时器
        lux:0,//路线定时器
        ll:0,//定位定时器
        jl:0,//距离定时器
        str:'00:00:00',
        times:'', //统计共多少秒时间
         lines: [
            {
              path: [        
              
              ],
              strokeDasharray: [10, 10],
              strokeColor: "#FF33FF", //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 3, //线宽
              strokeStyle: "solid", //线样式
              events: {
                click: () => {
                  alert('000');
                }
              }
            }
          ],
      plugin: [   //一些工具插件
        {
          pName: 'Geolocation',   //定位
          events: {
            init(o) {
              // o 是高德地图定位插件实例
               this.ll=setInterval(function(){
                 o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.lines[0].path.push([self.lng,self.lat]);
                }
              })
               },2000);
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
   created: function () {
     this.time=setInterval(this.timer,50);
     this.lux=setInterval(this.luxian,3000);
     this.jl=setInterval(()=>{
       var aa =  this.lines[0].path.length;
       if(aa>=2){
         this.distance = this.juli( this.lines[0].path[aa-1][0], this.lines[0].path[aa-1][1], this.lines[0].path[aa-2][0], this.lines[0].path[aa-2][1]);
         this.miles = this.miles+this.distance;
         if(this.miles!=0){
            var ss = (1/this.miles)*this.times;
            this.speed =this.toDub(parseInt(ss/60))+"'"+this.toDub(parseInt(ss%60))+"\"";
            this.calories = parseFloat(60*(this.times/3600)*8/this.miles*this.times/3600).toFixed(2);
         }
       }
     },3000);
  },
  methods: {
    //把经纬度传到父组件
    sendlnglat (){ 
      this.$emit('register', this.lng, this.lat)
    },
   mouseEnter(){
       setTimeout(()=>{
      this.show = false;
      this.left = true;
      this.right = true;
      clearInterval(this.time);
      // clearInterval(this.lux);
   }, 3000);
    },
    con(){
      this.show = true;
      this.left = false;
      this.right = false;
      this.time=setInterval(this.timer,50);
      //this.lux=setInterval(this.luxian,3000);
    },
    end(){
      MessageBox.confirm('', { 
         message: '当前活动距离过短，将不会记录成绩', 
         title: '提示', 
         confirmButtonText: '结束', 
         cancelButtonText: '取消' 
         }).then(action => { 
         if (action == 'confirm') {     //确认的回调
            this.$router.push({
                    path: '/footer/index'
                });
            clearInterval(this.time);
            // this.h=0;
            // this.m=0;
            // this.ms=0;
            // this.s=0;
            // this.str="00:00:00";
            // this.path = " ";
         }
         }).catch(err => { 
         if (err == 'cancel') {     //取消的回调
        
         } 
         });
    },
      timer(){                //定义计时函数
        this.ms=this.ms+50;        //毫秒
        if(this.ms>=1000){
          this.ms=0;
          this.s=this.s+1;        //秒
        }
        if(this.s>=60){
          this.s=0;
          this.m=this.m+1;       //分钟
        }
        if(this.m>=60){
          this.m=0;
          this.h=this.h+1;        //小时
        }
        this.str =this.toDub(this.h)+":"+this.toDub(this.m)+":"+this.toDub(this.s);
        //统计共看了多少秒
        this.times=this.s + this.m*60 + this.h*3600 ;
      },
      toDub(n){  //补0操作
        if(n<10){
          return "0"+n;
        }
        else {
          return ""+n;
        }
      },
      // luxian(){
      //   this.path.push([this.lng,this.lat,this.lng,this.lat]);
        
      // },
      juli(lng1,lat1,lng2,lat2){
          var radLat1 = lat1*Math.PI / 180.0;
          var radLat2 = lat2*Math.PI / 180.0;
          var a = radLat1 - radLat2;
          var  b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
          var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
          Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
          s = s *6378.137 ;// EARTH_RADIUS;
          s = Math.round(s * 10000) / 10000;
          return s;//return的距离单位为km
      }
    }
}
</script>

<style scoped>
.left{
  position:absolute;
  top: 80%;
  left: 3%;
  z-index: 100;
  font-size:1.6em;
  padding:0 2em;
}
.right{
  position:absolute;
  top: 80%;
  right: 3%;
  z-index: 100;
  font-size:1.6em;
  padding:0 2em;
}
.time {
  color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
 
}
.head{
  background-color: #fff;
  position: absolute;
  z-index: 100;
  top: 5%;
  left: 50%;
  width: 260px;
  height: 150px;
  margin-left: -130px;
  border-radius: 20%;
  display:flex;
  color: black;
  flex-direction:column;
  font-size: 20px;
  opacity:0.8;
}
.head>div span,p{
  font-size: 13px;
  color:#aaa;
}
.head .under div{
  font-weight:bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top{
  padding-top: 30px;
}
.under{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}
.gl{
  font-size:33px;
  font-weight: bold;
}
.js{
  background:#007aff;
  color:#fff;
  border:none;
  height:60px;
  font-size:1.6em;
  padding:0 2em;
  cursor:pointer;
  transition:300ms ease all;
  outline:none;
  position: absolute;
  z-index: 100;
   top: 80%;
  left: 50%;
  width: 260px;
  margin-left: -130px;
}
.js:hover{
  background:#fff;
  color:#007aff;
}
.js:before,.js:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #007aff;
  transition:400ms ease all;
}
.js:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.js:hover:before,.js:hover:after{
  width:100%;
  transition:3000ms ease all;
}
</style>
