<template>
    <div id="idsafe">
        <div id="back_bar">
            <router-link :to='$route.params.backey'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">账号与安全</span>
        </div>
        <div id="number">
            <router-link to="" @click.native="upShow">
                <div id="userid">
                    <span>手机号</span>
                    <span class="phone_right">
                        <span v-text="phoneNum"></span>
                        <i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
            <hr>
            <router-link to="" @click.native="umShow">
                <div id="mail">
                    <span>邮箱号</span>
                    <span class="mail_right">
                        <span v-text="mailNum"></span><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
        </div>
        <div id="password">
            <router-link to="" @click.native="ucShow">
                <div id="passmsg">
                    <span>趣跑密码</span>
                    <span class="pass_right">
                        <span>※ ※ ※ ※ ※ ※</span><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
        </div>
        <div id="device-center">
            <router-link to="">
                <div id="device">
                    <span>登陆设备管理</span>
                    <span class="device_right">
                        <i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
            <hr>
            <router-link to="">
                <div id="safe_center">
                    <span>趣跑安全中心</span>
                    <span class="sc_right">
                        <i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
        </div>
        <!-- 手机号更改  -->
        <mt-popup v-model="popupPhoneC" position="bottom">
            <div class="update_phone" :style="upStyle">
                <span id="phone_change">
                    <div class="control_bar">
                        <span><button @click="cancelUP" class="cancelUP">取消</button></span> <span class="cp_title">修改手机号</span> <span> <button type="button" @click="confirmUP"  class="mui-btn mui-btn-success confirmUP"  :disabled="cp_disabled">完成</button>
                        </span>
                    </div>
                    <input type="text" v-model="change_phone" @change="cp_fun" placeholder="请输入手机号" class="change_phone">
                </span>
            </div>
        </mt-popup>
        <!-- 邮箱号更改 -->
        <mt-popup v-model="popupMailC" position="bottom">
            <div class="update_mail" :style="umStyle">
                <span id="mail_change">
                    <div class="control_bar">
                        <span><button @click="cancelUM" class="cancelUM">取消</button></span> <span class="cm_title">修改邮箱号</span> <span> <button type="button" @click="confirmUM"  class="mui-btn mui-btn-success confirmUM"  :disabled="cm_disabled">完成</button>
                        </span>
                    </div>
                    <input type="text" v-model="change_mail" @change="cm_fun" placeholder="请输入邮箱号" class="change_mail">
                </span>
            </div>
        </mt-popup>
        <!-- 密码更改 -->
        <mt-popup v-model="popupCodeC" position="bottom">
            <div class="update_code" :style="ucStyle">
                <span id="code_change">
                    <div class="control_bar">
                        <span><button @click="cancelUC" class="cancelUC">取消</button></span> <span class="cc_title">修改密码</span> <span> <button type="button" @click="confirmUC"  class="mui-btn mui-btn-success confirmUC"  :disabled="cc_disabled">完成</button>
                        </span>
                    </div>
                    <span class="input_area qp_num_area">
                        <label for="qp_num">趣跑号</label>
                        <input type="text" id="qu_num" :value="phoneNum" class="showZH" disabled>
                    </span>
                    <span class="input_area">
                        <label for="old_code">旧密码</label>
                        <input type="password" id="old_code" v-model="old_code" @change="cc_fun" placeholder="请输入旧密码" class="old_code">
                    </span>
                    <span class="input_area">
                        <label for="new_code">新密码</label>
                        <input type="password" id="new_code" v-model="new_code" @change="cc_fun" placeholder="请输入新密码" class="new_code">
                    </span>
                    <span class="input_area">
                        <label for="confirm_code">确认密码</label>
                        <input type="password" id="confirm_code" v-model="confirm_code" @change="cc_fun" placeholder="请再次输入密码" class="confirm_code">
                    </span>
                </span>
            </div>
        </mt-popup>
        <span id="prompt">如果遇到账号信息泄露、忘记密码、诈骗等账号安全问题，可前往趣跑安全中心</span>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import axios from 'axios'
export default {
    name: 'idsafe',
    data() {
        return {
            backlink: 'settings',
            // 手机号修改
            popupPhoneC: false,
            upStyle: '',
            cp_disabled: true,
            change_phone: '',
            phoneNum: '',
            // 邮箱号修改
            popupMailC: false,
            umStyle: '',
            cm_disabled: true,
            change_mail: '',
            mailNum: '',
            // 密码修改
            yhzh: '',
            popupCodeC: false,
            ucStyle: '',
            cc_disabled: true,
            old_code: '',
            new_code: '',
            confirm_code: '',
            passmsg: '',
        }
    },
    created() {
        axios.get('http://no37.store:8080/AK/ShowID',{
            params: {
                yhid:localStorage.getItem("yhid"),
            }})
            .then(response=>{
                // console.log(response);
                this.phoneNum = response.data.yhzh;
                this.mailNum = response.data.yhyx;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
        this.yhzh = localStorage.getItem("yhid");
        this.passmsg = localStorage.getItem("password");
    },
    methods: {
        // 手机号修改
        upShow() {
            this.popupPhoneC =! this.popupPhoneC;
            let upWidth = document.body.clientWidth;
            let upHeight = window.innerHeight;
            this.change_phone = this.phoneNum;
            this.upStyle = "width:" + upWidth + "px;height:" + upHeight + "px;";
        },
        cancelUP() {
            this.popupPhoneC = !this.popupPhoneC;
        },
        confirmUP() {
            axios.get('http://no37.store:8080/AK/UpdateID',{
                params: {
                    yhid:localStorage.getItem("yhid"),yhzh:this.change_phone,SelectNumber:4,
                }
            })
            .then(response=>{
                // console.log(response.data);
                this.phoneNum = this.change_phone;
                MessageBox.alert('手机号更改成功！', '提示');
            })
            .catch(error=>{
                console.log(error);
            })
            this.phoneNum = this.change_phone;
            this.popupPhoneC = !this.popupPhoneC;
        },
        cp_fun() {
            if(this.change_phone != '') {
                this.cp_disabled = !this.cp_disabled;
            }
        },
        // 邮箱号修改
        umShow() {
            this.popupMailC =! this.popupMailC;
            let umWidth = document.body.clientWidth;
            let umHeight = window.innerHeight;
            this.change_mail = this.mailNum;
            this.umStyle = "width:" + umWidth + "px;height:" + umHeight + "px;";
        },
        cancelUM() {
            this.popupMailC = !this.popupMailC;
        },
        confirmUM() {
            axios.get('http://no37.store:8080/AK/UpdateID',{
                params: {
                    yhid:localStorage.getItem("yhid"),yhyx:this.change_mail,SelectNumber:3,
                }
            })
            .then(response=>{
                // console.log(response.data);
                this.mailNum = this.change_mail;
                MessageBox.alert('邮箱号更改成功！', '提示');
            })
            .catch(error=>{
                console.log(error);
            })
            this.mailNum = this.change_mail;
            this.popupMailC = !this.popupMailC;
        },
        cm_fun() {
            if(this.change_mail != '') {
                this.cm_disabled = !this.cm_disabled;
            }
        },
        // 密码修改
        ucShow() {
            this.popupCodeC =! this.popupCodeC;
            let ucWidth = document.body.clientWidth;
            let ucHeight = window.innerHeight;
            this.change_code = this.passmsg;
            this.ucStyle = "width:" + ucWidth + "px;height:" + ucHeight + "px;";
        },
        cancelUC() {
            this.popupCodeC = !this.popupCodeC;
        },
        confirmUC() {
            if(this.old_code != localStorage.getItem("password")) {
                MessageBox.alert('账号或密码错误，请重新填写。', '提示').then(action => {
                    this.popupCodeC = true;
                });
            }
            else if(this.new_code != this.confirm_code) {
                MessageBox.alert('两次填写的密码不一致，请重新填写。', '提示').then(action => {
                    this.popupCodeC = true;
                });
            }
            else {
                axios.get('http://no37.store:8080/AK/UpdateID',{
                    params: {
                        yhid:localStorage.getItem("yhid"),yhmm:this.confirm_code,SelectNumber:2,
                    }
                })
                .then(response=>{
                    // console.log(response.data);
                    MessageBox.alert('密码更改成功！', '提示');
                })
                .catch(error=>{
                    console.log(error);
                })
                this.popupCodeC = !this.popupCodeC;
            }
        },
        cc_fun() {
            if(this.old_code != '' &&this.new_code != '' && this.confirm_code != '') {
                this.cc_disabled = !this.cc_disabled;
            }
            else {
                this.cc_disabled = true;
            }
        },
    },
}
</script>
<style scoped>
    #idsafe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    .title {
        color: #dec674;
        position: absolute;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    hr {
        width: 88%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    .iconfont-right {
        font-size: 22px;
        font-weight: normal;
        color: #999999;
        margin-right: 0;
        /* position: absolute; */
        right: 7%;
    }
    #userid,#mail,#passmsg,#device,#safe_center {
        /* border: 1px solid red; */
        color: black;
        width: 100%;
        margin: 0 auto;
        padding-right: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .phone_right,.mail_right,.pass_right,.device_right,.sc_right {
        /* border: 1px solid black; */
        color: gray;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: bold;
    }
    #number,#password,#device-center {
        width: 93%;
        border-radius: 7px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-indent: 1em;
        text-align: left;
        margin: 0 auto;
        line-height: 200%;
        font-size: 110%;
        margin-bottom: 2%;
    }
    #number,#device-center {
        height: 16%;
    }
    #password {
        height: 8%;
    }
    .update_phone,.update_mail,.update_code {
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    #phone_change,#mail_change,#code_change {
        display: inline-block;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        /* border: 1px solid red; */
    }
    .control_bar {
        /* border: 1px solid red; */
        width: 100%;
        /* height: 8%; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
    }
    .cancelUP,.cancelUM,.cancelUC {
        margin: 1ex;
        border: 0;
        float: left;
        background-color: transparent;
    }
    .confirmUP,.confirmUM,.confirmUC {
        margin: 1ex;
        border: 0;
        float: right;
    }
    .change_phone,.change_mail {
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        height: 6.5ex;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.6);
    }
    .input_area {
        /* border: 1px solid red; */
        width: 100%;
        height: 7%;
        margin-bottom: 1%;
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
    .qp_num_area label {
        color: rgb(138, 138, 138);
    }
    .showZH {
        width: 75%;
        height: 6.5ex;
        color: gray;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        margin-bottom: 0;
        border-color: transparent;
        font-size: 14px;
        background-color: transparent;
        text-indent: 1em;
    }
    .old_code,.new_code,.confirm_code {
        width: 75%;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        height: 6.5ex;
        margin-bottom: 0;
        font-size: 14px;
        background-color: transparent;
        border-color: transparent;
        text-indent: 1em;
    }
    #prompt {
        display: inline-block;
        margin: 0 3%;
        font-size: 14px;
        color: #717171;
        text-align: left;
    }
</style>
