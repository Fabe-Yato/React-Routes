import { useState } from 'react'
import Home from './pages/home/Home'
import './header.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroCliente from './pages/cadastroCliente/CadastroCliente'
import ContaCorrente from './pages/contaCorrente/ContaCorrente'
import Financiamento from './pages/Financiamento/Financiamento'
import SobreNos from './pages/SobreNos/SobreNos'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastro" element={<CadastroCliente/>}/>
            <Route path="/conta-corrente" element={<ContaCorrente/>}/>
            <Route path="/financiamento" element={<Financiamento/>}/>
            <Route path="/sobre-nos" element={<SobreNos/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
