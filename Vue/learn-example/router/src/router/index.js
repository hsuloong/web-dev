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
    component: Home,
    meta: {
      titile: "首页"
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      titile: "关于"
    }
  },
  {
    path: '/user',
    component: () => import('../components/User/User'),
    meta: {
      titile: "用户",
    },
    children: [
      {
        path: 'color',
        component: () => import('../components/User/UserColor'),
        meta: {
          titile: "用户颜色"
        }
      },
      {
        path: 'food',
        component: () => import('../components/User/UserFood'),
        meta: {
          titile: "用户食物"
        }
      }
    ]
  },
  {
    path:'/profile',
    component: () => import('../components/User/Profile'),
    meta: {
      titile: "资料"
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.titile
  next()
})

export default router