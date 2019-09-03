<template>
    <div id="privacy">
        <div id="back_bar">
            <router-link to='/settings'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">隐私</span>
        </div>
        <router-link to="">
            <div id="permission">
                <span class="qx_title">系统权限</span>
                <span class="qx_right">
                    <span>授权使用的手机权限</span><i class="iconfont iconfanhui iconfont-right"></i>
                </span>
            </div>
        </router-link>
        <router-link :to="{name:'ppolicy',params:{backey:$route.params.backey}}">
            <div id="ppolicy">
                <span class="zc_title">隐私政策</span>
                <span class="zc_right">
                    <i class="iconfont iconfanhui iconfont-right"></i>
                </span>
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
    .title {
        color: #dec674;
        position: absolute;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .iconfont-right {
        font-size: 20px;
        color: #999999;
        margin-right: 0;
        position: absolute;
        right: 7%;
    }
    #permission,#ppolicy {
        width: 93%;
        height: 8%;
        border-radius: 7px;
        background-color: white;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px;
        margin: 0 auto;
        color: black;
        margin-bottom: 2%;
    }
    .qx_right,.zc_right {
        width: 45%;
        max-width: 150px;
        display: flex;
        align-items: center;
    }
    .qx_right span {
        font-size: 13px;
        color: #999999;
    }
</style>
