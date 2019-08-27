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
                    <span class="head_left head_title">头像</span>
                    <span class="head_right">
                        <img :src='headportrait' class="headportrait"><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
            <hr>
            <router-link to="">
                <div id="name">
                    <span class="name_left name_title">昵称</span>
                    <span class="name_right">
                        <span v-text="user_name" class="user_name"></span><i class="iconfont iconfanhui iconfont-right"></i>
                    </span>
                </div>
            </router-link>
        </div>
        
        <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>

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
            file: {},
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
        update(e){
            let file = e.target.files[0];
            let param = new FormData(); //创建form对象
            param.append('file',file);//通过append向form对象添加数据
            console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            axios.get('http://no37.store:8080/AK/AddPhoto',{
                params: {
                    yhid:localStorage.getItem("yhid"),file:param,
                }})
            .then(response=>{
                console.log(response.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
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
        height: 17%;
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
        align-items: center;
        /* padding-right: 13px; */
    }
    #name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding-right: 13px; */

    }
    .head_right,.name_right {
        width: 25%;
        max-width: 90px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 12px;
    }
    .headportrait {
        border-radius: 7px;
        position: relative;
        width: 55%;
        min-width: 44px;
        margin-right: 7%;
    }
    .iconfont-right {
        font-size: 20px;
        color: #999999;
        /* margin-right: 0; */
        /* right: 7%; */
    }
    .head_title,.name_title {
        color: black;
    }
    .user_name {
        font-size: 50%;
        color: #999999;
        display: inline-block;
        /* margin-right: 10%; */
    }
</style>

