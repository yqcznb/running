<template>
    <div bag_interface>
        <div class="back_bar">
            <router-link to="/footer/pet" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">背包</span>
        </div>

         <div class="bag_bottom">
            <div class="bag_pet" :style="{left: num + '%'}">
                <div class="preview_title">预览区
                    <p @click="close">关闭</p>
                </div>
                <!-- 容器 -->
                <!-- <canvas id='my_canvas'></canvas>
                <img src="../../assets/img/pet/04.png" alt=""> -->
                <div class="preview_wrap">
                    <div class="bimg"></div>
                </div>
            </div>

            <div class="bag_equip">
                <!-- <div class="equip_title">
                    装备区
                    
                </div> -->
                <div class="equip_wrap">
                    <div class="equip_list">
                        <mt-navbar v-model="equip">
                            <div class="wuqi" @click='wuqi' :style="{color: yangs1}">武器区</div>
                            <div @click='clothes' class="yishi" :style="{color: yangs2}">衣饰区</div>
                            <div class='y_jineng' @click='y_jineng' :style="{color: yangs3}">药品/饲料区</div>
                        </mt-navbar>
                        <!-- tab-container -->
                        <mt-tab-container v-model="equip">
                            <mt-tab-container-item id="1">
                                <div class="eq_list1" @click="w1">
                                    <div>
                                        <i class="iconfont iconwuqihui"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_2">
                                    <div>
                                        <i class="iconfont iconSubtraction"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_3">
                                    <div>
                                        <i class="iconfont icondao1"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_4">
                                    <div>
                                        <i class="iconfont iconfl-futou"></i>
                                    </div>
                                </div>
                                <!-- <div class="eq_list1" @click="w1_5">
                                    <div>
                                        <i class="iconfont iconji"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_6">
                                    <div>
                                        <i class="iconfont iconrenzhewuqi"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_7">
                                    <div>
                                        <i class="iconfont icondao"></i>
                                    </div>
                                </div> -->
                                <!-- <div class="eq_list1" @click="w1">
                                    <div>
                                        <i class="iconfont iconbaoleiji"></i>
                                    </div>
                                </div> -->
                                <!-- <div class="eq_list1" @click="w1_8">
                                    <div>
                                        <i class="iconfont iconwuqi"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_9">
                                    <div>
                                        <i class="iconfont iconwuqix"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w1_10">
                                    <div>
                                        <i class="iconfont iconwuqianniu"></i>
                                    </div>
                                </div> -->
                            </mt-tab-container-item>
                            <mt-tab-container-item id="2">
                                <div class="eq_list1" @click="w2">
                                    <div>
                                        <i class="iconfont iconzhuangbei1"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w2_2">
                                    <div>
                                        <i class="iconfont iconkuzi"></i>
                                    </div>
                                </div><div class="eq_list1" @click="w2_3">
                                    <div>
                                        <i class="iconfont icon-xiezi"></i>
                                    </div>
                                </div>
                                <!-- <div class="eq_list1" @click="w2">
                                    <div>
                                        <i class="iconfont iconzhuangbei"></i>
                                    </div>
                                </div> -->
                                <div class="eq_list1" @click="w2_4">
                                    <div>
                                        <i class="iconfont icon-kuzi"></i>
                                    </div>
                                </div><!-- <div class="eq_list1" @click="w2">
                                    <div>
                                        <i class="iconfont iconxiezi3"></i>
                                    </div>
                                </div><div class="eq_list1" @click="w2">
                                    <div>
                                        <i class="iconfont iconsv"></i>
                                    </div>
                                </div><div class="eq_list1" @click="w2">
                                    <div>
                                        <i class="iconfont icon47"></i>
                                    </div>
                                </div><div class="eq_list1" @click="w2">
                                    <div>
                                        <i class="iconfont icontuoxie"></i>
                                    </div>
                                </div> -->
                            </mt-tab-container-item>
                            <mt-tab-container-item id="3">
                                <!-- <div class="eq_list1" @click="w3">
                                    <div>
                                        <i class="iconfont iconyaopin1"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w3_2">
                                    <div>
                                        <i class="iconfont iconyaopin2"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w3_3">
                                    <div>
                                        <i class="iconfont iconyaopin"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w3_4">
                                    <div>
                                        <i class="iconfont iconpip"></i>
                                    </div>
                                </div> -->
                                <div class="eq_list1" @click="w3">
                                    <div>
                                        <i class="iconfont iconsiliao"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w3_2">
                                    <div>
                                        <i class="iconfont iconshuichansiliao"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w3_3">
                                    <div>
                                        <i class="iconfont iconbingjiling"></i>
                                    </div>
                                </div>
                                <div class="eq_list1" @click="w3_4">
                                    <div>
                                        <i class="iconfont iconmianbao-"></i>
                                    </div>
                                </div>
                            </mt-tab-container-item>
                        </mt-tab-container>
                        <!-- <mt-button type="primary" size="large" @click="open" class="yulan">预览</mt-button> -->
                    </div>
                </div>
            </div> 
        </div>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="bq_visible" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name1">
                    <i class="iconfont iconbing"></i>{{zb1_name}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo1_title">效果</p>
                    <p>{{xiaoguo1_my}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="bq_visible_2" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name1">
                    <i class="iconfont iconbing"></i>{{zb1_name_2}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo1_title">效果</p>
                    <p>{{xiaoguo1_my_2}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="bq_visible_3" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name1">
                    <i class="iconfont iconbing"></i>{{zb1_name_3}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo1_title">效果</p>
                    <p>{{xiaoguo1_my_3}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="bq_visible_4" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name1">
                    <i class="iconfont iconbing"></i>{{zb1_name_4}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo1_title">效果</p>
                    <p>{{xiaoguo1_my_4}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="ys_visible" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name2">
                    <i class="iconfont iconzhuang"></i>{{zb2_name}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo2_title">效果</p>
                    <p>{{xiaoguo2_my}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="ys_visible_2" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name2">
                    <i class="iconfont iconzhuang"></i>{{zb2_name_2}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo2_title">效果</p>
                    <p>{{xiaoguo2_my_2}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="ys_visible_3" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name2">
                    <i class="iconfont iconzhuang"></i>{{zb2_name_3}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo2_title">效果</p>
                    <p>{{xiaoguo2_my_3}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="ys_visible_4" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name2">
                    <i class="iconfont iconzhuang"></i>{{zb2_name_4}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo2_title">效果</p>
                    <p>{{xiaoguo2_my_4}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="jy_visible" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name3">
                    <i class="iconfont iconitemno_15"></i>{{zb3_name}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo3_title">效果</p>
                    <p>{{xiaoguo3_my}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="jy_visible_2" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name3">
                    <i class="iconfont iconitemno_15"></i>{{zb3_name_2}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo3_title">效果</p>
                    <p>{{xiaoguo3_my_2}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="jy_visible_3" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name3">
                    <i class="iconfont iconitemno_15"></i>{{zb3_name_3}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo3_title">效果</p>
                    <p>{{xiaoguo3_my_3}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
        <mt-popup  position="bottom"  popup-transition="popup-fade" v-model="jy_visible_4" style="width:100%;height:40%;background-color:rgb(255, 255, 255, 0.8);;border-radius:15px 15px 0 0;">
            <ul>
                <li class="zb_name3">
                    <i class="iconfont iconitemno_15"></i>{{zb3_name_4}}
                </li>
                <li class="zb_xiaoguo">
                    <p class="xiaoguo3_title">效果</p>
                    <p>{{xiaoguo3_my_4}}</p>
                </li>
                <li class="button">
                    <mt-button type="primary" size="large" @click="add_wuqi">使用</mt-button>
                </li>
                
            </ul>
        </mt-popup>
    </div> 
         
</template>


<script>
// import html2canvas from 'html2canvas';
import { Navbar, TabItem } from 'mint-ui';
import { Popup } from 'mint-ui';
import { MessageBox } from 'mint-ui';
// import DrawerLayout from 'vue-drawer-layout'
export default {
    data(){
        return{
            // isshow: false,
            num: -100,
            equip: '1',
            yangs1: 'rgb(222, 198, 116)',
            yangs2: '0',
            yangs3: '0',
            index: '1',
            bq_visible: false,
            bq_visible_2: false,
            bq_visible_3: false,
            bq_visible_4: false,
            ys_visible: false,
            ys_visible_2: false,
            ys_visible_3: false,
            ys_visible_4: false,
            jy_visible: false,
            jy_visible_2: false,
            jy_visible_3: false,
            jy_visible_4: false,
            zb1_name: '剑',
            xiaoguo1_my: '加成值+1',
            zb1_name_2: '盾',
            xiaoguo1_my_2: '加成值+1',
            zb1_name_3: '刀',
            xiaoguo1_my_3: '加成值+1',
            zb1_name_4: '斧',
            xiaoguo1_my_4: '加成值+1',
            // xiaoguo1_you: '每次挥剑对敌造成3点血量伤害',
            // xiaoguo1_bd: '挥剑次数为自身血量的50%',
            zb2_name: '短袖',
            xiaoguo2_my: '加成值+1',
            zb2_name_2: '长裤',
            xiaoguo2_my_2: '加成值+2',
            zb2_name_3: '轮滑鞋',
            xiaoguo2_my_3: '加成值+3',
            zb2_name_4: '短裤',
            xiaoguo2_my_4: '加成值+1',
            zb3_name: '小鸡牌饲料',
            xiaoguo3_my: '饥饿度-3',
            zb3_name_2: '鱼牌饲料',
            xiaoguo3_my_2: '饥饿度-3',
            zb3_name_3: '冰激凌',
            xiaoguo3_my_3: '饥饿度-5',
            zb3_name_4: '面包',
            xiaoguo3_my_4: '饥饿度-5',
            Left:{
                'left':'0%',
            },
            Color1:{
                'color':'0',
            },
            Color2:{
                'color':'0',
            },
            Color3:{
                'color':'0',
            },
        }
    },

    methods:{
        
        open(){
            this.num = 0;
            this.Left = {
                'left': this.num + '%',
            }
        },
        close(){
            this.num = -100;
            this.Left = {
                'left': this.num + '%',
            }
        },
       
        wuqi(){
            this.equip = '1';
            this.yangs1 = 'rgb(222, 198, 116)';
            this.yangs2 = 'rgb(88, 177, 236)';
            this.yangs3 = 'rgb(88, 177, 236)';
            this.Color1 = {
                'color': this.yangs1,
            };
        },
         clothes(){
            this.equip = '2';
            this.yangs2 = 'rgb(222, 198, 116)';
            this.yangs1 = 'rgb(88, 177, 236)';
            this.yangs3 = 'rgb(88, 177, 236)';
            this.Color2 = {
                'color': this.yangs2,
            };
        },
        y_jineng(){
            this.equip = '3';
            this.yangs3 = 'rgb(222, 198, 116)';
            this.yangs1 = 'rgb(88, 177, 236)';
            this.yangs2 = 'rgb(88, 177, 236)';
            this.Color3 = {
                'color': this.yangs3,
            };
        },
        w1(){
            this.bq_visible = true;
        },
        w1_2(){
            this.bq_visible_2 = true;
        },
        w1_3(){
            this.bq_visible_3 = true;
        },
        w1_4(){
            this.bq_visible_4 = true;
        },
        w2(){
            this.ys_visible = true;
        },
        w2_2(){
            this.ys_visible_2 = true;
        },
        w2_3(){
            this.ys_visible_3 = true;
        },
        w2_4(){
            this.ys_visible_4 = true;
        },
        w3(){
            this.jy_visible = true;
        },
        w3_2(){
            this.jy_visible_2 = true;
        },
        w3_3(){
            this.jy_visible_3 = true;
        },
        w3_4(){
            this.jy_visible_4 = true;
        },
        add_wuqi(){
            this.index =
            MessageBox.alert("使用成功").then(action => {
  
                });
        },

    //   initCanvas(){
    //       let canvas = document.getElementById('my_canvas');
    //       let obj = canvas.getContext('2d');
    //       let img = document.querySelector('img');
    //       img.onload = this.dr_whole();
    //       canvas.width = window.innerWidth;
    //       canvas.height = window.innerHeight;
          
    //   },
      
    //   dr_whole(){
    //       let imgWidth = img.width;
    //       let imgHeight = img.height;
    //       let pWidth = imgWidth/4;
    //       let pHeight = imgHeight/4;

    //       let index = 0;

    //       let x0 = obj.canvas.width/2 - pWidth/2;
    //       let y0 = obj.canvas.width/2 - pHeight/2;
    //       this.obj.drawImage(img,0,0,pWidth,pHeight,x0,y0,pWidth,pHeight);

    //       setInterval(function(){
    //           index++;
    //           this.obj.clearRect(0,0,obj.canvas.width,obj.canvas.height);
	// 		  this.obj.drawImage(img,index*personWidth,0,personWidth,personHeight,x0,y0,personWidth,personHeight);
	// 		  if(index > 3){
	// 			this.obj.drawImage(img,0,0,personWidth,personHeight,x0,y0,personWidth,personHeight);
	// 			index = 0;
	// 		}
    //       },100);
    //   }
    },

    mounted(){
        
        // this.initCanvas();
        // window.onresize = () => {
        //     this.initCanvas;
        // }
    },

    components:{
        
    },
}
    

</script>



<style scope>

    *{margin: 0;padding: 0;list-style:none;}

    .bag_interface{
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

    /* 宠物区 */
    .bag_bottom{
        width: 100%;
        height: 80%;  
        display: flex;
        flex-direction: row;
    }

    /* 预览区 */
    .bag_bottom .bag_pet{
        width: 100%;
        height: 100%;
        position: absolute;
        /* left: -100%; */
    }

    .bag_bottom .bag_pet .preview_title{
        width: 100%;
        height: 50px;
        line-height: 25px;
        background-color: rgb(204, 204, 204);
        border-radius: 25px;   
    }

    /* .bag_bottom .bag_pet #my_canvas{
        width: 100%;
        height: 77%;
        background-color: aliceblue;
    } */

    .bag_bottom .bag_pet .preview_wrap{
        width: 100%;
        height: 77%;
    }

    .bag_bottom .bag_pet .preview_wrap .bimg{
        margin: 50% 0 0 40%;
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

    /* 装备 */
    .bag_bottom .bag_equip{
        width: 100%;
        height: 600px;
        /* margin-left: 70%; */
    }

    .bag_bottom .bag_equip .equip_title{
        width: 100%;
        height: 50px;
        line-height: 25px;
        background-color: rgb(204, 204, 204);
        border-radius: 25px; 
    }

    .bag_bottom .bag_equip .equip_wrap{
        width: 100%;
        height: 550px;
        border-left: 1px solid rgba(204, 204, 204, 0.801);
    }

    .bag_bottom .bag_equip .equip_wrap .equip_list .wuqi{
        width: 30%;
        height: 60px;
        line-height: 60px;
        color: rgb(88, 177, 236);
        margin-right: 5%;
    }

    .bag_bottom .bag_equip .equip_wrap .equip_list .yishi{
        width: 30%;
        height: 60px;
        line-height: 60px;
        color: rgb(88, 177, 236);
        margin-right: 5%;
    }

    .bag_bottom .bag_equip .equip_wrap .equip_list .y_jineng{
        width: 30%;
        height: 60px;
        line-height: 60px;
        color: rgb(88, 177, 236);
    }

    .bag_bottom .bag_equip .equip_wrap .equip_list .eq_list1{
        margin: 10px 0 0 5px;
        width: 60px;
        height: 60px;
        border: 1px solid rgb(233, 193, 85);
        display: inline-block;
    }

    .bag_bottom .bag_equip .equip_wrap .equip_list .eq_list1 div{
        width: 50px;
        height: 50px;
        border: 1px solid rgb(233, 193, 85);
        margin: 4px 0 0 4px;
    }

    .bag_bottom .bag_equip .equip_wrap .equip_list .eq_list1 div i{
        line-height: 50px;
    }

    /* 装备详情 */
    .zb_name1{
        padding: 20px 0 20px 0;
        border-bottom: 1px solid rgb(233, 193, 85);
        color: rgb(230, 28, 163);
    }

    .zb_name2{
        padding: 20px 0 20px 0;
        border-bottom: 1px solid rgb(233, 193, 85);
        color: rgb(230, 28, 28);
    }

    .zb_name3{
        padding: 20px 0 20px 0;
        border-bottom: 1px solid rgb(233, 193, 85);
        color: rgb(88, 177, 236);
    }

    .zb_xiaoguo .xiaoguo1_title{
        margin-left: -300px;
        margin-bottom: 10px; 
        color: rgb(230, 28, 163);
    }
    
    .zb_xiaoguo .xiaoguo2_title{
        margin-left: -300px;
        margin-bottom: 10px; 
        color: rgb(230, 28, 28);
    }
    
    .zb_xiaoguo .xiaoguo3_title{
        margin-left: -300px;
        margin-bottom: 10px; 
        color: rgb(88, 177, 236);
    }

    .button{
        margin: auto;
    }

    /* 预览按钮 */
    .yulan{
        position: absolute;
        top: 550px;
    }
</style>