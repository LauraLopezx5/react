import { Link } from 'react-router-dom'
import "./carrito.css"


const CarritoVacio = () => {
  return (
    <div className='carritoVacio'>
        <div className='carritoVacio'>No hay productos en el carrito</div>
        <Link to = {"/"}><button className="btn btn-secondary d-flex">Ver Productos</button></Link>
    </div>
  )
}

export default CarritoVacio