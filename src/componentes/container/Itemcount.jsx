import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from "../cartContext/CartContext"




export const Itemcount = ({ stock, item }) => {

  const [contador, setContador] = useState(1)
  const [textoBotonCarrito, setTextoBotonCarrito] = useState("Agregar al carrito")
  const [botonAgregarAlCarrito, setBotonAgregarAlCarrito] = useState(true)
  const { setProductoAChequear } = useContext(myContext)


  useEffect(() => {
    if (stock == 0) {
      setTextoBotonCarrito("Sin stock")
      setContador(0)
    }
  })


  const restar = () => {
    if (contador > 1)
      setContador(contador - 1)
  }

  const sumar = () => {
    if (contador < stock)
      setContador(contador + 1)
  }

  function agregarAlCarrito() {
    if (stock > 0) {
      setBotonAgregarAlCarrito(false)
    }
  }

  function agregarProducto() {
    let productoAChequear = { nombre: item.nombre, id: item.id, precio: item.precio, cantidad: contador }
    setProductoAChequear(productoAChequear)
  }
  return (
    <div>
      <div id='itemcount' className='d-flex flex-row justify-content-around'>
        <button className="resta" onClick={restar}>-</button>
        <div>{contador}</div>
        <button className="suma" onClick={sumar}>+</button>
      </div>
      <div className='d-flex justify-content-center'>
        {botonAgregarAlCarrito ? <button onClick={agregarAlCarrito} id="botonCarrito" className="btn btn-secondary d-flex">{textoBotonCarrito}</button>
          : <Link to={"/cart"}><button onClick={agregarProducto} id="finalizarCompra" className="btn btn-secondary d-flex">Finalizar Compra</button></Link>}
      </div>


    </div>
  )
}
