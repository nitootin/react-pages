 './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Admin from './Pages/Admin';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  const user = {name:"ph", role:"Admin"};


  return (
    <div className="App">
      <header className="App-header">
         <Navbar user={user}/>
      </header>
      <main>
        <BrowserRouter>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2>erro 404</h2>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/admin" element={<PrivateRoute user={user} requiredRole="Admin" element={ <Admin />}/>} />
            <Route index element={<h2>bem vindo a area de adm</h2>} />
            <Route path="usuarios" element={<h2>gerenciar usuarios</h2>} />
            <Route path="configuraçoes" element={<h2>config do sistema</h2>} />
            <Route path="*" element={<h2>pagina nao encontrada</h2>} />
          <Route path="/erro" element={<h2>deu errado</h2>} />
          <Route path="/negado" element={<h2>voce nao tem acesso </h2>} />

        </Routes>

        </BrowserRouter>
      </main>
      
    </div>
  );
}

export default App;
