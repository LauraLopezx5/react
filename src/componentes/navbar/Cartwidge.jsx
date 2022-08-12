
import { useContext, useEffect, useState } from "react"
import { BsCart4 } from "react-icons/bs"
import { myContext } from "../cartContext/CartContext"

const Cartwidge = () => {

  const { cantidadProductos } = useContext(myContext)
  const [mostrarContador, setMostrarContador] = useState(false)
  useEffect(() => {
    if (cantidadProductos != 0) {
      setMostrarContador(true)
    } else {
      setMostrarContador(false)
    }
  }, [cantidadProductos])


  return (
    <>
      <div className="icono">
        <BsCart4 />
        <div className="contadorCarrito">{mostrarContador && cantidadProductos}</div>
      </div>
    </>
  )
}

export default Cartwidge