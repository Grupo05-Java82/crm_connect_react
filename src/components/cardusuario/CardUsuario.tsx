// src/components/CardUsuario.tsx (Atualizado para Responsividade)

import type Usuario from "../../models/Usuarios"; // Ajustado para type import

interface CardUsuarioProps {
  usuario: Usuario;
  onEdit: (usuario: Usuario) => void;
  onDelete: (id: number) => void;
}

function CardUsuario({ usuario, onEdit, onDelete }: CardUsuarioProps) {
  return (
    // Largura do card: `w-full` em telas pequenas, `sm:w-80` em telas maiores
    <div className="w-full sm:w-80 bg-neutral-950 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center p-4 mb-4 overflow-hidden">
      <div className="self-stretch inline-flex justify-between items-start">
        <button
          onClick={() => onEdit(usuario)}
          className="w-6 h-6 relative overflow-hidden text-slate-300 flex items-center justify-center hover:text-gray-400"
          title="Editar Usuário"
        >
          {/* Ícone de Lápis (Editar) - SVG simples */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>

        <div className="w-16 h-16 relative rounded-[50px] outline outline-1 outline-offset-[-1px] outline-green-400">
          <img
            className="w-16 h-16 left-0 top-0 absolute rounded-full object-cover"
            src={usuario.foto || "https://placehold.co/70x70"}
            alt={`Foto de ${usuario.nome}`}
          />
        </div>

        <button
          onClick={() => onDelete(usuario.id!)}
          className="w-6 h-6 relative overflow-hidden text-slate-300 flex items-center justify-center hover:text-red-400"
          title="Deletar Usuário"
        >
          {/* Ícone de Lixeira (Deletar) - SVG simples */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.928a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.147-2.009-2.201L8.636 2.5c-1.1.06-2.009 1.026-2.009 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>

      <div className="w-full relative flex justify-start items-start">
        <h3 className="text-slate-300 text-xl sm:text-2xl font-bold font-['Poppins']">{usuario.nome}</h3>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-2.5">
        <p className="self-stretch text-slate-300 text-sm sm:text-base font-medium font-['Poppins']">
          **Usuário:** {usuario.usuario}
        </p>
        {usuario.oportunidades && usuario.oportunidades.length > 0 && (
          <p className="self-stretch text-slate-300 text-sm sm:text-base font-medium font-['Poppins']">
            **Oportunidades:** {usuario.oportunidades.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardUsuario;