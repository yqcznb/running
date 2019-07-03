<template>
  <div class="index">
    <ul class="heard">
        <li class="xiaoqu">{{xiaoqu}}</li>
        <li class="tongzhi"><i  class="iconfont icongonggao"></i>{{tongzhi}}</li>
    </ul>
    <div class="caochang">
        <div class="xinxi">
            <p>当前已跑</p>
            <p>22</p>
            <p>晨跑</p>
            <p>16次</p>
            <p>夜跑</p>
            <p>6次</p>
            <p>学期目标</p>
            <p>56次</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return{
        xiaoqu:'青岛工学院校区',
        tongzhi:'官方通知：XXXXXXXX'
    }
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
  background-color: aqua;
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
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
