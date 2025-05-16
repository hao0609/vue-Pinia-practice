<script setup>
    import ProductCard from './ProductCard.vue'
</script>

<template>
    <div class="NewArrival_box max-w-7xl mx-auto px-4">
        <div class="SmallTitle py-50">TOP SELLING</div> 
        <div class="product flex flex-wrap justify-evenly">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>   
        <div class="viewAll_btn flex justify-center">
            <button class="btn my-7">View All</button>
        </div>
    </div>
</template>