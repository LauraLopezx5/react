import { useContext } from 'react'
import { myContext } from '../cartContext/CartContext'
import "./carrito.css"

const MostrarProductosCarrito = ({ producto }) => {
  const{totalAPagar}=useContext(myContext)
  return (
    <>
      <div>{producto.nombre}-{producto.cantidad}-{producto.precio}</div>
      <div>{totalAPagar}</div>
    </>
  )
}

export default MostrarProductosCarrito