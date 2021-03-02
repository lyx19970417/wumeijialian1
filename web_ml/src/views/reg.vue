<template>
    <div>
        <div id="reg">
			<div class=" d-flex justify-content-between bg-white" id="top-reg" >
			   <a class="min_img_2" href="#"></a>
						  <div class=" d-flex">
			   <a class="min_img_3" href="#"></a>
			   <a class="min_img_4" href="#"></a>
			   <a class="min_img_5" href="#"></a>
			 </div>
		   </div>	 
			 <div class="bg-white" id="login_bottom">
			 	<div class="d-flex justify-content-between login_bottom_padding">
			 		<div>
			 			<span class="font_smail_1">新用户注册</span>
			 			<span class="font_smail_2">注册卷皮网，赢积分换好礼！</span>
			 		</div>
			 		   <p>
			 			  <span class="font_smail_3">已有账号</span>
			 			  <router-link class="font_smail_4" to="/login">立即登录</router-link>
			 		    </p>
			 	    </div>
					<div class="row no-gutters justify-content-between login_bootom_padding_2">
						<ul class="list-unstyled bottom_left">
							<li class="height_1">
							新用户名：<input type="text" id="uname" v-model="user" class="my_user input_width-reg input-height" @click="uname_1"  @blur="checkUname"/>
							<span id="uname_cmsg"  v-text="uname_cmsg"></span>
							<p id="uname_msg" class="msg" v-text="uname_msg"></p>
							</li>
							<li class="height_1">
						    创建密码：<input type="password"  class="my_pwd input_width-reg input-height" id="upwd" v-model="upwd" @click="upwd_1"  @blur="checkUpwd"/>
							<span id="upwd_cmsg" v-text="upwd_cmsg"></span> 
							<p id="upwd_msg" class="msg" v-text="upwd_msg"></p>
							</li>
							<li class="height_1">
							确认密码：<input type="password"  class="my_pwd input_width-reg input-height" id="cpwd" v-model="cpwd" @click="cpwd_1"  @blur="checkCpwd"/>
							<span id="cpwd_cmsg" v-text="cpwd_cmsg"></span>
							<p id="cpwd_msg" class="msg" v-text="cpwd_msg"></p>
							</li>
							<li class="height_1">
							手机号码：<input type="text"  class="my_input input_width-reg input-height" id="phone" v-model="phone" @click="phone_1" @blur="checkPhone"/>
							<span id="phone_cmsg" v-text="phone_cmsg"></span>
							<p id="phone_msg" class="msg" v-text="phone_msg"></p>
							</li>
							<li class="height_1">
							电子邮箱：<input type="email"  class= "my_email input_width-reg input-height" id="email" v-model="email" @click="email_1"  @blur="checkEmail">
							<span id="email_cmsg" v-text="email_cmsg"></span>
							<p id="email_msg" class="msg" v-text="email_msg"></p>
							</li>
							<li class="height_1">
							真是姓名：<input type="text"  class="my_name input_width-reg input-height" id="user_name" v-model="my_name " />
							<span id="user_name_cmsg" v-text="user_name_cmsg"></span> 
							<p id="user_name_msg" class="msg" v-text="user_name_msg"></p> 
							</li>
							<li>
					          <input type="radio"  class="my_man" name="sex" value="1" v-model="checked"  id="man" @input="input"/>男
							  <input type="radio"  class="my_woman" name="sex"  value="0" id="woman" v-model="checked" @input="input">女
							  <input type="radio"  class="my_secrecy" name="sex"  value="-1" v-model="checked" @input="input"/>保密
							</li>
							<!-- <li class="d-flex justify-content-between">
								<input type="text" class=" my_verify input-height"/> <a class="font_smail_6" href="#">获取验证码</a>
							</li> -->
							<li>
								<button class="btn btn-danger button_width-reg" id="reg_succs" @click="reg">注册</button>
							</li>
						</ul>
							<div class=" top_right ">
							       <div class="d-flex flex-wrap justify-content-end">  
							            <a class="mr-1 mb-3" href=""><img  src="../../public/img/r-1.jpg" ></a>
							            <a class="mb-3" href=""><img src="../../public/img/r-2.jpg" ></a>
							            <a class="mb-3 mr-1" href=""><img src="../../public/img/r-3.jpg" ></a>
							            <a href="mb-3"><img src="../../public/img/r-4.jpg" ></a>
							        <a href=""><img src="../../public/img/r-5.jpg" ></a>  
							    </div>
							</div>
					</div>			
				</div>
		 </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            //用户名初始值
          user:"",
            //密码初始值
          upwd:"",
          // 确认密码的初始值
          cpwd:"",
          //  手机号的初始值
          phone:"",
          // 邮箱的初始值
          email:"",
          //真实姓名的初始值
          my_name:"",
          //单选框性别的初始值
          checked:"1",
          // 用户名 状态变化的初始值
          uname_cmsg:"",
          // 用户名 提示字段的初始值
          uname_msg:"" ,
          //  密码 状态提示初始值
          upwd_cmsg:"",
          // 密码 提示字段的初始值
          upwd_msg:"",
          // 确认密码 提示符的初始值
          cpwd_cmsg:"" ,
          // 确认密码 日式字段的初始值
          cpwd_msg:"",
          // 手机号  状态的提示符
          phone_cmsg:"",
          // 手机号 字段提示的初始值
          phone_msg:"",
          // 邮箱 状态的提示符
          email_cmsg:"",
          //  邮箱 字段的提示符
          email_msg:"",
          user_name_cmsg:"",
          user_name_msg:""   
        }
    },
    methods: {
        //用户名点击事件
         uname_1(){
             //点击的时候提示
             this.uanme_msg="请输入6~16位"
         },
         //用户名失去焦点
         checkUname(){
           //正则验证  
          var reg=/^[0-9A-Za-z]{6,16}$/
          if(reg.test(this.user)){
              //合法时 显示 位√
              //在满足 正则验证后 需验证 用户名是否重复
               this.axios.get("user/v2/checkuname",
                   {
                     params:{
                         uname:this.user
                     }
                   }
                ).then(result=>{
                    if(result.data==1){
                        this.uname_cmsg="×"
                       this.uname_msg="用户名已存在"
                    }else{
                        this.uname_cmsg="√"
                        this.uname_msg=""
                    }
                })   
          }else{
              //不合法时 显示位× 并且提示
              this.uname_cmsg="×"
              this.uname_msg="用户名不合法重新输入 6-16位"
          }
         },
         //同上
         upwd_1(){
             this.upwd_msg="请输入6-16位的密码"
         },
         //同上
         checkUpwd(){
             var reg=/^[0-9a-zA-Z]{6,16}$/i
             if(reg.test(this.upwd)){
             this.upwd_cmsg="√"
             this.upwd_msg=""
          }else{
              this.upwd_cmsg="×"
              this.upwd_msg="密码名不合法重新输入 6-16位包含字母,数字"
          }
         },
         //同上
         cpwd_1(){
             this.cpwd_msg="请再次输入密码";
         },
        checkCpwd(){
             this.cpwd==this.upwd ? (this.cpwd_cmsg="√", this.cpwd_msg=""):(this.cpwd_cmsg="×",this.cpwd_msg="俩次密码不一致重新输入")
         },
         phone_1(){
             this.phone_msg="请输入是11位手机号"
         },
         checkPhone(){
               var reg=/^1[3-9]\d{9}$/
               reg.test(this.phone) ? (this.phone_cmsg="√",this.phone_msg=""):(this.phone_msg="手机号不合法",this.phone_cmsg="×")
         },
         //邮箱点击
        email_1(){
            this.email_msg="请输入合法邮箱"
        },
        checkEmail(){
	     var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
         reg.test(this.email) ? (this.email_cmsg="√",this.email_msg=""):(this.email_msg="邮箱不合法",this.email_cmsg="×")
        },
         input: function(e){
             //将当前选中的 input value 值传给 checked
           this.checked=e.target.value; 
        },
        reg(){
            //当都为 "√"  可以将填写的数据发送服务器
            // console.log( this.uname_cmsg ,this.upwd_cmsg, this.cpwd_Cmsg , this.phone_cmsg , this.email_cmsg)
           this.uname_cmsg=="√" && this.upwd_cmsg=="√" && this.cpwd_cmsg=="√" && this.phone_cmsg=="√" && this.email_cmsg == "√"  ? 
           this.axios.post(
               //请求地址
               "/user/v1/reg",
               //请求参数
               'uname='+this.user+'&upwd='+this.upwd+'&email='+this.email+'&phone='+this.phone+'&user_name='+this.my_name+'&gender='+this.checked
               ).then(res=>{
                   //res.data 返回数据 返回1 的时候注册成功 
                    if(res.data!=0){
                        //注册成功后  将注册成功的数据直接保存 到vuex
					this.$router.push(`${this.$store.state.path}`)
					this.$store.commit('logined',this.user)
				           var date=new Date();  
                           //更新cookie 中的数据
                           //储存 uid 获取uid
					       this.$store.commit('uid',res.data[0].uid)
                           date.setTime(date.getTime()+60*60*1000*24);
							document.cookie="uname="+this.user+";"+"expires="+date.toGMTString();
                             document.cookie="islogin=1;expires="+date.toGMTString();
                             document.cookie="uid="+res.data[0].uid+";expires="+date.toGMTString();
                    }
               }) : (
                   this.$alert('有不合法信息，请修改结尾为 × 的信息 或 存在不完善的信息 ', '注册提示', {
                         confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `有不合法信息，请修改结尾为 × 的信息`
                          });
                        }
                    })
               )
        }

    },
    mounted() {
    //   this.axios("/user/v1/reg")
    }
}    
</script>
<style scoped>
   @import "../views/axisss/css/reg.css"
</style>