<template>
    <div id="ex_bonus">
        <div id="back_bar">
            <router-link to="/footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy">返回</i> 
            </router-link>
            <span>我的积分</span>
        </div>
        积分兑换页面
    </div>
</template>
<script>
export default {
    name: 'ex_bonus',
    data() {
        return{
        
        }
    },
    methods: {
        routerRefresh() {
            window.location.reload();
        },
    },
}
</script>
<style scoped>
    #ex_bonus {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: linear-gradient(top,rgb(199, 195, 197),#f9f6c9);
    }
    a {
        text-decoration: none;
        color: #dec674;
        z-index: 1;
    }
    #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
        display: flex;
        justify-content: flex-start;
    }
    i,span {
        /* border: 1px solid red; */
    }
    span {
        color: #dec674;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 0;
    }
    
</style>
