<template>
<!-- 页面总体分弹窗和宠物两部分 -->
    <div class="pet_interface">
        
        <div class="pet_interface_middle">

            <!-- 弹窗部分 -->
            <div class="pet_interface_alert">
                弹窗
            </div>

            <!-- 宠物部分 -->
            <div class="pet_interface_pet">

                <!-- 宠物上半部分 -->
                <div class="pet_interface_pet_top">

                    <!-- 三个圈 -->
                    <ul>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
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
    .pet_interface_pet_top ul li div{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #aaa;
        margin-bottom: 10px;
        margin-left: 20px;
    }

    /* 背包 */
    .pet_interface_pet_top .bag_img{
        margin-right: 20px;
    }

    /* 设置背包图片的大小 */
    .pet_interface_pet_top .bag_img img{
        width: 50px;
        height: 50px;    
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
        width: 150px;
        height: 30px;
        border-radius: 12px;
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
        width: 250px;
        height: 250px;
    }
</style>


