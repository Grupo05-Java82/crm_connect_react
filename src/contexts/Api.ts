// src/contexts/Api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crm-connect.onrender.com', // A URL base do seu deploy no Render
});

// Opcional: Interceptor para logar erros de forma mais detalhada
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na resposta da API:', error);
    if (error.response) {
      // O servidor respondeu com um status de erro (4xx, 5xx)
      console.error('Dados do erro:', error.response.data);
      console.error('Status do erro:', error.response.status);
      console.error('Cabeçalhos do erro:', error.response.headers);
    } else if (error.request) {
      // A requisição foi feita, mas nenhuma resposta foi recebida
      console.error('Nenhuma resposta recebida para a requisição:', error.request);
    } else {
      // Algo aconteceu na configuração da requisição que disparou um erro
      console.error('Erro ao configurar a requisição:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;