import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
// import TempView from '../views/TempView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
    // component: TempView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (to.path !== '/') {
    if (token) return next();
    next('/');
  } else {
    // if (token) return next('/home');
    next();
  }
})

export default router
