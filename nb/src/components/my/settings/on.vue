<template>
    <div id="on">
        <div id="back_bar">
            <router-link :to='backlink'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
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
        background-color: #dec674;
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
</style>
