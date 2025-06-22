import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl mb-4">Login VIP Mudanças</h2>
        <input type="text" placeholder="Usuário" className="border p-2 mb-4 w-full" />
        <input type="password" placeholder="Senha" className="border p-2 mb-4 w-full" />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
      </div>
    </div>
  );
}
