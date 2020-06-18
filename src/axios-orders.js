import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-617aa.firebaseio.com/'
});

export default instance;