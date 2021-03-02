<template>
    <div>
        <my-right></my-right>
        <my-header @listenchilen="sendData"></my-header>
        <div class="bg-white content">
		<div>
			<ul class="d-flex list-unstyled content_top list">
				<li>今日上新</li>
				<li  v-for="(item,index) of sort" :key="index" @click="sort_c(item.fid)"><router-link v-text="item.name" :to="'/list/'+item.fid"></router-link></li>
			</ul>
		</div>
		<div class="ul_shopping">
		    <ul class=" row no-gutters  list-unstyled datilss"  v-if="resa.length>0">
		        <li class=" d-flex flex-column shopping border_hover flex-nowrop" v-for="(item,index) of resa" :key="index">
		         <router-link :to="'/details/'+item.pid"><img class="img_size" :src="item.pic" alt=""></router-link>
		             <div>
		                <span class="font_small_1" v-text="item.price"></span><span class="font_small_2" v-text="item.cprice"></span>
		             </div>
		             <router-link class="my_collect" :to="'/details/'+item.pid"></router-link>
		            <div class="d-flex justify-content-between">
		                 <router-link class="font_small tady_shopping  text-truncate"  :to="'/details/'+item.pid" v-text="item.title"></router-link>
		                 <span class="font_small_3" v-text="item.timer"></span>
		            </div>
		        </li>
			</ul>
			<div class="stor" v-else>该商品不存在</div>
		</div>		
	</div>
    <my-footer></my-footer>
	</div>
</template>
<script>
import MyRight from '../components/src/MyRight.vue'
import myFooter from '../components/src/MyFooter'
import MyHeader from '../components/src/MyHeader.vue'
export default {
  components: { MyRight ,myFooter, MyHeader},
  data () {
	  return {
		  //储存 获取到的数据
		  resa:"",
		  sort:[]
	  }
  },
  methods: {
	  //监听获取子组件 header 传递的值
	  sendData(data){		  
		this.list(data).then(res=>{
		this.resa=res
	  })
	  },
	  //通过点击标签页 获取相对的信息
	  sort_c(n){
        this.sort_t(n).then(res=>{
			this.resa=res
		})
	  }
  },
  mounted() {
	      if(this.$route.query.order!==undefined){
		  this.list(this.$route.query.order).then(res=>{
		this.resa=res
	      })
		  }
	  //fid 为 路由中的参数
	  var fid=parseInt(this.$route.params.fid)
	if(  fid!=-1){
		//根据路由中的参数获取数据
		//根据id 值获取数据
		this.sort_t(fid).then(res=>{
			this.resa=res
		})
	}
	 //获取分类
    this.axios.get("/index/v1/family").then(res=>{
          this.sort=res.data
      })
  },
}
</script>
<style scoped>
@import "./axisss/css/index.css";
@import "./axisss/css/list.css";
</style>