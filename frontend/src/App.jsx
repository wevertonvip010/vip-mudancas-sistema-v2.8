import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Licitacoes from './pages/Licitacoes';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial: Login */}
        <Route path="/" element={<Login />} />

        {/* Páginas internas com Sidebar */}
        <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />
        <Route path="/leads" element={<Sidebar><Leads /></Sidebar>} />
        <Route path="/licitacoes" element={<Sidebar><Licitacoes /></Sidebar>} />
      </Routes>
    </Router>
  );
}

export default App;
