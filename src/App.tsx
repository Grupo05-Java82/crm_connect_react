// src/App.tsx (Atualizado)
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'

import OportunidadePage from './pages/oportunidade/OportunidadePage'
import SobreProjetoPage from './pages/sobre/SobreProjetoPage'
import EquipePage from './pages/equipePage/EquipePage'
import Usuarios from './pages/usuario/Usuario'
import Clientes from './pages/cliente/ClientePage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} /> {/* Adicionada rota para Usuarios */}
          <Route path="/clientes" element={<Clientes />} /> {/* Mantida rota para Clientes */}
          <Route path="/oportunidades" element={<OportunidadePage />} />
          <Route path="/sobre" element={<SobreProjetoPage />} />
          <Route path="/equipe" element={<EquipePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App