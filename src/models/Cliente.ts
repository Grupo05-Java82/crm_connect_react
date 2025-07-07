// src/models/Cliente.ts
export default interface Cliente {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
    interesse: string | null; 
}