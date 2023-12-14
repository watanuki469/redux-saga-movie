import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  method:'GET',
  baseURL: 'https://moviesminidatabase.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'a2a95be700msha63091279c27375p19ad20jsn429dfc2eaedb',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
    'Content-Type':'application/json'
  },
  
});

axiosClient.interceptors.request.use(
  function (response) {
    // Do something before request is sent
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


// Add a response interceptor
axiosClient.interceptors.response.use(function (response:AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosClient;