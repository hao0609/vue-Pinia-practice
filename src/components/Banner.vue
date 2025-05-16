<script setup>
    import'../assets/tailwind/style.css'
</script>
<template>
    <div class="BannerBox w-full  bg-[#F2F0F1] px-4">
        <div class="max-w-7xl mx-auto flex flex-row justify-between flex-wrap">
            <div class="leftInfo w-full rwd-950:w-[50%] flex flex-col gap-[37px] mt-[min(10vh,5rem)]">
                <div class="BigTitle">
                    FIND CLOTHES <br>
                    THAT MATCHES <br>
                    YOUR STYLE
                </div>
                <div class="text-gray-500 text-base">
                    Browse through our diverse range of meticulously crafted garments, <br>
                    designed to bring out your individuality and cater to your sense of style.
                </div>
                <div class="ShopButton">
                    <button class="bg-black text-white rounded-[64px] px-[54px] py-[16px] max-md:w-full ">
                        Shop Now
                    </button>
                </div>
        
            </div>
            <div class="rightInfo rwd-950:w-[50%]">
                <img class="w-full h-full" src="../assets/img/Banner.jpg" alt="">
            
            </div>
        </div>
    </div>

</template>