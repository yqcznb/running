<template>
    <div bag_interface>
        <div class="back_bar">
            <router-link to="/footer/pet" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">背包</span>
        </div>

        <div class="bag_bottom">
            <div class="bag_pet">
                <div class="preview_title">预览区</div>
                <canvas id="my_canvas">
                    <p>您当前使用的浏览器不适合canvas！</p>
                </canvas>
            </div>

            <div class="bag_equip">
                222
            </div>
        </div>
        

    </div>
    
    
    

         
</template>


<script>
export default {
    
}
// var canvas = document.getElementById('my_canvas');
// var obj = canvas.getContext('2d');
	
// 	var img = new Image();
// 	img.src = '../../assets/img/pet/04.png';

// 	img.onload = function(){
// 		//完成图片加载
// 		//通过图片大小获取每个人物的大小
// 		var imgWidth = img.width;
// 		var imgHeight = img.height;
// 		var personWidth = imgWidth/4;
// 		var personHeight = imgHeight/4;

// 		var index = 0;

// 		//找出画布的中心
// 		var x0 = obj.canvas.width/2 - personWidth/2;
// 		var y0 = obj.canvas.height/2 - personHeight/2;
// 		//然后截取图片，绘制到画布中心
// 		obj.drawImage(img,0,0,personWidth,personHeight,x0,y0,personWidth,personHeight);

// 		//定时器
// 		setInterval(function(){
// 			index++;
// 			obj.clearRect(0,0,obj.canvas.width,obj.canvas.height);
// 			obj.drawImage(img,index*personWidth,0,personWidth,personHeight,x0,y0,personWidth,personHeight);
// 			if(index > 3){
// 				obj.drawImage(img,0,0,personWidth,personHeight,x0,y0,personWidth,personHeight);
// 				index = 0;
// 			}
// 		},100);
// 	};

</script>



<style scoped>
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
        width: 70%;
        height: 100%;
        background-color: antiquewhite;
        position: absolute;
    }

    .bag_bottom .bag_pet .preview_title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #ccc;
        border-radius: 25px; 
    }

    .bag_bottom .bag_pet #my_canvas{
        width: 100%;
        height: 77%;
        background-color: aliceblue;
    }

    /* 装备 */
    .bag_bottom .bag_equip{
        width: 30%;
        height: 100%;
        background-color: aqua;
        
    }
</style>