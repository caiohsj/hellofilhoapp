import axios from 'axios';
import store from './store';

const baseConfig = {
  baseURL: 'http://10.0.2.2:8000/public',
};

const instance = axios.create(baseConfig);

instance.interceptors.request.use(
  (config) => {
    const { common } = config.headers;
    const currentUser = store.getState().auth.user;
    if (currentUser && currentUser.api_token) {
      common.AUTHORIZATION = currentUser.api_token;
      common['Cache-Control'] = 'no-cache';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;