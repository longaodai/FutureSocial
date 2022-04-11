import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/global.css'
import router from './route.js'

createApp(App).use(router).mount('#app')
