import './ContenedorItems.css'
import Contador from '../Contador/Contador'

const ContenedorItems = ({titulo = 'LISTA DE ITEMS'}) => {
    const resolverOnAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad}`)
    }
    return ( 
        <div className='ContenedorItems'>
            <h1>{titulo}</h1>  
            <Contador stock={10} inicial ={1} onAdd={resolverOnAdd}/>
        </div>
    )
}

export default ContenedorItems