import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


const emitter = mitt();
const app = createApp(App)

app.provide('emitter', emitter);

app.use(router)

app.mount('#app')