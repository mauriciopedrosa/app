import {useEffect, useState} from 'react';
import './ContenedorItems.css';
import ListaDeItems from '../ListaDeItems/ListaDeItems';
import { traerProductos } from '../../simulado/productos';


const ContenedorItems = () => {

    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true) 
    
    useEffect(()=> {
        traerProductos()
            .then((res)=>{  
                setProductos(res);
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })

            return (() => {
                setProductos()
            })  
    },[]) 

    return ( 

        <div className="ItemListContainer">
            {
                loading ? 
                    <h1>Cargando...</h1> : productos.length ? <ListaDeItems productos={productos}/> :  <h1>No se encontraron productos!</h1>
            }
        </div>

    )
}

export default ContenedorItems