import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import Management from '../views/ManageView.vue'
import Application from '../views/operation/application.vue'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/homepage',
    // component: HomeView
    component: Management,
    children: [
      { path: '/home/homepage', component: Home },
      { path: '/home/operation/application', component: Application }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 获取 token
  let token = localStorage.getItem('token');
  // 判断跳转的页面是否为 登录页
  if (to.path !== '/') {
    // 不是登录页
    // 判断是否有 token
    // if (token) return next(); // 有 放行
    // 没有
    // next('/');
    next();
  } else {
    // 是登录页 直接放行
    next();
  }
})

export default router
