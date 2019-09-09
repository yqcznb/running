<template>
    <div id="drole">
        <div id="back_bar">
            <router-link to="footer/my" @click.native="routerRefresh">
                <i class="iconfont iconfanhui-copy"></i>返回
            </router-link>
        </div>
        这里是段位规则页面
    </div>
</template>
<script>
export default {
    name: 'drole',
    data() {
        return{
            
        }
    },
    methods: {
        // routerRefresh() {
        //     window.location.reload();
        // },
    },
}
</script>
<style scoped>
    #drole {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(top,#bed3df,#fcefd5);
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
</style>

