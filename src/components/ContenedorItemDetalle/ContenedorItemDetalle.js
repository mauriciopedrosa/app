import './ContenedorItemDetalle.css'
import { useState, useEffect } from 'react'
import ItemDetalle from '../ItemDetalle/ItemDetalle'
import { traerProducto } from '../../simulado/productos';
import { useParams } from 'react-router-dom'

const ContenedorItemDetalle = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    const { IdProducto } = useParams()
    

    useEffect(() => {
        traerProducto(IdProducto)
        .then(item => {
            setProducto(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducto()
        })

    }, [IdProducto])


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? <h1>Cargando...</h1> :
                producto ? <ItemDetalle  producto={producto}/> : <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ContenedorItemDetalle