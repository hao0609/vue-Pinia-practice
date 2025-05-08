import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入 Pinia
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
// 註冊 Pinia
app.use(pinia)

app.mount('#app')