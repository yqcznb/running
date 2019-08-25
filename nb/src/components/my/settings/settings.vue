<template>
    <div id="settings">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        <div id="id_msg-safe">
            <router-link :to="{name:'pinform',params:{backey:'/settings'}}">
                <div id="id_msg">
                    <span>个人信息</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name:'idsafe',params:{backey:'/settings'}}">
                <div id="id_safe">
                    <span>账号与安全</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
        </div>
        <div id="mode-privacy-on">
            <router-link to="funnymode">
                <div id="mode">
                    <span>经典模式</span><i class="iconfont icon1 iconfont-right"></i>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name:'privacy',params:{backey:'/settings'}}">
                <div id="privacy">
                    <span>隐私</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
            <hr>
            <router-link :to="{name:'on',params:{backey:'/settings'}}">
                <div id="on">
                    <span>关于</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
                
            </router-link>
        </div>
        <div id="change-logout">
            <router-link :to="{name:'switchid',params:{backey:'/settings'}}">
                <div id="change">
                    <span>切换账号</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
            <hr>
            <router-link to="/">
                <div id="logout" @click="tui">
                    <span>退出登录</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'settings',
    computed: {
        
    },
    data() {
        return{
            
        }
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
        tui(){
            localStorage.removeItem("Flag")
            localStorage.removeItem("yhid")
        }
    },
}
</script>
<style scoped>
    #settings {
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
    }
    hr {
        width: 95%;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    #id_msg-safe,#mode-privacy-on,#change-logout {
        width: 93%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        text-indent: 1em;
        margin: 0 auto;
        margin-bottom: 2%;
        background-color: white;
        border-radius: 7px;
        font-size: 110%;
    }
    .iconfont-right {
        font-size: 20px;
        color: #999999;
        margin-right: 0;
        position: absolute;
        right: 7%;
    }
    #mode-privacy-on {
        height: 24%;
        /* margin-bottom: 3%; */
        line-height: 260%; 
    }
    #mode-privacy-on span {
        color: black;
    }
    .icon1 {
        font-size: 28px;
        color: #dec674;
    }
    #mode,#privacy,#on,#change,#lougout {
        display: flex;
        align-items: center;
    }
    #id_msg-safe,#change-logout {
        height: 16%;
        line-height: 100%;
    }
    #id_msg-safe span,#change-logout span {
        color: black;
    }
    #id_msg-safe hr,#change-logout hr {
        width: 88%;
        position: absolute;
    }

</style>
