<template>
    <div id="rank_list">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">今日排行</span>
        </div>
        <div class="toper">
            <img :src="run_list[0].yhtx" alt="" class="top_one">
            {{run_list[0].yhnc}}
        </div>
        <div class="list_box" id="container">
            <ul>
                <li v-for="(value, key) in run_list">
                    <span v-text="key+1"></span>
                    <img :src="value.yhtx" alt="" class="list_img">
                    <span v-text="value.yhnc" class="yhnc"></span>
                    <span v-text="value.ydjl" class="ydjl"></span>
                </li>
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
            run_list: [],

        }
    },
    created() {
        // 用户积分
        axios.get('http://no37.store:8080/AK/MoveTop',{
            params: {
                yhid:1,ydrqn:2018,ydrqy:8,ydrqr:12,
            }})
            .then(response=>{
                console.log(response);
                this.run_list = response.data;
                console.log(this.run_list);
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
        background-image: url(../../assets/img/my/rank_list/sports2.jpg);
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
    .toper {
        border: 1px solid red;
        width: 93%;
        max-width: 550px;
        height: 20%;
        margin: 0 auto;
        margin-top: 40px;
        display: flex;
        align-items: center;
    }
    .top_one {
        position: relative;
        width: 15%;
        max-width: 80px;
        border-radius: 25%;
    }
    .list_box {
        border: 1px solid red;
        border-radius: 7px;
        width: 95%;
        max-width: 550px;
        background-color: white;
        background: rgba(255, 255, 255, 0.7);
        left: 0;
        right: 0;
        margin: 0 auto;
        position: relative;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li {
        border: 1px solid red;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .list_img {
        border-radius: 7px;
        position: relative;
        width: 10%;
        max-width: 60px;
        /* width: 20%; */
    }
    .yhnc {
        width: 30%;
        min-width: 120px;
        display: inline-block;
    }
    .ydjl {
        width: 10%;
        min-width: 60px;
        display: inline-block;
    }
</style>
