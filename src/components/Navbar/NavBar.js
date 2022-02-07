import './NavBar.css'

//llamo un funcion para crear el objeto navbar
const NavBar = () => {
    return (
      <nav className = 'NavBar'>
          <div>
              <img src={'./images/logo192.png'} alt='logo'></img>
          </div>
        <button>Boton </button>
      </nav>
    )
  }
  //..
  export default NavBar