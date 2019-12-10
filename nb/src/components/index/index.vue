<template>
  <div class="index">
    <ul class="heard">

        <router-link to="/confirm" v-if="show" @click.native="routerRefresh">
               <li class="xiaoqu">{{xiaoqu}}</li>

        </router-link>
         <li class="xiaoqu" v-if="ow" >{{xiaoqu}}</li>
        <li class="tongzhi"><i  class="iconfont icongonggao"></i>{{ggnr}}</li>
        <li class="tong" @click="pmd" v-if="tt"><i  class="iconfont icongonggao"></i>{{msgg}}</li>
    </ul>
    <router-view></router-view>
    <div class="caochang">
        <div>
            <img src="../../assets/img/flag.png" alt="" class="tea_flag" @click="aim_show">
            <mt-popup v-model="popupAim" position="bottom" @touchmove.native.stop.prevent>
                <div class="aim_box" :style="aim_style">
                    <span id="aim_area">
                        <div class="control_bar">
                            <span><button @click="cancelUAim" class="cancelUAim">{{ cancel_text }}</button></span> <span class="caim_title">学期目标</span> <span> <button type="button" @click="confirmUAim"  class="mui-btn mui-btn-success confirmUAim"  :disabled="caim_disabled"  v-show="operate_btn">完成</button>
                            </span>
                        </div>
                        <span class="input_area ">
                            <label for="run_times">晨跑开放时间</label>
                            <input type="text"  v-model="run_morn_time1" placeholder="晨跑开始时间" class="run_time" @click="selecTime1"  :disabled="caim_disabled" editable="false">
                            <input type="text"  v-model="run_morn_time2" placeholder="晨跑结束时间" class="run_time" @click="selecTime2"  :disabled="caim_disabled" editable="false">
                        </span>
                        <span class="input_area ">
                            <label for="run_times">夜跑开放时间</label>
                            <input type="text" v-model="run_even_time1" placeholder="夜跑开始时间" class="run_time" @click="selecTime3"  :disabled="caim_disabled" editable="false">
                            <input type="text" v-model="run_even_time2" placeholder="夜跑结束时间" class="run_time" @click="selecTime4"  :disabled="caim_disabled" editable="false">
                        </span>
                        <span class="input_area ">
                            <label for="run_times">晨跑总次数</label>
                            <input type="text"  v-model="run_morn_times" placeholder="请设定晨跑次数" class="run_times"  :disabled="caim_disabled" >
                        </span>
                        <span class="input_area ">
                            <label for="run_times">夜跑总次数</label>
                            <input type="text"  v-model="run_even_times" placeholder="请设定夜跑次数" class="run_times"  :disabled="caim_disabled" >
                        </span>
                        <span class="input_area ">
                            <label for="run_times">跑步总次数</label>
                            <input type="text" v-model="run_all_times" placeholder="请设定跑步总次数" class="run_times"  :disabled="caim_disabled" >
                        </span>
                        <mt-button type="primary" @click="caim_disabled = !caim_disabled"  :disabled="!caim_disabled" v-show="operate_btn" >修改</mt-button>
                    </span>
                </div>
            </mt-popup>
            <!-- 晨跑开始时间 -->
            <mt-datetime-picker 
                v-model="timeValue1"
                type="time"
                ref="timePicker1"
                hour-format="{value} 时"
                minute-format="{value} 分"
                @confirm="handleConfirm1" @touchmove.native.stop.prevent>
            </mt-datetime-picker>
            <!-- 晨跑结束时间 -->
            <mt-datetime-picker 
                v-model="timeValue2"
                type="time"
                ref="timePicker2"
                hour-format="{value} 时"
                minute-format="{value} 分"
                @confirm="handleConfirm2" @touchmove.native.stop.prevent>
            </mt-datetime-picker>
            <!-- 夜跑开始时间 -->
            <mt-datetime-picker 
                v-model="timeValue3"
                type="time"
                ref="timePicker3"
                hour-format="{value} 时"
                minute-format="{value} 分"
                @confirm="handleConfirm3" @touchmove.native.stop.prevent>
            </mt-datetime-picker>
            <!-- 夜跑结束时间 -->
            <mt-datetime-picker 
                v-model="timeValue4"
                type="time"
                ref="timePicker4"
                hour-format="{value} 时"
                minute-format="{value} 分"
                @confirm="handleConfirm4" @touchmove.native.stop.prevent>
            </mt-datetime-picker>
        </div>
        <div class="xinxi">
            <p>当前已跑</p>
            <p><em>{{dqyp}}</em>次</p>
            <p>晨跑</p>
            <p><em>{{cp}}</em>次</p>
            <p>夜跑</p>
            <p><em>{{yp}}</em>次</p>
            <p>学期目标</p>
            <p><em>{{xqmb}}</em>次</p>
            <div>
              <router-link to="/footer/index/run" append>
              <i class="iconfont iconpaobu"></i><br>
				      <span>开跑</span>
              </router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { DatetimePicker, MessageBox } from 'mint-ui';
import axios from 'axios'
export default {
    name: 'index',
    data(){
        return{
            xiaoqu:'未认证(点击认证)',
            id:"",
            cp:"",
            tt:false,
            yp:"",
            xqmb:"",
            ggnr:"",
            dqyp:"",
            cw:"",
            show:true,
            ow:false,
            popupAim: false,
            operate_btn: false,
            aim_style: '',
            cancel_text: '取消',
            caim_disabled: true,
            run_all_times: '',
            run_morn_times: '',
            run_morn_time1: '',
            run_morn_time2: '',
            run_even_times: '',
            run_even_time1: '',
            run_even_time2: '',
            timeValue1: '',
            timeValue2: '',
            timeValue3: '',
            timeValue4: '',
            screenHeight: window.innerHeight,
            cpsj:"",
            ypsj:"",
            xqmb:"",
            cpcs:"",
            ypcs:"",
            msg:"",
            msgg:"",
            intervalId:"",
        }
    },
    watch: {
        screenHeight(val) {
            let unWidth = document.documentElement.clientWidth;
            this.uhStyle = "width:" + unWidth + "px;height:" + val + "px;";
            this.unStyle = "width:" + unWidth + "px;height:" + val + "px;";
            this.aim_style = "width:" + unWidth + "px;height:" + val + "px;";
        }
    },
    created(){
        if(localStorage.getItem("yhsf") == 1) {
            this.operate_btn = true;
        }
        else {
            this.operate_btn = false;
            this.cancel_text = '完成';
        }
    //     // //  axios.get('http://no37.store:8080/AK/countPeople',{
    //     // //     params: {
    //     // //         yhid: localStorage.getItem("yhid"),     
    //     // //     }
    //     // // })
    //     // .then(response=>{
    //     //     // console.log(response);
    //     //     this.msg=response.data.sum;
    //     //     this.msgg = "今天同校区同学已跑人数为"+this.msg+"人!!!       "
           
            
    //     // })      //获取失败
    //     // .catch(error=>{
    //     //     console.log(error);
    //     //     alert("请先认证身份信息，以免影响跑步成绩！");
    //     // })
    //     // //晨跑夜跑时间返回
    //     // axios.get('http://no37.store:8080/AK/backingOutCYP',{
    //     //     params: {
    //     //         yhid: localStorage.getItem("yhid"),     
    //     //     }
    //     // })
    //     // .then(response=>{
    //     //     // console.log(response);
    //     //     this.cpsj=response.data.cpsj;
    //     //     this.ypsj=response.data.ypsj;
    //     //     this.run_all_times=response.data.xqmb;
    //     //     this.run_morn_times=response.data.cpcs;
    //     //     this.run_even_times=response.data.ypcs;
    //     //     this.run_morn_time1=response.data.cpsj.substring(0,5);
    //     //     this.run_morn_time2=response.data.cpsj.substring(6,11);
    //     //     this.run_even_time1=response.data.ypsj.substring(0,5);
    //     //     this.run_even_time2=response.data.ypsj.substring(6,11);
            
    //     // })      //获取失败
    //     // .catch(error=>{
    //     //     console.log(error);
    //     //     alert("请先认证身份信息，以免影响跑步成绩！");
    //     // })
    //     // //宠物
    //     //  axios.get('http://no37.store:8080/AK/ShowPet',{
    //     //     params: {
    //     //         yhid: localStorage.getItem("yhid"),     
    //     //     }
    //     // })
    //     // .then(response=>{
    //     //     // console.log(response);
    //     //     this.cw=response.data.cw;
    //     //     if(this.cw==1){
    //     //          localStorage.setItem("cw",1);    
    //     //     }
           
    //     // })      //获取失败
    //     // .catch(error=>{
    //     //     console.log(error);
    //     //     alert('网络错误，不能访问6');
    //     // })
    //     // // 主页
    //     // axios.get('http://no37.store:8080/AK/zhuye1',{
    //     //     params: {
    //     //         yhid: localStorage.getItem("yhid"),     
    //     //     }
    //     // })
    //     // .then(response=>{
    //     //     // console.log(response);
    //     //     this.dqyp=response.data.dqyp;
    //     //     this.cp=response.data.cp;
    //     //     this.yp=response.data.yp;
    //     //     this.xqmb=response.data.xqmb;
    //     // })      //获取失败
    //     // .catch(error=>{
    //     //     console.log(error);
    //     //     alert('网络错误，不能访问5');
    //     // })
    //     // // 公告
    //     // axios.get('http://no37.store:8080/AK/gonggao1',{
    //     //     params: {
    //     //         ggid:1,     
    //     //     }
    //     // })
    //     // .then(response=>{
    //     //     this.ggnr=response.data.ggnr; 
    //     // })      //获取失败
    //     // .catch(error=>{
    //     //     console.log(error);
    //     //     alert('网络错误，不能访问4');
    //     // })
    //     // // 学生认证信息
    //     // if(localStorage.getItem("yhsf") == 0) {
    //     //     axios.get('http://no37.store:8080/AK/SelectXsID',{
    //     //         params: {
    //     //             yhid:localStorage.getItem("yhid"),     
    //     //         }
    //     //     })
    //     //     .then(response=>{
    //     //         if(response.data.yhxx!=""&&response.data.yhxx!=null&&response.data.yhxx!=undefined){
    //     //             this.xiaoqu = response.data.yhxx;
    //     //             this.show = false;
    //     //             this.ow = true;
    //     //             this.tt = true;
    //     //         }
    //     //     })      //获取失败
    //     //     .catch(error=>{
    //     //         console.log(error);
    //     //         alert('网络错误，不能访问3');
    //     //     })
    //     // }
    //     //老师认证信息
    //     else if(localStorage.getItem('yhsf') == 1) {
    //         axios.get('http://no37.store:8080/AK/SelectJsID',{
    //             params: {
    //                 yhid:localStorage.getItem("yhid"),
    //             }
    //         }).then(response=>{
    //             if(response.data.jsxx!=""||response.data.jsxx!=null||response.data.jsxx!=undefined){
    //                 this.xiaoqu = response.data.jsxx;
    //                 this.show = false;
    //                 this.ow = true;
    //             }
    //         })      //获取失败
    //         .catch(error=>{
    //             console.log(error);
    //             alert('网络错误，不能访问2');
    //         })
    //     }
    //     else {
    //         this.xiaoqu = "未认证(点击认证)";
    //         this.show = true;
    //         this.ow = false;
    //     }
    },
    mounted() {
        // 自适应监听
        window.onresize = () => {
            return(() => {
                window.screenHeight = window.innerHeight;
                this.screenHeight = window.screenHeight;
            })()
        }
          this.pmd();
    },
    methods: {
         routerRefresh() {
            window.location.reload();
        },
        pmd(){
            {
           this.intervalId = setInterval( () => {
          // 获取第一个字符
          var start = this.msgg.substring(0,1);
          // 获取后面字符
          var end = this.msgg.substring(1);
          // 重新拼接的到新的字符串，并赋值给this.msg
          this.msgg = end + start;
        },200)
        }
        },
        // 自适应
        aim_show() {
            this.popupAim = !this.popupAim;
            let uhWidth = document.body.clientWidth;
            let uhHeight = window.innerHeight;
            this.aim_style = "width:" + uhWidth + "px;height:" + uhHeight + "px;";
        },
        cancelUAim() {
            this.popupAim = !this.popupAim;
        },
        confirmUAim() {
            let pbzcs = this.run_all_times;
            let cpzcs = this.run_morn_times;
            let ypzcs = this.run_even_times;
            let cpsj1 = this.run_morn_time1;
            let cpsj2 = this.run_morn_time2;
            let ypsj1 = this.run_even_time1;
            let ypsj2 = this.run_even_time2;
            let cpsj = cpsj1 + "-" + cpsj2;
            let ypsj = ypsj1 + "-" + ypsj2;
            if(cpsj1 > cpsj2 || ypsj1 > ypsj2) {
                this.popupAim = !this.popupAim;
                MessageBox.alert('请输入有效时间段', '提示')
                .then(action => {
                    this.popupAim = !this.popupAim;
                });
            }
            else if(pbzcs == '' || cpzcs == '' || ypzcs == '' || cpsj1 == '' || cpsj2 == '' || ypsj1 == '' || ypsj2 == '') {
                this.popupAim = !this.popupAim;
                MessageBox.alert('请确保学期目标信息完整', '提示')
                .then(action => {
                    this.popupAim = !this.popupAim;
                });
            }
            else if(pbzcs != '' && cpzcs != '' && ypzcs != '' && cpsj1 != '' && cpsj2 != '' && ypsj1 != '' && ypsj2 != '') {
                axios.get('http://no37.store:8080/AK/settingTimes',{
                    params: {
                        yhid: localStorage.getItem("yhid"),
                        xqmb: pbzcs,
                        cpcs: cpzcs,
                        ypcs: ypzcs,
                        cpsj: cpsj,
                        ypsj: ypsj,
                    }
                }).then(response=>{
                    if(response.data.jg == 1) {
                        MessageBox.alert('学期目标设置成功', '提示');
                    }
                })      //获取失败
                .catch(error=>{
                    console.log(error);
                    alert('网络错误，不能访问1');
                })
            }
            
            
        },
        selecTime1 () {
                this.$refs.timePicker1.open();
        },
        selecTime2 () {
                this.$refs.timePicker2.open();
        },
        selecTime3 () {
                this.$refs.timePicker3.open();
        },
        selecTime4 () {
            this.$refs.timePicker4.open();
        },
        handleConfirm1 (value) {
            this.run_morn_time1 = value;
        },
        handleConfirm2 (value) {
            this.run_morn_time2 = value;
        },
        handleConfirm3 (value) {
            this.run_even_time1 = value;
        },
        handleConfirm4 (value) {
            this.run_even_time2 = value;
        },
    },
}
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,#bed3df,#fcefd5);
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
        font-style: italic;
        font-weight: bold
    }
    .index .heard .tongzhi{
        text-align: left;
        background:rgb(208, 210, 211);
        padding: 3px;
    }
    .index .heard .tong{
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
        color:rgb(22, 156, 245);
        font-size: 20px;
        
    }
    .xinxi p em{
        color:rgb(240, 190, 25);
        font-size: 27px;
    }
    .aim_box {
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
        overflow: hidden;
    }
    .tea_flag {
        position: fixed;
        height: 10%;
        bottom: 10%;
        right: 4%;
    }
    .caim_title {
        position: absolute;
        width: 5em;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
    }
    .control_bar {
        width: 100%;
        margin-bottom: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
    }
    .cancelUAim {
        margin: 1ex;
        border: 0;
        float: left;
        background-color: transparent;
    }
    .confirmUAim {
        margin: 1ex;
        border: 0;
        float: right;
    }
    .input_area {
        /* border: 1px solid red; */
        width: 100%;
        height: 7%;
        margin-bottom: 4px;
        padding: 4px;
        background-color: rgba(255, 255, 255, 0.6);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input_area label {
        /* border: 1px solid red; */
        display: inline-block;
        margin: 0 auto;
        text-indent: 1ex;
    }
    .run_times {
        width: 68%;
        height: 6.5ex;
        color: gray;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        margin-bottom: 0;
        /* border-color: transparent; */
        font-size: 14px;
        background-color: transparent;
        text-indent: 3px;
    }
    .run_time {
        width: 34%;
        height: 6.5ex;
        color: gray;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        margin-bottom: 0;
        /* border-color: transparent; */
        font-size: 14px;
        text-indent: 3px;
        background-color: transparent;
    }
</style>
