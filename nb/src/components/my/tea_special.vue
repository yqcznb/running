<template>
    <div id="tea_special">
        <div id="back_bar">
            <router-link to='/footer/my' @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">本月学生跑步数据</span>
        </div>
        <div class="list_box">
            <div class="toper">
                <img src="../../assets/img/my/rank_list/20.png" alt="" class="toper_bonus">
                <span v-text="stu_run_data[0].yhnc" class="nc_toper"></span>
                <img :src="stu_run_data[0].yhtx" alt="" class="top_one">
            </div>
            <div class="tishi">
                <span>TOP</span>
                <span>头像</span>
                <span class="yhnc">昵称</span>
                <span class="ydjl">公里</span>
            </div>
            <div class="list_bottle" id="container">
                <ul>
                    <li v-for="(value, key) in stu_run_data">
                        <hr v-if="key" class="list_hr">
                        <div class="list_details">
                            <span v-text="key+1" class="toplist"></span>
                             <img :src="value.yhtx" alt="" class="list_img">
                            <span v-text="value.yhnc" class="yhnc"></span>
                            <span v-text="value.ydjl" class="ydjl"></span>
                        </div>
                    </li>
                </ul>
                    </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'on',
    data() {
        return {
            backlink: 'settings',
            stu_run_data: [],
        }
    },
    created() {
        axios.get('http://no37.store:8080/AK/SelectAllxsID',{
            params: {
                yhid:localStorage.getItem("yhid"),
            }
        }).then(response=>{
            // console.log(response);
            this.stu_run_data = response.data;
        })      //获取失败
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
    },
    methods: {
        
    }
}
</script>
<style scoped>
    #tea_special {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,#bed3df,#fcefd5);
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    #back_bar {
        width: 100%;
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
        position: fixed;
    }
    .title {
        color: #dec674;
        position: fixed;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .list_box {
        margin-top: 2em;
        width: 100%;
        max-height: 94%;
        overflow-y: scroll;
        overflow-x: hidden;
        /* border: 1px solid red; */
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
    .toper_bonus {
        width: 10%;
        margin-right: 1ex;
    }
    .top_one {
        position: relative;
        width: 20%;
        max-width: 80px;
        border-radius: 25%;
        margin-left: 1em;
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
    .list_bottle {
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
        width: 93%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
    }
    .toplist {
        margin-left: 1ex;
    }
    .list_hr {
        width: 99%;
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
