<script setup>
    import'../assets/tailwind/style.css'
</script>


<template>
    <div class="BannerBox w-full  bg-[#F2F0F1] px-4">
        <div class="max-w-7xl mx-auto flex flex-row justify-between flex-wrap">
            <div class="leftInfo w-[40%] flex flex-col gap-[37px] mt-24">
                <div class="BigTitle text-black text-6xl font-bold lg:text-5xl">
                    FIND CLOTHES <br>
                    THAT MATCHES <br>
                    YOUR STYLE
                </div>
                <div class="SmallTitle text-gray-500 text-base ">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </div>
                <div class="ShopButton">
                    <button class="bg-black text-white rounded-[64px] px-[54px] py-[16px]">
                        Shop Now
                    </button>
                </div>
        
            </div>
            <div class="rightInfo w-[50%]">
                <img class="w-full h-full" src="../assets/img/Banner.jpg" alt="">
            
            </div>
        </div>
    </div>

</template>