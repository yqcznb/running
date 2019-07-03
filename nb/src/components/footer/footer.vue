<template>
  <div class="footer">
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/footer/pet">
				  <i class="iconfont iconjidan"></i>
				<span class="mui-tab-label">宠物</span>
			</router-link>
			<router-link class="mui-tab-item" to="/footer/index">
				<i class="{{class}}"></i>
				<span class="mui-tab-label">{{msg}}</span>
			</router-link>
			<router-link class="mui-tab-item" to="/footer/my">
				<i class="iconfont iconwode"></i>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data(){
	  msg:开跑
  },
  methods:{
	
  }
}

</script>

<style scoped>
i{
	font-size: 24px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    display:block;
    text-decoration: none;
}
</style>
