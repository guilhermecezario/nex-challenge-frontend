import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home"
import Login from "@/views/Login"

const routes = [
  {
    path: "/", component: Home,
  },
  {
    path: "/login", component: Login,
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})