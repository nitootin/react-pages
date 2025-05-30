import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter/>
        <Navbar/>
        <routes/>
        <route path='/' element={<Home/>}/>
        <route path='/Sobre' element={<Sobre/>}/>
        <route path='/Contato' element={<Contato/>}/>

        <routes/>

       <BrowserRouter/>
      </header>
    </div>
  );
}

export default App;
