import { Link } from 'react-router-dom'


const CarritoVacio = () => {
  return (
    <div>
        <div>No hay productos en el carrito</div>
        <Link to = {"/"}><button className="btn btn-secondary d-flex">Ver Productos</button></Link>
    </div>
  )
}

export default CarritoVacio