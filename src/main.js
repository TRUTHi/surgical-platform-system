import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 字体图标
import './assets/font-icon/iconfont.css'
// 公共样式
import './assets/css/common.css'

// element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import store from './store'

// 网络请求库
import axios from 'axios'
axios.defaults.baseURL = 'http://ss.wiwo.top'

const app = createApp(App).use(store)
app.config.globalProperties.$http = axios
app.use(router).use(ElementPlus).mount('#app')

// element-plus 全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
