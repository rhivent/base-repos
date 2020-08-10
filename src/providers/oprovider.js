import utils from '../utils';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_GITHUB_API;
const headers = {
  'Accept': 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
  'Access-Control-Allow-Origin': true
}
const { request } = utils;
const { initialEndpoint } = request;

export default {
  cancel : () => axios.CancelToken.source().cancel(),
  list: (resource) => {
    return request.get(`${initialEndpoint}/${resource}`);
  },
  update: (resource, attributes) => {
    return request.put(`${initialEndpoint}/${resource}`, { ...attributes });
  },
  insert: (resource, attributes) => {
    return request.post(`${initialEndpoint}/${resource}`, { ...attributes });
  },
  delete: (resource) => {
    return request.delete(`${initialEndpoint}/${resource}`);
  },
  insertNoToken : async (resource,attributes) => {
    const { data } = await axios.request({
      headers: headers, 
      method:'post', 
      url: `${apiUrl}/${initialEndpoint}/${resource}`,
      data: {...attributes},
    });
    return data;
  },
  insertCustom: (resource, attributes) => {
    return request.post(`${initialEndpoint}/${resource}`, attributes);
  },
};