import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../Pages/EditorPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/Pages/Login.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () =>
            import ('@/Pages/Register.vue')
    }, {
        path: '/userPage',
        name: 'userPage',
        component: () =>
            import ('@/Pages/UserPage.vue')
    }]
})

export default router