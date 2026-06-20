import axios from 'axios';

const api = axios.create({
  baseURL: '', // Using Vite proxy, so requests go to the same host
  withCredentials: true, // Crucial for HTTP-only cookies
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response interceptor to handle unauthorized access globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear local storage auth indicator if unauthorized response occurs
      localStorage.removeItem('tc_authenticated');
    }
    return Promise.reject(error);
  }
);

export default api;
