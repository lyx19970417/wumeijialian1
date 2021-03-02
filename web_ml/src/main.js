import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import elementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import  "swiper/css/swiper.css"
import {anmint,m,count,dele,price,Order,list,sort_t,address_pay,add_addres,is_def,upd_adress,center_aorder,state_order,user_list,updated_user} from "./views/axisss/fun/functin.js"
import {cities} from "./views/axisss/city"
import qs from 'qs'
Vue.use(elementUI)
Vue.config.productionTip = false
// axios.defaults.baseURL="https://wumeijialian10.applinzi.com"
axios.defaults.baseURL="http://127.0.0.1:5050"
Vue.prototype.axios=axios
Vue.prototype.$=$
Vue.prototype.qs=qs
//自定义函数 点击加入购物车的时候动画
Vue.prototype.anmint=anmint
Vue.prototype.m=m
Vue.prototype.count=count
Vue.prototype.dele=dele
Vue.prototype.price=price
Vue.prototype.Order=Order
Vue.prototype.list=list
Vue.prototype.sort_t=sort_t
Vue.prototype.address_pay=address_pay
Vue.prototype.cities=cities
Vue.prototype.add_addres=add_addres
Vue.prototype.is_def=is_def
Vue.prototype.upd_adress=upd_adress
Vue.prototype.center_aorder=center_aorder
Vue.prototype.state_order=state_order
Vue.prototype.user_list=user_list
Vue.prototype.updated_user=updated_user
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


