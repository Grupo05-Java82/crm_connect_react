// src/pages/OportunidadePage.tsx
import { useState, useEffect } from "react";
import type Oportunidade from "../../models/Oportunidade";
import { listarOportunidades, cadastrarOportunidade, atualizarOportunidade, deletarOportunidade } from "../../services/ServiceOportunidade";
import CardOportunidade from "../../components/oportunidade/CardOportunidade";
import Modal from "../../components/modal/Modal";
import FormOportunidade from "../../components/oportunidade/FormOportunidade";


function OportunidadePage() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOportunidade, setSelectedOportunidade] = useState<Oportunidade | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  console.log('[OportunidadePage] Componente renderizado. isModalOpen:', isModalOpen);

  useEffect(() => {
    console.log('[OportunidadePage] useEffect: Buscando oportunidades ao montar.');
    fetchOportunidades();
  }, []); // Array de dependências vazio para rodar apenas uma vez na montagem

  async function fetchOportunidades() {
    try {
      await listarOportunidades(setOportunidades);
      console.log('[OportunidadePage] Oportunidades carregadas:', oportunidades.length);
    } catch (error: unknown) {
      console.error("[OportunidadePage] Erro ao buscar oportunidades:", error);
    }
  }

  const handleCreateNew = () => {
    console.log('[OportunidadePage] Botão "Nova Oportunidade" clicado.');
    setSelectedOportunidade(undefined); // Limpa para um novo cadastro
    setIsModalOpen(true);
    console.log('[OportunidadePage] isModalOpen setado para TRUE (Nova).');
  };

  const handleEdit = (oportunidade: Oportunidade): void => {
    console.log('[OportunidadePage] Botão "Editar" clicado para oportunidade ID:', oportunidade.id);
    setSelectedOportunidade(oportunidade); // Define para edição
    setIsModalOpen(true);
    console.log('[OportunidadePage] isModalOpen setado para TRUE (Edição).');
  };

  const handleDelete = async (id: number): Promise<void> => {
    console.log('[OportunidadePage] Tentativa de deletar oportunidade com ID:', id);
    if (window.confirm('Tem certeza que deseja deletar esta oportunidade?')) {
      try {
        await deletarOportunidade(id);
        console.log('[OportunidadePage] Oportunidade deletada com sucesso!');
      } catch (error) {
        console.error('[OportunidadePage] Erro ao deletar oportunidade:', error);
      }
      fetchOportunidades(); // Recarrega a lista
    }
  };

  const handleFormSubmit = async (oportunidade: Oportunidade) => {
    console.log('[OportunidadePage] handleFormSubmit: Oportunidade recebida do formulário para submissão:', oportunidade);
    try {
      if (oportunidade.id) {
        await atualizarOportunidade(oportunidade, (data: Oportunidade) => {
          setOportunidades(prev => prev.map(op => (op.id === data.id ? data : op)));
        });
        console.log('[OportunidadePage] Oportunidade atualizada com sucesso!');
      } else {
        await cadastrarOportunidade(oportunidade, (data: Oportunidade) => {
          setOportunidades(prev => [...prev, data]);
        });
        console.log('[OportunidadePage] Oportunidade cadastrada com sucesso!');
      }
    } catch (error) {
      console.error('[OportunidadePage] Erro ao submeter formulário (cadastro/atualização):', error);
    } finally {
      setIsModalOpen(false);
      setSelectedOportunidade(undefined);
      fetchOportunidades(); // Recarrega para garantir consistência
      console.log('[OportunidadePage] Modal fechado e lista recarregada após submissão.');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredOportunidades = oportunidades.filter(op =>
    op.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    op.receita?.toString().includes(searchTerm) ||
    op.cliente?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-white flex flex-col items-center overflow-hidden">
      {/* Cabeçalho da página */}
      <div className="w-full px-4 sm:px-6 md:px-10 py-8 sm:py-12 bg-slate-300 flex flex-col gap-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h1 className="text-black text-3xl sm:text-4xl font-bold font-['Poppins']">
            Nossas Oportunidades
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Campo de Busca */}
            <div className="flex items-center bg-zinc-600 rounded-[10px] w-full sm:w-80 h-12 px-3">
              <input
                type="text"
                placeholder="Buscar oportunidade..."
                value={searchTerm}
                onChange={handleSearch}
                className="flex-1 bg-transparent outline-none text-slate-200 placeholder-slate-300 text-base"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Botão Nova Oportunidade */}
            <button
              onClick={handleCreateNew}
              className="w-full sm:w-auto px-4 py-2 bg-green-900 rounded-lg text-white font-semibold text-sm"
            >
              Nova Oportunidade
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Oportunidades */}
      <div className="w-full p-4 sm:p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 xl:gap-10">
        {filteredOportunidades.length === 0 ? (
          <p className="text-gray-700 text-lg col-span-full text-center">Nenhuma oportunidade encontrada.</p>
        ) : (
          filteredOportunidades.map((oportunidade) => (
            <CardOportunidade
              key={oportunidade.id}
              oportunidade={oportunidade}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Modal para Cadastro/Edição de Oportunidade */}
      <Modal isOpen={isModalOpen} onClose={() => {
        console.log('[OportunidadePage] onClose do Modal (overlay) clicado.');
        setIsModalOpen(false);
        setSelectedOportunidade(undefined); // Limpa o selecionado ao fechar
      }}>
        <FormOportunidade
          initialData={selectedOportunidade}
          key={selectedOportunidade?.id}
          onSubmit={handleFormSubmit}
          onClose={() => {
            console.log('[OportunidadePage] onClose do FormOportunidade (botão X) clicado.');
            setIsModalOpen(false);
            setSelectedOportunidade(undefined); // Limpa o selecionado ao fechar
          }}
        />
      </Modal>
    </div>
  );
}

export default OportunidadePage;