import { createApp } from 'vue'
<<<<<<< HEAD
import App from './Home.vue'
=======
import App from './App.vue'
import { createPinia } from 'pinia'
>>>>>>> 60f1bbb (编辑页面)
import router from './router/index.js'
import DatePicker from 'ant-design-vue';
import BoxAtrr from './components/childComponents/Box/Attribute.vue'
import 'ant-design-vue/dist/antd.css';
import Animation from './components/Animation.vue'

const app = createApp(App);
app.use(router);
<<<<<<< HEAD
=======
app.use(createPinia());
>>>>>>> 60f1bbb (编辑页面)
app.use(DatePicker);
app.component('attribute', BoxAtrr);
app.component('animation', Animation);

app.mount('#app')
