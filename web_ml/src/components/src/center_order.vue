<template>
<!-- 个人中心的订单 -->
    <div>
        <div class="center-width-margin">
          <div class="center-float-left center-magin-right center-bg center-border center-bar">
              <ul class="center-list">
                  <li>我的订单</li>
                      <ul>
                         <li :class="n==0 ?'center-bg-img':''" @click="orderList(0)">全部订单</li>
                         <li :class="n==1 ?'center-bg-img':''" @click="orderList(1)">待付款</li>
                         <li :class="n==2 ?'center-bg-img':''" @click="orderList(2)">已付款</li>
                         <li :class="n==3 ?'center-bg-img':''" @click="orderList(3)">运送中</li>
                         <li :class="n==4 ?'center-bg-img':''" @click="orderList(4)">已送达</li>
                         <li :class="n==5 ?'center-bg-img':''" @click="orderList(5)">已签收</li> 
                      </ul>
                 
              </ul>
          </div>
          <div class="center-float-right ">
              <div class=" center-bg center-border center-margin-bottom center-height">
                  <div class="center-right-left center-float-left">
                      <div class="center-ph">
                          <img src="../../../../../图片/微信图片_20200709193208.jpg" alt=""> 
                          <a href="javascript:;">
                              <div class="ph-layer"></div>
                          </a>
                      </div>
                      <div class="center-info">
                          <p>
                              <span>Hi~</span>
                              <a href="javascript:;" v-text="this.$store.state.uname"></a>
                          </p>
                          <div class="tips">
                              <span>账户具体信息：</span>
                              <a href="javascript:;"  @click="center_user">立即查看</a>
                          </div>
                      </div>
                  </div>
                  <div class="center-right-left  center-float-left message">
                      <a href="javascript:;">
                          <em class="f2_center f3_center" @click="center_user"></em>
                          <span @click="center_user">基本信息</span></a>
                      <a href="javascript:;">
                          <em class="f2_center ic0-add" @click="center_adress"></em>
                          <span class="size"  @click="center_adress">收货地址</span></a>
                  </div>
              </div>
              <div class="center-both"></div>
              <div class="center-bg center-border">
                <div class="center-text " v-text=" is_state">全部订单</div>  
            <div class="center-ok-order" v-if="order.length>0">
                 <ul class="order-hd d-flex">
                      <li class="center_pay">共(<span></span>)件商品</li>
                      <li class="center_pay">规格</li>
                      <li class="center_pay">单价</li>
                      <li class="center_pay">数量</li>
                      <li class="center_pay">小计</li>
                 </ul>
                <div class="order-pay-list">
                    <!-- 遍历起点 -->
                   <div class="order-list" v-for="(item,index) of order" :key="index">
                        <div class="table-box">
                            <span>由卷皮提供商发货</span>
                            <span>包邮</span>
                      </div>
                        <ul class="d-flex top1_pay" >
                           <li class="center-padding-left d-flex"><router-link class="d-flex center-ing-href" :to="'/details/'+item.product_id"><img :src="item.pic" alt="..." class="center-img-width"> <span  v-text="item.title" class="text-truncate center-smail"></span> </router-link></li>
                           <li class="center_pay"><span v-text="item.color!=-1 ? item.color :'无'"></span><span v-text="item.size!=-1 ? '/ '+item.size: ''"></span></li>
                           <li class="center_pay" v-text="item.price"></li>
                           <li class="center_pay" v-text="item.count"></li>
                           <li class="center_pay" v-text="item.price*item.count"></li>
                       </ul>
                       <div class="liuyan d-flex justify-content-around">
                           <div class="">
                                收件人：<span v-text="item.name"></span> 联系方式：<span v-text="item.phone"></span>  收货地址 <span v-text="item.prov+' '+item.city+' '+item.county+' '+item.adres"></span> 
                           </div>
                           <div class="">
                               订单状态：<span v-if="item.status==1">待付款</span><span v-else-if="item.status==2">已支付</span><span v-else-if="item.status==3">运送中</span><span v-else-if="item.status==4">已送达</span><span v-else-if="item.status==5">已签收</span>
                           </div>
                       </div>
                       <div class="center-padding-left center-float-right center-stat">
                           <button v-show="item.status>1 && item.status<5">确认收货</button><button class="center-butten-border" v-show="item.status==1">在线支付</button><button class="center-butten-border" v-show="item.status==1 || item.status==2">取消订单</button><button class="center-butten-border">联系客服</button>
                       </div>
                       <div class="center-both"></div>
                  </div>
                </div>
            </div> 
                 <div class=" center-order-padding center-noorder" v-show="order.length==0 && flge==false" >
                     <div class="centet-noorder-text">
                         <p>您的订单下还没有购买过商品哦~</p>
                         快来选购自己的商品吧~
                         <p><span>去</span><router-link to="/">首页</router-link>看看</p>
                     </div>
                     <div class="center-solid-right"></div>
                     <div class="center-solid-bottom"></div>
                 </div>
                <div class="center-state-norder" v-if="flge">
                   <span> Hi~ 没有符合条件的订单~</span>
                </div>
            </div>  
          </div>
        </div>
        <div class="center-both"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //储存订单数据
            order:"",
            //控制开关
            flge:false,
           //订单标题
            is_state:"全部订单",
          //订单状态选中样式判断
            n:0          
        }
    },
    methods: {
        //点击基本资料
        center_user(){
          this.$emit('change',false,1)            
        },
        //点击收货地址
        center_adress(){
          this.$emit('change',false,2)            
        },
        orderList(n){  
            switch(n){
                //当状态未1 的时候 获取未支付的订单
                case 1:
                     this.n=1
                    //axios
                this.state_order(1,this.$store.state.uid).then(res=>{
                   //清空 order
                   this.order=[]
                   //赋值
                   this.order=res
                   //改变订单名称
                   this.is_state="待付款"
                      this.order.length==0 ? this.flge=true : this.flge=false
                })
                break;
                case 2:
                     this.n=2
                    this.state_order(2,this.$store.state.uid).then(res=>{
                   //清空 order
                   this.order=[]
                   //赋值
                   this.order=res
                   //改变订单名称
                   this.is_state="已付款"
                   //当订单为空的时候 显示  flge 为true
                   this.order.length==0 ? this.flge=true : this.flge=false 
                })
                break;
                case 3:
                     this.n=3
                    this.state_order(3,this.$store.state.uid).then(res=>{
                   //清空 order
                   this.order=[]
                   //赋值
                   this.order=res
                   //改变订单名称
                   this.is_state="运送中"
                   //当订单为空的时候 显示  flge 为true
                   this.order.length==0 ? this.flge=true : this.flge=false 
                })
                break;
                case 4:
                     this.n=4
                    this.state_order(4,this.$store.state.uid).then(res=>{
                   //清空 order
                   this.order=[]
                   //赋值
                   this.order=res
                   //改变订单名称
                   this.is_state="已送达"
                   //当订单为空的时候 显示  flge 为true
                   this.order.length==0 ? this.flge=true : this.flge=false 
                })
                break;
                case 5:
                     this.n=5
                    this.state_order(5,this.$store.state.uid).then(res=>{
                   //清空 order
                   this.order=[]
                   //赋值
                   this.order=res
                   //改变订单名称
                   this.is_state="已签收"
                   //当订单为空的时候 显示  flge 为true
                   this.order.length==0 ? this.flge=true : this.flge=false 
                })
                break;
                  default:
                     this.n=0
                  this.order=[]    
                  this.center_aorder(this.$store.state.uid).then(res=>{
                 this.order=res
                 this.is_state="全部订单"
                   this.order.length==0 ? this.flge=true : this.flge=false 
                })                     
            }
         
        }
    },
    mounted() {
        //首屏加载时获取当前用户的全部订单
        if(this.$store.state.isLogin==1){
            this.center_aorder(this.$store.state.uid).then(res=>{
                res.forEach(item=>{
                    item.pic=require("../../../public/"+item.pic)
                })
               this.order=res
            })
        }
    },
}
</script>
<style scoped>
@import "../../views/axisss/css/pay.css";
    
</style>