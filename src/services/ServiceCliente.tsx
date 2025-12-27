// src/services/ServiceCliente.tsx

import type Cliente from '../models/Cliente';
import { listar, cadastrar, atualizar, deletar } from './Service';




const baseUrl = '/clientes'; // Ajustado para corresponder ao Swagger

export const listarClientes = async (setDados: (clientes: Cliente[]) => void) => {
  await listar(baseUrl, setDados);
};

export const buscarClientePorId = async (id: number, setDados: (cliente: Cliente) => void) => {
  await listar(`${baseUrl}/${id}`, setDados);
};

export const buscarClientePorEmail = async (emailCliente: string, setDados: (clientes: Cliente[]) => void) => {
  // Ajustado o nome do parâmetro
  await listar(`${baseUrl}/email/${emailCliente}`, setDados); // Rota do Swagger: /clientes/email/{email}
};

export const cadastrarCliente = async (cliente: Cliente, setDados: (cliente: Cliente) => void) => {
  await cadastrar(baseUrl, cliente, setDados); // Rota do Swagger: /clientes (POST)
};

export const atualizarCliente = async (cliente: Cliente, setDados: (cliente: Cliente) => void) => {
  await atualizar(baseUrl, cliente, setDados); // Rota do Swagger: /clientes (PUT)
};

export const deletarCliente = async (id: number) => {
  await deletar(`${baseUrl}/${id}`);
};