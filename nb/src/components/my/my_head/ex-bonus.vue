<template>
    <div id="ex_bonus">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy">返回</i> 
            </router-link>
            <span>我的积分</span>
        </div>
        <div class="show_bonus">
            <span class="kyjf">可用积分</span>
            <div class="bonus_bg">
                <img :src="bonus_bag" alt="" class="bag_bg">
                <span class="bonus_data">{{bonus_data}}</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'ex_bonus',
    data() {
        return{
            bonus_data: '2000',
            bonus_bag: require('../../../assets/img/my/ex_bonus/bonusbag.png'),
        }
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
    },
}
</script>
<style scoped>
    #ex_bonus {
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
        z-index: 1;
    }
    #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
        display: flex;
        justify-content: flex-start;
    }
    i,span {
        /* border: 1px solid red; */
    }
    span {
        color: #dec674;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 0;
    }
    .show_bonus {
        /* border: 1px solid red; */
        border-radius: 7px;
        background-color: white;
        width: 93%;
        height: 25%;
        /* position: relative; */
        margin: 0 auto;
        padding: 7px;
    }
    .kyjf {
        /* border: 1px solid red; */
        height: 15%;
        display: inline-block;
        position: relative;
        /* text-align: center; */
        color: black;
    }
    .bonus_bg {
        /* border: 1px solid red; */
        position: relative;
        height: 85%;
    }
    .bonus_data {
        /* border: 1px solid red; */
        border-radius: 50%;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        max-width: 87px;
        height: 30%;
        font-size: 1em;
        line-height: 250%;
        color: black;
        /* background-color: beige; */
        bottom: -46%;
        background: -webkit-radial-gradient(#bc9260, #d5c7ab, white); 
        background: -o-radial-gradient(#bc9260, #d5c7ab, transparent);
        background: -moz-radial-gradient(#bc9260, #d5c7ab, transparent);
        background: radial-gradient(#bc9260, #d5c7ab, transparent);
        /* background-color: transparent; */
        opacity: 0.9;
    }
    .bag_bg {
        /* border: 1px solid red; */
        position: absolute;
        height: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        /* background-color: black; */
    }
</style>
