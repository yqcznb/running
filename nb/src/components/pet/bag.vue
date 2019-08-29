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
                <div class="equip_title">
                    装备区
                    <p @click="open">预览</p>
                </div>
                <div class="equip_wrap">
                    <ul class="equip_list">
                        <li>
                            <div>
                                <!-- <i class="iconfont iconwuqihui"></i>
                                <p>武力+1</p> -->
                                

                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    
    
    

         
</template>


<script>
// import html2canvas from 'html2canvas';
// import { Navbar, TabItem } from 'mint-ui';
// import DrawerLayout from 'vue-drawer-layout'
export default {
    data(){
        return{
            // isshow: false,
            num: -100,
            Left:{
                'left':'0%',
            }
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
        }

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
</style>