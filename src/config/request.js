import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import configApi from './index';
import {navigate} from './navigator';

const request = axios.create({
  baseURL: configApi.API_ENDPOINT,
});

request.interceptors.request.use(
  async (config) => {
    const userInfo = await AsyncStorage.getItem('userInfo');
    console.log('userInfo', userInfo);
    let token = null;
    if (userInfo) {
      token = JSON.stringify(userInfo).token;
    }
    if (token) {
      config.headers = {
        Authorization: `Bearer ${JSON.parse(token)}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    } else {
      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    console.log('333333 response', response);
    if (response.status === 206) {
      return Promise.reject(response.data);
    } else return response.data;
  },
  async function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      if (error.response.status == 404 || error.response.status == 422) {
        let text = 'Bir hata olustu';
        if (error.response?.data?.errors != undefined) {
          text = error.response?.data?.errors;
        } else if (error.response.data.message) {
          text = error.response.data.message;
        }

        /* navigationRef.current.goBack();*/
      }
      if (error.response.status == 401) {

        navigate('Loading', {error: error.response.status});
      }
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error);
    }
  },
);

// request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

export default request;
