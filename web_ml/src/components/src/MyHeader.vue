<template>
    <div id="header">
        <div id="top">
           <ul class="list-unstyled d-flex  justify-content-end mb-0 ">
                <li class=" login_cl " :class="this.$store.state.isLogin==1 ? 'login' : ''" @click="login_1">
                    <router-link class="font_smail_top" :to="href" >
                        <span class="log text-truncate header-smail"   v-if="this.$store.state.isLogin==1"  v-text="'你好，'+this.$store.state.uname"></span>
                        <router-link class="log" v-else to="/login">登录</router-link>
                        <span class=" text-truncate sanjiao" :class="style" v-show="this.$store.state.isLogin==1"></span>
                    </router-link>
                    <ul class="show_quit " style="width:135px;" :class="style=='sanjiao_left' ? 'show_or':''" v-if="this.$store.state.isLogin==1">
                      <li>
                            <router-link to="/center">个人中心</router-link><br>
                      </li>
                      <li @click="quit">
                           <router-link to="/">退出账号</router-link>
                      </li>
                      
                   </ul>
               </li>
              <li class="reg" v-show="this.$store.state.isLogin==0"><router-link class="font_smail_top" to="/reg">免费注册</router-link></li>
              <li class=""><router-link class="font_smail_top" :to="this.$store.state.isLogin==1 ?'/center': ''">我的订单</router-link></li>
              <li class=""><a class="font_smail_top" href="javascript:;" >商家入驻</a></li>
              <li class="href">
                  <router-link class="font_smail_top d-flex"  :to="this.$store.state.isLogin==1 ? '/car': this.$route.path">
                      <span class="min_img_0_1"></span>
                      <span>购物袋</span>
                      <span class="min_bg_0_2" v-text="p"  v-if="n==undefined"></span>
                      <span class="min_bg_0_2" v-text="i" v-else ></span>
                  </router-link>
               </li>
               <li class=""><a class="font_smail_top" href="javascript:;">商家中心</a></li>
               <li class="">
                    <a class="font_smail_top" href="javascript:;">客服服务</a>
                    <div class="bg-white customer_service">
                       <div >
                           <a class="font_smail_top" href="javascript:;">帮助中心</a>
                      </div>
                       <div>
                          <a class="font_smail_top" href="javascript:;">联系客服</a>
                      </div>
                   </div>
               </li>
           </ul>
     </div>  
     <div class="bg-white d-flex justify-content-between" id="center">
                 <a class="min_img_2_1" href="javascript:;"></a>
                <a class="min_img_3_1" href="javascript:;"></a>
                <a class="min_img_4_1" href="javascript:;"></a>
                <a class="min_img_5_1" href="javascript:;"></a> 
            <div class="d-flex " >
                <div class="my_input_serech ">
                    <input class=" my_input_centent" type="text"  v-model="content" placeholder="请输入想要找的宝贝" />
               </div >
                <router-link class="min_img_6_1" to="" @click.native ="search()" ></router-link>   
           </div>
     </div>
      <header-tab-two v-show="this.$route.path=='/center'" v-on="$listeners" :x='x'></header-tab-two>
     <header-tab v-show="this.$route.path!=='/center'"></header-tab>
 </div>
</template>
<script>
   import headerTab from "./Myheader-tab"
   import headerTabTwo from "./Myheader-tab-two"
export default {
    components:{headerTab,headerTabTwo},
    props:["i",'x'],
    inheritAttrs:false,
    data() {
        return {
            //设置跳转链接
            href:this.$store.state.isLogin==1 ? "":"/login",
            //设置样式
            style:"sanjiao_bottom",
            //用户名
            uname:"",
            //当前的路由
            path_header:this.$route.path,
            //购物车的数量
            p:0,
            // 传递的路径
            n: this.i,
            //搜索的内容
            content:""
        }
    },
    methods: {
        //页头中的登录按钮
        login_1(){
            if(this.$store.state.isLogin==1){
                //当登录成功 后  点击三角按钮进行改变形态
                this.style=="sanjiao_left" ? this.style="sanjiao_bottom" :this.style="sanjiao_left" 
                
            }else{
                //当 处于未登录状态时 记录跳转登录界面的 路由 路径 记录在cookie 中 
               document.cookie="path="+this.path_header+";"
               //修改vuex 中state 中 path 的数据
               this.$store.commit("path",this.path_header)
            } 
        },
        //注销按钮
        quit(){
            this.$store.commit("quit")
            document.cookie="islogin=0"
            this.href="/login"
        },
        //搜索按钮
        search(){
             if(this.content!==""){ 
                 if(this.path_header!=="/list/-1"){this.$router.push({
				path:"/list/-1",
				query:{
					order:this.content
				}
			})}else{this.$emit("listenchilen",this.content)}
              //向父组件 list传值
              //改变家族分类点击的值
            }else{
                this.$message({
                              type: 'info',
                               message: `请输入搜索的内容`
                });
            }
        }
    },
     mounted(){ 
         if(this.$store.state.isLogin==1){
         this.m(1).then(result=>{
                    var p
					[p]=result
					this.p= p
                })
         }           
        //数据显示功能
    //    var i= this.m(this.$store.state.uid).i
     }
}     
</script>
<style scoped>
 @import "../../views/axisss/css/header.css";
</style>
