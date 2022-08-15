import "./carrito.css"
import { BsTrash } from "react-icons/bs";


const MostrarProductosCarrito = ({ producto }) => {

  return (
    <>
      <div className="card text-center cardCarrito" style={{with: "8rem"}}>
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: {producto.precio}</p>
          <p className="card-text">Cantidad: {producto.cantidad}</p>

          <button className="btn btn-secondary text-end"><BsTrash /></button>

        </div>
      </div>
    </>
  )
}

export default MostrarProductosCarrito