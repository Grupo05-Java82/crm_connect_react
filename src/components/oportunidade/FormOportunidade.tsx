/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/forms/FormOportunidade.tsx
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useForm } from 'react-hook-form'; 

import type Oportunidade from '../../models/Oportunidade';
import type Cliente from '../../models/Cliente';
import { listarClientes } from '../../services/ServiceCliente';
import type Usuario from '../../models/Usuario';
import { atualizar, cadastrar, listar } from '../../services/Service';
import { useParams } from 'react-router-dom';

const usuario: Usuario  ={
    id: 1,
    nome: "Carlos",
    usuario: "carlos.moroni@email.com",
    senha: "senha123",
    foto: "https://i.imgur.com/fotojoao.jpg"
}


interface FormOportunidadeProps {
  initialData?: Oportunidade, Usuario: any;
  onSubmit: (data: Oportunidade) => void;
  onClose: () => void;
}

function FormOportunidade({ initialData, onSubmit, onClose }: FormOportunidadeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
    const [clientes, setClientes] = useState<Cliente[]>([])

    const [cliente, setCliente] = useState<Cliente>({ id: 0, nome: '', email: '', telefone: '', interesse: null })
    const [oportunidade, setOportunidade] = useState<Oportunidade>({} as Oportunidade)

    const { id } = useParams<{ id: string }>()

  async function buscarOportunidadePorId(id: string) {
        try {
            await listar(`/oportunidades/${id}`, setOportunidade)
        } catch (error: any) {
          console.log(error)            
        } 
async function buscarClientePorId(id: string) {
        try {
            await listar(`/clientes/${id}`, setCliente)
        } catch (error: any) {
            console.log(error)
        }
    }

  async function buscarCliente() {
      try {
          await listar('/clientes', setClientes)
      } catch (error: any) {
          console.log(error)
      }
  } 
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
        buscarCliente()
        if (id !== undefined) {
            buscarOportunidadePorId(id)
        }
    }, [id])

    useEffect(() => {
        setOportunidade({
            ...oportunidade,
            cliente: cliente,
        })
    }, [cliente])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setOportunidade({
            ...oportunidade,
            [e.target.name]: e.target.value,
            cliente: cliente,
            usuario: usuario,
        });
    }

    async function gerarNovaOportunidade(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/oportunidades`, oportunidade, setOportunidade);

               

            } catch (error: any) {
              console.log(error);
                
            }

        } else {
            try {
                await cadastrar(`/oportunidades`, oportunidade, setOportunidade); 
            } catch (error: any) {
                console.log(error);
            }
        }
      }


      const carregandoCliente = cliente.nome === '';


  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg flex flex-col justify-start items-center max-h-[90vh] overflow-y-auto">

      <div className="self-stretch relative bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-center">
        <div className="self-stretch px-4 pt-5 bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-start gap-3">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <h2 className="self-stretch justify-start text-gray-900 text-lg sm:text-xl font-semibold font-['Inter'] leading-7">
              {initialData ? 'Editar Oportunidade' : 'Nova Oportunidade'}
            </h2>
            <p className="self-stretch justify-start text-gray-600 text-sm sm:text-base font-normal font-['Inter'] leading-tight">
              {initialData ? 'Edite os dados da oportunidade.' : 'Cadastre uma nova oportunidade.'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 absolute right-4 top-3 rounded-lg inline-flex justify-center items-center overflow-hidden"
          title="Fechar"
        >
          <div className="w-6 h-6 relative flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        <div className="self-stretch h-5"></div>
      </div>

      <form onSubmit={gerarNovaOportunidade} className="self-stretch p-4 flex flex-col justify-start items-center gap-4 sm:gap-5">
        <div className="self-stretch flex flex-col justify-start items-start gap-3 sm:gap-4">
          {/* Status */}
          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="status" className="text-sm font-medium text-gray-700 font-['Inter'] leading-tight">Status*</label>
            <select
              id="status"
              className="w-full px-3.5 py-2.5 rounded-lg shadow-sm outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
              
            >
              <option value="">Selecione o status</option>
              <option value="Qualificacao">Qualificação</option>
              <option value="Proposta">Proposta</option>
              <option value="Negociacao">Negociação</option>
              <option value="Fechado Ganho">Fechado Ganho</option>
              <option value="Fechado Perdido">Fechado Perdido</option>
            </select>
           
          </div>

          {/* Receita */}
          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="receita" className="text-sm font-medium text-gray-700 font-['Inter'] leading-tight">Receita*</label>
            <input
              id="receita"
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full px-3.5 py-2.5 rounded-lg shadow-sm outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
             
            />
           
          </div>

          {/* Cliente (SELECT SIMPLES - APENAS UM CLIENTE) */}
          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="cliente" className="text-sm font-medium text-gray-700 font-['Inter'] leading-tight">Cliente</label>
            <select
              id="cliente"
              className="w-full px-3.5 py-2.5 rounded-lg shadow-sm outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal h-auto"
              onChange={(e) => buscarClientePorId(e.currentTarget.value)}
            >
              <option value="">Selecione um cliente (Opcional)</option>
              {clientes.length === 0 ? (
                <option value="" disabled>Carregando clientes...</option>
              ) : (
                clientes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nome} ({c.email})
                  </option>
                ))
              )}
            </select>
           
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="self-stretch pt-4 sm:pt-6 flex flex-col justify-start items-start gap-2 sm:gap-3">
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-green-900 rounded-lg shadow-sm outline-1 outline-green-900 flex justify-center items-center gap-2 overflow-hidden text-white text-base font-semibold font-['Inter'] leading-normal"
          >
            Confirma
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2.5 bg-white rounded-lg shadow-sm outline-1 outline-zinc-300 flex justify-center items-center gap-2 overflow-hidden text-green-950 text-base font-semibold font-['Inter'] leading-normal"
          >
            Cancela
          </button>
        </div>
      </form>

    </div>
  );
}
}

export default FormOportunidade;
