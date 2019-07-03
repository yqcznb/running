<template>
    <div id="my">
        <div id="my_head">
            <div class="head_left">
                <p class="user_name">叭叭叭</p>
                <p class="user_level">天下跑神段位</p>
                <img :src='levelImg' class="levelimg">
                <img :src='indImg' class="indimg">
                
            </div>
            <div class="head_right">
                <img :src='headportrait' alt="" class="headportrait">
                <img :src="duanImg" alt="" class="duanimg">
            </div>
            
            
        </div>
        
        
        
        
        {{ msg }}

    </div>
</template>
<script>
export default {
name: 'my',
data() {
    return{
        msg: 'aaaaa',
        levelImg: require('../../assets/img/my/schedual_level/first.png'),
        indImg:require('../../assets/img/my/identify/跑神认证.png'),
        headportrait:require('../../assets/img/my/headportrait/tx.jpeg'),
        duanImg:require('../../assets/img/my/duan/5.png'),
        
    }
}
}
</script>
<style scoped>
    /* body {
        background-color: #dec674;
    } */
    #my {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #dec674;
    }
    #my_head {
        width: 90%;
        height: 25%;
        border: 1px solid red;
        border-radius: 0 0 7px 7px;
        display: flex;
        margin: 0 auto;
        padding: 5%;
        background-color: white;
    }
    .head_left {
        width: 70%;
        height: 100%;
        border: 1px solid red;

    }
    .user_name,.user_level {
        text-align: left;
    }
    .levelimg {
        width: 80%;
        display: flex;
    }
    .indimg {
        width: 35%;
        display: flex;
    }
    .head_right {
        border: 1px solid red;
        
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .headportrait {
        /* position: relative;
        top: 14%; */
        /* margin-top: -12%; */        border: 1px solid red;

        width: 80%;
        border-radius: 50%;
        z-index: 1;
    }
    .duanimg {
        position: relative;
        width: 100%;
        border: 1px solid red;
        /* margin-top: -48%;  */
        margin-top: -30%;
        z-index: 0;
    }

</style>
