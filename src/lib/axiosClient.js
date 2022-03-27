import axios from "axios";

const onRequest = (config) => {
  const token = localStorage.getItem("token");
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
  return Promise.reject(error.response?.data.message);
};

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export default setupInterceptorsTo(axios);
