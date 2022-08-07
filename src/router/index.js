import { createRouter, createWebHashHistory } from "vue-router";
<<<<<<< HEAD
import Home from '../Home.vue'
=======
import Home from '../Pages/EditorPage.vue'
>>>>>>> 60f1bbb (编辑页面)

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