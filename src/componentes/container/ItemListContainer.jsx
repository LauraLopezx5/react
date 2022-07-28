
import { useEffect, useState } from 'react'
import {Itemlist} from './Itemlist'

const ItemListContainer = () => {

  const [productos,setProductos] = useState ([])

  
  const arrayProductos = [
    {nombre : 'Producto 1',id:1,stock:4,precio:5000,img:'multimedia/sombra.png'},
    {nombre : 'Producto 2',id:2,stock:7,precio:7000,img:'multimedia/sombra.png'},
    {nombre : 'Producto 3',id:3,stock:3,precio:4500,img:'multimedia/sombra.png'}
  ]


  useEffect(()=>{
    const promesaProductos = new Promise((resolve, reject) => {

      setTimeout(()=>{
        resolve(arrayProductos)
      },2000)
    })
  
    promesaProductos.then((resultado)=>{
      setProductos(resultado)
    })
    
  },[])

     
  return (
    <div>
        <Itemlist prod = {productos}/>
    </div>
  )
}

export default ItemListContainer