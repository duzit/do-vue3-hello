import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './common/css/index.css'

createApp(App).use(router).use(elementPlus).mount('#app')
