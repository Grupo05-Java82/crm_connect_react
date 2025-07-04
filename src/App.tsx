// src/App.tsx
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import ClientePage from './pages/cliente/ClientePage'
import OportunidadePage from './pages/oportunidade/OportunidadePage'
import SobreProjetoPage from './pages/sobre/SobreProjetoPage'
import EquipePage from './pages/equipePage/EquipePage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<ClientePage />} />
          <Route path="/oportunidades" element={<OportunidadePage />} />
          <Route path="/sobre" element={<SobreProjetoPage />} />
          <Route path="/equipe" element={<EquipePage/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App