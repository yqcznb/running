<template>
    <div id="switchid">
        <div id="back_bar">
            <router-link :to='backlink'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        <div id="headportrait">
            <img :src="hportSrc" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'switchid',
    data() {
        return {
            backlink: 'settings',
            hportSrc: '',
        }
    },
    created() {
        let urlTemp = ["tx.jpeg","叭叭叭.jpg","巴啦啦小魔仙.jpg"];
        this.hportSrc = require("@/assets/img/my/headportrait/"+urlTemp[0]);
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
    #headportrait {
        width: 93%;
        height: 8%;
        border: 1px solid red;
        display: flex;
        margin: 0 auto;
        background-color: white;
        color: black;
        border-radius: 7px;
        height: 8%;
        align-items: center;
        text-indent: 1em;
        font-size: 110%;
        margin-bottom: 2%;
    }
    img {
        width: 10%;
        position: absolute;
        margin-left: 2%;
        /* border: 1px solid red; */
        border-radius: 10%;
    }
</style>
