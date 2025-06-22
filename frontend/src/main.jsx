import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Licitacoes from './pages/Licitacoes';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />
        <Route path="/leads" element={<Sidebar><Leads /></Sidebar>} />
        <Route path="/licitacoes" element={<Sidebar><Licitacoes /></Sidebar>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
