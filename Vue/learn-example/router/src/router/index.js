import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home/Home'
import About from '../components/About/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router