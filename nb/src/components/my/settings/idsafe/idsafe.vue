<template>
    <div id="idsafe">
        <div id="back_bar">
            <router-link :to='$route.params.backey'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        <div id="number">
            <router-link to="">
                <div id="userid">
                    <span>手机号</span>
                    <span class="phone_right">
                        <span >15611111111</span>
                        <i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
            <hr>
            <router-link to="">
                <div id="mail">
                    <span>邮箱号</span>
                    <span class="mail_right">
                        <span >15611111111@qq.com</span><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
        </div>
        <div id="password">
            <router-link to="">
                <div id="passmsg">
                    <span>趣跑密码</span>
                    <span class="pass_right">
                        <span class="xing" v-for="n in passmsg.length">※</span><i class="iconfont iconfanhui iconfont-right"></i>
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
        <span id="prompt">如果遇到账号信息泄露、忘记密码、诈骗等账号安全问题，可前往趣跑安全中心</span>
    </div>
</template>
<script>
export default {
    name: 'idsafe',
    data() {
        return {
            backlink: 'settings',
            passmsg: '123',
        }
    }
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
        font-size: 25px;
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
        font-size: 12px;
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
    #prompt {
        display: inline-block;
        margin: 0 3%;
        font-size: 14px;
        color: #717171;
        text-align: left;
    }
</style>
