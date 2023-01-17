import { createRouter, createWebHistory } from 'vue-router';

import store from '@/store';

import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';

import UsersCreate from '@/views/Users/Create.vue';
import UsersUpdate from '@/views/Users/Update.vue';

const routes = [
  {
    path: '/', component: Home, name: 'Home',
  },
  {
    path: '/login', component: Login, name: 'Login',
  },
  {
    path: '/users', component: UsersCreate, name: 'UsersCreate',
  },
  {
    path: '/users/:id', component: UsersUpdate, name: 'UsersUpdate',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const routesAuth = ['Login'];

router.beforeEach((to, from, next) => {
  if (routesAuth.includes(to.name) && store.getters['user/loggedIn']) {
    next({ name: 'Home' });
  } else if (!routesAuth.includes(to.name) && !store.getters['user/loggedIn']) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
