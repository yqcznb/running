<template>
    <div id="pinform">
        <div id="back_bar">
            <router-link :to='$route.params.backey' @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        <div id="photo_name">
            <router-link to="">
                <div id="photo">
                    <span class="left-text head_title">头像</span>
                    <img :src='headportrait' class="headportrait">
                </div>
            </router-link>
            <hr>
            <router-link to="">
                <div id="name">
                    <span><span class="name_title">昵称</span><span class="rightname" v-text="user_name"></span></span><i class="iconfont iconfanhui iconfont-right"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'pinform',
    data() {
        return{
            user_name: '',
            headportrait: '',
        }
    },
    created() {
        // 用户积分
        axios.get('http://no37.store:8080/AK/ShowMe',{
            params: {
                yhid:localStorage.getItem("yhid"),
            }})
            .then(response=>{
                console.log(response);
                this.user_name = response.data.yhnc;
                this.headportrait = response.data.yhtx;
            })      
            //获取失败
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
    #pinform {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    #back_bar a {
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
    #photo_name {
        width: 93%;
        height: 16%;
        border-radius: 7px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-indent: 1em;
        text-align: left;
        margin: 0 auto;
        line-height: 200%;
        font-size: 110%;
        margin-bottom: 2%;
    }
    hr {
        width: 88%;
        position: absolute;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    #photo {
        display: flex;
        justify-content: space-between;
        padding-right: 2%;

    }
    .headportrait {
        border-radius: 7px;
        position: relative;
        width: 40px;
    }
    .iconfont-right {
        font-size: 20px;
        color: #999999;
        margin-right: 0;
        position: absolute;
        right: 7%;
    }
    .head_title,.name_title {
        color: black;
    }
    .left-text,.headportrait {
        display: flex;
        justify-content: space-around;
    }
    .rightname {
        font-size: 50%;
        color: #999999;
        display: inline-block;
        float: right;
        margin-right: 10%;
    }
</style>

