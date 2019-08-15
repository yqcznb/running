<template>
  <div class="time">
    <div class="head">
      
        <div>00'00"<p>平均配速</p></div>
        <div>00:00:00<p>用时</p></div>
        <div>0.0<p>热量（千卡）</p></div>
        <div class="gl">0.00<span>公里</span></div>
    </div>
    <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >  
    </el-amap>
      <button @mouseenter="mouseEnter" v-if="show">长按结束</button>
    <div class="toolbar">
        <p v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
        </p>
        <p v-else>正在定位</p>
    </div>
  </div>
</template>

<script>
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
        {
          pName: 'ToolBar',  //工具栏
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'OverView',  //鹰眼
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'MapType',  //地图类型
          defaultType: 0,
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        }
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
   mouseEnter(){
       setTimeout(()=>{
         
      this
      .show = false;
   }, 3000);
    }
   
  },
}
</script>

<style scoped>
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
  justify-content:space-around;
  color: black;
  flex-wrap:wrap-reverse;
  font-size: 20px;
}
.head>div span,p{
  font-size: 13px;
  color:#aaa;
}
.head>div{
  font-weight:bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.gl{
  font-size:33px;
}
button{
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
button:hover{
  background:#fff;
  color:#007aff;
}
button:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #007aff;
  transition:400ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,button:hover:after{
  width:100%;
  transition:3000ms ease all;
}
</style>
