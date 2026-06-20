import api from '../lib/api';

const authService = {
  register: async (userData) => {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);
    localStorage.setItem('tc_authenticated', 'true');
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/api/auth/logout');
    localStorage.removeItem('tc_authenticated');
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/api/auth/me');
    return response.data;
  }
};

export default authService;
