<template>

    <div class="pet_interface">

        <div class="pet_head">
            <ul class="head">
                <li class="xiaoqu">{{xiaoqu}}</li>
                <li class="tongzhi"><i  class="iconfont icongonggao"></i>{{tongzhi}}</li>
            </ul>
        </div>
            
            <!-- 宠物部分 -->
            <div class="pet_interface_pet">

                <!-- 宠物上半部分 -->
                <div class="pet_interface_pet_top">

                    <!-- 三个圈 -->
                    <ul>
                        <li>
                            <p>血量</p>
                            <img src="../../assets/img/pet/blood.png" id="mcontent" @click="blood">
                            
                        </li>
                        <li>
                            <p>技能</p>
                            <img src="../../assets/img/pet/skill.png" id="mcontent" @click="skill">
                            
                         </li>
                        <li>
                            <p>武力</p>
                            <img src="../../assets/img/pet/force.png" id="mcontent" @click="force">
                            
                        </li>
                    </ul>

                    <!-- 背包 -->
                    <div class="bag_img">
                        <p>背包</p>
                        <img src="../../assets/img/pet/gbag.png" alt="">
                    </div>
                </div>
               

                <!-- 进度条 -->
                <div class="progress_bar">
                    <p>孵化进度</p>
                </div>

                <!-- 宠物蛋 -->
                <div class="egg_img"></div>
                
            </div>

               
                <div class="frame">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="visible" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul>
                            <li class="f_title">
                                <i class="iconfont iconcsgo-blood"></i>
                                {{f_title}}
                            </li>
                            <li class="haoyou">
                                <i class="iconfont iconhaoyou1"></i>
                                <span>邀请好友一起玩吧</span>
                                <span class="add_haoyou">添加
                                    <i class="iconfont icontianjiahaoyou"></i>      
                                 好友</span>
                            </li>

                            <li class="list_my">
                                <i class="iconfont icon5"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}(我自己)
                                <span>{{f_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_one">
                                <i class="iconfont icondiyiming"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{f_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_two">
                                <i class="iconfont icondierming1"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{f_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_three">
                                <i class="iconfont icondisanming1"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{f_title}}值为{{blood_one}}</span>
                            </li>
                        </ul>
                    </mt-popup>
                </div>

                <div class="frame_skill">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="visible_skill" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul>
                            <li class="f_title">
                                <i class="iconfont icondaoshijineng"></i>
                                {{s_title}}
                            </li>
                            <li class="haoyou">
                                <i class="iconfont iconhaoyou1"></i>
                                <span>邀请好友一起玩吧</span>
                                <span class="add_haoyou">添加
                                    <i class="iconfont icontianjiahaoyou"></i>      
                                 好友</span>
                            </li>

                            <li class="list_my">
                                <i class="iconfont icon5"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}(我自己)
                                <span>{{s_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_one">
                                <i class="iconfont icondiyiming"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{s_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_two">
                                <i class="iconfont icondierming1"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{s_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_three">
                                <i class="iconfont icondisanming1"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{s_title}}值为{{blood_one}}</span>
                            </li>
                        </ul>
                    </mt-popup>
                </div>


                <div class="frame_force">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="visible_force" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul>
                            <li class="f_title">
                                <i class="iconfont iconbaozhangliliangweihukaobei"></i>
                                {{e_title}}
                            </li>
                            <li class="haoyou">
                                <i class="iconfont iconhaoyou1"></i>
                                <span>邀请好友一起玩吧</span>
                                <span class="add_haoyou">添加
                                    <i class="iconfont icontianjiahaoyou"></i>      
                                 好友</span>
                            </li>

                            <li class="list_my">
                                <i class="iconfont icon5"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}(我)
                                <span>{{e_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_one">
                                <i class="iconfont icondiyiming"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{e_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_two">
                                <i class="iconfont icondierming1"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{e_title}}值为{{blood_one}}</span>
                            </li>
                            <li class="list_three">
                                <i class="iconfont icondisanming1"></i>
                                <div class="head_frame">
                                    <img src="../../assets/img/tx.jpeg" alt="">
                                </div>
                                {{user_name}}
                                <span>{{e_title}}值为{{blood_one}}</span>
                            </li>
                        </ul>
                    </mt-popup>
                </div>
    </div>
</template>

      
<script>
    import { picker,} from 'mint-ui';
    export default {
        name: 'pet_head',
        name: 'frame',
        data(){
            return{
                xiaoqu: '青岛工学院校区',
                tongzhi: '官方通知：-------',
                visible: false,
                visible_skill: false,
                visible_force: false,
                f_title: '血量',
                s_title: '技能',
                e_title: '武力',
                blood_one: 10,
                user_name: 'hjw',
            }
        },
        methods:{
            blood:function(){
                this.visible = true;
            },
            skill(){
                this.visible_skill = true;
            },
            force(){
                this.visible_force = true;
            },
        },
        mounted(){},
        components:{
            picker
        }

    }
</script>


<style scoped>
    *{margin: 0;padding: 0;list-style: none;}

    #div {
        width: 0px;
		height: 0px;
		background: red;
		position: fixed;
		top: 70%;
		left: 50%;
	}
			
	.mui-popover .mui-popover-arrow:after {
		width: 0px;
	}


    .pet_interface{
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
    }

    .pet_head .head{
        display: flex;
        text-align: left;
        padding: 0;
        width: 100%;
        margin-top: 0;
        flex-direction: column;
    }

    .pet_head .head .xiaoqu{
        border-bottom:2px solid rgb(102, 96, 92);
        text-align: left;
        font-size: 20px;
        background:rgb(238, 242, 243);
        padding: 10px;
    }

    .pet_head .head li i{
        padding: 5px 10px;
        color: rgb(231, 46, 170);
        font-size: 20px; 
    }
    .pet_head .head .tongzhi{
        text-align: left;
        background:rgb(208, 210, 211);
        padding: 3px;
    }
    

    /* 宠物部分 */
    .pet_interface_pet{
        width: 100%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* 圆圈和背包 */
    .pet_interface_pet_top{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-between;
    }

    /* 圆圈 */
    .pet_interface_pet_top ul li{
        /* margin-bottom: 3%; */
    }

    .pet_interface_pet_top ul li img{
        width: 40%;
    }

    /* 背包 */
    .pet_interface_pet_top .bag_img{
        /* margin-right: 5%; */
    }

    /* 设置背包图片的大小 */
    .pet_interface_pet_top .bag_img img{
        width: 40%;
    }
    

    /* 进度条 */
    .progress_bar{
        display: flex;
        width: 120px;
        height: 60px;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 20px;
        margin: 20% auto 0;
    }

    .progress_bar p{
        color: rgb(104, 206, 247);
        margin: 3% auto 0;
    }


    /* 宠物蛋 */
     .egg_img{
        display: flex;
        background-image: url(../../assets/img/pet/gegg.png);
        background-repeat: no-repeat;
        width: 100%;
        background-position: center;
        background-size: auto 100%;
        height: 100%;
    }


    /* 弹框 */
    /* 血量 */
    .frame .f_title{
        width: 100%;
        height: 50px;
        line-height: 30px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(184, 181, 181);
    }

     .frame .f_title i{
         color: rgb(230, 28, 28);
     }

    .frame .haoyou{
        width: 100%;
        height: 40px;
        line-height: 20px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        background-color: rgb(233, 233, 211);
    }

    .frame .haoyou i{
        color: rgb(0, 174, 255); 
    }

    .frame .haoyou .add_haoyou{
        display: inline-block;
        padding-left: 35px;
    }

    .frame .list_one{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame .list_one i{
        color: rgb(226, 223, 42);
        padding: 10px 10px;
    }

    .frame .list_one .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame .list_one .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame .list_one span{
        display: inline-block;
        margin-left: 10px;
    }


     .frame .list_two{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame .list_two i{
        color: rgb(168, 165, 161);
        padding: 10px 10px;
    }

    .frame .list_two .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame .list_two .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame .list_two span{
        display: inline-block;
        margin-left: 10px;
    }
    

    .frame .list_three{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame .list_three i{
        color: rgb(240, 169, 76);
        padding: 10px 10px;
    }

    .frame .list_three .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame .list_three .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame .list_three span{
        display: inline-block;
        margin-left: 10px;
    }


    .frame .list_my{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(121, 211, 238, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame .list_my i{
        color: rgb(240, 169, 76);
        padding: 10px 10px;
    }

    .frame .list_my .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame .list_my .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame .list_my span{
        display: inline-block;
        margin-left: 10px;
    }


    /* 技能 */
    .frame_skill .f_title{
        width: 100%;
        height: 50px;
        line-height: 30px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(184, 181, 181);
    }

     .frame_skill .f_title i{
         color: rgb(28, 173, 230);
     }

    .frame_skill .haoyou{
        width: 100%;
        height: 40px;
        line-height: 20px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        background-color: rgb(233, 233, 211);
    }

    .frame_skill .haoyou i{
        color: rgb(0, 174, 255); 
    }

    .frame_skill .haoyou .add_haoyou{
        display: inline-block;
        padding-left: 35px;
    }

    .frame_skill .list_one{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_skill .list_one i{
        color: rgb(226, 223, 42);
        padding: 10px 10px;
    }

    .frame_skill .list_one .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_skill .list_one .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_skill .list_one span{
        display: inline-block;
        margin-left: 10px;
    }


     .frame_skill .list_two{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_skill .list_two i{
        color: rgb(168, 165, 161);
        padding: 10px 10px;
    }

    .frame_skill .list_two .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_skill .list_two .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_skill .list_two span{
        display: inline-block;
        margin-left: 10px;
    }
    

    .frame_skill .list_three{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_skill .list_three i{
        color: rgb(240, 169, 76);
        padding: 10px 10px;
    }

    .frame_skill .list_three .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_skill .list_three .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_skill .list_three span{
        display: inline-block;
        margin-left: 10px;
    }


    .frame_skill .list_my{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(121, 215, 238, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_skill .list_my i{
        color: rgb(240, 169, 76);
        padding: 10px 10px;
    }

    .frame_skill .list_my .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_skill .list_my .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_skill .list_my span{
        display: inline-block;
        margin-left: 10px;
    }



    /* 武力 */
    .frame_force .f_title{
        width: 100%;
        height: 50px;
        line-height: 30px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(184, 181, 181);
    }

     .frame_force .f_title i{
         color: rgb(230, 28, 163);
     }

    .frame_force .haoyou{
        width: 100%;
        height: 40px;
        line-height: 20px;
        padding: 10px 10px;
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        background-color: rgb(233, 233, 211);
    }

    .frame_force .haoyou i{
        color: rgb(0, 174, 255); 
    }

    .frame_force .haoyou .add_haoyou{
        display: inline-block;
        padding-left: 35px;
    }

    .frame_force .list_one{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_force .list_one i{
        color: rgb(226, 223, 42);
        padding: 10px 10px;
    }

    .frame_force .list_one .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_force .list_one .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_force .list_one span{
        display: inline-block;
        margin-left: 10px;
    }


     .frame_force .list_two{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_force .list_two i{
        color: rgb(168, 165, 161);
        padding: 10px 10px;
    }

    .frame_force .list_two .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_force .list_two .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_force .list_two span{
        display: inline-block;
        margin-left: 10px;
    }
    

    .frame_force .list_three{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(255, 255, 255, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_force .list_three i{
        color: rgb(240, 169, 76);
        padding: 10px 10px;
    }

    .frame_force .list_three .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_force .list_three .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_force .list_three span{
        display: inline-block;
        margin-left: 10px;
    }


    .frame_force .list_my{
        width: 100%;
        height: 50px;
        line-height: 40px;
        padding: 10px 10px;
        background-color: rgb(121, 215, 238, 0.8);
        border-bottom: 1px solid rgb(184, 181, 181);
        text-align: left;
        font-size: 5px;
    }

    .frame_force .list_my i{
        color: rgb(240, 169, 76);
        padding: 10px 10px;
    }

    .frame_force .list_my .head_frame{
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid rgb(184, 181, 181);
        border-radius: 50%;
        margin-left: 10px;
    }

    .frame_force .list_my .head_frame img{
        width: 30px;
        height: 30px;
        border-radius: 50%; 
    }

    .frame_force .list_my span{
        display: inline-block;
        margin-left: 10px;
    }
</style>


