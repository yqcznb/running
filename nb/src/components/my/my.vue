<template>
    <div id="my">
        <div id="my_head">
            <div class="head_left">
                <p class="user_name">叭叭叭</p>
                <p class="user_level">天下跑神段位</p>
                <img :src='levelImg' class="levelimg">
                <img :src='indImg' class="indimg">
                
            </div>
            <div class="head_right">
                <img :src='headportrait' alt="" class="headportrait">
                <img :src="duanImg" alt="" class="duanimg">
            </div>  
        </div>
        <img :src="nearImg" alt="" class="nearimg">
        <div id="run_data">
            <div id="details">
                <i class="iconfont icontiyu-paobu"></i><span class="">跑步数据详情</span><i class="iconfont iconfanhui"></i>
            </div>
            <div id="rank_list">
                <i class="iconfont iconpaihangbang rankimg"></i><span class="">排行榜</span><i class="iconfont iconfanhui"></i>
            </div>
        </div>
        <div id="settings">
            <i class="iconfont iconsettings"></i><span>设置</span><i class="iconfont iconfanhui"></i>
        </div>
        {{msg}}
        
        
    

    </div>
</template>
<script>
export default {
    name: 'my',
    data() {
        return{
            msg: 'aaaaa',
            levelImg: require('../../assets/img/my/schedual_level/first.png'),
            indImg:require('../../assets/img/my/identify/跑神认证.png'),
            headportrait:require('../../assets/img/my/headportrait/tx.jpeg'),
            duanImg:require('../../assets/img/my/duan/5.png'),
            nearImg:require('../../assets/img/my/run_data/near.png'),
        }
    }
}
</script>
<style scoped>
    /* body {
        background-color: #dec674;
    } */
    #my {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #dec674;
    }

    #my_head,#run_data,#settings {
        width: 90%;
        border: 1px solid red;
        display: flex;
        margin: 0 auto;
        background-color: white;
    }

    #my_head {
        height: 25%;
        border-radius: 0 0 7px 7px;
        padding: 5%;
        
    }
    .head_left {
        width: 70%;
        height: 100%;
        border: 1px solid red;

    }
    .user_name,.user_level {
        text-align: left;
    }
    .levelimg {
        width: 80%;
        display: flex;
    }
    .indimg {
        width: 35%;
        display: flex;
    }
    .head_right {
        border: 1px solid red;
        
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .headportrait {
        border: 1px solid red;
        width: 80%;
        border-radius: 50%;
        z-index: 1;
    }
    .duanimg {
        position: relative;
        width: 100%;
        border: 1px solid red;
        margin-top: -30%;
        z-index: 0;
    }
    .nearimg {
        width: 100%;
    }
    #run_data {
        display: flex;

    }
    #run_data,#settings {
        border-radius: 7px;
    }
    #run_data {
        height: 16%;
        flex-direction: column;
        justify-content: space-around;
    }
    .detimg {
        height: 100%;
    }
    #settings {
        height: 8%;
    }
</style>
