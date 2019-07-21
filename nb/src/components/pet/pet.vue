<template>

    <div class="pet_interface">

        <!-- 弹窗部分 -->
            
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

                <!-- 进度条 -->
                <div class="progress_bar">
                    <p>孵化进度</p>
                </div>

                <!-- 宠物蛋 -->
                <div class="egg_img" @click="open"></div>
                
            </div>
            
    </div>
</template>

      
<script>
    import { MessageBox } from 'mint-ui'
    export default {
       methods: {
      open() {
        MessageBox.confirm('将前往跑步抓取宠物, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.location.href='../run#/run'; 
        }).catch(() => {
          MessageBox.message({
            
          });          
        });
      }
    }
    }

</script>

<style scoped>
    *{margin: 0;padding: 0;list-style: none;}

    .pet_interface{
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
    }

    /* 弹窗部分 */
    

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
        margin-bottom: 10%;
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
        height: 6%;
        background-color: #ccc;
        border-radius: 20px;
        margin: 20% auto 0;
    }

    .progress_bar p{
        color: aliceblue;
        margin: 3% auto 0;
    }


    /* 宠物蛋 */
     .egg_img{
        display: flex;
        background-image: url(../../assets/img/egg.png);
        background-repeat: no-repeat;
        width: 100%;
        background-position: center;
        background-size: auto 100%;
        height: 100%;
    }
</style>


