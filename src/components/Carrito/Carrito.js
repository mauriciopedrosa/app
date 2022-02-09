import './Carrito.css'

const Carrito = ({handleClick, children, ...rest}) => {

    return (
        <button className="miCarrito" onClick={handleClick}>{children}</button>
    )
}

export default Carrito