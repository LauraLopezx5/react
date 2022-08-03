import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const {idProducto}=useParams()
  const [productosDetail,setProductosDetail] = useState ([])

  
  const arrayProductos = [
    {nombre : 'Producto 1',id:1,stock:4,precio:5000,img:'multimedia/sombra.png'},
    {nombre : 'Producto 2',id:2,stock:0,precio:7000,img:'multimedia/sombra.png'},
    {nombre : 'Producto 3',id:3,stock:3,precio:4500,img:'multimedia/sombra.png'}
  ]


  useEffect(()=>{
    const promesaProductos = new Promise((resolve, reject) => {

      setTimeout(()=>{
        resolve(arrayProductos)
      },2000)
    })
  
    promesaProductos.then((resultado)=>{
      setProductosDetail(resultado)
    })
    
  },[])

  return (
    <div className = "d-flex justify-content-center">
      <ItemDetail idProducto = {idProducto} productos = {productosDetail}/>
    </div>
  )
}

export default ItemDetailContainer