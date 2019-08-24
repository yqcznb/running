<template>
    <div id="rank_list">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">排行榜</span>
        </div>
        <div class="zw">

        </div>
        <div class="list_box" id="container">
            <ul>
                <!-- <li v-for="item in list">
                    <img src="" alt="" v-lazy.comtainer="item">
                </li> -->
            </ul>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'rank_list',
    data() {
        return{
            
        }
    },
    created() {
        // 用户积分
        axios.get('http://no37.store:8080/AK/MoveTop',{
            params: {
                ydrqn:2019,ydrqy:'09',
            }})
            .then(response=>{
                console.log(response);
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
    },
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
        overflow: scroll;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
        background-image: url(../../assets/img/my/rank_list/sports3.jpg);
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    #back_bar {
        position: fixed;
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
        z-index: 3;
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
    .zw {
        width: 100%;
        height: 20%;
    }
    .list_box {
        border: 1px solid red;
        border-radius: 7px;
        width: 95%;
        background-color: white;
        background: rgba(255, 255, 255, 0.6);
        left: 0;
        right: 0;
        margin: 0 auto;
        position: relative;
    }
    img[lazy=loading] {
        width: 40px;
        height: 40px;
        
    }
</style>
