<template>
  <div class="ttime">
    <div class="head">
     <div class="top">
          <div class="gl">{{miles}}<span>公里</span></div><br>
      </div>
      <div class="under">
           <div class="one">{{speed}}<p>平均配速</p></div>
           <div>{{str}}<p>用时</p></div>
           <div>{{ calories}}<p>热量（千卡）</p></div>
      </div>
     <!-- <div class="ceshi" v-for="line in lines"  :key="line.id" :v-model="lines" :path="line.path">miles:{{miles}}$$distance:{{distance}}^^aa:{{aa}}**当前经纬度：{{lng}},{{lat}}***数组：{{line.path}}</div> -->
    </div>
     <div class="chongwu" v-show="cwgss">
          <div class='bimg'>加成5%</div>
      </div>
    <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >    <el-amap-marker vid="marker" 
          :position="center1" 
          :label="label"
           >
        </el-amap-marker>
           <el-amap-text v-for="(text,index) in texts"
          :text="text.text"
          :key="index"
          :offset="text.offset"
          :position="text.position"
          :events="text.events">
         </el-amap-text>
      <el-amap-bezier-curve v-for="line in lines"  :key="line.id" :v-model="lines" :path="line.path" :stroke-color="line.strokeColor" :stroke-style="line.strokeStyle" :events="line.events" :stroke-opacity="line.strokeOpacity"></el-amap-bezier-curve>  
    </el-amap>
      <button class="jsun"  @click="mouseEnter" v-if="showw">点击暂停</button>
      <button class="buleft"   v-if="left" @click="con">继续</button>
      <button class="buright"  v-if="right" @click="end">结束</button>
    <div @click="jieshu">
      <mt-popup position='bottom' class="times" popup-transition="popup-fade" v-model="visible" style="width:100%;height:100%;background-color: rgb(172, 205, 155, 0.8);">
          <div class="big">
            {{count}}
            <img :src="imgg" style="width:50%" > 
          </div>
      </mt-popup>
    </div>
  </div>
  
</template>

<script>
import { MessageBox, Button} from 'mint-ui'
export default {
  name: 'ttime',
   data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      center1:[121.59996, 31.197646],
      radius:20,
      zoom: 18,
      lng: 0,
      lat: 0,
      loaded: false,
      visible: false,
      showw:true,
      left:false,
      right:false,  
      cwgss:"", 
      jg:"",
      count:"",
      imgg:"",
       distance: 0.0,  // 表示运动的累计距离
        miles: 0.0,    // 表示运动的累计距离，单位是公里用于界面显示
        // path: [],    // 运动坐标数据
        speed: "00'00\"",    // 配速 
        calories: 0.0,  // 运动的消耗，单位千卡
        h:0,//定义时，分，秒，毫秒并初始化为0；
        m:0,
        s:0,
        ms:0,
        ttime:0, //时间定时器
        lux:0,//路线定时器
        ll:0,//定位定时器
        jl:0,//距离定时器
        str:'00:00:00',
        times:'', //统计共多少秒时间
        aa:0,
        sx:0,
        nb:"",
        jifen:0,
        cw:0,
        p:localStorage.getItem("p"),
        yhid:localStorage.getItem("yhid"),
        sfcw:"",
        cwgs:localStorage.getItem("cwgs"),
        label:{
      
        offset:[10,12]
      },
         lines: [
            {
              path: [        
               [120.03112, 36.24194],
              
             
              
              ],
              strokeDasharray: [10, 10],
              strokeColor: "#FF33FF", //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 3, //线宽
              strokeStyle: "solid", //线样式
              events: {
                   
              }
            }
          ],
      plugin: [   //一些工具插件
        {
          pName: 'Geolocation',   //定位
          enableHighAcuracy: true,
          maximumAge: 2000,
          events: {
            init(o) {
             // o 是高德地图定位插件实例
               self.ll=setInterval(function(){
                 o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];         //设置坐标
                  self.loaded = true;                         //load
                  self.$nextTick();  
                  self.nb = self.lines[0].path.length;
                 // console.log("nb:"+self.nb)
                // console.log("path[0]:"+ self.lines[0].path[0])
                   if((self.lines[0].path[self.nb-1]['lng']!=self.lng)||(self.lines[0].path[self.nb-1]['lat']!=self.lat)){
                         self.lines[0].path.push([self.lng, self.lat]);
                   }
                   for(var i=0;i<3;i++){
                     if(self.lng>(self.texts[i].position[0]-0.00016)&&self.lng<(self.texts[i].position[0]+0.00016)&&self.lat> (self.texts[i].position[1]-0.00016)&&self.lat<(self.texts[i].position[1]+0.00016)){
                          self.visible = true;
                          self.texts[i].text=`<img style="width:25px;" src="http://no37.store/bzh.png">`,
                          self.texts[i].position = ["",""]
                           if(self.sfcw == 0){
                             self.count = "得宠物蛋一枚！";
                             self.imgg = require("../../assets/img/dan2.png");
                             self.cw = 1;
                           }
                           else {
                              self.count = "得积分！";
                              self.imgg = require("../../assets/img/jifen.png")
                              let nn =Math.floor((Math.random()*300));
                              self.jifen = nn;
                              self.count = "获得积分"+nn+"!";
                           }
                         }
                        
                     }
                   
                   
                }
              })
               },2000);
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];         //设置坐标
                  self.loaded = true;                         //load
                  self.$nextTick();  
                  self.nb = self.lines[0].path.length;
                    if(self.nb==1){
                     self.lines[0].path.pop([self.lng, self.lat],);
                     self.lines[0].path.push([self.lng, self.lat],);
                     self.center1 = [self.lng, self.lat];  
                     self.nb=2;
                     for(let i=0;i<3;i++){
                        let a = Math.random()%0.003-0.0015;
                        a = a+self.lng
                        a = Math.round(a*100000)/100000; 
                        let b = Math.random()%0.004-0.002;
                        b=b+self.lat
                        b = Math.round(b*100000)/100000; 
                         self.texts[i].position = [a,b]
                     }
                   }
                }
              })
            }
          }
        },
        
       
      ],
       texts: [
        {
          position: [120.02111,36.2409],
          text: `<img style="width:25px;" src="http://no37.store/12.png" class="bz_box"><p>打卡寻宝</p>`,
          offset: [0,0],
          events: {
            click: () => {
              alert('快来看看这里有什么好东西吧！')
            }
          }
        },
        {
          position: [120.02152, 36.24194],
          text: `<img style="width:25px;" src="http://no37.store/12.png"><p>打卡寻宝</p>`,
          offset: [0,0],
          events: {
            click: () => {
              alert('快来看看这里有什么好东西吧！')
            }
          }
        },
        {
          position: [120.02112, 36.24174],
          text: `<img style="width:25px;" src="http://no37.store/12.png"><p>打卡寻宝</p>`,
          offset: [0,0],
          events: {
            click: () => {
              alert('快来看看这里有什么好东西吧！')
            }
          }
        }
      ],
    }
  },
   beforeUpdate:function(){
    
  },
   activated: function() {
    this.getCase()
  },
 
   created: function () {
     if(this.cwgs == 1){
        this.cwgss = true
     }
     this.ttime=setInterval(this.timer,50);
    // this.lux=setInterval(this.luxian,3000);
     this.jl=setInterval(()=>{
      if((this.aa)<this.lines[0].path.length)
      { 
     // console.log("aa:"+this.aa)
    //console.log("path.length:"+this.lines[0].path.length)
        this.aa = this.lines[0].path.length;
        if( this.aa>=2){
         this.distance = this.juli( this.lines[0].path[this.aa-1]['lng'], this.lines[0].path[this.aa-1]['lat'], this.lines[0].path[this.aa-2]['lng'], this.lines[0].path[this.aa-2]['lat']);
         this.miles = parseFloat(this.miles)+ parseFloat(this.distance);
         this.miles = parseFloat(this.miles).toFixed(2);
         if(this.miles!=0){
            var ss = (1/this.miles)*this.times;
            this.speed =this.toDub(parseInt(ss/60))+"'"+this.toDub(parseInt(ss%60))+"\"";
            this.calories = parseFloat(60*(this.times/3600)*8/this.miles*this.times/3600).toFixed(2);
         }
       }
      }
       
     },1000);

   this.axios.get('http://no37.store:8080/AK/ShowPet',{
          params: {
              yhid:this.yhid,
          }
      }).then(response=>{
             
              this.sfcw=response.data.cw; 
             
              
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
    jieshu(){
      this.visible = false;
      console.log("jieshu")
    },
   mouseEnter(){
   
      this.showw = false;
      this.left = true;
      this.right = true;
      clearInterval(this.ttime);
    
   
    },
    con(){
      this.showw = true;
      this.left = false;
      this.right = false;
      this.ttime=setInterval(this.timer,50);
    
    },
    end(){
        if(this.miles<0.1){
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
            clearInterval(this.ttime);
          
         }
         }).catch(err => { 
         if (err == 'cancel') {     //取消的回调
        
         } 
         });
        }else{
         MessageBox.confirm('', { 
         message: '您的运动距离为'+this.miles+'千米是否确定结束运动?', 
         title: '提示', 
         confirmButtonText: '结束', 
         cancelButtonText: '取消' 
         }).then(action => { 
         if (action == 'confirm') {     //确认的回调

      this.axios.get('http://no37.store:8080/AK/AddMove',{
          params: {
              yhid:this.yhid,
              ydjl:this.miles,
              ydsj:this.times,
              ydsd:this.speed,
              p:this.p,
              cw:this.cw,
          }
      }).then(response=>{
         console.log(response.data);
              this.jg=response.data.jg; 
              if(this.jg==1){
                   this.$router.push({
                    path: '/footer/index'
                });
            clearInterval(this.ttime);
              }else{
                alert("数据存储失败")
                 this.$router.push({
                    path: '/footer/index'
                });          
              }})
        .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            });         
                
    this.axios.get('http://no37.store:8080/AK/AddNumber',{
          params: {
              yhid:this.yhid,
              yhjf:this.jifen,
          }
      }).then(response=>{
              console.log(response.data);
              this.jg=response.data; 
              if(this.jg==1){
                  console.log("jifen:"+this.jifen)
              }else{
                alert("数据存储失败")
                 this.$router.push({
                    path: '/footer/index'
                });
              }
            })      //获取失败
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            })  
            




         }
         }).catch(err => { 
         if (err == 'cancel') {     //取消的回调

         } 
         });
        }
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
.times{
  display: flex;
  flex-direction:column;
  justify-content:center;
  color:  rgba(253, 185, 51, 0.89);
  font-weight: bold;
  font-size: 0px;
  animation: am1 1s linear forwards ;
  animation-fill-mode: forwards;
}
@keyframes am1 {      
            0% {  /* 或者写成这样:  from {} */    
                font-size: 0px;  /* 多个属性相当于多组动画一起执行 */  
            }      
            100% {  /* 或者写成这样:  to {} */    
              font-size: 50px;      
            }      
}      
.ttime{
  overflow: hidden;
}
.chongwu{
  margin: 0;
  padding: 0;
  position:absolute;
  top: 25%;
  right: 5%;
  z-index: 100;
  color: #fff;
  width: 70px;
  height: 70px;
  
}
.buleft{
  position:absolute;
  top: 80%;
  left: 3%;
  z-index: 100;
  font-size:1.6em;
  padding:0 2em;
  color: #fff;
  background-color: rgba(253, 185, 51, 0.89)
}
.buright{
  position:absolute;
  top: 80%;
  right: 3%;
  z-index: 100;
  font-size:1.6em;
  padding:0 2em;
  color: #fff;
  background-color: #8d8a8a
}
.ttime {
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
.ceshi{
  background-color: #fff;
  position: absolute;
  z-index: 110;
  top: 130%;
  left: 50%;
  width: 200px;
  height: 150px;
  margin-left: -100px;
  border-radius: 20%;
  display:flex;
  color: black;
  flex-direction:column;
  font-size: 20px;
  opacity:1;
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
.jsun{
  background: rgba(253, 185, 51, 0.89);
  color:#fff;
  border:none;
  height:60px;
  font-size:1.6em;
  padding:0 2em;
  cursor:pointer;
  position: absolute;
  z-index: 100;
  top: 80%;
  left: 50%;
  width: 260px;
  margin-left: -130px;
}
.amap-overlay-text-container {
  background-color: red;
}
.bimg{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        animation: run 0.6s steps(1, start) infinite;
        -webkit-animation:run 0.6s steps(1, start) infinite;
        background: url('../../assets/img/pet/111.png');
        background-position: center center;
        background-size: 100%;
        color: rgb(40, 20, 221)
    }
    @keyframes run{
        0%{
            background-image: url('../../assets/img/pet/m01.png');
            background-repeat: no-repeat;
        }
        30%{
            background-image: url('../../assets/img/pet/m02.png');
            background-repeat: no-repeat;
        }
        60%{
            background-image: url('../../assets/img/pet/m03.png');
            background-repeat: no-repeat;
        }
        100%{
            background-image: url('../../assets/img/pet/m04.png');
            background-repeat: no-repeat;
        }
    }
    @-webkit-keyframes run{
        0%{
            background-image: url('../../assets/img/pet/111.png');
            background-repeat: no-repeat;
        }
        30%{
            background-image: url('../../assets/img/pet/222.png');
            background-repeat: no-repeat;
        }
        60%{
            background-image: url('../../assets/img/pet/33.png');
            background-repeat: no-repeat;
        }
        100%{
            background-image: url('../../assets/img/pet/55.png');
            background-repeat: no-repeat;
        }
    }
</style>
