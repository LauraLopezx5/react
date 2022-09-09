import { useContext, useEffect, useState } from 'react'
import { myContext } from '../cartContext/CartContext'
import CarritoVacio from './CarritoVacio'
import MostrarProductosCarrito from './MostrarProductosCarrito'
import { Link } from 'react-router-dom'



const Cart = () => {

  const { cantidadProductos, productosAgregados, totalAPagar, setVaciarCarrito} = useContext(myContext)
  const [carritoVacio, setCarritoVacio] = useState(true)

  useEffect(() => {
    if (cantidadProductos != 0) {
      setCarritoVacio(false)
    }else{
      setCarritoVacio(true)
    }
  })

  function botonVaciarCarrito(){
    setVaciarCarrito(true)
  }

  return (
    <div>
      <div>{carritoVacio && <CarritoVacio />}</div>
      <div className='contenedorCarrito'>

        {productosAgregados.map((producto) => (
          <MostrarProductosCarrito key={producto.id} producto={producto} />
        ))}
      </div>
      {!carritoVacio && <div> <div id='totalAPagar'>Total a Pagar: {totalAPagar}</div><div className='botonesCarritoDiv'><button  onClick={botonVaciarCarrito} className="botonesCarrito btn btn-secondary">Vaciar Carrito</button>
        <Link style={{ textDecoration: "none" }} to={"/"}><button className="botonesCarrito btn btn-secondary">Seguir Comprando</button></Link>
        <Link style={{ textDecoration: "none" }} to={"/finalizarCompra"}><button className="botonesCarrito btn btn-secondary">Finalizar Compra</button></Link></div>
        </div>}
      </div>
  )
}

export default Cart