import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import DatePicker from 'ant-design-vue';
import BoxAtrr from './components/childComponents/Box/Attribute.vue'
import 'ant-design-vue/dist/antd.css';
import Animation from './components/Animation.vue'

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(DatePicker);
app.component('attribute', BoxAtrr);
app.component('animation', Animation);
app.mount('#app')