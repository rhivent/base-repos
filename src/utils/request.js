import axios from 'axios';
import { message } from 'antd';

const handlingErrorResp = err => {
  if(err?.response) {
    message.error(err?.response?.data?.error?.substr(0,50));
  }
}

const getHeaders = () => {
  const headers = {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    'Access-Control-Allow-Origin': true
  }
  return headers;
}

const getOption = (method, url, data) => {
    return { headers: getHeaders(), method, url: `${apiUrl}/${url}`, data }
}

const app = {
    get: async (url) => {
        const option = getOption('get', url);
        try {
          const { data } = await axios.request(option);
          return data;
        } catch (err) {
          handlingErrorResp(err);
        }
    },
    post: async (url, params) => {
        const option = getOption('post', url, params);
        try {
          const { data } = await axios.request(option);
          return data;
        } catch (err) {
          handlingErrorResp(err);
        }
    },
    patch: async (url, params) => {
        const option = getOption('patch', url, params);
        try {
          const { data } = await axios.request(option);
          return data;
        } catch (err) {
          handlingErrorResp(err);
        }
    },
    put: async (url, params) => {
        const option = getOption('put', url, params);
        try {
          const { data } = await axios.request(option);
          return data;
        } catch (err) {
          handlingErrorResp(err);
        }
    },
    delete: async (url, params) => {
        const option = getOption('delete', url, params);
        try {
          const { data } = await axios.request(option);
          return data;
        } catch (err) {
          handlingErrorResp(err);
        }
    }
};

export const initialEndpoint = "";
export default app;