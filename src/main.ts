import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 添加这一行 - 导入包含 Tailwind 指令的样式文件
import './assets/style.css'

import 'nprogress/nprogress.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
