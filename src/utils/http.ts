import axios from 'axios';
import { apiHost } from '../constants';
import { store } from '../redux/store';

const AxiosRequestInterceptor = async (config: any) => {
  const configTemp = config;
  const { accessToken } = store.getState().auth.token;

  configTemp.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken || ''}`,
    ...configTemp.headers,
  };

  return configTemp;
};

axios.defaults.timeout = 30000;
axios.defaults.baseURL = apiHost;
axios.interceptors.request.use(AxiosRequestInterceptor);

export default axios;

