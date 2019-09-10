// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
import "./assets/mui/fonts/fzhzgb.ttf"
import VueAMap from 'vue-amap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Button,MessageBox,Header,Field,Popup,Picker,Lazyload,DatetimePicker,Navbar,TabItem,TabContainer, TabContainerItem, InfiniteScroll} from 'mint-ui';
import echarts from 'echarts'
import VueCropper from 'vue-cropper'
import store from './store'
import Mui from 'vue-awesome-mui'
import './assets/css/my-mint.scss';//全局修改mint-UI样式
import { Switch } from 'mint-ui';
import BScroll from 'better-scroll'

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

Vue.component(Switch.name, Switch);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name,Picker);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.use(Mui);
Vue.use(VueAMap)
Vue.use(VueAxios, axios)
Vue.use(InfiniteScroll)
Vue.use(Lazyload)
Vue.config.productionTip = false
VueAMap.initAMapApiLoader({
  key: '8a3371b727138ef195759ae5be614d8d',
  plugin: ['AMap.Geolocation','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geocoder','AMap.AMapUI'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
Object.defineProperties(Vue.prototype, {
  echarts: { get: () => echarts }
});
VueRouter.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta.requireAuth)) {
    let user = JSON.parse(localStorage.getItem('login'));
    if (user) {   //判断是否已经登录
      console.log('这是通过拦截后到处理',from);
        
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}   //登录成功后重定向到当前页面
      });
    }
  } else {
    console.log('这是拦截');
    next();
  }
  //如果本地 存在 token 则 不允许直接跳转到 登录页面
  if(to.fullPath === "/login"){
    if(localStorage.getItem('login')){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});
export default VueRouter;

