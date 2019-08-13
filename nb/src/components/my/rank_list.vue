<template>
    <div id="rank_list">
        <div id="back_bar">
            <router-link to="/footer/my">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        排行榜界面
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #rank_list {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
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
</style>
