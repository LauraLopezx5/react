
import { useState } from "react"
import { BsCart4 } from "react-icons/bs"

const Cartwidge = () => {
  const [cantidadProductos,setCantidadProductos]=useState(0)
  return (
    <div>({cantidadProductos}) <BsCart4/></div>
  )
}

export default Cartwidge