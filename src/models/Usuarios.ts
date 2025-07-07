import type Oportunidade from "./Oportunidade";

export default interface Usuario {
        id?: number | undefined;
        nome: string;
        usuario: string;
        senha: string;
        foto: string | null;
        oportunidades: Oportunidade [] | null;
    }