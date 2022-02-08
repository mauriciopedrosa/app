import './NavBar.css'

//llamo un funcion para crear el objeto navbar
const NavBar = () => {
    return (
      <nav className = 'NavBar'>
          <div className = 'Imagen'>
              <img src={'./images/logo192.png'} alt='logo'></img>
          </div>
          <div>
              <h2>Tienda De Bedidas</h2>
          </div>
          <div className="Categories">
              <button className='Inicio'>Inicio</button>
              <button className='Option'>Vinos</button>
              <button className='Option'>Aperitivos</button>
              <button className='Option'>Cervezas</button>
              <button className='Option'>Espumantes</button>
              <button className='Option'>Wiskys</button>                            
          </div>          

      </nav>
    )
  }


  export default NavBar