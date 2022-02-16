import './ListaDeItems.css'
import Item from "../Item/Item"

const ListaDeItems =({productos})=>{
    return(
        <div className="Lista">
            {productos.map(producto=> <Item producto={producto} key={producto.id}/>)}
        </div>
    )
}

export default ListaDeItems