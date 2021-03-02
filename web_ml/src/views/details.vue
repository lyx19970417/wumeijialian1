<template>
    <div >
		<my-right :t="i"></my-right>
		<my-header :i="i"></my-header>
        <div id="detail" class="bg-white">
			<div>
				<ul class="d-flex mianbaoxie">
					<li class="breadcrumb-item-detail magin_top"><router-link class="font_smail_0 font_hover" to="/">首页</router-link></li>
					<li class="breadcrumb-item-detail "><router-link class="font_smail_0 font_hover famliy" to="" v-text="sort"></router-link></li>
					<li class="breadcrumb-item-detail "><router-link class="font_smail_0 font_hover title" to="" v-text="laptop.title" :t="title_two=laptop.title"> </router-link></li>
				</ul>
			</div>
			<div class="d-flex">
				<div>
				    <ul class="list-unstyled right_ul">
						<li v-for="(ml,i) of ml" :key="i" @click="src(ml.im)">
							<img class="img_one" :src="ml.im" data-img="" alt="" style="width: 58px; height: 58px;">
						</li>
						<!-- <li><img class="img_two" src="" data-img="" style="width: 58px; height: 58px;">
						</li>
						<li>
							<img class="img_three" src="" data-img="" alt="" style="width: 58px; height: 58px;">
						    
						</li>
						<li>
							<img class="img_fist" src="" data-img="" style="width: 58px; height: 58px;" >
						</li> -->
					</ul>
					<div class="max_img">
						<img class="big_img" :src="img" >
					 </div>
				</div>
				<div class="center_div">
				    <h1 v-text="laptop.subtitle"></h1>
					<div class="d_info d-flex justify-content-between">
						<div class="">
							<span class="font_smail">￥</span>
							<span class="font_smail_1" v-text="laptop.price">126</span>
							 <span class="font_smail_2" v-text="'参考价：'+laptop.reference_price"></span>
						</div>
						<div class="mr-3 d-flex">
							<span class="font_smail_3">剩余:&nbsp;</span>
							<span class="font_smail_4" v-text=" time"></span >
						</div>
					</div>
					<div class="style-num">
						<dl class="d-flex spase_dl" v-if="color.length>0"> 
							<dt class="detils-width-c-s">颜色：</dt>
							<dd>                 
								<ul class="color_one   flex-wrap">
									<li class="abc d-flex" v-for="(color,i) of color" :key="i" @click="chenge(color.rid,i) " :class="border==i ? 'active_b':''"><router-link to="" :class="font==i ? 'active_c':''" > 
										<img :src="laptop.im" alt="" style="height:22px;width:22px;">
										<span v-text="color.laptop_color"  :t=" color_two=color.laptop_color"></span>
									</router-link></li>
								</ul>
							</dd>
						</dl>
						<dl class="d-flex spase_dl " v-if="size.length>0">
							<dt class="detils-width-c-s">尺码：</dt>
							 <ul class="size_one  flex-wrap" >
								 <li class="detais-ab">库存：</li>
								 <li v-for="(color_size,i) of color_size" :key="i" :class="border_size==i ? 'active_2b': ''"  @click="size_chenge(i)">
									 <router-link to=""  :class="font_size==i ? 'active_2c':''">
									 <span v-text="color_size.laptop_size" :t="size_two=color_size.laptop_size"></span>
                                         <div v-if="color_size.inventory_count <= 20" class="aaa gray">库存紧张</div>
                                         <div v-else-if="color_size.inventory_count==0" class="aaa light-gray">售罄</div>
                                         <div v-else v-text="color_size.inventory_count" class="aaa"></div>
								      </router-link>
								 </li>
							 </ul>
						</dl>
						<dl class="d-flex">
							<dt>数量：</dt>
							<dd id="number_one">
								<button class="decrease magin_left" @click="min">-</button><input type="text" disabled v-model="n" class="text-center w-25  my_input_1" /><button class="decrease magin_right" @click="add">+</button>
							</dd>
						</dl>
					</div>
					<div class="button_add">
						<button type="button" class="btn btn_width btn_bg" @click="buy">立即购买</button> <button type="button" class="btn btn-danger btn_width btn_left" @click="car_details()">加入购物车</button>
						<div class="add_animation  hild_btn">
							<img :src="img">
						</div>
					</div>
				</div>
				<div class="deal-store">
	                <div class="store_wrapper">
						<div class="deal_store_img">
							<img src="img-details/58ca3ac4a43d1f7f295abd14_800x800.jpg" >
						</div>
						<div class="deal_store_name">
							<router-link to="#" class="sale_name">瑞拉美妆洗护专营店</router-link>
						</div>
						<div class="deal_buy_nums">共133件商品</div>
					</div>
						<ul class="store_desc">
							<li>
								<img class="store_desc_img" src="img-deta
                    ils/gold.png" >
								 <span class="store_desc_name">金牌认证 </span>
							</li>
							<li>
								<img class="store_desc_img" src="img-details/bail.png" >
								 <span class="store_desc_name">已缴纳保险金</span>
							</li>
							<li>
								<img class="store_desc_img" src="img-details/license.png" >
								 <span class="store_desc_name">营业执照</span>
							</li>
                
						</ul>
						<div class="to_im d-flex">
							<img class="to_im_img" src="img-details/connect.png" alt="">
							<router-link to="#" class="to_im_name">联系客服</router-link>
						</div>
				</div>
			</div>
			<div class="text_clear">
				<span>100%人工质检 </span>
				<span>全国包邮低价保障 </span>
				<span>7天无理由退货</span>
			</div>
			<div class="clear">
				<router-link class="" to="#">
					<i class="text_clear_i"></i>
					收藏
				</router-link>
				<router-link class="clear_share" to="#">
				<img class="img_clear" src="img-details/share.png" >
					分享
				</router-link>
				<router-link class="" to="#">
					举报
				</router-link>
			</div>

			<div class="d-flex justify-content-between  _width">
            <div class="">
				<div class="rev">
				<ul class=" slid-box-man  nav nav-pills" :class="nav">
					<li class="nav_item">
						<a data-toggle="pill" class=" nav_link active" href="#pill1" @click="chenged(0)">商品详情</a>
					</li>
					<li class="nav_item spce" v-if="spce.length>0">
						<a data-toggle="pill" class="nav_link " href="#pill2" @click="chenged(1)">商品规格</a>
					</li>
					<li class="nav_item">
						<a data-toggle="pill" class="nav_link" href="#pill3" @click="chenged(2)">物流与售后</a>
					</li>
					<li class="nav_item">
						<a data-toggle="pill" class="nav_link" href="#pill4" @click="chenged(3)">消费保障</a>
					</li>
				</ul>
			  </div>
				<div class="tab-content">
					<div id="pill1" class="t
        ab-pane active" v-if="x==0">
						<div class="info_title">
							<span class="single-style">商品详情</span>
						</div>
						<div class="goods_dase_1">
							<img class="magin-auto"   v-for="(pic,i) of pic" :key="i" :src="pic.im" alt="">
							<!-- <img src="img-details/58ca0ba4a43d1f1eef5d7245_790x833.jpg" >
							<img src="img-details/58ca0ba8a43d1f294c6dece4_790x833.jpg" >
							<img src="img-details/58ca0baaad0a4974858b45c7_790x834.jpg" >
							<img src="img-details/58ca0baca43d1f1dba5b7cac_790x833.jpg" alt="">
							<img src="img
                -details/58ca0baea43d1f1d842a827d_790x833.jpg" >
							<img src="img-details/58ca0bb0a43d1f19de018ed4_790x834.jpg" >
							<img src="img-details/58ca0bb2ad0a498e858b45c1_790x833.jpg" >
							<img src="img-details/58ca0bb4ad0a497e858b45c1_790x833.jpg" >
							<img src="img-details/58
                ca0bb7a43d1f209807bb37_790x1006.jpg" >
							<img src="img-details/57da2e59151ad1d2428b45ab_750x806%20(1).jpg" >
							<img src="img-details/57da2e5a151ad128438b4598_750x805%20(1).jpg" > -->
						</div>
					</div>
        
					<div id="pill2" class="tab-pane" v-if="x==1">
						<div class="info_title">.
							<span class="single-style"><a name="pill2">商品规格</a></span>
						</div>
						<div>
							<table class="tb">
								<tr>
									<td width="33%" v-for="(spce,i) of spce_1" :key="i" v-text="spce.content"></td>
								</tr>
								<tr>
									<td width="33%" v-for="(spce,i) of spce_2" :key="i" v-text="spce.content"></td>
								</tr>
								<tr>
									<td width="33%" v-for="(spce,i) of spce_1" :key="i" v-text="spce.content"></td>
								</tr>
							</table>
						</div>
					</div>
					<div id="pill3" class="tab-pane" v-if="x==2">
						<div class="info_title">.
							<span class="single-style"><a name="pill3">物流与售后</a></span>
						</div>
						<div class="style_width">
							<p><b>商家提醒：</b>此商品由品牌商从<b>【江苏南京】</b>通过<b>【圆通速递】</b>、<b>【天天快递】</b>、<b>【邮政国内小包】</b>发货</p>
							<p><b>24小时发货</b>：买家付款成功后，商家将在24小时内完成发货。（节假日等特殊情况除外）</p>
						    <p><b>包裹跟踪：</b>您可在<router-link to="#">【我的订单】</router-link>中查询物流跟踪信息。</p>
							<p><b>确认收货：</b>当快件送达至您的收货地址后，卷皮将为您自动确认收货并将奖励积分发放至您的账户。</p>
							<div class="style_img"></div>
							<p>
								<b>售后服务承诺</b>
								<br>
								收到货后，如果因为主观原因不喜欢/不想要了，在不影响二次销售的情况下，签收后7天内，卷皮网为您提供七天无理由退货服务。如果未收到货或收到<br>商品有质量问题，您可以在签收后15天内申请售后。 <router-link to="#">售后服务说明>></router-link>
							</p>
							<p>
								<b>运费补贴政策</b> <br>
								商品存在问题时，请及时申请售后，卷皮将提供至少10元的退货运费补贴。如遇到少件、错发、空包裹等情况，还额外提供至少10元的补偿。 <br><router-link to="#">退货运费补贴说明>></router-link>
							</p>
							<p>
								<b>价格说明</b><br>
								关于卷皮商品价格的说明 <router-link to="#">查看详情>></router-link>
							</p>
						</div>
					</div>
					<div id="pill4" class="tab-pane" v-if="x==3">
						<div class="info_title">.
							<span class="single-style">消费保障</span>
						</div>
						<div class="cp">
							<ul class="list-unstyled d-flex cpc">
								<li>
									<span class="cpc01">
										<div class="con1"></div>
									</span>
								</li>
								<li>
									<span class="cpc01 cpc2">
										<div class="con1 con2"></div>
									</span>
								</li>
								<li>
									<span class="cpc01 cpc3">
										<div class="con1 con3"></div>
									</span>
								</li>
								<li>
									<span class="cpc01 cpc4">
										<div class="con1 con4"></div>
                            
									</span>
								</li>
								<li>
									<span class="cpc01 cpc5">
										<div class="con1 con5"></div>
									</span>
                        
								</li>
								<li>
									<span class="cpc01 cpc6">
										<div class="con1 con6"></div>
                            
									</span>
								</li>
							</ul>
						</div>
            
					</div>
				</div>
			</div>
			<!-- 动态随机生成待定 -->
		    <div class="other_goods_list">
				<div class="tatile_other_grey">专场其他商品</div>
				<router-link to="#" class="onther_goods_item d-flex">
					<img class="goods_img" src="img-details/5f05aad4b6f8ea1a9013eafd_800x800.jpg" alt="">
					<div class="onther_goods_desc">
						<div class="onther_goods_name">玉蓉斯拉面膜</div>
						<div>
							<span class="onther_new_cprice">¥49</span>
							<span class="onther_new_oprice">¥98</span>
						</div>
					</div>
				</router-link>
				<router-link to="#" class="onther_goods_item d-flex">
					<img class="goods_img" src="img-details/5f05436133b089784d24df2b_800x800.jpg" alt="">
					<div class="onther_goods_desc">
						<div class="onther_goods_name">玉白祛斑霜50g</div>
						<div>
							<span class="onther_new_cprice">¥79</span>
							<span class="onther_new_oprice">¥209</span>
						</div>
					</div>
				</router-link>
				<router-link to="#" class="onther_goods_item d-flex">
					<img class="goods_img" src="img-details/5f05417bb6f8ea7ece2f5385_800x800.jpg" alt="">
					<div class="onther_goods_desc">
						<div class="onther_goods_name">绿碧玺眼膜贴</div>
						<div>
							<span class="onther_new_cprice">¥69</span>
							<span class="onther_new_oprice">¥198</span>
						</div>
					</div>
				</router-link>
				<router-link to="#" class="onther_goods_item d-flex item_magin">
					<img class="goods_img" src="img-details/5f05aa2333b089784807bb28_800x800.jpg" alt="">
					<div class="onther_goods_desc">
						<div class="onther_goods_name">凤雨双毛睫毛头膏</div>
						<div>
							<span class="onther_new_cprice">¥59</span>
							<span class="onther_new_oprice">¥78</span>
						</div>
					</div>
				</router-link>
			</div>
		</div>	
		</div>
		<div class="alert" >
			<router-link to="javascript:;">×</router-link>
			<h3></h3>
		</div>
          <my-footer></my-footer>
    </div >
</template>
<script>
import MyRight from '../components/src/MyRight.vue'
import myHeader from '../components/src/MyHeader'
import myFooter from '../components/src/MyFooter'
export default {
  components: { MyRight ,myHeader,myFooter},
    data() {
        return {
			nav:'',
			//传给子组件的值
			i:0,
			//
			t:0,
			//数量的初始值
			n:1,
			//商品详情的初始值
			laptop:[],
			//倒计时时间的初始值
			time:"",
			//颜色类型的初始值
			color:[],
			//尺寸类型的初始值
			size:[],
			//图片数据的出初始值
			pic:[],
			//尺寸类型分类的初始值
			color_size:[],
			//商品规格的初始值
			spce:[],
			//商品类别的初始值
			sort:[],
			//图片展示的初始值
			ml:[],
			//切换图片是的图片属性值
			img:"",
			//控制标签栏的显示隐藏
			x:0,
			//规格分为3组 设置 3 个 变量
			spce_1:[],
            spce_2:[],
			spce_3:[],
			//颜色选中特效 边框
			border:"",
			//颜色选中特效 字体颜色
            font:"",
			//给尺寸绑定 动态样式边框
			border_size:"",
			//给尺寸绑定 动态样式字体
			font_size:"",
			//给颜色的html 文本 绑定 :t
			color_two:"",
			//给尺寸的html 文本绑定
			size_two:"",
			//标题文本 ：t
			title_two:"",
			 path:this.$route.path,
			//获取选中的研策分类
			select_color:-1,
			//获取当前选中的尺寸分类
			select_size:-1
        }
	},
	methods:{
		//点击按钮时进行数量减法
        min(){
		//当 n>1 的时候可以n-- 否则 还是n	
		this.n>1 ? this.n-- :this.n
		
		},
		//当点击+ 进行数量加n++
		add(){
			this.n++
		},
		//通过点击颜色分类获取对应的尺寸
		chenge(rid,btn){
			//获取当前选中的值
			this.select_color=this.color[btn].laptop_color
			// rid 为 点击时传的当前数据的id值，通过 颜色的id 来寻找对应的尺寸值 
			//   this.color_size=[]  当前数组的初始化
		  this.color_size=[]
		  //初始化颜色特效的值
		  this.border=btn
		  this.font=btn
		  //同过遍历  获取 尺寸对象
		  for(var key of this.size){
			  //通过比较 相同
			  if(rid==key.color_id){
				  //将 当前对应的尺寸添加到 对应的数组中
				 this.color_size.push(key)
			  }
		  }
		},
		//通过点击小图片切换大突破的功能
		src(im){
		  //im 为点击的时候传递的当前图片的路径值
		  //将 im 赋值给 this.src 实现大图片的切换
		  this.img=im
		},
		//同过传递的值 进行控制
		chenged(i){
              this.x=i			
		},
		//给尺寸绑定点击事件
		size_chenge(i){
		   this.border_size=i
		   this.font_size=i
		   //替换选中的值
		   this.select_size=this.size[i].laptop_size
		},
		//给 购物车按钮 绑定点击事件
		car_details(){
			//判断是否处于登录状态
			//当 islogin 为1 时为登录状态  
			if(this.$store.state.isLogin==1){
				//动画
				
				this.anmint()
				//获取用户的id
				 var uid=this.$store.state.uid
				//获取购物车的数量
				  var product_id=this.laptop.lid
				//通过获取当前登录的用户名 获取 当前用户名的id
					  this.axios.post("/car/v1/sert",
					   this.qs.stringify({
						   "user_id":uid,
						   "product_id":product_id,
						   "title":this.title_two,
						   "pic":this.img,
							"color":this.select_color,
							"size":this.select_size,
							"price":this.laptop.price,
							'cprice':this.laptop.reference_price,
							 "count":this.n
					   }) 
					 
					  ).then(res=>{
						  if(res.data=="1"){
							this.i++
							this.t++
						  }
					  }) 
			   
		    }else{
				document.cookie="path="+this.path+";"
				this.$store.commit("path",this.path)
				this.$router.push("/login")	
			}
		},
		//立即购买按钮
		buy(){
		   var add={"cid":-1,"user_id":this.$store.state.uid,"product_id":this.laptop.lid,"title":this.laptop.title,"pic":this.laptop.im,"price":this.laptop.price,"cprice":this.laptop.reference_price,"count":this.n,"color":this.select_color,"size":this.select_size}
		   var arr=[]
		   arr.push(add)
		   var str=JSON.stringify(arr)
			this.$router.push({
				path:"/pay",
				query:{
					order:str
				}
			})
		},
	},
    mounted(){
		 //购物车数量的初始值
		 if(this.$store.state.isLogin==1){
		 this.m(this.$store.state.uid).then(result=>{
                    var p 
					[p]=result
					this.i=p 
					this.t=p
				}) 
		 }	
		 this.$(function(){
            window.onscroll=function(){
	            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
	           if(scrollTop>723){
		        this.nav="fixed"
	            }else{
		          this.nav=""
				}	
			}
		 })	
        //通过获取路由传递的值 然后获取该商品的具体信息
        //1获取路由传的值保存在inde_id中
        var index_id=parseInt(this.$route.params.pid)
        //2.通过获取到的商品id请求商品详细信息
        this.axios.get(
            //路由地址
            'laptop/laptop',
            {
                //路由传参
                params:{index_id}
            }
        ).then(res=>{
            //球球到的数据
            //每次返回只有一条数据  赋值给对应的变量   
          this.laptop=res.data[0]
		  this.color=res.data[1]
		  console.log(this.select_color,this.laptop)
		 //定义选中的初始值
		 this.color.length>0 ? this.select_color=this.color[0].laptop_color :''
		  this.size=res.data[2]
		this.size.length>0 ?  this.select_size=this.size[0].laptop_size : ""
          this.pic=res.data[3]
		  this.spce=res.data[4]
		  var[p]=res.data[5]
		this.sort=p.name
		  //在图片数据中取前4组
		  this.ml=this.pic.slice(0,4)
		  this.img=this.ml[0].im
		 //将spce分为3段，每段3条
		 this.spce_1=this.spce.slice(0,3)
		 this.spce_2=this.spce.slice(3,6)
		 this.spce_3=this.spce.slice(6)
		//页面加载完时显示第一个颜色的尺寸数据
		  //遍历 尺寸类数组对象
		  for(var key of this.size){
			 if(this.color[0].rid==key.color_id){
				 this.color_size.push(key)
			 } 
		  }
          //在将数据中的事件转变为一个倒计时 
          //1.倒计时功能
             var oldTime = new Date(this.laptop.close_timer).getTime()-(new Date()).getTime(); //得到毫秒数
             //自定义倒计时函数
          
            var timer=(oldTime)=>{
                window.setInterval( ()=> {
                    var day = 0, hour = 0,minute = 0,second = 0; //时间默认值
                    if (oldTime > 0) {
                     day = Math.floor(oldTime / (60 * 60 * 24)/1000);
                     hour = Math.floor(oldTime / (60 * 60*1000)) - (day  * 24);
                     minute = Math.floor(oldTime / 60/1000) - (day * 24 * 60) - (hour * 60);
		             second = Math.floor(oldTime/1000) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		              if (minute <= 9) minute = '0' + minute;
                      if (second <= 9) second = '0' + second;
                       //    $('#day_show').html(day + "天");
                      //   $('#hour_show').html('<s id="h"></s>' + hour + '时');
                     //   $('#minute_show').html('<s></s>' + minute + '分');
		               //   $('#second_show').html('<s></s>' + second + '秒');
		               this.time=(`${day}天${hour}时${minute}分${second}秒`)  
	                   oldTime=oldTime-1000;
                    }else{
			           clearTimeout(oldTime)
		               return  `活动截止`
                    }
                }, 1000);
            }
              timer(oldTime) 
                
        })  
    }
}
</script>
<style scoped>
    @import "./axisss/css/details.css";

</style>