import {useEffect, useState} from 'react';
import './ContenedorItems.css';
import ListaDeItems from '../ListaDeItems/ListaDeItems';
import { traerProductos } from '../../simulado/productos';
import { useParams } from 'react-router-dom'


const ContenedorItems = () => {

    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true) 

    const { categoryID } = useParams()

    
    useEffect(()=> {
        setLoading(true)

        traerProductos(categoryID)
            .then((item)=>{  
                setProductos(item);
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
    }, [categoryID]) 

    return ( 

        <div className="ItemListContainer">
            {
                loading ? 
                    <h1>Cargando...</h1> : productos.length ? <ListaDeItems productos={productos}/> :  
                    <h1>No se encontraron productos!</h1>
            }
        </div>




    )
}

export default ContenedorItems