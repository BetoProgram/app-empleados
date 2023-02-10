import { createApp } from 'vue'
import router from './routes';
import { createPinia } from 'pinia';
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
