import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemList from './components/ItemListContainer/ItemListContainer';
//ya me reconocio la importacion del navbar desde mi carpeta componentes

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemList />
    </div>

  );
}

export default App;
