<template>
    <div add_interface>

        <div class="back_bar">
            <router-link to="/footer/pet" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">添加好友</span>
        </div>

        <div class="add_bottom">
            <ul>
                <li class="list1">
                    <div class="head_img">
                        <img src="../../assets/img/tx.jpeg" alt="">
                    </div>
                    <div class="context">
                        <p class="u_name">{{user_name}}<i :class="[isYrz, isWrz]" @click="pdrz()"></i></p>
                        <p class="c_fd">{{weishu}}位共同好友</p>
                    </div>
                    <div class="add_btn">
                        <mt-button type="primary" size="small" @click="add_quest">添加好友</mt-button>
                    </div>
                </li>
                <li class="list1">
                    <div class="head_img">
                        <img src="../../assets/img/tx.jpeg" alt="">
                    </div>
                    <div class="context">
                        <p class="u_name">{{user_name}}<i :class="[isYrz, isWrz]" @click="pdrz()"></i></p>
                        <p class="c_fd">{{weishu}}位共同好友</p>
                    </div>
                    <div class="add_btn">
                        <mt-button type="primary" size="small" @click="add_quest">添加好友</mt-button>
                    </div>
                </li>
                <li class="list1">
                    <div class="head_img">
                        <img src="../../assets/img/tx.jpeg" alt="">
                    </div>
                    <div class="context">
                        <p class="u_name">{{user_name}}<i :class="[isYrz, isWrz]" @click="pdrz()"></i></p>
                        <p class="c_fd">{{weishu}}位共同好友</p>
                    </div>
                    <div class="add_btn">
                        <mt-button type="primary" size="small" @click="add_quest">添加好友</mt-button>
                    </div>
                </li>
                <li class="list1">
                    <div class="head_img">
                        <img src="../../assets/img/tx.jpeg" alt="">
                    </div>
                    <div class="context">
                        <p class="u_name">{{user_name}}<i :class="[isYrz, isWrz]" @click="pdrz()"></i></p>
                        <p class="c_fd">{{weishu}}位共同好友</p>
                    </div>
                    <div class="add_btn">
                        <mt-button type="primary" size="small" @click="add_quest">添加好友</mt-button>
                    </div>
                </li>
                <li class="list1">
                    <div class="head_img">
                        <img src="../../assets/img/tx.jpeg" alt="">
                    </div>
                    <div class="context">
                        <p class="u_name">{{user_name}}<i :class="[isYrz, isWrz]" @click="pdrz()"></i></p>
                        <p class="c_fd">{{weishu}}位共同好友</p>
                    </div>
                    <div class="add_btn">
                        <mt-button type="primary" size="small" @click="add_quest">添加好友</mt-button>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>


<script>
    // import DrawerLayout from 'vue-drawer-layout'
    import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return{
                user_name: '啦啦',
                weishu: 1,
                isYrz: 'iconfont iconyirenzhen',
                isWrz: 'iconfont iconFil',
            }
        },
        methods:{
            pdrz(){
                if(1){
                    this.isYrz = "iconfont iconyirenzheng";
                }else{
                    this.isWrz = "iconfont iconFill";
                }
            },
            add_quest(){
                MessageBox.alert('已发送请求').then(action => {
  
                });
            },
        },
        mounted(){
            this.pdrz();
        },
        components:{

        },
    }
</script> 


<style scoped>
    *{margin: 0;padding: 0;list-style:none;}

    .add_interface{
        width: 100%;
        height: 100%;
    }
/* 返回栏 */
    .back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }

    .back_bar .title {
        color: rgb(222, 198, 116);
        position: absolute;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .add_bottom{
        width: 100%;
        height: 90%;
        background-color: rgb(212, 146, 146); 
        position: absolute;
    } 

    .add_bottom .list1{
        width: 100%;
        height: 80px;
        background-color: #ccc;
        border-bottom: 2px solid rgb(222, 198, 116); 
    }

    /* 头像 */
    .add_bottom .list1 .head_img{
        width: 60px;
        height: 60px;
        margin: 10px 0 0 -30px;
        display: inline-block;
    }

    .add_bottom .list1 .head_img img{
        width: 60px;
        height: 60px;
    }

    /* 内容 */
    .add_bottom .list1 .context{
        width: 120px;
        height: 60px;
        /* padding-left: 10px;
        line-height: 20px; */
        display: inline-block;
    }
    
    .add_bottom .list1 .context .u_name{
        line-height: 40px;
    }

    .add_bottom .list1 .add_btn{
        width: 120px;
        height: 60px;
        display: inline-block;
        line-height: 80px;
        text-align: right;
    }
</style>