import axios from 'axios';

// import store from '../store';

// create a new axios instance
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// before a request is made start the nprogress
// instance.interceptors.request.use((config) => {
//   if (store.getters['user/loggedIn']) {
//     config.headers.Authorization = `${store.getters['user/token']}`;
//   }

//   return config;
// });

export default instance;
