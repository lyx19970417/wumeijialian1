<template>
    <div>
        <div>
		<div id="top">
		    <ul class="list-unstyled d-flex  justify-content-end mb-0 ">
		        <li class="magin_left login_cl login" style=""><a class="font_smail_top_1 font_smail_top text-truncate " style="" href="javascript:;" v-text="'你好,'+uname"></a></li>
		        <!-- <li class="magin_left reg"><a class="font_smail_top" href="javascript:;">免费注册</a></li> -->
		        <li class="magin_left"><a class="font_smail_top" href="javascript:;">我的订单</a></li>
		        <li class="magin_left"><a class="font_smail_top" href="javascript:;">商家入驻</a></li>
		        <li class="magin_left"><a class="font_smail_top" href="javascript:;">商家中心</a></li>
		        <li class="magin_left">
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
		 <div class=" d-flex justify-content-between bg-white border_bottom_0_1" id="top" >
		    <a class="min_img_2_1" href="javascript:;"></a>
		 <div class=" d-flex">
		    <a class="min_img_3_1" href="javascript:;"></a>
		    <a class="min_img_4_1" href="javascript:;"></a>
		    <a class="min_img_5_1" href="javascript:;"></a>
		 </div>
		</div>
			<ul class="d-flex justify-content-around list-unstyled style_ul">
				<li>商品信息</li>
				<li>单价/原价</li>
				<li>数量</li>
				<li>小计</li>
				<li>操作</li>
			</ul>
		<div class="car_content bg-white" :class="car.length==0 ? 'car_bg_img':''">
			<table></table>
			<div class="order" v-for="(care,i) of car" :key="i" @click.stop="radio(i)">
				<div class="box" >
					<span  v-text="'√'" class="red" v-if="arr.includes(i)"></span>
					<span  v-text="''"  v-else></span>
				</div>
				<a href="javascript:;">
					  <img :src="care.pic" alt="">
				</a>
				<div class="details">
					<p v-text="care.title"></p>
					<p ><span v-text="care.color!=-1 ? care.color:''"></span> <span v-text="care.size!=-1 ? '/ '+care.size:''"></span></p>	
				</div>
				<div class="price">
					<span v-text="care.price"></span>
					<span v-text="'/ ￥'+care.cprice"></span>
				</div>
				<div class="number" >
					<button class="decrease magin_left" @click.stop="min(i,care.cid)">-</button><input type="text" disabled   v-model="care.count"  class="text-center w-25 my_input_1" /><button class="decrease magin_right" @click.stop="add(i,care.cid)">+</button>
				</div>
				<div class=" subtotal " v-text="care.count*care.price"></div>
				<div class="delete" @click.stop="del(i,care.cid)">
					<span>
						<img src="img_car/delete.91359608.png" alt="">
					</span>
				</div>
			</div>
			    <div class="settleAccounts" v-if="car.length>0" >
                    <div id="checked" @click="allChecked">
						<span v-text="'√'" class="red" v-if="isAllChecked"></span>
						<span v-else></span>
						全选
					</div>
					<div>
						
						已选择<span v-text="piece">0</span>件，总额<span v-text="total_p">0</span>元，优惠<span v-text="discounts">0</span>元， 合计(不含运费)<span class="font_smail-0" v-text="'￥'+total"></span><button @click="close()">结算</button>
					</div>
				</div> 
			<div class="font_smail_text location"  v-if="car.length==0">看到喜欢的带回家吧</div>
			    <div class="style_div" v-if="car.length==0">
				   <router-link to="/" class="style_a">今日推荐</router-link>
			   </div>
	    	</div> 	
	    </div>
		<my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '../components/src/MyFooter'
export default {
  components: {myFooter},
    data () {
        return {
            //显示登录状态的用户名
            uname:"",
            //购物车中的数据
			car:[],
			//判断选中的初始值
           verdic:"",
			//样式
			style:"",
			//存放 index 值的 空数组
			arr:[],
			//决定是否全选
			isAllChecked:false,
			//piece 选中的件数 初始值
			piece:0,
			//优惠前
			total_p:0,
			//优惠后总价 初始值
			total:0,
			//优惠金额初始值
			discounts:0
        }
    },
    methods: {
        //点击减号 实现减-1
        min(n,cid){
			//点击的时候 实现 -1  当 =1 的时侯 为原值
			// this.car[n].count==1  ? this.car[n].count : this.canr[n].count--
			if(this.car[n].count>1){
				this.car[n].count--
				if(this.arr.includes(n)){
				//判断是否选中
				var str=  this.price(this.arr,this.car)
				//将返回的值分别赋值给 对应的变量
				this.piece=str[0]
				this.total=str[1]
				this.discounts=str[2]
				this.total_p=str[3]
			}
			}else{
				this.car[n].count=1
			}
			
			//同时改变数据库中的数据
			this.count(this.car[n].count,cid)
        },
        //点击加号实现 +1
        add(n,cid){n
			//点击的时候加 +1 
		  this.car[n].count++
		  //判断是否选中
		  if(this.arr.includes(n)){
				var str=  this.price(this.arr,this.car)
				//将返回的值分别赋值给 对应的变量
				this.piece=str[0]
				this.total=str[1]
				this.discounts=str[2]
				this.total_p=str[3]
			}
		  //同时改变数据库中的数据
			this.count(this.car[n].count,cid)
		},
		del(i,cid){
		  this.car.splice(i,1)
		  this.dele(cid)
		},
		//点击选中或者取消选中的事件 多选
		radio(i){
			//如果数组中 纯在该 i 的值 则 点击的时候出去该值 实现未选择
			if(this.arr.includes(i)){
				this.arr= this.arr.filter(ele=> ele != i)
				   //取消选中状态时 改变其中的件数 和总价
					//计算总价
		            //通过 arr 中添加的  car 中的下标 来获取选中的 car 
				   //遍历arr 数组获取 car 中的下标
				   //调用自定义函数 
				var str=  this.price(this.arr,this.car)
				//将返回的值分别赋值给 对应的变量
				this.piece=str[0]
				this.total=str[1]
				this.discounts=str[2]
				this.total_p=str[3]
			}else{
				//如果不存在 i  则添加 i  为选中状态
				this.arr.push(i)
				//选中获取选中的 件数  和总价
		         var str=  this.price(this.arr,this.car)
				//将返回的值分别赋值给 对应的变量
				this.piece=str[0]
				this.total=str[1]
				this.discounts=str[2]
				this.total_p=str[3]

			}
			//如果 arr 数组的长度 等于  当前  v-for 所循环的数组长度  则 选中全选按钮 
			if(this.arr.length==this.car.length){
				//当 isAllChecked==true 全选选中 反之 未选中
				this.isAllChecked = true
			}else{
				this.isAllChecked=false
			}
		},
		//点击全选事件
		allChecked(){
			//如果此时时全选状态 则点击的时候清空 arr
			//this.isallchecked== true 为全选状态
			if(this.isAllChecked){
			  //清空数组 arr
			  this.arr=[]
			  //清空后 件数为0
			  this.piece=0
			  this.total=0
			  this.discounts=0
				this.total_p=0

			  //变为未选中状态
			  this.isAllChecked=false
			}else{
				//如果此时为未选中状态 则 遍历 this.car 中的下标 添加 到 arr 中
				//遍历得到 car 中的数组下标
				for(var i=0; i<this.car.length; i++){
					//将下标添加到对应的位置
					this.arr[i]=i
				}
				 this.isAllChecked=true
				//全选的时候  件数为 arr.length  
				//点击的时候成选中状态  计算总价 和件数 和优惠金额
		           var str=  this.price(this.arr,this.car)
				//将返回的值分别赋值给 对应的变量
				this.piece=str[0]
				this.total=str[1]
				this.discounts=str[2]
				this.total_p=str[3]
			}
		},
		close(){
			//将选中的购物车数据 提交到订单数据中
			//将选中的数据保存路由中
			//1。定义一个空数组
			//2.遍历 arr 中的值 获取car 的下标
			//3.将获取到的数据保存到新素组中
			if(this.arr.length>0){
			var arr1=[]
			for(var key of this.arr){
                arr1.push(this.car[key])
			}
			var str=JSON.stringify(arr1)
			this.$router.push({
				path:"/pay",
				query:{
					order:str
				}
			})
			}else{
				 this.$alert('未选中商品', '结算提示', {
                     confirmButtonText: '确定',
                    callback: action => {
                       this.$message({
                           type: 'info',
                          message: `请选中商品再进行结算`
                       }) 
                    }
                })
			}
		}
	},

     mounted() {
		
		 //判断是否在登录状态
        if(this.$store.state.isLogin==1){
            //获取用户名显示登录
           this.uname=this.$store.state.uname
         //获取当前用户名的id 获取购物车中的数据
         var uid=this.$store.state.uid
         //调用获取购物车中数据的方法
         this.m(uid).then(result=>{
                    var p ,car
					[p,car]=result
					 this.car=car
				}) 
        }  
      
     }
}    
</script>
<style scoped>
    @import "./axisss/css/header.css";
     @import "./axisss/css/car.css" ;
</style>