// src/services/ServiceOportunidade.tsx
import type Oportunidade from '../models/Oportunidade';
import { listar, cadastrar, atualizar, deletar } from './Service'; 


const baseUrl = '/oportunidades';

export const listarOportunidades = async (setDados: (oportunidades: Oportunidade[]) => void) => {
  await listar(baseUrl, setDados);
};

export const buscarOportunidadePorId = async (id: number, setDados: (oportunidade: Oportunidade) => void) => {
  await listar(`${baseUrl}/${id}`, setDados);
};

export const cadastrarOportunidade = async (oportunidade: Oportunidade, setDados: (oportunidade: Oportunidade) => void) => {
  await cadastrar(baseUrl, oportunidade, setDados);
};

export const atualizarOportunidade = async (oportunidade: Oportunidade, setDados: (oportunidade: Oportunidade) => void) => {
  await atualizar(baseUrl, oportunidade, setDados);
};

export const deletarOportunidade = async (id: number) => {
  await deletar(`${baseUrl}/${id}`);
};