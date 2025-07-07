// src/pages/Clientes.tsx

import React, { useState, useEffect } from 'react';
import type Cliente from '../../models/Cliente';
import { atualizarCliente, cadastrarCliente, deletarCliente, listarClientes } from '../../services/ServiceCliente';

import FormCliente from '../../components/forms/FormCliente';
import Modal from '../../components/modal/Modal';
import CardCliente from '../../components/cliente/CardCliente';

function Clientes() {
 const [clientes, setClientes] = useState<Cliente[]>([]);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedCliente, setSelectedCliente] = useState<Cliente | undefined>(undefined);
 const [searchTerm, setSearchTerm] = useState(''); // Estado para o campo de busca

 useEffect(() => {
  fetchClientes();
 }, []);
 async function fetchClientes() {
  await listarClientes(setClientes);
 }

 const handleCreateNew = () => {
  setSelectedCliente(undefined); // Limpa o cliente selecionado para o modo de cadastro
  setIsModalOpen(true);
 };
 const handleEdit = (cliente: Cliente) => {
  setSelectedCliente(cliente); // Define o cliente para edição
  setIsModalOpen(true);
 };



 const handleDelete = async (id: number) => {
  if (window.confirm('Tem certeza que deseja deletar este cliente?')) {
   await deletarCliente(id);
   fetchClientes(); // Recarrega a lista após a deleção
  }
 };

 const handleFormSubmit = async (cliente: Cliente) => {
  if (cliente.id) {
   await atualizarCliente(cliente, (data: Cliente) => {
    // Atualiza a lista de clientes após a edição
    setClientes(clientes.map(c => (c.id === data.id ? data : c)));
   });

  } else {
   await cadastrarCliente(cliente, (data: Cliente) => {
    setClientes([...clientes, data]); // Adiciona o novo cliente à lista
   });
  }

  setIsModalOpen(false); // Fecha o modal após a submissão
  setSelectedCliente(undefined); // Limpa o cliente selecionado
  fetchClientes(); // Recarrega a lista para garantir consistência
 };



 const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
 };

 const filteredClientes = clientes.filter(cliente =>
  cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
  cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  // Adicione outros campos de busca se desejar (e.g., por ID)
 );



 return (
  <div className="w-full bg-white flex flex-col items-center overflow-hidden">
  {/* Cabeçalho da página */}
  <div className="w-full px-4 sm:px-6 md:px-10 py-8 sm:py-12 bg-slate-300 flex flex-col gap-10">
    
    {/* Título + Busca + Botão */}
    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      <h1 className="text-black text-3xl sm:text-4xl font-bold font-['Poppins']">
        Conheça nossos parceiros
      </h1>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
        {/* Campo de Busca */}
        <div className="flex items-center bg-zinc-600 rounded-[10px] w-full sm:w-80 h-12 px-3">
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={handleSearch}
            className="flex-1 bg-transparent outline-none text-slate-200 placeholder-slate-300 text-base"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Botão Novo Cliente */}
        <button
          onClick={handleCreateNew}
          className="w-full sm:w-auto px-4 py-2 bg-green-900 rounded-lg text-white font-semibold text-sm"
        >
          Novo Cliente
        </button>
      </div>
    </div>

    {/* Lista de Clientes */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 xl:gap-10">
      {filteredClientes.length === 0 ? (
        <p className="text-gray-700 text-lg col-span-full">Nenhum cliente encontrado.</p>
      ) : (
        filteredClientes.map((cliente) => (
          <CardCliente
            key={cliente.id}
            cliente={cliente}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  </div>

  {/* Modal */}
  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <FormCliente
      initialData={selectedCliente}
      onSubmit={handleFormSubmit}
      onClose={() => setIsModalOpen(false)}
    />
  </Modal>
</div>


 );

}



export default Clientes;