import './App.css';
import NavBar from './components/Navbar/NavBar';
import ContenedorItems from './components/ContenedorItems/ContenedorItems';
import ContenedorItemDetalle from './components/ContenedorItemDetalle/ContenedorItemDetalle';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<ContenedorItems />} />
          <Route path='/category/:categoryID' element ={<ContenedorItems />} />  
          <Route path='/detail/:IdProducto' element={<ContenedorItemDetalle />}/>                  
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;
