import React, {useEffect, useState} from 'react';
import './ContenedorItems.css';
import Contador from '../Contador/Contador';
import { traerProductos } from '../../simulado/productos';
import ListaDeItems from '../ListaDeItems/ListaDeItems';

const ContenedorItems = ({titulo = 'LISTA DE ITEMS'}) => {

    const [productos, setProductos] = useState([]); //quiero guardar un estado 
    
    useEffect(()=> {
        traerProductos
            .then((res)=>{  
                setProductos(res);
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                //se ejecuta siempre y al final
            })
    },[]) //tengo que hacer que se renderice una vez la llamada


    const resolverOnAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad}`)
    }
    return ( 
        <>
            <h1>{titulo}</h1>  
            <ListaDeItems productos={productos}/>
            {/*<Contador stock={10} inicial ={1} onAdd={resolverOnAdd}/>*/}
        </>
    )
}

export default ContenedorItems