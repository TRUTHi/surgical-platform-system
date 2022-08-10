import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/font-icon/iconfont.css'
import './assets/css/common.css'

createApp(App).use(router).use(ElementPlus).mount('#app')