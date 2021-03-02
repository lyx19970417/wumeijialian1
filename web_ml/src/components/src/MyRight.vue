<template>
    <div>
        <div class="right">
       <ul class=" list-unstyled">
           <li><table></table>
			   <a class="user" href="javascript:;">
				   <span class="bg_img_1_1_2"></span>
			   </a> 
			   </li>
           <li>
			   <table></table>
			<router-link :to="this.$store.state.isLogin==1 ? '/car':this.$route.path ">
		   <span class="bg_img"></span>
		   <span class="bg_color" v-text="p" v-if="n==undefined"></span>
		   <span class="bg_color" v-text="t" v-else></span>
		   </router-link>
		   </li>
           <li>
			   <table></table>
			   <div class="massge keep_top" >
			   	<div class="angle"></div>
			   	我的收藏	
			   </div>
			   <a class="my_keep" href="javascript:;">
				   <span class="bg_img_2_1_2"></span>
			   </a>
			 </li>
           <li>
			   <table></table>
			   <div class="massge preference_top" >
			   	<div class="angle"></div>
			   	我的优惠卷
			   </div>
			   <a class="preference" href="javascript:;">
				   <span class="bg_img_3_1_2"></span>
			   </a>
		   </li>
           <li>
			   <table></table>
			   <a class="suggest" href="javascript:;">
				   <div class="massge angle_top" >
				    	<div class="angle"></div>
				   	    意见反馈
				   </div>
				   <span class="bg_img_4_2_1"></span>
			   </a>
			   <a class="return_top" href="#">
				<div class="massge  return" >
					<div class="angle"></div>
					返回顶部
				</div>
			   	  <span class="bg_img_5_2_1"></span>
			   </a>
		   </li>
       </ul>
	  </div>
   </div>
</template>
<script>
export default {
	props:["t"],
    data() {
		return {
			n:this.t,
			p:0
		}
	},
	mounted() {
		// console.log(this.t)
		if(this.$store.state.isLogin==1){
         this.m(1).then(result=>{
                    var p
					[p]=result
					this.p= p
				}) 
		}		  
	},
}
</script>
<style scoped>
    @import "../../views/axisss/css/rigth.css";
</style>