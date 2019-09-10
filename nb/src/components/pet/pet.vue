<template>

    <div class="pet_interface">

        <div class="pet_head">
            <ul class="head">
                <router-link to="/confirm"  @click.native="routerRefresh">
                    <li class="xiaoqu" v-if="show1">{{xiaoqu1}}</li>
                </router-link>
                <li class="xiaoqu" v-if="show">{{xiaoqu}}</li>
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
                            <div>
                                <div id="mycharts" ></div>
                                <div class="mask" @click="blood"></div>
                            </div> 
                        </li>
                        <li>
                            <div id="mycharts1"></div>
                            <div class="mask1" @click="skill"></div>
                         </li>
                        <li>
                            <div id="mycharts2"></div>
                            <div class="mask2" @click="force"></div>
                            <!-- :style="{color: yanse}" -->
                        </li>
                    </ul>

                    <!-- 背包 -->
                    <!-- <router-link to="/bag"> -->
                        <div class="bag_img" @click="bag">
                            <p>背包</p>
                            <img src="../../assets/img/pet/gbag.png" alt="" >
                        </div>
                    <!-- </router-link> -->  
                      <button class="gensui" @click="switch1" v-if="gensui">
                          {{value}}
                      </button>
                       <button class="bugs" @click="switch2" v-if="bugs">
                          不跟随
                      </button>
                </div>
               

                <!-- 进度条 -->
                <div @click="bar" class="progress_bar" v-if="b_bar">
                    <p v-if="see">孵化进度</p>
                    <div class="clip" :style="{width: num + 'px'}"></div>
                </div>
                <span class="bar_number" v-if="ber">{{ber_num}}<i>%</i></span>


                <!-- 宠物蛋-->
                <div :class="[isTrue, isFalse]" v-if="g_egg" @click="egg_pet"></div>
                
                
                <!-- 宠物 -->
                <!-- <div class="bimg"></div> -->


                <!-- 问号蛋 -->
                <div class="dan" v-if="ber_dan" @click='dan_router'></div>
                
            </div>

               <!-- 宠物信息界面 -->
                <div class="frame">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="visible" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul>
                            <li class="f_title">
                                <i class="iconfont iconxinxi"></i>
                                {{f_title}}
                            </li>
                            <li class="list_my">
                                孵化日期
                            </li> 
                             <li class="list_one">
                                2019-9-9
                            </li>
                            <li class="list_my">
                                宠物等级
                            </li> 
                             <li class="list_one">
                               小小白银
                            </li>
                           
                        </ul>
                    </mt-popup>
                </div>

                <!-- 饥饿度界面 -->
                <div class="frame_skill">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="visible_skill" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul>
                            <li class="f_title">
                                <i class="iconfont iconjie"></i>
                                {{s_title}}
                            </li>
                            <li class="list_my">
                                当前饥饿度为
                            </li> 
                             <li class="list_one">
                                {{jez}}
                            </li>
                        </ul>
                    </mt-popup>
                </div>

                <!-- 加成值界面 -->
                <div class="frame_force">
                    <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="visible_force" style="width:100%;height:60%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">   
                        <ul>
                            <li class="f_title">
                                <i class="iconfont icontianjiachengyuan"></i>
                                {{e_title}}
                            </li>
                            <li class="list_my">
                                当前加成值为
                            </li> 
                            <li class="list_one">
                                {{jcz}}
                            </li>
                            <li class="list_my">
                                说明
                            </li> 
                            <li class="list_one">
                                xxxxxx 
                            </li>
                        </ul>
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
                xiaoqu: '',
                xiaoqu1: '未认证（点击认证）',
                tongzhi: '',
                visible: false,
                visible_skill: false,
                visible_force: false,
                see: false,
                wuqi: false,
                // 百分比显示
                ber: true,
                // 问号蛋显示
                ber_dan: true,
                // 宠物蛋显示
                g_egg: false,
                // 进度条显示
                b_bar: false,
                // isFirst: 1,
                popupVisible: false,
                gensui: false,
                bugs: false,
                show1: true,
                show: false,
                value:"跟随",
                dan_value: '1',
                isTrue: 'bim',
                isFalse: 'egg_img',
                f_title: '宠物信息',
                s_title: '饥饿度',
                e_title: '加成值',
                // yanse: '#000',
                jcz: '0',
                jez: '0',
                switch_index: '0',
                blood_one: 10,
                num: 0,
                ber_num: 0,
                chart1_1:'10',
                chart1_2:'90',
                chart2_1:'10',
                chart2_2:'90',
                chart3_1:'10',
                chart3_2:'90',
                yhid:localStorage.getItem("yhid"),
                Width:{
                    'width': '0px',
                },
            }
        },
        // 后台接口获取官方通知的内容
        created:function(){
            
            this.axios.get('http://no37.store:8080/AK/gonggao1',{
                params: {
                    ggid:1,     
                }
            }).then(response=>{
                    this.tongzhi=response.data.ggnr; 
                }).catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        });
        // 校区认证
        this.axios.get('http://no37.store:8080/AK/SelectXsID',{
            params: {
                yhid:this.yhid
            }
        })
        .then(response=>{
            if(response.data.yhxx!=""&&response.data.yhxx!=null&&response.data.yhxx!=undefined){
                this.xiaoqu = response.data.yhxx;
                // 获取后隐藏认证提示
                this.show1 = false;
                // 显示认证的校区
                this.show = true;
            }
        })      //获取失败
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        })
      //  老师认证信息
        this.axios.get('http://no37.store:8080/AK/SelectJsID',{
                params: {
                    yhid:this.yhid
                }
            }).then(response=>{
                if(response.data.jsxx!=""||response.data.jsxx!=null||response.data.jsxx!=undefined){
                    this.xiaoqu = response.data.jsxx;
                    this.show1 = false;
                    this.show = true;
                }
            })      //获取失败
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            })

       
        },

        methods:{
            bar(){
                // 后台获取用户公里数，更新进度
                this.axios.get('http://no37.store:8080/AK/ShowPet',{
                    params: {
                         yhid:this.yhid
                    }
                }).then(response=>{
                        // 1公里代表进度条12px的宽度
                        this.num = 12*response.data.ydjl;
                    });
                    // 更新进度条
                this.Width = {
                    'width': this.num + 'px',
                };
                this.ber_num = (this.num / 120)*100;
                this.ber_num = this.ber_num.toFixed(2);
                if(this.num == 0){
                    // “孵化进度”字样显示
                    this.see = true;
                    // 进度条占比显示
                    this.ber = false;
                }
                if(this.num >= 120){
                    this.num = 120;
                    this.popupVisible = false;
                    this.b_bar = false;
                    this.ber = false;
                }else{
                    this.popupVisible = true;
                }
                
            },
            // 点击宠物信息触发
            blood:function(){
                if(localStorage.getItem("cw")==1&&this.num >= 120){
                    this.visible = true;
                }else{
                    // 没有宠物时的提示
                    MessageBox.alert('您还未孵出宠物，要多跑步哦', '提示', {
                    confirmButtonText: '确定',
                    }).then(()=>{
                        
                    })
                }  
            },
            // 点击饥饿度触发
            skill(){
                 if(localStorage.getItem("cw")==1&&this.num >= 120){
                    this.visible_skill = true;
                }else{
                    // 没有宠物时的提示
                    MessageBox.alert('您还未孵出宠物，要多跑步哦', '提示', {
                    confirmButtonText: '确定',
                    }).then(()=>{
                        
                    })
                }  
            },
            // 点击加成值触发
            force(){
                if(localStorage.getItem("cw")==1&&this.num >= 120){
                    this.visible_force = true;
                    this.axios.get('http://no37.store:8080/AK/AddValue',{
                    params: {
                         yhid:this.yhid
                    }
                }).then(response=>{
                    console.log(response.data);
                    this.jcz = response.data.yhjc;
                    response.data.yhjed;
                    this.jed = response.data.yhjed;
                });
                }else{
                    // 没有宠物时的提示
                    MessageBox.alert('您还未孵出宠物，要多跑步哦', '提示', {
                    confirmButtonText: '确定',
                    }).then(()=>{
                        
                    })
                } 
            },
            bag(){
                if(this.num >= 120){
                    // 路由跳转-》背包界面
                    this.$router.replace('/bag');
                }else{
                    // 没有宠物时的提示
                    MessageBox.alert('您还未孵出宠物，要多跑步哦', '提示', {
                    confirmButtonText: '确定',
                    }).then(()=>{
                        
                    })
                }  
            },
            routerRefresh() {
                window.location.reload();
            },
            // 绘制图表
            drawdata(){
                let mycharts = this.$echarts.init(document.getElementById('mycharts'));
                let mycharts1 = this.$echarts.init(document.getElementById('mycharts1'));
                let mycharts2 = this.$echarts.init(document.getElementById('mycharts2'));
                // 宠物信息
                mycharts.setOption({
                    title : {
                        text: '宠物信息',
                        x:'center',
                        textStyle: {
                            fontFamily: '方正汉真广标简体',
                            color: '#777c7c96',
                            fontSize: 20,
                            fontWeight: 'normal',
                            fontStyle: 100,
                        },
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '80%',
                            label: {
                                normal: {
                                    position: 'inner',
                                    // 隐藏指示线
                                    show : false
                                }
                            },
                            center: ['50%', '50%'],
                            // 宠物信息图表的颜色及占比
                            data:[
                                {value:this.chart1_1, name:'',itemStyle: {color: 'rgb(230, 28, 28)'}},
                                {value:this.chart1_2, name:'',itemStyle: {color: '#eeede2'}},
                            ],
                        }
                    ]
                });

                // 饥饿度
                mycharts1.setOption({
                    title : {
                        // 图表标题
                        text: '饥饿度',
                        x:'center',
                        // 图表标题样式
                        textStyle: {
                            fontFamily: '方正汉真广标简体',
                            color: '#777c7c96',
                            fontSize: 20,
                            fontWeight: 'normal',
                            fontStyle: 100,
                        },
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '80%',
                            label: {
                                normal: {
                                    position: 'inner',
                                    // 隐藏指示线
                                    show : false
                                }
                            },
                            center: ['50%', '50%'],
                            // 饥饿值图表的颜色及占比
                            data:[
                                {value:this.chart2_1, name:'',itemStyle: {color: 'rgb(85, 175, 236)'}},
                                {value:this.chart2_2, name:'',itemStyle: {color: '#eeede2'}},
                            ],
                        }
                    ]
                });

                // 加成值
                mycharts2.setOption({
                    title : {
                        // 图表标题文字
                        text: '加成值',
                        x:'center',
                        // 标题文字样式
                        textStyle: {
                            fontFamily: '方正汉真广标简体',
                            color: '#777c7c96',
                            fontSize: 20,
                            fontWeight: 'normal',
                            fontStyle: 100,
                        },
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '80%',
                            label: {
                                normal: {
                                    position: 'inner',
                                    // 隐藏指示线
                                    show : false
                                }
                            },
                            center: ['50%', '50%'],
                            // 图表显示颜色及占比
                            data:[
                                {value:this.chart3_1, name:'',itemStyle: {color: 'rgb(231, 46, 170)'}},
                                {value:this.chart3_2, name:'',itemStyle: {color: '#eeede2'}},
                            ],
                        }
                    ]
                });
            }, 
            // 点击宠物蛋触发
            egg_pet(){
                // this.axios.get('http://no37.store:8080/AK/ShowPet',{
                //     params: {
                //         yhid:localStorage.getItem("yhid"),
                //     }
                // }).then(response=>{
                //         this.num = 12*response.data.ydjl;
                //     });
                // 当进度条不满时
                if(this.num<120){
                    MessageBox.confirm('当前跑步值不足孵出宠物, 是否前往跑步?', '提示', {
                        confirmButtonText: '前往',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                        // 跳转到跑步界面  
                        this.$router.replace('/footer/index/run');  
                        }).catch(() => {
                                  
                            }).error(() => {
                                alert('网络出错');
                                });
                    // 进度条刚满时
                }else if(this.num>=120&&localStorage.getItem("egg_success"))
                {   localStorage.setItem("cwgs",1);
                    MessageBox.alert('运动值已满，成功为您孵出宠物', '提示', {
                    confirmButtonText: '确定',
                        // 提示孵出宠物一次后不再提示
                    }).then(()=>{
                        localStorage.removeItem("egg_success");
                    })
                    // 换成宠物的class
                    this.isTrue = 'bimg';
                    // 进度条
                    this.b_bar = false;
                    // 进度条占比
                    this.ber = false;
                    // 宠物蛋
                    this.g_egg = false;
                }  
                else{
                    this.isTrue = 'bimg';
                    this.b_bar = false;
                    this.ber = false;
                } 
            },
            // 点击问号蛋提示
            dan_router(){
                MessageBox.confirm('您还没有宠物蛋, 是否前往跑步抓取?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        // 跳转到跑步界面  
                        this.$router.replace('/footer/index/run');  
                        }).catch(() => {
                                  
                            })
                            // .error(() => {
                            //         alert('网络出错');
                            //     });
            },
        
            switch1(){
                 localStorage.setItem("cwgs",1)
            },
            switch2(){
                 localStorage.removeItem("cwgs")
            },
        },
        mounted(){
                 if(this.num>=120&&localStorage.getItem("egg_success"))
                {
                  
                    localStorage.removeItem("egg_success");
                    
                    // 换成宠物的class
                    this.isTrue = 'bimg';
                    // 进度条
                    this.b_bar = false;
                    // 进度条占比
                    this.ber = false;
                    // 宠物蛋
                    this.g_egg = false;
                    
                }  
                else{
                    this.gensui = true;
                    this.bugs = true;
                    this.isTrue = 'bimg';
                    this.b_bar = false;
                    this.ber = false;
                } 
            this.drawdata();
             this.axios.get('http://no37.store:8080/AK/ShowPet',{
                    params: {
                       yhid:this.yhid
                    }
                }).then(response=>{
                      console.log(response.data.ydjl);
                       response.data.ydjl;
                        this.num = 12*response.data.ydjl;
                        // 计算进度占比
                        if(this.num>=120){
                            this.num = 120;
                        }
                        else{
                            // 进度条
                            this.b_bar = true;
                            // 进度条占比显示
                            this.ber = true;
                            this.g_egg = true;
                            this.isTrue = '';
                            this.gensui = false;
                            this.bugs = false;
                        }
                        this.ber_num = (this.num / 120)*100;
                        this.ber_num = this.ber_num.toFixed(2);
                      if(response.data.cw == 1){
                           // 宠物蛋显示
                            this.g_egg = true;
                            // 问号蛋
                            this.ber_dan = false;
                            if(this.num == 0){
                                // "孵化进度"字样
                                this.see = true;
                            }
                      }else{
                        //   问号蛋
                          this.ber_dan = true;
                          // 进度条
                          this.b_bar = false;
                            // 进度条占比显示
                            this.ber = false;
                        this.g_egg = false;
                        this.gensui = false;
                        this.bugs = false;
                      }
                    });              
        },
        components:{
            picker  
        },
    }
</script>


<style scoped>
   @import "../../../src/assets/css/gpet.css";
    /* 宠物 */
    .gensui{
        position:absolute;
        top: 160px;
        right: 41px;
        z-index: 100;
        color: #fff;
        background-color: rgba(253, 185, 51, 0.89);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-content:center;
        flex-wrap: flex-end;
        }
         .bugs{
        position:absolute;
        top: 230px;
        right: 41px;
        z-index: 100;
        color: #fff;
        background-color: rgba(14, 58, 24, 0.89);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-content:center;
        flex-wrap: flex-end;
        }
    .bimg{
        margin: 20% auto 0;
        width: 50%;
        height: 50%;
        min-width: 250px;
        min-height: 250px;
        animation: run 0.6s steps(1, start) infinite;
        -webkit-animation:run 0.6s steps(1, start) infinite;
        background: url('../../assets/img/pet/111.png');
        background-position: center center;
    }
    @keyframes run{
        0%{
            background-image: url('../../assets/img/pet/m01.png');
            background-repeat: no-repeat;
        }
        30%{
            background-image: url('../../assets/img/pet/m02.png');
            background-repeat: no-repeat;
        }
        60%{
            background-image: url('../../assets/img/pet/m03.png');
            background-repeat: no-repeat;
        }
        100%{
            background-image: url('../../assets/img/pet/m04.png');
            background-repeat: no-repeat;
        }
    }
    @-webkit-keyframes run{
        0%{
            background-image: url('../../assets/img/pet/111.png');
            background-repeat: no-repeat;
        }
        30%{
            background-image: url('../../assets/img/pet/222.png');
            background-repeat: no-repeat;
        }
        60%{
            background-image: url('../../assets/img/pet/33.png');
            background-repeat: no-repeat;
        }
        100%{
            background-image: url('../../assets/img/pet/55.png');
            background-repeat: no-repeat;
        }
    }
</style>


