import axios from "axios";
import useGetCookie from "../Hooks/Cookie";
  
 export const apiClient = axios.create({  
  baseURL: 'http://151.232.36.49:8000',
  headers: {  
    "Content-Type": "application/json",  
  },  
});  
apiClient.interceptors.request.use(
  (config) => {
      const {getCookie}=useGetCookie()
      const token =getCookie('accessToken') 
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      if ((config.method === 'put' || config.method === 'post') && config.data instanceof FormData) {  
        config.headers['Content-Type'] = 'multipart/form-data';  
      } else if (config.method === 'put' || config.method === 'post') {  
        // برای متدهای PUT و POST که داده‌ها JSON هستند  
        config.headers['Content-Type'] = 'application/json';  
      }  
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    response.headers.set('Access-control-Allow-Origin')
      return response; 
  },
  async (error) => {
      if (error.response && error.response.status === 401) {
          console.error('Unauthorized! Redirecting to login...');
          const {removeCookie}=useGetCookie()
          removeCookie('accessToken') 
          window.location.href = '/login'; // Redirect to login
      }
      return Promise.reject(error); // Reject the error to allow further handling
  }
);
