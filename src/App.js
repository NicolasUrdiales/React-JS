import logo from './logo.svg'
import './App.css';
import  Navbar from './components/Navbar/Navbar'


function App() {
  return (
      <Navbar>
        <div>
          <img src=''/>
        </div>
        <nav>
          <a className='a-nav'>Inicio</a>
          <a className='a-nav'>Mis compras</a>
          <a className='a-nav'>Carrito de Compras</a>
        </nav>
      </Navbar>
  );
};

export default App;
