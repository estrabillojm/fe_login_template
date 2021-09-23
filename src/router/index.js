import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

let redirect = (to, from, next) =>{
  next()
  // axios.get('/authenticated').then(()=>{ next() }).catch(()=>{return next({ name: 'Home' }) })
}

const routes = [
  { path: '/', name: 'Home', component: Home, beforeEnter: redirect }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
