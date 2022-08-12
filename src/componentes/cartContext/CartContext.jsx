import { createContext, useEffect, useState } from 'react'
export const myContext = createContext()


const CartContext = ({ children }) => {

  const [cantidadProductos, setCantidadProductos] = useState(0)
  const [productosAgregados, setProductosAgregados] = useState([])
  const [productoAChequear, setProductoAChequear] = useState({})
  const [totalAPagar, setTotalAPagar] = useState(0)

  useEffect(() => {
    buscarProductoEnCarrito()
    ActualizarTotalAPagar()
    
  },[productoAChequear])

  function buscarProductoEnCarrito() {
    productosAgregados.forEach(producto => {
      if (producto.id == productoAChequear.id) {
        producto.cantidad += productoAChequear.cantidad
        setCantidadProductos(cantidadProductos+productoAChequear.cantidad)
        }
      
        // localStorage.setItem('carrito',JSON.stringify(CARRITO))

    })
    let resultado = productosAgregados.find(producto => producto.id == productoAChequear.id) ?? agregarProductoAlCarrito()

  }

  function agregarProductoAlCarrito() {
    if (Object.entries(productoAChequear).length != 0) {
      productosAgregados.push(productoAChequear)
      setProductosAgregados(productosAgregados)
      setCantidadProductos(cantidadProductos+productoAChequear.cantidad)

    }
  }

  function ActualizarTotalAPagar(){
    let total = 0
    productosAgregados.forEach(producto=>{
        total += producto.precio*producto.cantidad
    })
    setTotalAPagar(total)
    console.log(totalAPagar)
}


  return (
    <myContext.Provider value={{ cantidadProductos, setCantidadProductos, productosAgregados, setProductosAgregados, productoAChequear, setProductoAChequear }}>{children}</myContext.Provider>
  )
}

export default CartContext