import React, { useContext } from 'react'
import { myContext } from '../cartContext/CartContext'

const MostrarProductosCarrito = ({ producto }) => {
  const{totalAPagar}=useContext(myContext)
  return (
    <>
      <div>{producto.nombre}</div>
      <div>{totalAPagar}</div>
    </>
  )
}

export default MostrarProductosCarrito