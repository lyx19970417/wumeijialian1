<template>
    <div>
        <div class="center-width-margin">
          <div class="center-float-left center-magin-right center-bg center-border center-bar">
              <ul class="center-list">
                  <li>账号设置</li>
                      <ul>
                         <li :class="n==1 ?'center-bg-img':''" @click="orderList(1)">基本资料</li>
                         <li :class="n==2 ?'center-bg-img':''" @click="orderList(2)">收货地址</li>
                         <li :class="n==3 ?'center-bg-img':''" @click="orderList(3)">修改中心</li>
                      </ul>
              </ul>
          </div>
          <div class="center-float-right center-user-width">
             <div class="center-bg center-border">
                 <div class="center-text center-border-boottom"  v-text="n==1 ?'基本信息':n==2 ? '收货地址':'修改中心'"></div>
                 <div class="center-right-left center-float-left center-width" v-if="n==1">
                     <div v-for="(item,index) of user" :key="index">
                      <div class="center-ph ">
                          <img src="../../../../../图片/微信图片_20200709193208.jpg" alt="">
                          <a href="javascript:;">
                              <div class="ph-layer"></div>
                              <div class="center-option">编辑头像</div>
                          </a>
                      </div>
                      <div class="center-user-list center-float-left center-user-margin">
                          <ul>
                              <li>用户名：<span v-text="item.uname"></span></li>
                              <li>手机号：<span v-text="item.phone"></span></li>
                               <li>邮箱：<span v-text="item.email"></span></li>
                              <li>性别：<span v-text="item.gender==0 ? '女':item.gender==1 ? '男':'保密'"></span></li>
                         </ul>
                      </div>
                      <div class="center-float-left center-user-xiugai d-flex">
                          <em class="f2_center f4_center" @click="update_user"></em>
                         <span @click="update_user">修改用户信息</span>
                     </div> 
                      <div class="center-float-left center-user-xiugai d-flex">
                          <em class="f2_center f4_center f5_center" @click="my_order"></em>
                         <span @click="my_order">我的订单</span>
                      </div>
                     </div>  
                     <div class="center-both"></div>   
                 </div>
                 <center-address v-if="n==2"></center-address>
                 <div v-if="n==3 && m==-1">
                     <ul class="center_update">
                         <li>修改密码：<span>再您登录成功后可以修改登录密码</span> <button class="center-float-right" @click="center_update_user(1)">修改</button></li>
                         <li>修改邮箱：<span>邮箱可以再您忘记用户名的时候进行验证登录</span> <button class="center-float-right"  @click="center_update_user(2)">修改</button> </li>
                         <li>修改性别：<span>修改您的性别</span> <button class="center-float-right" @click="center_update_user(3)">修改</button></li>
                         <li>修改手机号：<span>手机号再您忘记登录用户名的时候可以当作用户名进行登录</span> <button class="center-float-right" @click="center_update_user(4)">修改</button></li>
                         <li>真实真实姓名：<span>修改您的真是姓名</span> <button class="center-float-right " @click="center_update_user(5)">修改</button></li>
                     </ul>
                 </div>
                 <div v-if="flge" class="center_update">
                     <label v-text="this.m==1 ?'修改密码':this.m==2 ? '修改邮箱':this.m==3 ? '修改性别':this.m==4 ? '修改手机号':'修改真实姓名'"></label>
                     <div class="center_update_input d-flex">
                         <span v-text="this.m==1 ?'新密码':this.m==2 ? '新邮箱':this.m==3 ? '新性别':this.m==4 ? '新手机号':'新真实姓名'"></span>
                         <div v-if="this.m!=3">
                             <input type="text" v-model="newValue">
                         </div>
                         <div v-else>
                             <input type="radio"  class="my_man" name="sex" value="1" v-model="checked"  id="man" @input="input"/>男
							  <input type="radio"  class="my_woman" name="sex"  value="0" id="woman" v-model="checked" @input="input">女
							  <input type="radio"  class="my_secrecy" name="sex"  value="-1" v-model="checked" @input="input"/>保密
                         </div> 
                    </div>
                     <div class="center_update_button">
                         <button @click="update_user_1(m)">修改</button>
                     </div>
                 </div>
            </div>  
          </div>
          <div class="center-both"></div>
      </div>  
    </div>
</template>
<script>
import centerAddress from "./address"
export default {
    components:{centerAddress},
    props:['i'],
     data() {
        return {
            //flge 控制 修改input 的显示隐藏
            flge:false,
           //储存用户信息
           user:[],
          //用户中样式判断
            n: this.i==2?  2 :1,
            //修改功能判断 
            m:-1,
            //新修改的值
            newValue:"",
            //绑定的选中性别
           checked:"1"
        }
    },
    methods: {
        //点击基本资料中修改
        update_user(){
            //跳转到修改页面
            this.n=3
            console.log(1)
        },
        //点滴我的订单
        my_order(){
            //给父组件传值 隐藏 user 显示 order
          this.$emit('change',true,1)
        },
        //列表
        orderList(n){  
            switch(n){
                //当状态未1 的时候 获取未支付的订单
                case 1:
                     this.n=1
                break;
                case 2:
                     this.n=2
                break;
                case 3:
                     this.n=3
                break;               
            }
        },
        center_update_user(n){
             switch(n){
               
                case 1:
                    this.m=1
                break;
                case 2:
                     this.m=2
                break;
                case 3:
                     this.m=3
                break;
                case 4:
                     this.m=4
                break;
                case 5:
                     this.m=5
                break;                     
            }
            this.flge=true
            this.n=3
        },
        //修改性别
        input(e){
              this.checked=e.target.value; 
        },
        //点击修改按钮
        update_user_1(m){
            var uid=this.$store.state.uid
            switch(m){
                case 1:
                  //1 为修改的密码
                  //获取修改的密码然后正则检验是否合法
                  
                  var reg=/^[0-9a-zA-Z]{6,16}$/i
                   if(reg.test(this.newValue)){
                       var obj={'newVale':this.newValue,'uid':uid}
                       //添加要检验的名称
                       obj.name='upwd'
                       obj.upwd=this.newValue
                       //如果合法发送服务器验重和修改
                       this.updated_user(obj).then(res=>{
                          if(res==1){
                              this.flge=false
                              this.m=-1
                              this.$message({
                                 type: 'info',
                                 message: `密码修改成功`
                               });
                          }else{
                               this.$alert('密码和旧密码重复', '修改提示', {
                                   confirmButtonText: '确定',
                                   callback: action => {
                                        this.$message({
                                            type: 'info',
                                             message: `密码和旧密码重复`
                                         });
                                    }
                                })
                          }
                       })
                    }else{
                    //如果不合法发提示 并终止程序的继续执行
                    this.$alert('密码不和法请输入6-16位 包含字母或者数字', '修改提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `密码不和法请输入6-16位 包含字母或者数字`
                          });
                        }
                    })
                    return
                   }
                 
                break;
                case 2:
                    //检测邮箱
                     var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
                   if(reg.test(this.newValue)){
                       //添加要检验的名称
                       var obj={'newVale':this.newValue,'uid':uid}
                       obj.name='email'
                       obj.email=this.newValue
                       //如果合法发送服务器验重和修改
                       this.updated_user(obj).then(res=>{
                          if(res==1){
                              this.flge=false
                              this.m=-1
                              this.$message({
                                 type: 'info',
                                 message: `邮箱修改成功`
                               });
                          }else{
                               this.$alert('邮箱和旧邮箱重复', '修改提示', {
                                   confirmButtonText: '确定',
                                   callback: action => {
                                        this.$message({
                                            type: 'info',
                                             message: `邮箱和旧邮箱重复`
                                         });
                                    }
                                })
                          }
                       })
                    }else{
                    //如果不合法发提示 并终止程序的继续执行
                    this.$alert(' 邮箱不合法','修改提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `请输入合法邮箱`
                          });
                        }
                    })
                    return
                   } 
                break;
                case 3:
                    if(this.checked!=""){
                       //添加要检验的名称
                       var obj={'newVale':`${this.checked}`,'uid':uid}
                       obj.name='gender'
                       obj.gender=this.checked
                       //如果合法发送服务器验重和修改
                       this.updated_user(obj).then(res=>{
                          if(res==1){
                              this.flge=false
                              this.m=-1
                              this.$message({
                                 type: 'info',
                                 message: `性别修改成功`
                               });
                          }else{
                               this.$alert('性别和旧性别重复', '修改提示', {
                                   confirmButtonText: '确定',
                                   callback: action => {
                                        this.$message({
                                            type: 'info',
                                             message: `性别和旧性别重复`
                                         });
                                    }
                                })
                          }
                       })
                    }else{
                    //如果不合法发提示 并终止程序的继续执行
                    this.$alert('未选中性别','修改提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `未选中性别`
                          });
                        }
                    })
                    return
                   } 
                break;
                case 4:
                    //修改手机号
                     var reg=/^1[3-9]\d{9}$/
                    if(reg.test(this.newValue)){
                       var obj={'newVale':this.newValue,'uid':uid}
                       //添加要检验的名称
                       obj.name='phone'
                       obj.phone=this.newValue
                       //如果合法发送服务器验重和修改
                       this.updated_user(obj).then(res=>{
                          if(res==1){
                              this.flge=false
                              this.m=-1
                              this.$message({
                                 type: 'info',
                                 message: `手机号修改成功`
                               });
                          }else{
                               this.$alert('新手机号和旧手机号重复', '修改提示', {
                                   confirmButtonText: '确定',
                                   callback: action => {
                                        this.$message({
                                            type: 'info',
                                             message: `新手机号和旧手机号重复`
                                         });
                                    }
                                })
                          }
                       })
                    }else{
                    //如果不合法发提示 并终止程序的继续执行
                    this.$alert('手机号不合法', '修改提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `请输入11位的合法手机号`
                          });
                        }
                    })
                    return
                   }
                 
                break;
                case 5:
                    //修改真实姓名
                  if(this.newValue!=""){
                       var obj={'newVale':this.newValue,'uid':uid}
                       //添加要检验的名称
                       obj.name='user_name'
                       obj.user_name=this.newValue
                       //如果合法发送服务器验重和修改
                       this.updated_user(obj).then(res=>{
                          if(res==1){
                              this.flge=false
                              this.m=-1
                              this.$message({
                                 type: 'info',
                                 message: `真实姓名修改成功`
                               });
                          }else{
                               this.$alert('新真实姓名与旧真实姓名重复', '修改提示', {
                                   confirmButtonText: '确定',
                                   callback: action => {
                                        this.$message({
                                            type: 'info',
                                             message: `新真实姓名与旧真实姓名重复`
                                         });
                                    }
                                })
                          }
                       })
                    }else{
                    //如果不合法发提示 并终止程序的继续执行
                    this.$alert('真实姓名不能为空', '修改提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$message({
                              type: 'info',
                               message: `真实姓名不能为空`
                          });
                        }
                    })
                    return
                   }
                 
                break;
                break;                     
            }
        }
    },
    mounted() {
        //根据当前的用户的id 值获取当前的用户信息
        if(this.$store.state.isLogin==1){
            this.user_list(this.$store.state.uid).then(res=>{
                    this.user=res
             })
        }

    },
}
</script>