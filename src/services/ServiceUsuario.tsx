// src/services/ServiceUsuario.tsx

import type Usuario from '../models/Usuarios';
import { listar, cadastrar, atualizar, deletar } from './Service';

// import { Function } from 'typescript'; // Provavelmente não precisa disso aqui, removemos no futuro para tipos mais específicos

// **** AJUSTE AQUI ****
const baseUrl = '/usuarios'; // Ajustado para corresponder ao Swagger

export const listarUsuarios = async (setDados: (usuarios: Usuario[]) => void) => {
  await listar(baseUrl, setDados);
};

export const buscarUsuarioPorId = async (id: number, setDados: (usuario: Usuario) => void) => {
  await listar(`${baseUrl}/${id}`, setDados);
};

export const buscarUsuarioPorEmail = async (usuarioEmail: string, setDados: (usuarios: Usuario[]) => void) => {
  // Ajustado o nome do parâmetro para evitar conflito com a model
  await listar(`${baseUrl}/usuario/${usuarioEmail}`, setDados); // Rota do Swagger: /usuarios/usuario/{usuario}
};

export const buscarUsuarioPorNome = async (nomeUsuario: string, setDados: (usuarios: Usuario[]) => void) => {
  // Ajustado o nome do parâmetro
  await listar(`${baseUrl}/nome/${nomeUsuario}`, setDados); // Rota do Swagger: /usuarios/nome/{nome}
};

export const cadastrarUsuario = async (usuario: Usuario, setDados: (usuario: Usuario) => void) => {
  await cadastrar(`${baseUrl}/cadastrar`, usuario, setDados); // Rota do Swagger: /usuarios/cadastrar
};

export const atualizarUsuario = async (usuario: Usuario, setDados: (usuario: Usuario) => void) => {
  await atualizar(baseUrl, usuario, setDados); // Rota do Swagger: /usuarios (PUT)
};

export const deletarUsuario = async (id: number) => {
  await deletar(`${baseUrl}/${id}`);
};