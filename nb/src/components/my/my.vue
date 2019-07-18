<template>
    <div id="my">
        <router-link to="/pinform">
            <div id="my_head">
                <div id="head_left">
                    <h4>叭叭叭</h4>
                    <h5>天下跑神段位》</h5>
                    <img :src='levelImg' class="levelimg">
                    <img :src='indImg' class="indimg">
                </div>
                <div id="head_right">
                    <img :src='headportrait' class="headportrait">
                    <img :src='duanImg' class="duanimg">
                </div>
            </div>
        </router-link>
        
        <img :src="nearImg" alt="" class="nearimg">
        <div id="run_data">
            <router-link to="/">
                <div id="details">
                    <i class="iconfont icontiyu-paobu"></i><span class="">跑步数据详情</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
            <hr>
            <router-link to="/">
                <div id="rank_list">
                    <i class="iconfont iconpaihangbang rankimg"></i><span class="">排行榜</span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
           
        </div>
        <router-link to="/settings">
            <div id="settings">
                <i class="iconfont iconsettings"></i><span>设置</span><i class="iconfont iconfanhui iconfont-right"></i>
            </div>
        </router-link>
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
            headportrait:require('../../assets/img/my/headportrait/4.jpg'),
            duanImg:require('../../assets/img/my/duan/5.png'),
            nearImg:require('../../assets/img/my/run_data/near.png'),
        }
    }
}
</script>
<style scoped>
    body {
        background-color: #dec674;
    }
    a {
        text-decoration: none;
        color: black;
    }
    #my {
        width: 100%;
        /* max-width: 600px; */
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: #dec674;
    }

    #my_head,#run_data,#settings {
        width: 90%;
        /* border: 1px solid red; */
        display: flex;
        margin: 0 auto;
        background-color: white;
    }
    #my_head {
        height: 22%;
        border-radius: 0 0 7px 7px;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
    }
    #head_left,#head_right {
        height: 100%;
        /* border: 1px solid red; */
        /* display: flex; */
        /* justify-content: space-between; */
    }
    #head_left {
        /* width: 70%; */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h4,h5 {
        font-weight: normal;
        text-align: left;
    }
    h4 {
        /* margin-bottom: 20%; */
    }
    h5 {
        color: rgba(253, 185, 51, 0.89);
    }
    .levelimg {
        width: 70%;
        max-width: 336px;
    }
    .indimg {
        width: 20%;
    }
    #head_right {
        /* width: 30%; */
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: center;
    } 
    .headportrait {
        border: 1px solid #bbb;
        /* position: relative; */
        border-radius: 50%;
        height: 63%;
        z-index: 4;
    }
    .duanimg {
        /* border: 1px solid #bbb; */
        height: 50%;
        margin-top: -25%;
        position: relative;
        z-index: 0;
    }
    .nearimg {
        /* width: 100%; */
        height: 20%;
    }
    .iconfont {
        color: #d5a269;
        font-size: 130%;
    }
    #run_data,#settings {
        border-radius: 7px;
    }
    #settings span {
        text-indent: 0.5em;
    }
    
    #run_data {
        height: 16%;
        padding: 0 10px;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
    }
    #details,#rank_list {
        display: flex;
        align-items: center;
        text-align: left;
    }
    hr {
        width: 85%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    #details span,#rank_list span {
        text-indent: 0.5em;
    }
    #settings {
        height: 8%;
        margin-top: 2%;
        /* margin-bottom: 8%; */
        padding: 0 10px;
        display: flex;
        align-items: center;
        text-align: left;
        /* border: 1px solid black; */
    }
    .iconfont-right {
        /* text-align: right !important; */
        color: #999999;
        margin-right: 0;
        position: absolute;
        right: 7%;
    }
</style>
