<template>
    <div id="on">
        <div id="back_bar">
            <router-link to="/settings" >
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">关于</span>
        </div>
        <div class="a">
            <router-link to="http://no37.store/r&f%20%E9%9D%92%E5%AE%A0%E8%B6%A3%E8%B7%91.apk">点击下载青宠趣跑Android APK</router-link>
        </div>
        

    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'on',
    data() {
        return{
            
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    #on {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        overflow: scroll;
        background: linear-gradient(top,#bed3df,#fcefd5);
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    #back_bar {
        position: relative;
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        z-index: 3;
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
    .a a {
        border: 1px solid gray;
        margin-top: 1ex;
        display: inline-block;
        color: black;
    }
</style>
