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
                            <p class="title">血量</p>
                            <!-- <img src="../../assets/img/pet/blood.png"  @click="blood"> -->
                            <div id="mycharts"></div>
                            
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

                    <!-- <router-link to="/bag"> -->
                        <div class="bag_img" @click="bag">
                            <p>背包</p>
                            <img src="../../assets/img/pet/gbag.png" alt="" >
                        </div>
                    <!-- </router-link> -->
                    
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

               <!-- 血量界面 -->
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

                <!-- 技能界面 -->
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

                <!-- 武力界面 -->
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

                    <!-- 进度条提示框 -->
                    <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="center" style="width: 150px;height:50px;border-radius:15px;margin:50px 0 0 50px;color:rgb(255, 218, 203);border:2px solid rgb(255, 218, 203);">
                        <p>当前的运动量为xxx,继续加油哦</p>
                    </mt-popup>
                </div>
    </div>
</template>

      
<script>
    import { picker,} from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import { Popup } from 'mint-ui';
    import echarts from 'echarts';
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
                popupVisible: false,
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
        // 后台接口获取官方通知的内容
        created:function(){
            this.axios.get('',{
                params: {
                    yhid: localStorage.getItem("yhid"),     
                }
            }).then(response=>{
            
                });
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
                // 后台获取用户公里数，更新进度
                let yhid = localStorage.getItem("yhid");

                this.axios.get('',{
                    params: {
                        yhid:yhid,
                    }
                }).then(response=>{
                    
                    });

                this.Width = {
                    'width': this.num + 'px',
                };
                this.ber_num = (this.num / 120)*100;
                this.ber_num = this.ber_num.toFixed(2);
                if(this.num == 0){
                    this.see = true;
                    this.ber = false;
                }
                if(this.num >= 120){
                    this.num = 120;
                    // this.blood = true;
                    this.popupVisible = false;
                }else{
                    this.blood = false;
                    this.skill = false;
                    this.force = false;
                    this.bag = false;
                    this.g_egg = true;
                    this.popupVisible = true;
                }
                
            },
            drawdata(){
                let mycharts = this.$echarts.init(document.getElementById('mycharts'));
                mycharts.setOption({
                    // title : {
                    //     text: '某站点用户访问来源',
                    //     subtext: '纯属虚构',
                    //     x:'center'
                    // },
                    // tooltip : {
                    //     trigger: 'item',
                    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                    // },
                    // legend: {
                    //     orient: 'vertical',
                    //     left: 'left',
                    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    // },
                    series : [
                        {
                            // name: '访问来源',
                            type: 'pie',
                            radius : '80%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'',itemStyle: {color: 'rgb(230, 28, 28)'}},
                                {value:310, name:'',itemStyle: {color: '#eeede2'}},
                                // {value:234, name:'联盟广告'},
                                // {value:135, name:'视频广告'},
                                // {value:1548, name:'搜索引擎'}
                            ],
                            // itemStyle: {
                            //     emphasis: {
                            //         shadowBlur: 10,
                            //         shadowOffsetX: 0,
                            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                            //     }
                            // }
                        }
                    ]
                });

            },

            
            
            egg_pet(){
                if(this.num<120){
                    MessageBox.confirm('当前跑步值不足孵出宠物, 是否前往跑步?', '提示', {
                        confirmButtonText: '前往',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                        // window.location.href='../footer/index/run?#/footer/index/run';  
                        this.$router.replace('/footer/index/run');  
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
            bag(){
                this.$router.replace('/bag'); 
            }
        },
        mounted(){
            this.bar();
            if(this.num >= 120){
                this.egg_pet();
            };
            this.drawdata();
            
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


