import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 添加这一行 - 导入包含 Tailwind 指令的样式文件
import './assets/style.css'

import 'nprogress/nprogress.css'

// 添加 Vercel 分析
import { inject } from '@vercel/analytics'

// 注入分析
inject()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
