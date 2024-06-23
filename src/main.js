import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 添加element组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//添加路由
import router from '@/router'

//导入持久化插件
import { createPinia } from 'pinia'
import {createPersistedState} from'pinia-persistedstate-plugin'



const persist = createPersistedState()
const pinia = createPinia()
pinia.use(persist)
// createApp(App).mount('#app')
const app=createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')