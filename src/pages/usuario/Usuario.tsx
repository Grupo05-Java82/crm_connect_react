// src/pages/Usuarios.tsx

import React, { useState, useEffect } from 'react';
import type Usuario from '../../models/Usuarios';
import { atualizarUsuario, cadastrarUsuario, deletarUsuario, listarUsuarios } from '../../services/ServiceUsuario';
import CardUsuario from '../../components/cardusuario/CardUsuario';
import FormUsuario from '../../components/forms/FormUsuario';
import Modal from '../../components/modal/Modal';



function Usuarios() {
const [usuarios, setUsuarios] = useState<Usuario[]>([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedUsuario, setSelectedUsuario] = useState<Usuario | undefined>(undefined);
const [searchTerm, setSearchTerm] = useState(''); // Estado para o campo de busca

useEffect(() => {
fetchUsuarios();
}, []);

async function fetchUsuarios() {
await listarUsuarios(setUsuarios);
}

const handleCreateNew = () => {
setSelectedUsuario(undefined); // Limpa o usuário selecionado para o modo de cadastro
setIsModalOpen(true);

};



const handleEdit = (usuario: Usuario) => {

setSelectedUsuario(usuario); // Define o usuário para edição

setIsModalOpen(true);

};



const handleDelete = async (id: number) => {

if (window.confirm('Tem certeza que deseja deletar este usuário?')) {

await deletarUsuario(id);

fetchUsuarios(); // Recarrega a lista após a deleção

}

};



const handleFormSubmit = async (usuario: Usuario) => {

if (usuario.id) {

await atualizarUsuario(usuario, (data: Usuario) => {

// Atualiza a lista de usuários após a edição

setUsuarios(usuarios.map(u => (u.id === data.id ? data : u)));

});

} else {

await cadastrarUsuario(usuario, (data: Usuario) => {

setUsuarios([...usuarios, data]); // Adiciona o novo usuário à lista

});

}

setIsModalOpen(false); // Fecha o modal após a submissão

setSelectedUsuario(undefined); // Limpa o usuário selecionado

fetchUsuarios(); // Recarrega a lista para garantir consistência

};



const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

setSearchTerm(event.target.value);

};



const filteredUsuarios = usuarios.filter(usuario =>

usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||

(usuario.usuario && usuario.usuario.toLowerCase().includes(searchTerm.toLowerCase()))

// Adicione outros campos de busca se desejar (e.g., por ID, email)

);



return (

<div className="w-full bg-white inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">

{/* Aqui você incluiria seu Header, Nav e Footer, conforme já fez */}

{/* Exemplo de estrutura básica, ajuste conforme seu projeto */}

{/* <Header /> */}

{/* <Nav /> */}



<div className="self-stretch px-11 py-12 bg-slate-300 flex flex-col justify-start items-center gap-16 overflow-hidden">

<div className="self-stretch inline-flex justify-between items-center">

<h1 className="justify-start text-black text-5xl font-bold font-['Poppins']">Quem são os Usuários</h1>

<div className="flex items-center gap-4">

{/* Campo de Busca */}

<div className="w-96 h-14 pl-2 bg-zinc-600 rounded-[10px] shadow-[0px_4px_12px_0px_rgba(13,10,44,0.06)] outline outline-1 outline-offset-[-1px] flex justify-start items-center gap-4">

<input

type="text"

placeholder="Search ..."

value={searchTerm}

onChange={handleSearch}

className="flex-1 px-2.5 text-slate-300 text-lg font-normal font-['Poppins'] bg-transparent outline-none placeholder-slate-300"

/>

<div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">

{/* Ícone de busca, idealmente um SVG */}

<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />

</svg>

</div>

</div>

{/* Botão Novo Usuário */}

<button

onClick={handleCreateNew}

className="px-4 py-2.5 bg-green-900 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline outline-1 outline-offset-[-1px] outline-green-900 text-white text-base font-semibold font-['Inter'] leading-normal"

>

Novo Usuário

</button>

</div>

</div>



<div className="w-[1220px] flex flex-wrap justify-start items-start gap-4"> {/* Ajustado para gap-4 */}

{filteredUsuarios.length === 0 ? (

<p className="text-gray-700 text-lg">Nenhum usuário encontrado.</p>

) : (

filteredUsuarios.map((usuario) => (

<CardUsuario

key={usuario.id}

usuario={usuario}

onEdit={handleEdit}

onDelete={handleDelete}

/>

))

)}

</div>

</div>



{/* Modal para Cadastro/Edição de Usuário */}

<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

<FormUsuario

initialData={selectedUsuario}

onSubmit={handleFormSubmit}

onClose={() => setIsModalOpen(false)}

/>

</Modal>



{/* <Footer /> */}

</div>

);

}



export default Usuarios;