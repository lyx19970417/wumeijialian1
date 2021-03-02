<template>
    <div>
        <my-header @change="header_center" :x='x'></my-header>
        <center-order v-if="flge" @change="order_center"></center-order>
        <center-user v-else :i="i"  @change="user_center"></center-user>
        <my-footer></my-footer>
    </div>
</template>
<script>
import MyHeader from '../components/src/MyHeader.vue';
import MyFooter from '../components/src/MyFooter.vue';
import centerOrder from "../components/src/center_order";
import centerUser from "../components/src/center_user"
export default {
    components:{MyHeader,MyFooter,centerOrder,centerUser},
    data() {
        return {
            flge:true,
            //传给 user 的值
            i:'',
            x:1
        }
    },
    methods: {
        async user_center(pan1,pan2){
            console.log(pan1,pan2)
           this.flge=pan1
           this.x=pan2
        },
        async order_center(pan1,pan2){
             console.log(pan1,pan2)
           this.flge=pan1
           if(pan2!==undefined){
              this.i=pan2
              this.x=2
           }
        },
        async  header_center(pan1){
           this.flge=pan1
        },
    },
}
</script>
<style  scoped>
  @import url("./axisss/css/center.css");
</style>