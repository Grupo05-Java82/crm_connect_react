// Sua model Oportunidade.ts
import type Cliente from "./Cliente";
import type Usuario from "./Usuario";
export default interface Oportunidade {
    id?: number;
    status: string;
    receita: number;
    cliente?: Cliente | null;
    usuario?: Usuario | null
}