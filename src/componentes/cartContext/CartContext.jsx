import { createContext, useEffect, useState } from 'react'
export const myContext = createContext()


const CartContext = ({ children }) => {

  const [cantidadProductos, setCantidadProductos] = useState(0)
  const [productosAgregados, setProductosAgregados] = useState([])
  const [productoAChequear, setProductoAChequear] = useState({})
  const [totalAPagar, setTotalAPagar] = useState(0)
  const [vaciarCarrito, setVaciarCarrito] = useState(false)


  useEffect(() => {
    buscarProductoEnCarrito()
    
  },[productoAChequear])

  useEffect(()=>{
    if(vaciarCarrito==true){
      funcionVaciarCarrito()
    }
  },[vaciarCarrito])

  function buscarProductoEnCarrito() {
    productosAgregados.forEach(producto => {
      if (producto.id == productoAChequear.id) {
        producto.cantidad += productoAChequear.cantidad
        setCantidadProductos(cantidadProductos+productoAChequear.cantidad)
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
      setCantidadProductos(cantidadProductos+productoAChequear.cantidad)
      ActualizarTotalAPagar()

    }
  }

  function ActualizarTotalAPagar(){
    setTotalAPagar( productosAgregados.reduce((suma,producto)=>
      suma + producto.precio*producto.cantidad,0
    ))
    console.log(totalAPagar)
    
}

function funcionVaciarCarrito(){
  setProductosAgregados([])
  setCantidadProductos(0)
  setVaciarCarrito(false)
}


  return (
    <myContext.Provider value={{ cantidadProductos, setCantidadProductos, productosAgregados, setProductosAgregados, productoAChequear, setProductoAChequear, setVaciarCarrito}}>{children}</myContext.Provider>
  )
}

export default CartContext