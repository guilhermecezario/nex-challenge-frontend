import { createApp } from 'vue';

import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

import App from './App.vue';

import './stylesheets/main.css';

import routes from './routes';

import store from './store';

import FormInput from './components/FormInput.vue';
import FormSelect from './components/FormSelect.vue';

const app = createApp(App);

app.component('FormInput', FormInput);
app.component('FormSelect', FormSelect);

app.use(routes);

app.use(store);

app.use(Toast, {});

app.mount('#app');
