import axios from "axios";
// import store from '~/store';

const BASE_URL_PROD = 'https://find-numbers-backend.vercel.app/';
const BASE_URL_DEV = 'http://localhost:3000/';

axios.defaults.baseURL = BASE_URL_PROD;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


//todo config handlers
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => response, error => {
    const status = error?.response?.status || 500;

    if(status === 401) {
        //todo
    }
    else if (status === 403) {
        //todo
    }
    else if (status === 404) {
        //todo
    }
    else if (status === 500) {
        //todo
    }
    // store.dispatch('auth/hideLoader');
    return Promise.reject(error);
});