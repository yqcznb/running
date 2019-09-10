<template>
    <div id="confirm" :backgroud="backimg">
        <div id="back_bar"> 
            <router-link to="/footer/my" >
                <i class="iconfont iconfanhui-copy">返回</i> 
            </router-link>
            <span class="title">身份认证</span>
            <button class="modify_btn" @click="c_disabled">修改信息</button>
        </div>
        <div class="confirm_box">
            <mt-navbar v-model="modify_id">
                <mt-tab-item id="0">我是学生</mt-tab-item>
                <mt-tab-item id="1">我是老师</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->
            <mt-tab-container v-model="modify_id">
                <mt-tab-container-item id="0">
                    <div class="msg_box">
                        <span class="modify_msg">
                            <label for="school_name_stu" class="msg_left">学校</label><input type="text" v-model="xsxx" id="school_name_stu" :disabled="stu_disabled"> <label for="school_name_stu"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="department_stu" class="msg_left">院系</label><input type="text" v-model="xsxy" id="department_stu" :disabled="stu_disabled"> <label for="department_stu"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="profes_stu" class="msg_left">专业</label><input type="text" id="profes_stu" v-model="xszy" :disabled="stu_disabled"> <label for="profes_stu"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="stuname_stu" class="msg_left">姓名</label><input type="text" v-model="xsxm" id="stuname_stu" :disabled="stu_disabled"> <label for="stuname_stu"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="stunum_stu" class="msg_left">学号</label><input type="text" v-model="xsxh" id="stunum_stu" :disabled="stu_disabled"> <label for="stunum_stu"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="stusex_stu" class="msg_left">性别</label><input type="text" v-model="xsxb" id="stusex_stu" :disabled="stu_disabled"> <label for="stusex_stu"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="entryDate_stu" class="msg_left" @click="selectYear">入学日期</label><input type="text" readonly v-model="year" id="entryDate_stu" :disabled="stu_disabled" @click="selectYear">
                            <label for="entryDate_stu" @click="selectYear"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span>
                    </div>
                    <mt-button type="primary" @click="stu_modify" v-show="stu_sfm_btn" :disabled="stu_disabled">{{if_stu_modify}}</mt-button>
                </mt-tab-container-item>
                <mt-tab-container-item id="1">
                    <div class="msg_box">
                        <span class="modify_msg">
                            <label for="school_name_tea" class="msg_left">学校</label><input type="text" v-model="lsxx" id="school_name_tea" :disabled="tea_disabled"> <label for="school_name_tea"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="teaname_tea" class="msg_left">姓名</label><input type="text" v-model="lsxm" id="teaname_tea" :disabled="tea_disabled"> <label for="teaname_tea"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="teanum_tea" class="msg_left">工号</label><input type="text" v-model="lsgh" id="teanum_tea" :disabled="tea_disabled"> <label for="teanum_tea"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span> <hr>
                        <span class="modify_msg">
                            <label for="teasex_tea" class="msg_left">性别</label><input type="text" v-model="lsxb" id="teasex_tea" :disabled="tea_disabled"> <label for="teasex_tea"><i class="iconfont iconfanhui iconfont-right"></i></label>
                        </span>
                    </div>
                    <mt-button type="primary" @click="tea_modify" v-show="tea_sfm_btn" :disabled="tea_disabled">{{if_tea_modify}}</mt-button>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
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
import axios from 'axios'
import { MessageBox, Button, DatetimePicker} from 'mint-ui'
export default {
    name: 'confirm',
    data() {
        return {
            backimg: '',
            modify_id: '0',
            yhid:localStorage.getItem("yhid"),
            // 学生认证
            if_stu_modify: '未认证',
            stu_sfm_btn: true,
            stu_disabled: true,
            xsxx:"",
            xsxy:"",
            xszy:"",
            xsxm:"",
            xsxh:"",
            xsxb:"",
            year: ' ',
            num:1,
            dateValue: '',
            // 老师认证
            if_tea_modify: '未认证',
            tea_sfm_btn: true,
            tea_disabled: true,
            lsxx: '',
            lsxm: '',
            lsgh: '',
            lsxb: '',
        }
    },
    created(){
        this.modify_id = localStorage.getItem("yhsf");
        // 学生认证信息查询
        if(localStorage.getItem("yhsf") == 0) {
            axios.get('http://no37.store:8080/AK/SelectXsID',{
                params: {
                    yhid:this.yhid,
                }
            }).then(response=>{
                console.log(response);
                if(response.data.yhxx==null||response.data.yhxh==null||response.data.yhxm==null||response.data.yhxb==null||response.data.yhzy==null) {
                    this.if_stu_modify = "未认证";
                    this.stu_disabled = false;
                    this.tea_disabled = false;
                }
                else if(response.data.yhxx!=""||response.data.yhxx!=null||response.data.yhxx!=undefined){
                    this.stu_disabled = true,
                    this.xsxx = response.data.yhxx,
                    this.xszy = response.data.yhzy,
                    this.xsxy = response.data.yhxy,
                    this.year = response.data.rxnf,
                    this.xsxm = response.data.yhxm,
                    this.xsxh = response.data.yhxh,
                    this.xsxb = response.data.yhxb
                    this.if_stu_modify = "已认证";
                }
                else {
                    this.if_stu_modify = "未认证";
                }
            })      //获取失败
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            })
        }
        // 教师认证信息查询
        else if(localStorage.getItem("yhsf") == 1) {
            axios.get('http://no37.store:8080/AK/SelectJsID',{
                params: {
                    yhid:this.yhid,
                }
            }).then(response=>{
                if(response.data.yhxx!=""||response.data.yhxx!=null||response.data.yhxx!=undefined){
                    this.tea_disabled = true,
                    this.lsxm = response.data.jsmz,
                    this.lsxx = response.data.jsxx,
                    this.lsgh = response.data.jsgh,
                    this.lsxb = response.data.jsxb,
                    this.if_tea_modify = "已认证";
                }
            })      //获取失败
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            })
        }
    },
    methods:
    {
        // 学生认证
        stu_modify(){
            if(localStorage.getItem("yhsf") == 0 || localStorage.getItem("yhsf") == '' || localStorage.getItem("yhsf") == null || localStorage.getItem("yhsf") == undefined) {
                axios.get('http://no37.store:8080/AK/xsID',{
                    params: {
                        yhid:this.yhid,  
                        yhxh:this.xsxh,
                        yhxx:this.xsxx,
                        yhxy:this.xsxy,
                        yhxm:this.xsxm,
                        yhxb:this.xsxb,
                        rxnf:this.year,
                        yhzy:this.xszy      
                    }
                }).then(response=>{
                    if(response.data==1){
                        MessageBox.alert('认证成功', '提示');
                        this.stu_disabled = true;
                        this.if_stu_modify = "已认证";
                    }
                })      //获取失败
                .catch(error=>{
                    console.log(error);
                    MessageBox.alert('认证失败，请重新认证', '提示');
                })
            }
            else if(localStorage.getItem("yhsf") == 1) {
                MessageBox.alert('您已认证教师身份，无法参与学生认证。', '提示');
            }
            else {
                MessageBox.alert('认证失败，请重新认证', '提示');
            }
        },
        // 老师认证
        tea_modify(){
            if(localStorage.getItem("yhsf") == 1 || localStorage.getItem("yhsf") == '' || localStorage.getItem("yhsf") == null || localStorage.getItem("yhsf") == undefined) {
                axios.get('http://no37.store:8080/AK/teacherID',{
                    params: {
                        jsid:this.yhid,
                        jsmz:this.lsxm,
                        jsxx:this.lsxx,
                        jsgh:this.lsgh,
                        jsxb:this.lsxb,
                    }
                }).then(response=>{
                    console.log(response);
                    if(response.data.jg==1){
                        MessageBox.alert('认证成功', '提示');
                        this.tea_disabled = true;
                        this.if_tea_modify = "已认证";
                    }
                })      //获取失败
                .catch(error=>{
                    console.log(error);
                    MessageBox.alert('认证失败，请重新认证', '提示');
                })
            }
            else if(localStorage.getItem("yhsf") == 0) {
                MessageBox.alert('您已认证学生身份，无法参与教师认证。', '提示');
            }
            else {
                MessageBox.alert('认证失败，请重新认证', '提示');
            }
        },
        // routerRefresh() {
        //     window.location.reload();
        // },
        c_disabled() {
            if(this.modify_id == 0 && this.num == 1) {
                if(this.xsxx!=""||this.xsxx!=null||this.xsxx!=undefined) {
                    MessageBox.confirm('', {
                        message: '您已认证，只有1次修改认证的机会，为避免影响成绩，请填写正确信息后重新提交！', 
                        title: '提示',
                        confirmButtonText: '确认修改', 
                        cancelButtonText: '取消' })
                    .then(action => {
                        if (action == 'confirm') {
                            //确认的回调
                            this.stu_disabled =false;
                            this.num=0;
                            this.if_stu_modify = "保存";
                        }
                    })
                    .catch(err => { 
                        if (err == 'cancel') {
                            //取消的回调
                        } 
                    });
                }
                else{
                    alert("您还未进行认证，请先认证！")
                }
            }
            else if(this.modify_id == 1 && this.num == 1) {
                if(this.lsxx!=""||this.lsxx!=null||this.lsxx!=undefined) {
                    MessageBox.confirm('', {
                        message: '您已认证，只有1次修改认证的机会，为避免影响成绩，请填写正确信息后重新提交！', 
                        title: '提示',
                        confirmButtonText: '确认修改', 
                        cancelButtonText: '取消' })
                    .then(action => {
                        if (action == 'confirm') {
                            //确认的回调
                            this.tea_disabled =false;
                            this.num=0;
                            this.if_tea_modify = "保存";
                        }
                   })
                    .catch(err => { 
                        if (err == 'cancel') {
                            //取消的回调
                        } 
                    });
                }
                else{
                    alert("您还未进行认证，请先认证！")
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
        background: linear-gradient(top,#bed3df,#fcefd5);
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
    .confirm_box {
        width: 100%;

    }
    .mint-navbar{
        width: 93%;
        /* max-width: 550px; */
        margin: 0 auto;
        margin-bottom: 2%;
        border-radius: 0 0 7px 7px;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .mint-tab-item {
        color: black;
        font-size: 15px !important;
    }
    .mint-navbar .mint-tab-item.is-selected {
        color: #ca884b;
        border-color: #ca884b;
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

