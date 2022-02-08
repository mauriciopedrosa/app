import './Boton.css'

const Boton = ({ handleClick, children, ...rest}) => {

    return (
        <button className="miBoton"  onClick={handleClick}>{children}</button>
        // creo el boton y en donde iria el texto del mismo le defino children..que es 
        //el texto que voy a definir luego
        //podria enviar los estilos inline pero lo voy a dejar que lo tome del css
    )
}

export default Boton