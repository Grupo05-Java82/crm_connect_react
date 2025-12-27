import { Link } from "react-router-dom";
import type Oportunidade from "../../models/Oportunidade";

interface CardOportunidadeProps {
  oportunidade: Oportunidade;
}

function CardOportunidade({ oportunidade }: CardOportunidadeProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-green-900 text-white font-bold text-2xl">
        Oportunidade
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{oportunidade.receita}</p>
      <p className="p-8 text-3xl bg-slate-200 h-full">{oportunidade.status}</p>
      <p className="p-8 text-3xl bg-slate-200 h-full">{oportunidade.cliente?.nome}</p>

      <div className="flex">
        <Link
          to={`/editaroportunidade/${oportunidade.id}`}
          className="w-full text-slate-100 bg-gree-600 hover:bg-green-900 
                        flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletaroportunidade/${oportunidade.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardOportunidade;
