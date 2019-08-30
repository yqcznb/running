<template>
    <div add_interface>
        <div class="back_bar">
            <router-link to="/footer/pet" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">添加好友</span>
        </div>

        <div class="add_bottom">
            <!-- <vue-drawer-layout :reverse='true'>
            <div class='drawer' slot="drawer">
                <div class='text'>这是抽题</div>
            </div>
            <div class='content' slot="content">
                <div class='text'>这是内容</div>
            </div>
            </vue-drawer-layout> -->
        </div>
     

    </div>
    
</template>


<script>
    // import DrawerLayout from 'vue-drawer-layout'
</script> 


<style scoped>

    *{margin: 0;padding: 0;list-style:none;}

    .add_interface{
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

    .add_interface .add_bottom{
        width: 100%;
        height: 90px;
        background-color: rgb(212, 146, 146); 
    }
</style>