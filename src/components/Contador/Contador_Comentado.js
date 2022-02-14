import { useState, useEffect } from 'react'; // son funciones nombradas de la default de react... la default es REACT
import './Contador.css';

const Contador = (props) => {
    // le declaro a Contador los parametros 
    // useState devuelve un array.. un state y un setstate lo destructuro con numero y setcount
    const [numero,setCount] =useState(0);
    // Declaración de una variable de estado que llamaremos "count".. Esta es una forma de “preservar” algunos valores entre las llamadas de la función normalmente, las variables “desaparecen” cuando se sale de la función, pero las variables de estado son conservadas por React.

    useEffect(() => { //este use efect va a estra revisando el estado de numero.. para ver si cmabio algo..lo voy a usar para controlar el stock
      return () => {
        if(numero === 10) {  //si llega a dies quieor que no sume mas..porque seria el limite de stock
            setCount(10)
        }
      }  
    
    },[numero]) // },[numero])  le paso dependencia.. para que cada vez que canbie esa dependencia se vuelva aejecutar (ahora va aescuchar cuando cmabie el estado de numero.) si no le paso dependencia..solo se ejecuta una vez
    
    console.log('voy a renderizar')


    const decrement = () => {
        if(numero > 0) { // no lo dejo llegar a negativos
            setCount(numero - 1)
        }
    }

    const increment = () => {
        setCount(numero + 1)
    }
    
    return(
        <>
            <h3>Contador</h3>
            <h3>{numero}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}   

export default Contador