import "./carrito.css"
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { myContext } from "../cartContext/CartContext";


const MostrarProductosCarrito = ({ producto }) => {

  const {setProductoAEliminar} = useContext(myContext)

  function eliminarProducto(){
    setProductoAEliminar(producto.id)
  }

  return (
    <>
      <div className="card text-center cardCarrito" style={{with: "8rem"}}>
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: {producto.precio}</p>
          <p className="card-text">Cantidad: {producto.cantidad}</p>

          <button onClick={eliminarProducto} className="btn btn-secondary text-end"><BsTrash /></button>

        </div>
      </div>
    </>
  )
}

export default MostrarProductosCarrito