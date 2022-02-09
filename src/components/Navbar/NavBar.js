import './NavBar.css'
import Boton from '../Boton/Boton'
import Carrito from '../Carrito/Carrito'

//llamo un funcion para crear el objeto navbar
const NavBar = () => {


    const opcionInicio = () => {
      console.log('Home')
    }
    const opcionCervezas = () => {
      console.log('Cervezas')
    }

    const opcionVinos = () => {
      console.log('Vinos')
    }

    const opcionAperitivos = () => {
      console.log('Aperitivos')
    }

    const opcionWiskys = () => {
      console.log('Wiskys')
    }

    const opcionEspumantes = () => {
      console.log('Espumantes')
    }

    const opcionCarrito = () => {
      console.log('Carrito')
    }



    return (
        <nav className="NavBar" >
          <div className = 'Imagen'>
              <img src={'./images/logo192.png'} alt='logo'></img>
          </div>          
          <div>
              <h2>Tienda de Bebidas</h2>
          </div>

          <div className="Categories">
              <Boton handleClick={opcionInicio}>
                Inicio
              </Boton>                     
              <Boton handleClick={opcionCervezas}>
                Cervezas
              </Boton>
              <Boton handleClick={opcionVinos}>
                Vinos
              </Boton>
              <Boton handleClick={opcionAperitivos}>
                Aperitivos
              </Boton>
              <Boton handleClick={opcionWiskys}>
                Wiskys
              </Boton>
              <Boton handleClick={opcionEspumantes}>
                Espumantes
              </Boton>    
                                 
          </div>
          <Carrito /> 
        </nav>
    )
  }
  
  export default NavBar