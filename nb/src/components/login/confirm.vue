<template>
    <div id="confirm" :backgroud="backimg">
        <div id="back_bar"> 
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy">返回</i> 
            </router-link>
            <span class="title">身份认证</span>
            <button class="modify_btn" @click="c_disabled">修改信息</button>
        </div>
        <div class="confirm_box">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">我是老师</mt-tab-item>
                <mt-tab-item id="2">我是学生</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    1
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    2
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="msg_box">
            <span class="modify_msg">
                <label for="school_name" class="msg_left">学校</label><input type="text" v-model="yhxx" id="school_name" :disabled="disabled"> <label for="school_name"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="department" class="msg_left">院系</label><input type="text" v-model="yhxy" id="department" :disabled="disabled"> <label for="department"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="profes" class="msg_left">专业</label><input type="text" id="profes" v-model="yhzy" :disabled="disabled"> <label for="profes"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="stuname" class="msg_left">姓名</label><input type="text" v-model="yhxm" id="stuname" :disabled="disabled"> <label for="stuname"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="stunum" class="msg_left">学号</label><input type="text" v-model="yhxh" id="stunum" :disabled="disabled"> <label for="stunum"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="stusex" class="msg_left">性别</label><input type="text" v-model="yhxb" id="stusex" :disabled="disabled"> <label for="stusex"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span> <hr>
            <span class="modify_msg">
                <label for="entryDate" class="msg_left" @click="selectYear">入学日期</label><input type="text" readonly v-model="year" id="entryDate" :disabled="disabled" @click="selectYear">
                <label for="entryDate" @click="selectYear"><i class="iconfont iconfanhui iconfont-right"></i></label>
            </span>
        </div>
        <mt-button type="primary" @click="renzhen" :disabled="disabled">{{if_modify}}</mt-button>
        <mt-datetime-picker 
            v-model="dateValue" 
            type="date" 
            ref="datePicker" 
            year-format="{value} 年" 
            month-format="{value} 月" 
            date-format="{value} 日" 
            :endDate="new Date()" 
            @confirm="handleConfirm">
        </mt-datetime-picker>
    </div>
</template>
<script>
import { DatetimePicker } from 'mint-ui';
import axios from 'axios'
import { MessageBox, Button} from 'mint-ui'
export default {
    name: 'confirm',
    data() {
        return {
            backimg: '',
            if_modify: '未认证',
            selected: '1',
            disabled: false,
            yhid:localStorage.getItem("yhid"),
            yhxx:"",
            yhzy:"",
            yhxy:"",
            rxnf:"",
            yhxm:"",
            yhxh:"",
            yhxb:"",
            num:1,
            year: '',
            // month: '',
            // date: '',
            dateValue: '',
        }
    },
    created(){
        axios.get('http://no37.store:8080/AK/SelectXsID',{
            params: {
                yhid:this.yhid,
            }
        }).then(response=>{
            if(response.data.yhxx!=""||response.data.yhxx!=null||response.data.yhxx!=undefined){
                this.disabled = true,
                this.yhxx = response.data.yhxx,
                this.yhzy = response.data.yhzy,
                this.yhxy = response.data.yhxy,
                this.year = response.data.rxnf,
                this.yhxm = response.data.yhxm,
                this.yhxh = response.data.yhxh,
                this.yhxb = response.data.yhxb
                this.if_modify = "已认证";
            }
        
        })      //获取失败
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
    },
    methods:
    {
        renzhen(){
            axios.get('http://no37.store:8080/AK/xsID',{
                params: {
                    yhid:this.yhid,  
                    yhxh:this.yhxh,
                    yhxx:this.yhxx,
                    yhxy:this.yhxy,
                    yhxm:this.yhxm,
                    yhxb:this.yhxb,
                    rxnf:this.year,
                    yhzy:this.yhzy      
                }
            }).then(response=>{
                if(response.data==1){
                    MessageBox.alert('认证成功', '提示');
                    this.disabled = true;
                    this.if_modify = "已认证";
                }
            })      //获取失败
            .catch(error=>{
                console.log(error);
                MessageBox.alert('认证失败，请重新认证', '提示');
            })
        },
        routerRefresh() {
            window.location.reload();
        },
        c_disabled() {
            if(this.num == 1){
                if(this.yhxx!=""||this.yhxx!=null||this.yhxx!=undefined) {
                    MessageBox.confirm('', {
                        message: '您已认证，只有1次修改认证的机会，为避免影响成绩，请填写正确信息后重新提交！', 
                        title: '提示',
                        confirmButtonText: '确认修改', 
                        cancelButtonText: '取消' })
                    .then(action => {
                        if (action == 'confirm') {
                            //确认的回调
                            this.disabled =false;
                            this.num=0;
                            this.if_modify = "保存";
                        }
                       })
                    .catch(err => { 
                        if (err == 'cancel') {
                            //取消的回调
                        } 
                    });
                }
                else{
                    alert("您还为进行认证，请先认证！")
                }
            }
            else{
                alert("抱歉本学期认证机会已经用完！")
            }
        },
        selectYear () {
            if(!this.disabled) {
                this.$refs.datePicker.open();
            }
        },
        handleConfirm (value) {
            this.year = value.getFullYear();
        },
    },
}
</script>
<style scoped>
    #confirm {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    a {
        text-decoration: none;
        color: #dec674;
        z-index: 1;
    }
    ul {
        list-style: none;
        float: left;
    }
    #back_bar {
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        display: flex;
        justify-content: space-between;
        z-index: 3;
    }
    .title {
        color: #dec674;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 0;
    }
    .modify_btn {
        border: 0;
        background-color: transparent;
        color: #dec674;
        font-size: 16px;
        display: inline-flex;
        justify-content: flex-end;
    }
    .msg_box {
        /* border: 1px solid red; */
        border-radius: 7px;
        width: 93%;
        margin: 0 auto;
        margin-bottom: 2%;
        background-color: rgba(255, 255, 255, 0.6);
    }
    .modify_msg {
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    label {
        display: inline-block;
        /* border: 1px solid red; */
    }
    .msg_left {
        font-size: 18px;
        margin-left: 0;
        width: 20%;
        min-width: 90px;
    }
    input {
        width: 60%;
        margin-top: 1%;
        margin-bottom: 1%;
        background-color: transparent;
        border: 0;
    }
    hr {
        width: 85%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
        color: lightgray;
    }
    .iconfont-right {
        position: relative;
        margin-right: 10px;
        font-size: 16px;
        color: #999999;
    }
</style>

