import { useState } from 'react';
import './Contador.css';

    const Contador = ({stock = 1,inicial = 1, onAdd}) => {
        const [cantidad,setCantidad] =useState(inicial);
 
        const agregar = () => {
            if(cantidad < stock){
            setCantidad(cantidad + 1)
            }

        }
        const restar = () => {
            if(cantidad > 0) { 
                setCantidad(cantidad - 1)
            }
        }


        return(
            <div align="center">
                <h3>Contador</h3>
                <h3>{cantidad}</h3>
                <button onClick={restar}>-</button>
                <button onClick={() => onAdd(cantidad)}>Agregar al Carrito</button>                
                <button onClick={agregar}>+</button>
 
            </div>
        )
    }

export default Contador