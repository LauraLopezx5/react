import { useContext, useEffect, useState } from 'react'
import { myContext } from '../cartContext/CartContext'
import CarritoVacio from './CarritoVacio'
import MostrarProductosCarrito from './MostrarProductosCarrito'

const Cart = () => {

  const { cantidadProductos,productosAgregados } = useContext(myContext)
  const [carritoVacio, setCarritoVacio] = useState(true)

  useEffect(() => {
    if (cantidadProductos != 0) {
      setCarritoVacio(false)
    }
  })

  return (
    <>
      <div>{carritoVacio && <CarritoVacio />}</div>
      {productosAgregados.map((producto)=>(
        <MostrarProductosCarrito key={producto.id} producto={producto}/>
        
      ))}
    </>
  )
}

export default Cart