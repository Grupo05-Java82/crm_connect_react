// src/components/oportunidade/CardOportunidade.tsx (Alterado com Estilização e Ícones da Lucide)

import type Oportunidade from "../../models/Oportunidade";
import { DollarSign, Tag, User, Edit2, Trash2 } from "lucide-react"; // Ícones Lucide para Oportunidade

export interface CardOportunidadeProps {
  oportunidade: Oportunidade;
  onDelete: (id: number) => Promise<void>;
  onEdit: (oportunidade: Oportunidade) => void;
}

function CardOportunidade({ oportunidade, onEdit, onDelete }: CardOportunidadeProps) {
  return (
    <div className="w-full max-w-[320px] h-auto p-4 bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4"> {/* Fundo mais escuro para contraste, estilo do card cliente */}
      {/* Título + Ações */}
      <div className="flex justify-between items-start">
        <h3 className="text-white text-xl font-semibold font-['Poppins'] leading-tight break-words">
          Oportunidade #{oportunidade.id}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(oportunidade)}
            className="text-white hover:text-gray-300"
            title="Editar Oportunidade"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(oportunidade.id!)}
            className="text-white hover:text-red-300"
            title="Deletar Oportunidade"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20" />

      {/* Informações da Oportunidade */}
      <div className="flex flex-col gap-3 text-sm font-light text-white break-words font-['Poppins']">
        <div className="flex items-center gap-2">
          <Tag size={16} />
          <span>{oportunidade.status}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign size={16} />
          <span>R$ {oportunidade.receita?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>{oportunidade.cliente?.nome || "Nenhum cliente associado"}</span> {/* Acessa nome do cliente */}
        </div>
      </div>
    </div>
  );
}

export default CardOportunidade;