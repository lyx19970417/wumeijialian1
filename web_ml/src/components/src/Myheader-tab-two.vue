<template>
    <div>
        <div class="bg-white border_bottom_0_1 pt-2" id="bottom">
         <ul class="nav">
             <li class="nav-item"  :class="clas1" @click="color(1)"><a class="nav-link index_i " href="javascript:;"> 我的卷皮</a></li>
            <li class="nav-item" :class="clas2" @click="color(2)"><a class="nav-link" href="javascript:;">账号设置</a></li>
         </ul>
     </div>
    </div>
</template>
<script>
export default {
    name:"headerTabTwo",
    props:['x'],
    data() {
        return {
          clas1:'red',
          clas2:'',
          n:1
        }
    },
    watch: {
        x(newvalue,oldvalue){
            this.clas1="",this.clas2=""
             newvalue!==1 ? this.clas2='red' : this.clas1='red'  
        }
    },
    methods: {
        color(n){
           if(n==1){
               this.clas2=''
               this.clas1='red'
            this.$emit("change",true)
           }else{
               this.clas1=''
               this.clas2='red'
            this.$emit("change",false)
           } 
        }
    },
    mounted() {
    },
}
</script>
<style scoped>
    .red{
        background: #ff464e;
        border-radius: 15% 15% 0 0;
    }
    .red>a{
        color: #fff !important;
    }
</style>