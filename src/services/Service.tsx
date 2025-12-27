// src/services/servicoGlobal.ts

import api from "../contexts/Api";


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const listar = async (url: string, setDados: Function) => {
  try {
    console.log(`[listar] Buscando dados de: ${url}`);
    const resposta = await api.get(url);
    setDados(resposta.data);
  } catch (erro) {
    console.error(`[listar] Erro ao buscar dados de ${url}:`, erro);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const cadastrar = async (url: string, dados: object, setDados: Function) => {
  try {
    console.log(`[cadastrar] Enviando dados para: ${url}`, dados);
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (erro) {
    console.error(`[cadastrar] Erro ao enviar dados para ${url}:`, erro);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const atualizar = async (url: string, dados: object, setDados: Function) => {
  try {
    console.log(`[atualizar] Atualizando dados em: ${url}`, dados);
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  } catch (erro) {
    console.error(`[atualizar] Erro ao atualizar dados em ${url}:`, erro);
  }
};

export const deletar = async (url: string) => {
  try {
    console.log(`[deletar] Removendo dados de: ${url}`);
    await api.delete(url);
  } catch (erro) {
    console.error(`[deletar] Erro ao remover dados de ${url}:`, erro);
  }
};
