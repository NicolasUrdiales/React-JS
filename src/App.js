import './App.css';
import './components/navbar'
function App() {
  return (
    <div className='app'>
      <Navbar>
        <nav>
          <a>Inicio</a>
          <a>Mis compras</a>
          <a>Carrito de Compras</a>
        </nav>
      </Navbar>
    </div>
  );
}

export default App;
