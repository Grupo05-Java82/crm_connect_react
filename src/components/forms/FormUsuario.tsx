// src/components/FormUsuario.tsx (Atualizado para Responsividade)

import { useForm } from 'react-hook-form';
import type Usuarios from '../../models/Usuarios';
import type Oportunidade from '../../models/Oportunidade';
import { useEffect } from 'react';

interface UsuariosForm extends Usuarios {
  confirmarSenha?: string;
}

interface FormUsuarioProps {
  initialData?: Usuarios;
  onSubmit: (data: Usuarios) => void;
  onClose: () => void;
}

function FormUsuario({ initialData, onSubmit, onClose }: FormUsuarioProps) {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<UsuariosForm>();
  const senha = watch("senha"); // Watch the password field for confirmation

  const oportunidadesTemporarias: Oportunidade[] = [
    { id: 1, status: 'Em Negociação', receita: 1000, cliente: [] },
    { id: 2, status: 'Fechado Ganho', receita: 2500, cliente: [] },
    { id: 3, status: 'Qualificação', receita: 500, cliente: [] },
  ];

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset();
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data: UsuariosForm) => {
    // Remove confirmarSenha antes de enviar, pois não faz parte da model Usuario
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmarSenha, ...usuarioData } = data;
    onSubmit(usuarioData as Usuarios);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg flex flex-col justify-start items-center overflow-hidden">
      <div className="self-stretch relative bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-center">
        <div className="self-stretch px-4 pt-5 bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-start gap-3">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <h2 className="self-stretch justify-start text-gray-900 text-lg sm:text-xl font-semibold font-['Inter'] leading-7">
              {initialData ? 'Editar Usuário' : 'Novo Usuário'}
            </h2>
            <p className="self-stretch justify-start text-gray-600 text-sm sm:text-base font-normal font-['Inter'] leading-tight">
              {initialData ? 'Edite os dados do usuário.' : 'Cadastre-se como Usuário.'}
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

      <form onSubmit={handleSubmit(handleFormSubmit)} className="self-stretch p-4 flex flex-col justify-start items-center gap-4 sm:gap-5">
        <div className="self-stretch flex flex-col justify-start items-start gap-3 sm:gap-4">
          {/* Nome */}
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <label htmlFor="nome" className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">Nome*</label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
              {...register("nome", { required: true })}
            />
            {errors.nome && <span className="text-red-500 text-xs">Nome é obrigatório.</span>}
          </div>

          {/* Usuário (Email/Login) */}
          <div className="w-full flex flex-col justify-start items-start gap-1.5">
            <label htmlFor="usuario" className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">E-mail*</label>
            <input
              id="usuario"
              type="email"
              placeholder="meuemail@example.com"
              className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
              {...register("usuario", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.usuario && <span className="text-red-500 text-xs">Email é obrigatório e deve ser válido.</span>}
          </div>

          {/* Foto */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <label htmlFor="foto" className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">Foto (URL)</label>
            <input
              id="foto"
              type="text"
              placeholder="Link da sua foto"
              className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
              {...register("foto")}
            />
          </div>

          {/* Oportunidade - Botão Seletor (Dropdown) */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <label htmlFor="oportunidades" className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">Oportunidade</label>
            <select
              id="oportunidades"
              className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
              {...register("oportunidades")}
              multiple // Permite selecionar múltiplas oportunidades se necessário
            >
              <option value="">Selecione uma oportunidade (temporário)</option>
              {oportunidadesTemporarias.map((oportunidade) => (
                <option key={oportunidade.id} value={oportunidade.id}>
                  {oportunidade.status} - R$ {oportunidade.receita.toLocaleString('pt-BR')}
                </option>
              ))}
            </select>
            <p className="text-gray-500 text-xs mt-1">Este seletor é temporário e será substituído pelas propriedades cadastradas futuramente.</p>
          </div>

          {/* Senha */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <label htmlFor="senha" className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">Senha*</label>
            <input
              id="senha"
              type="password"
              placeholder="digite sua senha"
              className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
              {...register("senha", { required: true, minLength: 6 })}
            />
            {errors.senha && <span className="text-red-500 text-xs">Senha é obrigatória e deve ter no mínimo 6 caracteres.</span>}
          </div>

          {/* Confirmar Senha */}
          {!initialData && (
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <label htmlFor="confirmarSenha" className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">Confirmar Senha*</label>
              <input
                id="confirmarSenha"
                type="password"
                placeholder="digite sua senha novamente"
                className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 text-gray-500 text-base font-normal font-['Inter'] leading-normal"
                {...register("confirmarSenha", {
                  required: true,
                  validate: (value) => value === senha || "As senhas não conferem.",
                })}
              />
              {errors.confirmarSenha && <span className="text-red-500 text-xs">{errors.confirmarSenha.message}</span>}
            </div>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="self-stretch pt-4 sm:pt-6 flex flex-col justify-start items-start gap-2 sm:gap-3">
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-green-900 rounded-lg shadow-sm outline outline-1 outline-green-900 flex justify-center items-center gap-2 overflow-hidden text-white text-base font-semibold font-['Inter'] leading-normal"
          >
            Confirma
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2.5 bg-white rounded-lg shadow-sm outline outline-1 outline-zinc-300 flex justify-center items-center gap-2 overflow-hidden text-green-950 text-base font-semibold font-['Inter'] leading-normal"
          >
            Cancela
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUsuario;