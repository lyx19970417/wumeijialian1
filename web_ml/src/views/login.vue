<template>
    <div>
        <div class="login_header" >
	       <div class=" d-flex justify-content-between bg-white" id="top-login" >
		      <a class="min_img_2" ></a>
			  <div class=" d-flex">
		      <router-link class="min_img_3" to="/"></router-link>
              <router-link class="min_img_4" to="/" ></router-link>
              <router-link class="min_img_5" to="/" ></router-link>
			  </div>
	        </div>	
			<div class="bg-white" id="login_bottom">
				<div class="d-flex justify-content-between login_bottom_padding">
					<div>
						<span class="font_smail_1">老用户登录</span>
						<span class="font_smail_2">尊敬的卷皮用户，欢迎您回来！</span>
					</div>
					<p>
						<span class="font_smail_3">还没账号？</span>
						<router-link class="font_smail_4" to="/reg">立即注册</router-link>
					</p>
				</div>
				<div class="row no-gutters justify-content-between login_bootom_padding_2">
					<ul class="list-unstyled bottom_left-login">
						<li>
							<div class="min_img_6"></div>
							<input type="text" class="my_user-login" placeholder="手机号/邮箱/昵称" v-model="user" id="uname"/>
						</li>
						<li>
							<div class="min_img_7"></div>
							<input type="password"  class="my_pwd-login"  placeholder="密码" v-model="upwd" id="upwd" />
						</li>
						<li class="d-flex justify-content-between">
							<label>
							<input type="checkbox" class="my_checkbok" value="one" v-model="st" />俩周内免登录
							</label>
							<a class="font_smail_5" >忘记密码？</a>
						</li>
						<li>
							<el-button class="btn btn-danger button_width" id="login" type="danger"  @click="login">登录</el-button> 
						</li>
						<li>
							<a class="rest_login" data-toggle="collapse" href="#s1">其他登录方式&gt;&gt;</a>
						</li>
						<li id="s1" class="collapse" data-parent="#parent">
		                       <a class="d-flex" >
								<span class="min_img_8"></span>
								<span class="min_img_9"></span>
								<span class="min_img_10"></span>
							</a><br>
						   <a >手机验证码快捷登录</a>
						</li>
					</ul>
					<img src="img_login/1.png" class="max-height" alt="">
				</div>			
			</div>
		</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:"",
			upwd:"",
			st:true
        }
    },
    methods:{
        //登录按钮点击事件
        login(){ 
            //点击的时候吧输入的数据提交到wevb服务器
            this.axios.get(
				//接口地址
                "/user/v1/login",
                {
					//接口提交的参数
                  params:{
                      uname:this.user,upwd:this.upwd
                    }
                }
            ).then(result=>{
				//当数据返回为1 的时候 表示 登录成功 并且跳转到首页 
                if(result.data!==0){
					//调用vux 中的 mutations下的logined 方法 修改 islogin 的值
					this.$store.commit('logined',this.user)
					this.$store.commit('uid',result.data[0].uid)
					//将登录成功的信息  传到cooke 中保存 判断  单选框 俩周免登录是否被选中 选中 则保存 cookie 的生命周期为14tian 否则 为1天
					//创建时间对象
					var date=new Date(); 
					   var uid =result.data[0].uid 
                         if(this.st){
							 //设置过期时间
							 date.setTime(date.getTime()+60*60*1000*24*14);
							  //设置date为当bai前时间du+7tian 
							  //储存登录状态和用户名+过期时间
							 document.cookie="uname="+this.user+";expires="+date.toGMTString();
							 document.cookie="islogin=1;expires="+date.toGMTString();
							 document.cookie="uid="+uid+";expires="+date.toGMTString();
						 }else{
							 //设置过期时间
							  //储存登录状态和用户名+过期时间
							 date.setTime(date.getTime()+60*60*1000*24);
							document.cookie="uname="+this.user+";"+"expires="+date.toGMTString();
							 document.cookie="islogin=1;expires="+date.toGMTString();
							 document.cookie="uid="+uid+";expires="+date.toGMTString();
						 }
                  //设置跳转链接
					this.$router.push(`${this.$store.state.path}`)
					
                }else{
					//否则登录失败  弹出提示框
					this.$alert('用户名或者密码错误', '登录提示', {
                         confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `用户名或者密码错误`
                          });
                        }
                    });
                }
            })
      
        }
    }
}
</script>
<style scoped>
   @import "../views/axisss/css/login.css";

</style>