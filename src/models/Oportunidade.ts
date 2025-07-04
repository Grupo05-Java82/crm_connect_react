import type Cliente from "./Cliente";

    export default interface Oportunidade {
        id?: number;
        status: string;
        receita: number;
        cliente: Cliente[] | null;
    }