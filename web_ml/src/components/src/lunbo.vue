<template>
     <div class="swiper-container top_center" v-if="c.length>0">
         <div class="swiper-wrapper">
               <div class="swiper-slide "  v-for="(item,index) of b" :key="index" @click="lunbo(item.pid)">
                   <img class="width_img height" :src="item.pic" alt="">
               </div>
         </div>
         <div  class="swiper-button-prev"></div>
         <div class="swiper-button-next"></div>
         <div class="swiper-pagination" slot="pagination"></div>
     </div>  
</template>
<script>
import Swiper from "swiper"
export default {
    props:["c"],
    data() {
        return {
           b:[this.c[1],this.c[2],this.c[3],this.c[4]]
        }
    },
    methods: {
        lunbo(i){
          this.$router.push(`/details/${i}`)
        }
    },
    mounted() {
        this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
         slidesPerView: 1, 
         spaceBetween: 30, 
        loop: true, 
        pagination: { 
           el: '.swiper-pagination', 
           clickable: true 
        }, 
        spaceBetween: 30, 
        centeredSlides: true, 
        autoplay: { 
           delay: 2000, 
          disableOnInteraction: false 
        }, 
        navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
     })   
    });
    },
}
</script>