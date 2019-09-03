<template>
    <div id="switchid">
        <div id="back_bar">
            <router-link to='/settings'>
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">切换账号</span>
        </div>
        <div id="headportrait">
            <div class="switchid_img">
                <img :src="hportSrc" alt=""> <span v-text="id_name"></span>
            </div>
            <span class="iconfont icontiyu-paobu"></span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'switchid',
    data() {
        return {
            backlink: 'settings',
            hportSrc: '',
            id_name: '',
        }
    },
    created() {
        // 账号请求
        axios.get('http://no37.store:8080/AK/ShowMe',{
            params: {
                yhid:localStorage.getItem("yhid"),
                // yhid:28,
            }})
            .then(response=>{
                console.log(response);
                // this.uname = response.data.yhnc;
                this.hportSrc = response.data.yhtx;
                this.id_name = response.data.yhzh;
            })      //获取失败
            .catch(error=>{
                alert('网络错误，不能访问');
            })
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
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
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
    .title {
        color: #dec674;
        position: absolute;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    #headportrait {
        position: relative;
        width: 93%;
        height: 8%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        background-color: white;
        color: black;
        border-radius: 7px;
        height: 8%;
        align-items: center;
        text-indent: 1em;
        font-size: 110%;
        margin-bottom: 2%;
        padding-right: 2%;
    }
    .switchid_img {
        height: 100%;
        display: flex;
        align-items: center;
    }
    img {
        height: 80%;
        position: relative;
        margin-left: 5%;
        border-radius: 10%;
    }
    i {
        color: #dec674;
    }
    .icontiyu-paobu:before {
        color: #dec674;
        font-size: 30px;
        float: right;
    }
</style>
