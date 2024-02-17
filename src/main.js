import {createApp} from 'vue';
import './styles/main.scss';
import App from './App.vue';

import "./plugins/axios-interceptor.js";

createApp(App).mount('#app');
