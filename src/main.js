import {createApp} from 'vue';

import './styles/main.scss';
import App from './App.vue';

import "./plugins/axios-interceptor.js";

import store from "@/store/index.js";

const app = createApp(App);
app.use(store);


app.mount('#app');
