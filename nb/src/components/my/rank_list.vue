<template>
    <div id="rank_list">
        <div id="back_bar">
            <router-link to="/footer/my" >
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">排行榜</span>
        </div>
        <div class="select_list">
            <mt-navbar v-model="selected" @click="showList">
                <mt-tab-item id="1" @click.native="showList">今日排名</mt-tab-item>
                <mt-tab-item id="2" @click.native="showList">本周排名</mt-tab-item>
                <mt-tab-item id="3" @click.native="showList">当月排名</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="toper">
                        <img :src="run_list[0].yhtx" alt="" class="top_one">
                        {{run_list[0].yhnc}}
                    </div>
                    <div class="tishi">
                        <span>TOP</span>
                        <span>头像</span>
                        <span class="yhnc">昵称</span>
                        <span class="ydjl">公里</span>
                    </div>
                    <div class="list_box" id="container">
                        <ul>
                            <li v-for="(value, key) in run_list">
                                <hr v-if="key" class="list_hr">
                                <div class="list_details">
                                    <span v-text="key+1" class="toplist"></span>
                                    <img :src="value.yhtx" alt="" class="list_img">
                                    <span v-text="value.yhnc" class="yhnc"></span>
                                    <span v-text="value.sum" class="ydjl"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="toper">
                        <img :src="run_list[0].yhtx" alt="" class="top_one">
                        {{run_list[0].yhnc}}
                    </div>
                    <div class="tishi">
                        <span>TOP</span>
                        <span>头像</span>
                        <span class="yhnc">昵称</span>
                        <span class="ydjl">公里</span>
                    </div>
                    <div class="list_box" id="container">
                        <ul>
                            <li v-for="(value, key) in run_list">
                                <hr v-if="key" class="list_hr">
                                <div class="list_details">
                                    <span v-text="key+1" class="toplist"></span>
                                    <img :src="value.yhtx" alt="" class="list_img">
                                    <span v-text="value.yhnc" class="yhnc"></span>
                                    <span v-text="value.sum" class="ydjl"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="toper">
                        <img :src="run_list[0].yhtx" alt="" class="top_one">
                        {{run_list[0].yhnc}}
                    </div>
                    <div class="tishi">
                        <span>TOP</span>
                        <span>头像</span>
                        <span class="yhnc">昵称</span>
                        <span class="ydjl">公里</span>
                    </div>
                    <div class="list_box" id="container">
                        <ul>
                            <li v-for="(value, key) in run_list">
                                <hr v-if="key" class="list_hr">
                                <div class="list_details">
                                    <span v-text="key+1" class="toplist"></span>
                                    <img :src="value.yhtx" alt="" class="list_img">
                                    <span v-text="value.yhnc" class="yhnc"></span>
                                    <span v-text="value.sum" class="ydjl"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
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
            selected: '1',
        }
    },
    created() {
        // 用户积分
        axios.get('http://no37.store:8080/AK/MoveTop',{
            params: {
                yhid:localStorage.getItem("yhid"),TimeOne:2,
            }})
            .then(response=>{
                // console.log(response);
                this.run_list = response.data;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
    },
    methods: {
        showList() {
            axios.get('http://no37.store:8080/AK/MoveTop',{
                params: {
                    yhid:localStorage.getItem("yhid"),TimeOne:this.selected,
                }})
                .then(response=>{
                    // console.log(response);
                    this.run_list = response.data;
                })      //获取失败
                .catch(error=>{
                    alert('网络错误，不能访问');
                })
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
        background: linear-gradient(top,#bed3df,#fcefd5);
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    #back_bar {
        position: relative;
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
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
    .tishi {
        border-radius: 7px;
        width: 95%;
        height: 3em;
        max-width: 550px;
        background-color: white;
        background: rgba(255, 255, 255, 0.7);
        left: 0;
        right: 0;
        margin: 0 auto 1ex;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .select_list {
        width: 100%;
        /* border: 1px solid red; */
    }
    .mint-navbar{
        width: 95%;
        max-width: 550px;
        margin: 0 auto;
        border-radius: 0 0 7px 7px;
        background-color: rgba(255, 255, 255, 0.7);
    }
    .mint-tab-item {
        color: black;
        font-size: 15px !important;
    }
    .mint-navbar .mint-tab-item.is-selected {
        color: #ca884b;
        border-color: #ca884b;
    }
    .toper {
        /* border: 1px solid red; */
        width: 93%;
        max-width: 550px;
        margin: 0 auto;
        padding: 10px;
        /* margin-top: 40px; */
        display: flex;
        align-items: center;
    }
    .top_one {
        position: relative;
        width: 20%;
        max-width: 80px;
        border-radius: 25%;
    }
    .list_box {
        /* border: 1px solid red; */
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
        padding: 8px 0;
        list-style: none;
    }
    li {
        /* border: 1px solid red; */
        width: 93%;
        display: flex;
        margin: 0 auto;
        /* margin-bottom: 10px; */
        flex-direction: column;
    }
    .toplist {
        margin-left: 1em;
    }
    .list_hr {
        width: 93%;
        margin: 8px auto;
    }
    .list_details {
        display: flex;
        justify-content: space-between;
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
