<template>
    <div>
      <my-right></my-right>
      <my-header ></my-header>
        <div class="d-flex justify-content-between" id="bander">
        <div class="top_left ">
            <dl class="d-flex">
                <dd v-for="(item,index) of sort" :key="index" ><router-link :to="'/list/'+item.fid" >
                <i :class="style[index]"></i>
                <span v-text="item.name"></span>
                </router-link></dd>
            </dl>
        </div>
        <!-- 轮播图子组件 -->
        <lunbo :c="c"  v-if="c.length>0"></lunbo>
        <div class=" top_right ">
           <div class="d-flex flex-wrap justify-content-end">  
                <router-link class="mr-1 mb-1" to=""><img  src="../../public/img/r-1.jpg" ></router-link>
                <router-link class="mb-1" to=""><img src="../../public/img/r-2.jpg" ></router-link>
                <router-link class="mb-1 mr-1" to=""><img src="../../public/img/r-3.jpg" ></router-link>
                <router-link to=""><img src="../../public/img/r-4.jpg" ></router-link>
            <router-link to=""><img src="../../public/img/r-5.jpg" ></router-link>  
        </div>
    </div>
    </div>
    <div class="bg-white mt-4" id="centent_top">
        <div>
            <span class="font-weight-bold h5  ">今日品牌</span><span class="tady_brand">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TODAY'S BRAND</span>
            <router-link class="float-right pr-2 a_tady_text" to="#">全部品牌>></router-link>
        </div>
        <div class="mt-4">
         <ul class=" row no-gutters list-unstyled">
                <li class="col-3 ">
                   <a class="tady_shopping" to="javascript:;">
                        <img class="img_width img_magin" src="../../public/img/5eec5fc133b0895eb63083a6_680x280 (1).jpg" alt="">
                       <div class="d-flex justify-content-between ">
                            <span class="font_small-4 mt-1 img_magin">大牌女鞋清仓特惠</span>
                            <span class="font_small-4 tady_text  mt-1">进入活动</span>
                        </div>
                    </a>
                </li>
                <li class="col-3 ">
                    <a class="tady_shopping" href="javascript:;">
                         <img class="img_width img_magin " src="../../public/img/3.jpg" alt="">
                        <div class="d-flex justify-content-between">
                             <span class="font_small-4 mt-1 img_magin">艾莱依1件5折</span>
                             <span class="font_small-4 tady_text  mt-1">进入活动</span>
                         </div>
                     </a>
                 </li>
                 <li class="col-3 ">
                    <a class="tady_shopping" href="javascript:;">
                         <img class="img_width img_magin " src="../../public/img/2.jpg" alt="">
                        <div class="d-flex justify-content-between ">
                             <span class="font_small-4 mt-1 img_magin">一折起</span>
                             <span class="font_small-4 tady_text  mt-1">进入活动</span>
                         </div>
                     </a>
                 </li>
                 <li class="col-3 ">
                    <a class="tady_shopping" href="javascript:;">
                         <img class="img_width img_magin" src="../../public/img/4.jpg" alt="">
                        <div class="d-flex justify-content-between ">
                             <span class="font_small-4 mt-1 img_magin">花花公子65折起</span>
                             <span class="font_small-4 tady_text  mt-1">进入活动</span>
                         </div>
                     </a>
                 </li>
            </ul>
        </div>    
    </div>
    <div class="bg-white mt-4" id="centent_bottom">
    <div>
        <span class="font-weight-bold h5 ">今日新品</span><span class="tady_brand">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TODAY'S NEW</span>
        <router-link class="float-right pr-4 a_tady_text" to="#">全部品牌>></router-link>
    </div>
    <div class="ul_shopping">
         <ul class=" row no-gutters   list-unstyled datilss">
             <li class=" d-flex flex-column shopping border_index" v-for="(key,i) of c" :key="i">
                <router-link :to="`/details/${key.pid }`" class="href_two">
                 <img class="img_size sss"  :src="key.pic" alt="">
                </router-link>
                 <div>
                    <span class="font_small_1" v-text="key.price"></span><span class="font_small_2" v-text="key.cprice"></span>
                 </div>
                 <router-link class="my_collect" to=""></router-link>
                <div class="d-flex justify-content-between">
                     <router-link class="font_small tady_shopping  text-truncate" :to="`/details/${key.pid}`" v-text="key.title"></router-link>
                     <span class="font_small_3" v-text="key.timer"></span>
                </div>
            </li> 
        </ul>     
    </div>
    </div>
    <my-footer></my-footer>
    </div>
</template>
<script>
import MyHeader from "../components/src/MyHeader"
import MyFooter from "../components/src/MyFooter.vue"
import MyRight from "../components/src/MyRight.vue"
import lunbo from "../components/src/lunbo"
export default {
  components: { MyRight,MyHeader,MyFooter,lunbo},
    data() {
        return {
            //首页商品的数据
            c:[],
            //首页商品分类的数据
            sort:[],
            //首页商品分类的 class
            style:["bg_img_1","bg_img_2","bg_img_3","bg_img_4","bg_img_5","bg_img_6","bg_img_7","bg_img_8","bg_img_9","bg_img_10","bg_img_11","bg_img_12","bg_img_13","bg_img_14"]
        }
    },
    mounted(){
      //获取首页商品 
       this.axios.get(
         '/index/v1/list'
       ).then(res=>{
          this.c=res.data
           console.log(res.data[4].pic,res.data[4].pic==1)
      })
      //获取分类
      this.axios.get("/index/v1/family").then(res=>{
          this.sort=res.data
          
      })
    },
}
</script>
<style scoped>
@import "./axisss/css/index.css";

</style>