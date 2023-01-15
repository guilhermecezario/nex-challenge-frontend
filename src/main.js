import { createApp } from 'vue';
import App from './App.vue';

import './stylesheets/main.css';

import routes from './routes';

import FormInput from './components/FormInput.vue';

const app = createApp(App);

app.component('FormInput', FormInput);

app.use(routes);

app.mount('#app');
