<script setup>
import product from './product.vue'
import Header from './components/Header.vue';
import Banner from './components/Banner.vue'
import LogoBanner from './components/LogoBanner.vue'
import NewArrival from './components/NewArrival.vue'
import TopSelling from './components/TopSelling.vue'
import Comments from './components/Comments.vue'
import Comments_Slider from './components/Comments_Slider.vue'

</script>

<template>
    
    <Header/>
    <Banner/>
    <LogoBanner/>
    <NewArrival/>
    <div class="line max-w-7xl mx-auto px-4"><hr></div>
    <TopSelling/>
    <!-- <Comments/> -->
    <Comments_Slider/>
  

</template>

