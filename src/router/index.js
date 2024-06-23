//导入vue-router
import { createRouter, createWebHistory } from 'vue-router'
//导入组件
import LoginVue from '@/views/login.vue'


//定义路由关系
const routes = [
    { path: '/', component: LoginVue },
]


//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router