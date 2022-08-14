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
    }, {
        path: '/guide',
        name: 'guide',
        component: () =>
            import ('@/Pages/Guide.vue')
    }, {

        path: '/preview/:projectId',
        name: 'preview',
        component: () =>
            import ('@/components/ProjectPreview.vue'),
        props: true

    }]
})

export default router