import axios from 'axios';

import store from '../store';

// create a new axios instance
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// before a request is made start the nprogress
instance.interceptors.request.use((config) => {
  const configuration = config;

  if (store.getters['user/loggedIn']) {
    configuration.headers.Authorization = `Bearer ${store.getters['user/token']}`;
  }

  return configuration;
});

export default instance;
