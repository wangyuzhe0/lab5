import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import 'nprogress/nprogress.css'

// 正确的 Vue 分析导入
import { inject } from '@vercel/analytics'

// 注入分析
inject()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
