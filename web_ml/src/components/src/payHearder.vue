<template>
<div class="bg">
    <!-- 页头 -->
    <div>
        <!-- 首页按钮 -->
    <div class="header">
        <div class="index">
            <router-link  to="/">卷皮首页</router-link>
        </div>
        <!-- 用户登录状态 -->
        <div :class="this.$store.state.isLogin==1 ? 'user_1':'user'">
            <a  href="javascript:;">
            <span v-text="'你好,'+this.$store.state.uname"  class="text-truncate style" v-if="this.$store.state.isLogin==1"></span>
            <span v-else>登录</span>
            </a>
        </div>
        </div>
        <div class="both"></div>
        <div class="img_1">
            <div class="left"></div>
            <div class="both"></div>
        </div>
    </div>
</div>    
</template>
<style >
  @import "../../views/axisss/css/payheader.css";
</style>