import './Item.css'
const Item =({producto})=>{

    return(
        <div className= 'ItemCard'>

            <h3>{producto.name}</h3>
            <img src={producto.img} className='ItemImagen' />
            <p>Importe: ${producto.price}</p>
            <p>Cantidad:{producto.stock}</p>            
        </div>
    )
}

export default Item