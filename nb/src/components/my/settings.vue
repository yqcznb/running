<template>
    <div id="settings">
        <div id="back_bar">
            <router-link to="footer/my">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        
        这里是设置页面
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #settings {
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
        line-height: 170%;
        background-color: rgb(83, 83, 83);
        
    }
</style>
