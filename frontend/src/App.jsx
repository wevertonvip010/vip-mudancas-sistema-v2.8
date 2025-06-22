import React from 'react';
import Login from './pages/Login.jsx';
import useAuth from './hooks/useAuth.js';

function App() {
  const user = useAuth();
  return (
    <div>
      <h1>Bem-vindo à VIP Mudanças</h1>
      <Login />
    </div>
  );
}

export default App;
