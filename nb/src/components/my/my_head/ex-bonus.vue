<template>
    <div id="ex_bonus">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy">返回</i> 
            </router-link>
            <span class="title">我的积分</span>
        </div>
        <div class="show_bonus">
            <span class="kyjf">可用积分</span>
            <div class="bonus_bg">
                <img src="../../../assets/img/my/ex_bonus/bonusbag.png" alt="" class="bag_bg">
                <span class="bonus_data">{{bonus_data}}</span>
            </div>
        </div>
        <div class="goods_box">
            <ul>
                <li v-for="(value, key) in goodslist" class="goodslist" >
                    <div class="imgbox">
                        <img :src="value.sptp" class="maleimg" >
                    </div>
                    <span class="text_box">
                        <span class="maletitle">{{ value.spms }}</span><span class="malejg">{{ value.spjg }}积分</span>
                    </span>
                    <button class="ex_btn">马上兑</button>
                </li>
            </ul>
            <span class="nomore">————————没有更多了————————</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ex_bonus',
    data() {
        return{
            bonus_data: '0',
            goodslist: [],
        }
    },
    created() {
        // 用户积分
        axios.get('http://no37.store:8080/AK/jf',{
            params: {
                yhid:1,     
            }})
            .then(response=>{
                this.bonus_data = response.data.yhjf;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
        // 商品信息
        axios.get('http://no37.store:8080/AK/lookShop',{
            })
            .then(response=>{
                this.goodslist = response.data;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
    },
    mounted() {
        this.changeWH();
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
        changeWH() {
            let realWidth = document.getElementsByClassName("maleimg").naturalWidth;
            let reaHeight = document.getElementsByClassName("maleimg").naturalHeight;
        },
    },
}
// http://no37.store/eclipse-jee-neon-2-win32-x86_64/eclipse/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/AK/ShopPhoto/
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
        background-attachment: scroll;
        overflow: scroll;
    }
    a {
        text-decoration: none;
        color: #dec674;
        z-index: 1;
    }
    ul {
        list-style: none;
        float: left;
    }
    #back_bar {
        position: fixed;
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        display: flex;
        justify-content: flex-start;
        z-index: 3;
    }
    .title {
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
        background-color: rgba(255, 255, 255, 0.5);
        width: 93%;
        height: 25%;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 2%;
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
    .goods_box {
        border-radius: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        width: 93%;
        margin: 0 auto 2%;
        padding: 7px;
        overflow: hidden;
    }
    ul {
        left: 0;
        right: 0;
        /* margin: 0 auto; */
        padding: 0;
        margin: 0 2%;
    }
    .goodslist {
        /* border: 1px solid red; */
        padding: 3px;
        width: 100%;
        max-width: 800px;
        height: 100px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid gray;
    }
    .imgbox {
        width: 30%;
        max-width: 120px;
        background-color: white;
        height: 100%;
        padding: 10px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .maleimg {
        position: relative;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
        
    }
    .text_box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }
    .malejg {
        color: #2177b8;
    }
    .ex_btn {
        margin-right: 0;
    }
    .nomore {
        line-height: 28px;
        font-size: 14px;
        color: lightgray;
    }
</style>
