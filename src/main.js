import { createApp } from 'vue'

import App from './App.vue'

// 引入 tailwind
import './assets/tailwind/style.css'

// 引入 splidejs 套件
import '@splidejs/vue-splide/css'


// 引入 Pinia
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
// 註冊 Pinia
app.use(pinia)

app.mount('#app')