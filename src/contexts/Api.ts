import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crm-connect.onrender.com/api',
});

// Interceptador para tratar erros globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na resposta da API:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });

    return Promise.reject(error); // continua propagando o erro
  }
);

export default api;
