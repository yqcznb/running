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
                            <img src="../../assets/img/pet/blood.png"  @click="blood">
                            
                        </li>
                        <li>
                            <p>技能</p>
                            <img src="../../assets/img/pet/skill.png"  @click="skill">
                            
                         </li>
                        <li>
                            <p>武力</p>
                            <img src="../../assets/img/pet/force.png"  @click="force">
                            
                        </li>
                    </ul>

                    <!-- 背包 -->

                    <router-link to="/bag">
                        <div class="bag_img">
                            <p>背包</p>
                            <img src="../../assets/img/pet/gbag.png" alt="" >
                        </div>
                    </router-link>
                    
                </div>
               

                <!-- 进度条 -->
                
                <div @click="bar" class="progress_bar" v-if="b_bar">
                    <p v-if="see">孵化进度</p>
                    <div class="clip" :style="{width: num + 'px'}"></div>
                </div>
                <span class="bar_number" v-if="ber">{{ber_num}}<i>%</i></span>

                <!-- 宠物蛋 -->
                <div :class="[isTrue, isFalse]" :v-if="g_egg" @click="egg_pet"></div>
                <!-- 宠物 -->
                <!-- <div class="bimg"></div> -->
                
                
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
                                
                                    <span class="add_haoyou">
                                        添加
                                    <router-link to="/addfd"><i class="iconfont icontianjiahaoyou"></i></router-link>    
                                        好友
                                    </span>
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
                                    <router-link to="/addfd"><i class="iconfont icontianjiahaoyou"></i>  </router-link>    
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
                                    <router-link to="/addfd"><i class="iconfont icontianjiahaoyou"></i>  </router-link>    
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


                <!-- <div class="bag_interface">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="m_bag" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul class="bag_head">
                            <li class="title">
                                <span class="left">装备</span> 
                                <span class="right">技能</span>
                            </li>
                        </ul>

                        <ul class="bag_body">
                            <li class='zb_title'>
                                <span>武器</span>
                                <span>武装</span>
                                <span>药品</span>
                            </li>

                            <li class="wuqi" :v-if="wuqi">
                                <div class="wq_one">
                                    <i class="iconfont iconwuqihui"></i>
                                    <p>武力+1</p>
                                </div>
                                <div class="wq_one">
                                    <i class="iconfont iconwuqilan" style="color: blue;"></i>
                                    <p>武力+1</p>
                                </div>
                                <div class="wq_one">
                                    <i class="iconfont iconkaiheifangjian-iCON_bisai-wuqi"></i>
                                    <p>武力+1</p>
                                </div>
                                <div class="wq_one">
                                    <i class="iconfont iconwuqi" style="color: purple;"></i>
                                    <p>武力+1</p>
                                </div>
                                <div class="wq_one">
                                    <i class="iconfont iconwuqix"></i>
                                    <p>武力+1</p>
                                </div>
                                <div class="wq_one">
                                    <i class="iconfont iconwuqizhuangbeishezhi"></i>
                                    <p>武力+1</p>
                                </div>
                                <div class="wq_one">
                                    <i class="iconfont iconwuqianniu" style="color: red;"></i>
                                    <p>武力+1</p>
                                </div>
                            </li>
                        </ul>
                    </mt-popup>
                </div> -->
    </div>
</template>

      
<script>
    import { picker,} from 'mint-ui';
    import { MessageBox } from 'mint-ui'
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
                see: false,
                wuqi: false,
                ber: true,
                g_egg: false,
                b_bar: true,
                // isFirst: 1,
                
                isTrue: 'bim',
                isFalse: 'egg_img',
                f_title: '血量',
                s_title: '技能',
                e_title: '武力',
                blood_one: 10,
                user_name: 'hjw',
                num: 120,
                ber_num: 0,
                Width:{
                    'width': '0px',
                },
                
            }
        },
        created:function(){
            
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
            bar(){
                this.Width = {
                    'width': this.num + 'px',
                }
                this.ber_num = (this.num / 120)*100;
                this.ber_num = this.ber_num.toFixed(2);
                if(this.num == 0){
                    this.see = true;
                    this.ber = false;
                }
                if(this.num >= 120){
                    this.num = 120;
                    // this.blood = true;
                }else{
                    this.blood = false;
                    this.skill = false;
                    this.force = false;
                    this.g_egg = true;
                }
            },
            egg_pet(){
                if(this.num<120){
                    MessageBox.confirm('当前跑步值不足孵出宠物, 是否前往跑步?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                        window.location.href='../footer/index/run?#/footer/index/run';    
                        //   window.location.href='../run#/footer/pet/gpet';
                        }).catch(() => {
                        MessageBox.message({
                            
                        });          
                    });
                }else if(this.num>=120&&localStorage.getItem("egg_success"))
                {
                        MessageBox.alert('运动值已满，成功为您孵出宠物', '提示', {
                        confirmButtonText: '确定',
                    }).then(()=>{
                             localStorage.removeItem("egg_success");
                    })
                    this.isTrue = 'bimg';
                    this.b_bar = false;
                    this.ber = false;
                }  
                else{
                    this.isTrue = 'bimg';
                    this.b_bar = false;
                    this.ber = false;
                } 
            },
        },
        mounted(){
            this.bar();
            this.egg_pet();
        },
        components:{
            picker  
        }

    }
</script>


<style scoped>
   @import "../../../src/assets/css/gpet.css";
   /* 背包弹窗 */
   /* 头部 */
   .bag_interface .bag_head .title{
       height: 50px;
       line-height: 50px;
       border-bottom: 1px solid rgb(184, 181, 181);
       
   }

    .bag_interface .bag_head .title .left{
        float: left;
        margin-left: 50px;
    }

    .bag_interface .bag_head .title .right{
        float: right;
        margin-right: 50px;
    }

/* 内容 */
    .bag_interface .bag_body .zb_title{
       height: 40px;
       line-height: 40px;
       border-bottom: 1px solid rgb(184, 181, 181);
    }

    .bag_interface .bag_body .wuqi{
        width: 100%;
        height: 60px;
    }

    .bag_interface .bag_body .wuqi .wq_one{
        display: inline-block;
        width: 80px;
        height: 80px;
        border: 1px solid rgb(85, 175, 236);
    }

    .bag_interface .bag_body .wuqi .wq_one i{
        display: block;
        margin: 10px 0 10px 0;
    }

    /* 宠物 */
    .bimg{
        /* margin: 50% 0 0 40%; */
        margin:0 auto 20%;
        width: 83px;
        height: 100px;
        animation: run 0.6s steps(1, start) infinite;
        -webkit-animation:run 0.6s steps(1, start) infinite;
        background: url('../../assets/img/pet/111.png');
    }
    @keyframes run{   
           0%{
               background-image: url('../../assets/img/pet/111.png');
           }
           30%{
               background-image: url('../../assets/img/pet/222.png');
           }
           60%{
               background-image: url('../../assets/img/pet/33.png');
           }
           100%{
               background-image: url('../../assets/img/pet/55.png');
           }
        }   
        @-webkit-keyframes run{   
            0%{
               background-image: url('../../assets/img/pet/111.png');
           }
           30%{
               background-image: url('../../assets/img/pet/222.png');
           }
           60%{
               background-image: url('../../assets/img/pet/33.png');
           }
           100%{
               background-image: url('../../assets/img/pet/55.png');
           }
        }   
</style>


