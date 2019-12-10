<template>
    <div id="pinform">
        <div id="back_bar">
            <router-link :to='$route.params.backey' >
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">个人信息</span>
        </div>
        <div id="photo_name">
            <router-link to="" @click.native="uhShow">
                <div id="photo">
                    <span class="head_left head_title">头像</span>
                    <span class="head_right">
                        <img :src='headportrait' class="headportrait"><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
            <hr>
            <router-link to="" @click.native="unShow">
                <div id="name">
                    <span class="name_left name_title">昵称</span>
                    <span class="name_right">
                        <span v-text="user_name" class="user_name"></span><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
        </div>
        <!-- 头像修改 -->
        <mt-popup v-model="popupHeadC" position="bottom">
            <div class="update_head" :style="uhStyle">
                <form action="http://no37.store:8080/AK/AddPhoto" method="post" enctype="multipart/form-data" target="the_iframe" id="ch_form">
                    <div class="control_bar">
                        <span><button @click="cancelUH" class="cancelUH">取消</button></span> <span class="ch_title">更换头像</span> <span> <button @click="confirmUH"  class="mui-btn mui-btn-success confirmUH"  :disabled="ch_disabled">完成</button>
                        </span>
                    </div>
                    <label for="choose_img">
                        <img src="../../../../assets/img/my/headportrait/1.png" alt="" class="choose_head">
                    </label>
                    <img :src="change_head" alt="" class="head_preview">
                    <input type="file" name="file" id="choose_img" @change="ch_fun" accept="image/png,image/jpeg,image/gif" style="display:none;" ref="inputImage">
                    <input type="text" :value="yhid" name="yhid" style="display:none;">
                </form>
                <iframe name="the_iframe" frameborder="0" style="" id="brige_frame" style="display:none;"></iframe>
            </div>
        </mt-popup>
        <!-- 昵称修改 -->
        <mt-popup v-model="popupNameC" position="bottom">
            <div class="update_name" :style="unStyle">
                <span id="name_change">
                    <div class="control_bar">
                        <span><button @click="cancelUN" class="cancelUN">取消</button></span> <span class="cn_title">修改昵称</span> <span> <button type="button" @click="confirmUN"  class="mui-btn mui-btn-success confirmUN"  :disabled="cn_disabled">完成</button>
                        </span>
                    </div>
                    <input type="text" v-model="change_name" @change="cn_fun" placeholder="请输入昵称" class="change_name">
                </span>
            </div>
        </mt-popup>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import axios from 'axios'
export default {
    name: 'pinform',
    data() {
        return{
            yhid: '',
            headportrait: '',
            before_head: '',
            // 头像修改
            change_head: '',
            cchh: '',
            after_change: '',
            popupHeadC: false,
            uhStyle: '',
            ch_disabled: true,
            // 昵称修改
            user_name: '',
            change_name: '',
            popupNameC: false,
            unStyle: '',
            cn_disabled: true,
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
    created() {
        // 用户积分
        // axios.get('http://no37.store:8080/AK/ShowMe',{
        //     params: {
        //         yhid:localStorage.getItem("yhid"),
        //     }})
        //     .then(response=>{
        //         // console.log(response);
        //         this.yhid = localStorage.getItem("yhid");
        //         this.user_name = response.data.yhnc;
        //         this.change_name = this.user_name;
        //         this.headportrait = response.data.yhtx;
        //         this.change_head = response.data.yhtx;
        //         this.before_head = response.data.yhtx;
        //     })      
        //     //获取失败
        //     .catch(error=>{
        //         alert('网络错误，不能访问');
        //     })
            
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
        // 头像修改
        uhShow() {
            this.popupHeadC =! this.popupHeadC;
            let uhWidth = document.body.clientWidth;
            let uhHeight = window.innerHeight;
            this.uhStyle = "width:" + uhWidth + "px;height:" + uhHeight + "px;";
        },
        cancelUH() {
            this.popupHeadC = !this.popupHeadC;
        },
        axiosFun() {
            axios.get('http://no37.store:8080/AK/ShowMe',{
            params: {
                yhid:localStorage.getItem("yhid"),
            }})
            .then(response=>{
                console.log(response);
                this.headportrait = response.data.yhtx;
                if(this.headportrait != this.before_head) {
                    MessageBox.alert('头像更改成功', '提示');
                }
                else {
                    MessageBox.alert('头像更改失败，请重试', '抱歉').then(action => {
                        _this.popupHeadC = true;
                    });
                }
            })      
            //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
        },
        confirmUH() {
            this.popupHeadC = false;
            setTimeout(this.axiosFun,100);
        },
        ch_fun(e) {
            // this.ch_disabled = false;
            let _this = this;
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file); // 读出 base64
            reader.onload = function () {
                // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                var dataURL = reader.result;
                var img = new Image();
                img.src = dataURL;
                img.onload = function() {
                    if(Math.abs(img.width - img.height) >= 30) {
                        _this.popupHeadC = false;
                        MessageBox.alert('请重新选择长宽比为一的图片', '提示').then(action => {
                            _this.popupHeadC = true;
                        });
                        _this.ch_disabled = true;
                    }
                    else {
                        _this.ch_disabled = false;
                        _this.change_head = dataURL;
                    }
                    console.log(img.width);
                    console.log(img.height);
                }
            };
            this.txyl_show = true;
            this.change_show = false;
        },
        // 昵称修改
        unShow() {
            this.popupNameC =! this.popupNameC;
            let unWidth = document.body.clientWidth;
            let unHeight = window.innerHeight;
            this.unStyle = "width:" + unWidth + "px;height:" + unHeight + "px;";
        },
        cancelUN() {
            this.popupNameC = !this.popupNameC;
        },
        confirmUN() {
            axios.get('http://no37.store:8080/AK/UpdateID',{
                params: {
                    yhid:localStorage.getItem("yhid"),yhnc:this.change_name,SelectNumber:1,
                }
            })
            .then(response=>{
                MessageBox.alert('昵称更改成功', '提示');
                // console.log(response.data);
            })
            .catch(error=>{
                console.log(error);
            })
            this.user_name = this.change_name;
            this.popupNameC = !this.popupNameC;
        },
        cn_fun() {
            if(this.change_name != '') {
                this.cn_disabled = !this.cn_disabled;
            }
        },
    },
}
</script>
<style scoped>
    #pinform {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,#bed3df,#fcefd5);
    }
    #back_bar a {
        text-decoration: none;
        color: #dec674;    
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
    #photo_name {
        width: 93%;
        height: 17%;
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
    hr {
        width: 88%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    #photo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding-right: 13px; */
    }
    #name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding-right: 13px; */

    }
    .head_right,.name_right {
        /* border: 1px solid red; */
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 12px;
    }
    .head_right {
        width: 27%;
        max-width: 100px;
    }
    .headportrait {
        border-radius: 7px;
        position: relative;
        width: 45%;
        min-width: 44px;
        margin-right: 7%;
    }
    .iconfont-right {
        font-size: 20px;
        color: #999999;
        margin-right: 0;
        right: 7%;
    }
    .head_title,.name_title {
        color: black;
    }
    .user_name {
        /* border: 1px solid black; */
        font-size: 50%;
        color: #999999;
        display: block;
        /* display: inline-block; */
        /* margin-right: 10%; */
    }
    #name_change {
        display: inline-block;
        width: 100%;
        height: auto;
        position: absolute;
        margin-top: 0;
        top: 0;
        left: 0;
        right: 0;
        /* border: 1px solid red; */
    }
    .control_bar {
        width: 100%;
        margin-bottom: 1ex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
    }
    .head_preview,#txyl_area {
        width: 80%;
        max-width: 400px;
        border-radius: 7px;
        margin: 0 auto;
        display: block;
    }
    .head_preview,.choose_head {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .choose_head {
        width: 10%;
        margin-left: 2em;
        margin-bottom: 1ex;
    }
    /* 头像修改 */
    .update_head,.update_name {
        background: linear-gradient(top,#bed3df,#fcefd5);
        overflow: hidden;
    }
    .cancelUH,.cancelUN {
        margin: 1ex;
        border: 0;
        float: left;
        background-color: transparent;
    }
    .confirmUH,.confirmUN {
        margin: 1ex;
        border: 0;
        float: right;
    }
    .change_name {
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        height: 6.5ex;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.6);
    }
    iframe {
        display: none;
    }
</style>

