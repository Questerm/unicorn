import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../Pages/EditorPage.vue'

const router = createRouter( {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})

export default router