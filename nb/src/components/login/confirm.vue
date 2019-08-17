<template>
    <div class="confirm">
        <mt-header title="身份认证">
        <router-link to="/footer/my" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right">修改信息</mt-button>
        </mt-header>
        <mt-field label="学校" placeholder="青岛工学院" v-model="school"></mt-field>
        <mt-field label="院系" placeholder="信息工程学院" type="email" v-model="yuanxi"></mt-field>
        <mt-field label="专业" placeholder="软件工程" type="password" v-modal="zhuanye"></mt-field>
        <mt-field label="姓名" placeholder="黄金文" type="tel" v-model="name"></mt-field>
        <mt-field label="学号" placeholder="201702505253" type="url" v-model="stunumber"></mt-field>
        <mt-field label="性别" placeholder="女" type="number" v-model="xy"></mt-field>
        <mt-field label="入学年份" placeholder="2017" v-model="schage"></mt-field>
        <mt-button disabled>已认证</mt-button>
        
</div>
</template>
<script>
export default {
    name: 'confirm',
    data() {
        return {
       
        }
    },
    methods:
    {
       
        back(){
             this.$router.replace('/footer/my');
        }
    }
}
</script>
<style scoped>
   
</style>

