
import Vue from 'vue'
import Vuex from 'vuex'
import {value,uname,path,uid,order} from "./cookie"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //登录状态
      isLogin: value,
      //登录的用户名
      uname: uname,
      // 跳转的路径
      path: path,
      // 用户的id
      uid:uid,
    //储存要支付的订单信息
    order:sessionStorage.getItem("order")
  },
  mutations: {
    //管理登录转台和 用户名
    logined(state,palyold){
      state.isLogin=1
      state.uname=palyold
      console.log(palyold)
    },
    //权力注销的状态I
    quit(state){
      state.isLogin=0
    },
    //管理路径
    path(state,palyold){
      state.path=palyold
    },
    //管理 用户id
    uid(state,palyold){
       state.uid=palyold
    },
    //管理订单数据
    order(state,palyold){
        state.order=palyold
    }
  },
  actions: {
  },
  modules: {
  }
})
