<template>
  <div class="index">
    <ul class="heard">
        <router-link to="/confirm" v-if="show">
               <li class="xiaoqu">{{xiaoqu}}</li>
        </router-link>
         <li class="xiaoqu" v-if="ow" >{{xiaoqu}}</li>
        <li class="tongzhi"><i  class="iconfont icongonggao"></i>{{ggnr}}</li>
    </ul>
    <router-view></router-view>
    <div class="caochang">
        <div>
            <img src="../../assets/img/flag.png" alt="" v-show="tea_flag" class="tea_flag" @click="aim_show">
            <mt-popup v-model="popupAim" position="bottom">
                <div class="aim_box" :style="aim_style">
                    <span id="aim_area">
                        <div class="control_bar">
                            <span><button @click="cancelUAim" class="cancelUAim">取消</button></span> <span class="caim_title">学期目标设置</span> <span> <button type="button" @click="confirmUAim"  class="mui-btn mui-btn-success confirmUAim"  :disabled="caim_disabled">完成</button>
                            </span>
                        </div>
                        <span class="input_area ">
                            <label for="run_times">跑步总次数</label>
                            <input type="text" :value="run_all_times" placeholder="请设定跑步总次数" class="run_times" >
                        </span>
                        <span class="input_area ">
                            <label for="run_times">晨跑总次数</label>
                            <input type="text"  :value="run_morn_times" placeholder="请设定晨跑次数" class="run_times" >
                        </span>
                        <span class="input_area ">
                            <label for="run_times">晨跑开放时间</label>
                            <input type="text"  :value="run_morn_time1" placeholder="晨跑开始时间" class="run_time" @click="selecTime1">
                            <input type="text"  :value="run_morn_time2" placeholder="晨跑结束时间" class="run_time" @click="selecTime2" >
                        </span>
                        <span class="input_area ">
                            <label for="run_times">夜跑总次数</label>
                            <input type="text"  :value="run_even_times" placeholder="请设定夜跑次数" class="run_times" >
                        </span>
                        <span class="input_area ">
                            <label for="run_times">夜跑开放时间</label>
                            <input type="text" :value="run_even_time1" placeholder="夜跑开始时间" class="run_time" @click="selecTime3" >
                            <input type="text" :value="run_even_time2" placeholder="夜跑结束时间" class="run_time" @click="selecTime4" >
                        </span>
                        <mt-button type="primary" >修改</mt-button>
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
import { DatetimePicker } from 'mint-ui';
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
            dqyp:"",
            cw:"",
            show:true,
            ow:false,
            tea_flag: false,
            popupAim: false,
            aim_style: '',
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
        }
    },
    watch: {
        screenHeight(val) {
            let unWidth = document.documentElement.clientWidth;
            this.uhStyle = "width:" + unWidth + "px;height:" + val + "px;";
            this.unStyle = "width:" + unWidth + "px;height:" + val + "px;";
        }
    },
    created(){
        if(localStorage.getItem("yhsf") == 1) {
            this.tea_flag = true;
        }
        //宠物
         axios.get('http://no37.store:8080/AK/ShowPet',{
            params: {
                yhid: localStorage.getItem("yhid"),     
            }
        })
        .then(response=>{
            // console.log(response);
            this.cw=response.data.cw;
            if(this.cw==1){
                 localStorage.setItem("cw",1);    
            }
           
        })      //获取失败
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
        // 主页
        axios.get('http://no37.store:8080/AK/zhuye1',{
            params: {
                yhid: localStorage.getItem("yhid"),     
            }
        })
        .then(response=>{
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
        // 公告
        axios.get('http://no37.store:8080/AK/gonggao1',{
            params: {
                ggid:1,     
            }
        })
        .then(response=>{
            this.ggnr=response.data.ggnr; 
        })      //获取失败
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
        
        // 学生认证信息
        if(localStorage.getItem("yhsf") == 0) {
            axios.get('http://no37.store:8080/AK/SelectXsID',{
                params: {
                    yhid:localStorage.getItem("yhid"),     
                }
            })
            .then(response=>{
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
        //老师认证信息
        else if(localStorage.getItem('yhsf') == 1) {
            axios.get('http://no37.store:8080/AK/SelectJsID',{
                params: {
                    yhid:localStorage.getItem("yhid"),
                }
            }).then(response=>{
                if(response.data.jsxx!=""||response.data.jsxx!=null||response.data.jsxx!=undefined){
                    this.xiaoqu = response.data.jsxx;
                    this.show = false;
                    this.ow = true;
                }
            })      //获取失败
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            })
        }
        else {
            this.xiaoqu = "未认证(点击认证)";
            this.show = true;
            this.ow = false;
        }
    },
    mounted() {
        window.onresize = () => {
            return(() => {
                window.screenHeight = window.innerHeight;
                this.screenHeight = window.screenHeight;
            })()
        };
    },
    methods: {
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
            this.popupAim = !this.popupAim;
        },
        selecTime1 () {
            // if(!this.disabled) {
                this.$refs.timePicker1.open();
            // }
        },
        selecTime2 () {
            // if(!this.disabled) {
                this.$refs.timePicker2.open();
            // }
        },
        selecTime3 () {
            // if(!this.disabled) {
                this.$refs.timePicker3.open();
            // }
        },
        selecTime4 () {
            // if(!this.disabled) {
                this.$refs.timePicker4.open();
            // }
        },
        handleConfirm1 (value) {
            this.timeValue1 = value;
            this.run_morn_time1 = value;
        },
        handleConfirm2 (value) {
            this.timeValue2 = value;
            this.run_morn_time2 = value;
        },
        handleConfirm3 (value) {
            this.timeValue3 = value;
            this.run_even_time1 = value;
        },
        handleConfirm4 (value) {
            this.timeValue4 = value;
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
        font-style: italic;
        font-weight: bold
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
