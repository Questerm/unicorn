import { createApp } from 'vue'
import App from './Home.vue'
import router from './router/index.js'
import DatePicker from 'ant-design-vue';
import BoxAtrr from './components/childComponents/Box/Attribute.vue'
import 'ant-design-vue/dist/antd.css';
import Animation from './components/Animation.vue'

const app = createApp(App);
app.use(router);
app.use(DatePicker);
app.component('attribute', BoxAtrr);
app.component('animation', Animation);

app.mount('#app')
