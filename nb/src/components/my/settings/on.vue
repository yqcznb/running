<template>
    <div id="on">
        <div id="back_bar">
            <router-link :to='$route.params.backey'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">关于</span>
        </div>
        这里是关于我们页面
    </div>
</template>
<script>
export default {
    name: 'on',
    data() {
        return {
            backlink: 'settings',
        }
    }
}
</script>
<style scoped>
    #on {
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
</style>
