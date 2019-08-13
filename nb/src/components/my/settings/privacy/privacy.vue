<template>
    <div id="privacy">
        <div id="back_bar">
            <router-link :to='backlink'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        <router-link to="">
            <div id="permission">
                <span><span class="left">系统权限</span><span class="right">授权使用的手机权限</span></span><i class="iconfont iconfanhui iconfont-right"></i>
            </div>
        </router-link>
        <router-link to="ppolicy">
            <div id="ppolicy">
                <span>隐私政策</span><i class="iconfont iconfanhui iconfont-right"></i>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'privacy',
    data() {
        return {
            backlink: 'settings',
        }
    }
}
</script>
<style scoped>
    #privacy {
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
     #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    .iconfont-right {
        font-size: 20px;
        color: #999999;
        margin-right: 0;
        position: absolute;
        right: 7%;
    }
    #permission,#ppolicy {
        border: 1px solid red;
        width: 93%;
        height: 8%;
        border-radius: 7px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        text-indent: 1em;
        margin: 0 auto;
        font-size: 110%;
        color: black;
        margin-bottom: 2%;
    }
    .left {
        /* display: inline-block; */
    }
    .right {
        font-size: 50%;
        color: #999999;
        display: inline-block;
        /* text-align: right; */
        float: right;
        margin-right: 10%;
    }
</style>
