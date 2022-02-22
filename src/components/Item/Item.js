import './Item.css'
import { Link } from 'react-router-dom'

const Item =({producto})=>{

    return(
        <div className= 'ItemCard1'>

            <h3>{producto.name}</h3>
            <img src={producto.img} className='ItemImagen' />
            <p>Importe: ${producto.price}</p>
            <p>Cantidad:{producto.stock}</p>  
            <Link to={`/detail/${producto.id}`} >Ver Detalle</Link>          
        </div>
    )
}

export default Item