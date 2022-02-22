import './Boton.css'

const Boton = ({ handleClick, children, ...rest}) => {

    return (
        <button className="miBoton"  onClick={handleClick}>{children}</button>

    )
}

export default Boton