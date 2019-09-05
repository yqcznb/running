<template>
    <div id="tea_special">
        <div id="back_bar">
            <router-link to='/footer/my' @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
            <span class="title">学生跑步数据</span>
        </div>
        这里是学生跑步数据页面
    </div>
</template>
<script>
export default {
    name: 'on',
    data() {
        return {
            backlink: 'settings',
        }
    },
    methods: {
        // routerRefresh() {
        //     window.location.reload();
        // },
    }
}
</script>
<style scoped>
    #tea_special {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    a {
        text-decoration: none;
        color: #dec674;    
    }
    #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    .title {
        color: #dec674;
        position: absolute;
        text-align: center;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
</style>
