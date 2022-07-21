import axios from 'axios';
import { queryCache } from 'react-query';
import { toast } from 'react-toastify';

const onRequest = (config) => {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error.response?.data.message);
};

const onResponse = (response) => {
  return response.data;
};

const onResponseError = (error) => {
  if (error.message === 'Network Error') {
    toast.error('Network Error - Please check your connection');
  }
  const { status, config } = error.response;
  if (status === 401) {
    // redirect the user to the sign in page
    // remember to add the redirect into the history array of the react-router-dom
    queryCache?.clear();
    window.localStorage.removeItem('token');
    window.location.assign('/');
    toast.error('Please login again');
    return Promise.reject(error.response?.data.message);
  }
  if (status === 400 || config.method === 'get') {
    // console.log("400 or get");
    return Promise.reject(error.response?.data.message);
  }
  if (status === 404) {
    // redirect the user to the 404 page (Not Found)
    // console.log("404");
    // redirect user to route not found
    return Promise.reject(error.response?.data.message);
  }

  if (status === 500) {
    // display toast to let user know something went wrong
    // ask them to try again.
    toast.error('Sorry, something went wrong on your end. - Please try again!');
    return Promise.reject(error.response?.data.message);
  }
  // else {
  // this is for all other status codes that failed
  //   toast.error("Something went wrong - Please try again!");
  // }

  return Promise.reject(error.response?.data.message);
};

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export default setupInterceptorsTo(axios);
