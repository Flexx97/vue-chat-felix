import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from "@/views/login";
import register from "@/views/register";
import Chats from "@/views/Chats";
import Profile from "@/views/Profile";
import userChat from "@/components/userChat";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/chats',
      name: 'Chats',
      component: Chats,
      children: [{
        name: 'userChat',
        path: ':id',
        component: userChat
      }]
    },{
      path: '/profile',
      name: 'Profile',
      component: Profile
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/register',
    name: 'Register',
    component: register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkExactPathActiveClass: 'active'
})

export default router
