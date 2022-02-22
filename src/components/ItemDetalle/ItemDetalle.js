import './ItemDetalle.css'
import Contador from '../Contador/Contador'

const ItemDetalle =({producto})=>{

    return(
        <article className= 'ItemCard'>

            <header className="Header">
                <h2 className="ItemHeader">
                    {producto.name}
                </h2>
            </header>
            <picture>
                <img src={producto.img} alt={producto.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {producto.category}
                </p>
                <p className="Info">
                    Precio: {producto.price}
                </p>
                <p className="Info">
                    Stock: {producto.stock}
                </p>                
            </section>           
            <footer className='ItemFooter'>
               <Contador stock={producto.stock} /> 
            </footer>    
         </article>  
    )
}


export default ItemDetalle