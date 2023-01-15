import { createApp } from 'vue';
import App from './App.vue';

import './stylesheets/main.css';

import routes from './routes';

const app = createApp(App);

app.use(routes);

app.mount('#app');
