import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';

import UsersCreate from '@/views/Users/Create.vue';
import UsersUpdate from '@/views/Users/Update.vue';

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/login', component: Login,
  },
  {
    path: '/users', component: UsersCreate,
  },
  {
    path: '/users/:id', component: UsersUpdate,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
