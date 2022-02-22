import './NavBar.css'
import Carrito from '../Carrito/Carrito'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { traerCategorias } from '../../simulado/productos'

//llamo un funcion para crear el objeto navbar
const NavBar = () => {
    const [categorias,setCategorias] = useState([])

    useEffect(() => {
      traerCategorias()
      .then(categorias => {
        setCategorias(categorias)
      })
    }, [])
    console.log(categorias);

    return (
        <nav className="NavBar" >
          <div className = 'Imagen'>
              <img src={'../images/logo192.png'} alt='logo'></img>
          </div>          
          <div className='Titulo'>
              <h2>Tienda de Bebidas</h2>
          </div>

          <div className="Categories">
            {categorias.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
                isActive ? 'ActiveOption' : 'Option'
            }>{cat.descripcion}</NavLink>)}
          </div>
          <Carrito /> 
        </nav>
    )
  }
  
  export default NavBar