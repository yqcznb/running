<template>
    <div id="back_bar">
        <router-link to="footer/my" @click.native="routerRefresh">
            <i class="iconfont iconfanhui-copy"></i>返回
        </router-link>
        <router-view :key="key"></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        key() {
            return this.$route.path;
        }
    }
}
</script>
<style scoped>
    #back_bar {
        text-align: left;
        text-indent: 0.3em;
        line-height: 200%;
        background-color: rgb(83, 83, 83);
        margin-bottom: 2%;
    }
    #back_bar a {
        text-decoration: none;
        color: #dec674;    
    }
</style>
