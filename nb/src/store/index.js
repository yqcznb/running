import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false,
        yhid:""
      },
    
      // 获取属性的状态
      getters: {
        //获取登录状态
        isLogin: state => state.isLogin,
        yhid: state => state.yhid,
      },
    
      // 设置属性状态
      mutations: {
        //保存登录状态
        userStatus(state, flag) {
          state.isLogin = flag
        },
        yhid(state,aa){
            state.yhid = aa
        }
      },
    
      // 应用mutations
      actions: {
        //获取登录状态
        userLogin({commit}, flag) {
          commit("userStatus", flag)
        },
        yh({commit},aa){
        commit("yhid",aa)
        }
    }
})

export default store