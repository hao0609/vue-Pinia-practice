<script setup>
    import { ref } from 'vue'

    // 引入 Splide 必要元件方法
    import { Splide, SplideSlide } from '@splidejs/vue-splide'

    // 卡片陣列
    const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5']

    const splideRef = ref(null)

    // splide 設定參數
    const splideOptions = {
    type: 'loop',                           // 以 loop 方式顯示 (slider / loop / fade)
    perPage: 3,                             // 每頁顯示 3 張卡片
    perMove: 1,                             // 每次滑動移動 1 張
    gap: '20px',                            // 卡片間距
    focus: 'center',                        // 中間的卡片會置中
    padding: { left: '18%', right: '18%' }, // 顯示左右部分卡片
    arrows: false,                          // 關閉內建箭頭（改用自定義按鈕）
    pagination: false,                      // 關閉下方圓點
    breakpoints: {                          // 斷點的配置 (中間顯示的卡片數 顯示左右部分卡片)

        1280: {
        perPage: 2,
        padding: { left: '10%', right: '10%' },
        },
        768: {
        perPage: 1,
        padding: { left: '10%', right: '10%' },
        },

    },
    }
    //.go 方法: '<' 往前一個卡片
    const goPrev = () => {
        splideRef.value?.go('<')
    }
    //.go 方法: '>' 往後一個卡片
    const goNext = () => {
        splideRef.value?.go('>')
    }
</script>



<template>
   <div class="Comments_box max-w-7xl mx-auto px-4">
        <div class="top flex items-center justify-between py-50"> 
            <div class="SmallTitle">OUR HAPPY CUSTOMERS</div>
            <div class="moveBox flex items-center justify-between w-[65px]">
                <button class="left" @click="goPrev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z" fill="black"/>
                    </svg>
                </button>
                <button class="right" @click="goNext">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z" fill="black"/>
                    </svg>
                </button>
            </div>
        </div>     
  </div>
  <div class="slider-wrapper py-50">
    <!-- Splide 是 Splide.js 的 VUE 元件 -->
    <!-- option 傳入設定參數 -->
    <Splide
      :options="splideOptions"
      ref="splideRef"
      class="my-slider"
    >
      <!-- SplideSlide 是 可滑動的區塊元素 -->
      <SplideSlide v-for="(item, index) in cards" :key="index">
        <div class="card">
            <div class="flex flex-row items-center">
                <div class="CustomerName font-Satoshi text-xl">Sarah M.</div>
                <div class="checkIcon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97981 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43734 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46927 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1217 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57864 13.1399 7.49958 12.949 7.49958 12.75C7.49958 12.551 7.57864 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44902 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8485 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="#01AB31"/>
                    </svg>
                </div>
            </div>


            <div class="Comment font-Satoshi text-base">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, 
                every piece I've bought has exceeded my expectations.”
            </div>
        </div>
      </SplideSlide>
    </Splide>

  </div>
</template>



<style scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
  margin: auto;
}

.card {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 28px 32px;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.10);
  border-width: 5px;
  width: 100%;
  position: relative; /* 很重要！讓 ::after 定位於此 */
  overflow: hidden;   /* 防止 ::after 溢出 */
  z-index: 0;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}


/* 加上遮罩效果給左右側卡片 */
.splide__slide:not(.is-visible) .card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.5px); /* 模糊效果 */
  background: rgba(255, 255, 255, 0.6); /* 半透明白遮罩 */
  z-index: 1;
  border-radius: inherit;
}
</style>
