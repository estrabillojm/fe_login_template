import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api"
axios.defaults.withCredentials = true

import LoginForm from './components/LoginForm'
import Button from './components/shared/Button'

const app = createApp(App)

app.component('v-login', LoginForm)
.component('v-btn', Button)
app.use(store).use(router)
app.mount('#app')
