<template>
    <div id="switchid">
        <div id="back_bar">
            <router-link :to='backlink'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        <div id="headprotrait">

        </div>
    </div>
</template>
<script>
export default {
    name: 'switchid',
    data() {
        return {
            backlink: 'settings',
            hportSrc: ['tx.jpeg','叭叭怪.jpg','巴啦啦小魔仙.jpg'],
        }
    }
}
</script>
<style scoped>
    #switchid {
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
