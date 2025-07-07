// src/components/FormCliente.tsx (Atualizado para Responsividade)
import { useForm } from 'react-hook-form';
import type Cliente from '../../models/Cliente';
import { useEffect } from 'react';

interface FormClienteProps {
  initialData?: Cliente;
  onSubmit: (data: Cliente) => void;
  onClose: () => void;
}

function FormCliente({ initialData, onSubmit, onClose }: FormClienteProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Cliente>();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset();
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data: Cliente) => {
    onSubmit(data);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg flex flex-col justify-start items-center max-h-[90vh] overflow-y-auto">

      <div className="self-stretch relative bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-center">
        <div className="self-stretch px-4 pt-5 bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-start gap-3">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <h2 className="self-stretch justify-start text-gray-900 text-lg sm:text-xl font-semibold font-['Inter'] leading-7">
              {initialData ? 'Editar Cliente' : 'Novo Cliente'}
            </h2>
            <p className="self-stretch justify-start text-gray-600 text-sm sm:text-base font-normal font-['Inter'] leading-tight">
              {initialData ? 'Edite os dados do cliente.' : 'Cadastre-se como Cliente.'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 absolute right-4 top-3 rounded-lg inline-flex justify-center items-center overflow-hidden"
          title="Fechar"
        >
          <div className="w-6 h-6 relative flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
        <div className="self-stretch h-5"></div>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="self-stretch p-4 flex flex-col justify-start items-center gap-3">
  <div className="self-stretch flex flex-col justify-start items-start gap-3">
    {/* Nome */}
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome*</label>
      <input
        id="nome"
        type="text"
        placeholder="Seu nome"
        className="w-full px-3 py-2 rounded outline outline-1 outline-zinc-300 text-gray-700 text-sm"
        {...register("nome", { required: true })}
      />
      {errors.nome && <span className="text-red-500 text-xs">Nome é obrigatório.</span>}
    </div>

    {/* Telefone */}
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone*</label>
      <input
        id="telefone"
        type="tel"
        placeholder="1234 - 5678"
        className="w-full px-3 py-2 rounded outline outline-1 outline-zinc-300 text-gray-700 text-sm"
        {...register("telefone", { required: true })}
      />
      {errors.telefone && <span className="text-red-500 text-xs">Telefone é obrigatório.</span>}
    </div>

    {/* Email */}
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail*</label>
      <input
        id="email"
        type="email"
        placeholder="meuemail@example.com"
        className="w-full px-3 py-2 rounded outline outline-1 outline-zinc-300 text-gray-700 text-sm"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <span className="text-red-500 text-xs">Email é obrigatório e deve ser válido.</span>}
    </div>

    {/* Interesse */}
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="interesse" className="text-sm font-medium text-gray-700">Interesse</label>
      <input
        id="interesse"
        type="text"
        placeholder="Meu negócio"
        className="w-full px-3 py-2 rounded outline outline-1 outline-zinc-300 text-gray-700 text-sm"
        {...register("interesse")}
      />
    </div>
  </div>

  {/* Botões */}
  <div className="self-stretch pt-2 flex flex-col gap-2">
    <button
      type="submit"
      className="w-full px-4 py-2 bg-green-900 rounded text-white text-sm font-semibold"
    >
      Confirmar
    </button>
    <button
      type="button"
      onClick={onClose}
      className="w-full px-4 py-2 bg-white rounded outline outline-1 outline-zinc-300 text-green-900 text-sm font-semibold"
    >
      Cancelar
    </button>
  </div>
</form>

    </div>
  );
}

export default FormCliente;