<template>
    <div>
        <!-- 页头 -->
        <pay-header></pay-header>
        <!-- 页主体 -->
        <div>
           <div class="dsf dss">
              <address-add @change="costPlannedAmountChange"></address-add>
            <div class="pay-order pay-order-bg">
                <h2 class="dsa">选择支付方式</h2>
                <ul class="d-flex">
                    <li>
                        <a href="javascript:;" @click="bao">
                            <label for="" class="d-flex">
                                <input type="radio" autocomplete="off" class="margin-order" name="pay" value="1" v-model="pay">
                                <div class="img">
                                <img src="../../public/img_order/Alipay.jpg" alt="">
                                </div>
                            </label>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" @click="xin">
                            <label class="d-flex">
                                <input type="radio" autocomplete="off" class="margin-order" name="pay" value="0" v-model="pay">
                                <div class="img">
                                <img src="../../public/img_order/weixin.jpg" alt="">
                                </div>
                            </label>
                        </a>
                    </li>
                </ul>
            </div>
             <div class="goods-order">
                 <h2>确认订单信息</h2>
                 <div class="order-car">
                     <router-link to="/car">&lt;&lt;返回购物车</router-link>
                 </div>
                 <div class="both"></div>
                 <ul class="order-hd d-flex">
                      <li class="center_pay">共(<span v-text="number"></span>)件商品</li>
                      <li class="center_pay">规格</li>
                      <li class="center_pay">单价</li>
                      <li class="center_pay">数量</li>
                      <li class="center_pay">小计</li>
                 </ul>
             </div>
                <div class="order-pay-list">
                    <!-- 遍历起点 -->
                   <div class="order-list" v-for="(item,index) of order" :key="index">
                        <div class="table-box">
                            <span>由卷皮提供商发货</span>
                            <span>包邮</span>
                      </div>
                        <ul class="d-flex top1_pay" >
                           <li class="d-flex"><img :src="item.pic" alt=""> <span v-text="item.title" class="text-truncate pay-smail"></span></li>
                           <li class="center_pay"><span v-text="item.color!=-1 ? item.color :'无'"></span><span v-text="item.size!=-1 ? '/ '+item.size: '无'"></span></li>
                           <li class="center_pay" v-text="'￥'+item.price.toFixed(2)"></li>
                           <li class="center_pay" v-text="item.count"></li>
                           <li class="center_pay" v-text="'￥'+(item.count*item.price).toFixed(2)"></li>
                       </ul>
                       <div class="liuyan">
                           留言: <input type="text" class="w-h">
                       </div>
                  </div>
                   <div class="pay-clear">
                  <div class="dizhi">
                      <div class="ff-pay">
                          收货信息：<span v-text="ok_adress"></span>
                      </div>
                  </div>
                  <div class="zhifu">
                      <div class="ff1-pay">
                          <p>
                              商品金额：<span v-text="'￥'+total.toFixed(2)"></span>
                          </p>
                          <p> 总运费：<span> ￥0.00</span></p>
                          <p>活动优惠：<span v-text="'-￥'+special_offer.toFixed(2)"></span></p>
                          <p>优惠券抵扣：<span>-￥0.00</span></p>
                      </div>
                      <div class="ff2-pay">
                          <span>
                              待支付：
                          </span>
                          <span>
                              <em>￥</em>
                              <span v-text="(total-special_offer).toFixed(2)"></span>
                          </span>
                      </div>
                      <em class="line-usr usr-top"></em>
                      <em class="line-usr usr-bottom"></em>
                  </div>   
                </div> 
                <div class="both"></div>
               </div>
             </div>
           </div>
           <div class="order-title">
                    <div class="pay-tap">
                        <p>支付方式：<span v-text="pay=='1' ? '支付宝支付':'微信支付'"></span></p>                        
                    </div>
                     <a href="javascript:;" class="go-pay" @click="pay_order_1">确定并支付</a>
                     <em class="pay-gf pay-left"></em>
                     <em class="pay-gf pay-right"></em>
         </div>
                <div class="both"></div>
                 <el-dialog
                     title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span v-text="pay==1 ? '您确定要使用支付宝支付？': '你确定使用微信支付？'"></span>
                    <span slot="footer" class="dialog-footer">
                       <el-button @click="dialogVisible = false">取 消</el-button>
                       <el-button type="primary" @click="accom">确 定</el-button>
                    </span>
                  </el-dialog>
        <!-- 页尾 -->
        <my-footer></my-footer>
    </div>
</template>
<script>
import payHeader from "../components/src/payHearder"
import myFooter from "../components/src/MyFooter"
import addressAdd from '../components/src/address.vue'
export default {
    components:{payHeader,myFooter,addressAdd},
    data() {
        return {
            //储存地址
            address:"",
           //支付方式 1为支付宝 0 为微信
           pay:"1",
           //确认收货地址的信息
           ok_adress:"",
           //储存订单的数组
           order:[],
           //商品数量n
           number:0,
           //计算原价
           total:0,
           //优惠总价
           special_offer:0,
           //提示控制
           dialogVisible: false,
           //i 为传递地址数组的下标
           i:""
        }
    },
    methods: {
        async costPlannedAmountChange(pan1,pan2,pan3){
           this.ok_adress=pan1
           this.i= parseInt(pan2)
           this.address=pan3
        },
        //点击支付宝图标 实现选中
        bao(){
            this.pay="1"
        },
        //点击微信图片实现选中
        xin(){
            this.pay="0"
        },
        //点击支付按钮判断地址是否选中
        pay_order_1(){
            if(this.i==-1){
                this.$alert('请选择收货地址', '地址信息', {
                     confirmButtonText: '确定',
                    callback: action => {
                       this.$message({
                           type: 'info',
                          message: `请选择收货地址`
                       }) 
                    }
                })
            }else{
                this.dialogVisible=true
            }
        },
        //点击弹出框外弹出提示框
        handleClose(done) {
            this.$confirm('确认放弃支付？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        //完成支付的点击事件
        accom(){
        //跳转到个人中心
        this.$router.push("/center")
       //遍历素组
        for(var key of  this.order){  
        //判断当前数据是否从购物车而来
        if(key.cid!==-1){
             //删除当前购物车数据
            this.dele(key.cid)
        }
            
        //1.储存当前的下单时间
        key. order_time=new Date().toLocaleString()
        //2.储存当前的订单状态
        //2.1  2为支付完成
        key.status=2
        //3.储存当前选中的地址 
        key.prov=this.address[this.i].prov
        key.city=this.address[this.i].city
        key.county=this.address[this.i].county
        key.adres=this.address[this.i].adres
        key.name=this.address[this.i].name
        key.phone=this.address[this.i].phone
        //4 删除 购物车中方的 id 值
        delete key.cid 
        //5 添加 付款时间
        key.pay_time=new Date().toLocaleString()
        }
    //1送支付成功的订单给服务器
        this.Order(this.order).then(res=>{
           if(res==1){
            //2。关闭消息确定提示
             this.dialogVisible=false
           }
        })
       
        }
    },
   
    mounted() {
           if(this.$store.state.isLogin==1){
            //获取路由跳转的传递的参数
            this.order= JSON.parse(this.$route.query.order)
            //获取商品数量,总价，优惠价，计算优惠后的价格
            //遍历得到每组商品的数据
            //pri 为优惠后的总价
            var pri=0
            for(var key of this.order){
                this.number+=key.count
                this.total+=key.cprice
                pri+=key.price
            }
            this.special_offer=this.total-pri
             //获取当前选中元素的下标
            
            
        }
    },
}
</script>
<style >
    @import "./axisss/css/pay.css";
</style>