import { createContext, useEffect, useState } from 'react'
export const myContext = createContext()


const CartContext = ({ children }) => {

  const [cantidadProductos, setCantidadProductos] = useState(0)
  const [productosAgregados, setProductosAgregados] = useState([])
  const [productoAChequear, setProductoAChequear] = useState({})
  const [totalAPagar, setTotalAPagar] = useState(0)
  const [vaciarCarrito, setVaciarCarrito] = useState(false)
  const [productoAEliminar, setProductoAEliminar] = useState(0)


  useEffect(() => {
    buscarProductoEnCarrito()
  }, [productoAChequear])

  useEffect(() => {
    if (vaciarCarrito == true) {
      funcionVaciarCarrito()
    }
  }, [vaciarCarrito])

  useEffect(() => {
    if (productoAEliminar != 0) {
      eliminarProducto()
    }
  }, [productoAEliminar])

  function buscarProductoEnCarrito() {
    productosAgregados.forEach(producto => {
      if (producto.id == productoAChequear.id) {
        producto.cantidad += productoAChequear.cantidad
        setCantidadProductos(cantidadProductos + productoAChequear.cantidad)
        ActualizarTotalAPagar()

      }
      // localStorage.setItem('carrito',JSON.stringify(CARRITO))
    })
    let resultado = productosAgregados.find(producto => producto.id == productoAChequear.id) ?? agregarProductoAlCarrito()

  }

  function agregarProductoAlCarrito() {
    if (Object.entries(productoAChequear).length != 0) {
      productosAgregados.push(productoAChequear)
      setProductosAgregados(productosAgregados)
      setCantidadProductos(cantidadProductos + productoAChequear.cantidad)
      ActualizarTotalAPagar()

    }
  }

  function ActualizarTotalAPagar() {
    setTotalAPagar(productosAgregados.reduce((suma, producto) =>
      suma + producto.precio * producto.cantidad, 0
    ))
  }

  function funcionVaciarCarrito() {
    setProductosAgregados([])
    setCantidadProductos(0)
    setVaciarCarrito(false)
  }

  function eliminarProducto() {

    productosAgregados.forEach((producto, index) => {
  
      if (producto.id == productoAEliminar) {
        productosAgregados.splice(index, 1)
        setProductosAgregados(productosAgregados)
        setProductoAEliminar(0)
        ActualizarTotalAPagar()
        setCantidadProductos(productosAgregados.reduce((suma, producto) =>
          suma + producto.cantidad, 0
        ))
      }
    })
  }


  return (
    <myContext.Provider value={{ cantidadProductos, setCantidadProductos, productosAgregados, setProductosAgregados, productoAChequear, setProductoAChequear, setVaciarCarrito, totalAPagar, setProductoAEliminar,}}>{children}</myContext.Provider>
  )
}

export default CartContext