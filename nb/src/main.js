// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/mui/css/mui.min.css"
import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"
import "./assets/mui/fonts/fzhzgb.ttf"
import VueAMap from 'vue-amap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Button,MessageBox,Header,Field,Popup,Picker} from 'mint-ui';
import echarts from 'echarts'

Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name,Picker);

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

Vue.use(VueAMap)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
VueAMap.initAMapApiLoader({
  key: '8a3371b727138ef195759ae5be614d8d',
  plugin: ['AMap.Geolocation','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
Object.defineProperties(Vue.prototype, {
  echarts: { get: () => echarts }
});
