import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
import './global.scss'
import i18n from './plugins/i18n'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')