import type Cliente from "../../models/Cliente";
import { Phone, Mail, Briefcase, Edit2, Trash2 } from "lucide-react"; // Lucide para ícones bonitos

interface CardClienteProps {
  cliente: Cliente;
  onEdit: (cliente: Cliente) => void;
  onDelete: (id: number) => void;
}

function CardCliente({ cliente, onEdit, onDelete }: CardClienteProps) {
  return (
    <div className="w-full max-w-[320px] h-auto p-4 bg-green-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
      {/* Nome + Ações */}
      <div className="flex justify-between items-start">
        <h3 className="text-white text-xl font-semibold font-['Poppins'] leading-tight break-words">
          {cliente.nome}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(cliente)}
            className="text-white hover:text-gray-300"
            title="Editar Cliente"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(cliente.id!)}
            className="text-white hover:text-red-300"
            title="Deletar Cliente"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20" />

      {/* Informações */}
      <div className="flex flex-col gap-3 text-sm font-light text-white break-words font-['Poppins']">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>{cliente.telefone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>{cliente.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <span>{cliente.interesse || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCliente;