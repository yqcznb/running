<template>
<!-- 页面总体分弹窗和宠物两部分 -->
    <div class="pet_interface">
        
        <div class="pet_interface_middle">

            <!-- 弹窗部分 -->
            <div class="pet_interface_alert">
                <div class="alert">
                    <div class="content">
                        <div class="word">是否前去跑步抓取宠物？</div>
                        <div class="botton">
                            <div class="yes">是</div>
                            <div class="no">否</div>
                        </div>
                    </div> 
                </div>
            </div>

            <!-- 宠物部分 -->
            <div class="pet_interface_pet">

                <!-- 宠物上半部分 -->
                <div class="pet_interface_pet_top">

                    <!-- 三个圈 -->
                    <ul>
                        <li><img src="../../assets/img/circle.png"></li>
                        <li><img src="../../assets/img/circle.png"></li>
                        <li><img src="../../assets/img/circle.png"></li>
                    </ul>

                    <!-- 背包 -->
                    <div class="bag_img">
                        <img src="../../assets/img/bag.png" alt="">
                    </div>
                </div>

                <!-- 宠物下半部分 -->
                <div class="pet_interface_pet_bottom">
                    <div>

                        <!-- 进度条 -->
                        <div class="progress_bar">孵化进度</div>

                        <!-- 宠物蛋 -->
                        <div class="egg_img">
                            <img src="../../assets/img/Unborn egg.png" alt="">
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    </div>
</template>
      
<script>
export default {
    
}
</script>

<style>
    *{margin: 0;padding: 0;list-style: none;}

    .pet_interface{
        width: 100%;
        height: 100%;
        /* background-color: antiquewhite; */
        position: absolute;
    }
    
    .pet_interface_middle{
        /* position: relitive; */
        width: 100%;
        height: 100%;
        /* background-color: #ccc; */
        float: left;
    }

    /* 弹窗部分 */
    .pet_interface_alert{
        width: 100%;
        height: 20%;
        /* background-color: aquamarine; */
    }

    .pet_interface_alert .alert{
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
    }

    .pet_interface_alert .alert .content{
        width: 100%;
        height: 60%;
    }

    .pet_interface_alert .alert .content .word{
        margin-top: 50px;
        font-size: 30px;
        /* letter-spacing: 20px; */
        margin-bottom: 20px;
    }

    .pet_interface_alert .alert .content .botton{
        display: flex;
        justify-content: space-between;
    }

    .pet_interface_alert .alert .content .botton .yes{
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #eee;
        background: #ccc; 
        margin-left: 10%;
    }

    .pet_interface_alert .alert .content .botton .no{
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #eee;
        background: #ccc;
        margin-right: 10%;
    }

    /* 宠物部分 */
    .pet_interface_pet{
        /* position: absolute; */
        width: 100%;
        height: 75%;
        /* background-color: #ccc; */
    }

    /* 宠物部分 上半部分 */
    .pet_interface_pet_top{
        /* position: relative; */
        width: 100%;
        height: 30%;
        /* background-color: #fff; */
        display: flex;
        justify-content: space-between;
    }

    /* 圆圈 */
    .pet_interface_pet_top ul li{
        margin-bottom: 10px;
    }

    .pet_interface_pet_top ul li img{
        width: 35%;
        height: 35%;
        max-width: 100%;
        max-height: 100%;
    }

    /* 背包 */
    .pet_interface_pet_top .bag_img{
        margin-right: 1px;
    }

    /* 设置背包图片的大小 */
    .pet_interface_pet_top .bag_img img{
        width: 30%;
        height: 30%;    
    }

    /* 宠物部分 下半部分 */
    .pet_interface_pet_bottom{
        width: 100%;
        height: 70%;
        /* background-color: aqua; */
        /* display: flex;
        justify-content: center; */
    }

    /* 进度条 */
    .pet_interface_pet_bottom .progress_bar{
        width: 50%;
        height: 3%;
        border-radius: 15px;
        background-color: #ccc;
        line-height: 30px;
        text-align: center;
        margin: 0 auto 0;
    }

    /* 放蛋的盒子 */
    .pet_interface_pet_bottom .egg_img{
        
    }

    /* 设置蛋的大小 */
    .pet_interface_pet_bottom .egg_img img{
        width: 80%;
        height: 80%;
    }
</style>


