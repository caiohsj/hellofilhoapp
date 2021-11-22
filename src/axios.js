import axios from 'axios';

const baseConfig = {
  baseURL: 'http://10.0.2.2:8000',
};

const instance = axios.create(baseConfig);

export default instance;