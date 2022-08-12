
import { useEffect, useState } from 'react'
import {Itemlist} from './Itemlist'
import { useParams } from 'react-router-dom'
import Loading from '../loading/Loading'


const ItemListContainer = () => {

  const [productos,setProductos] = useState ([])
  const [loading,setLoading] = useState(true)
  const {idCategory}=useParams()

  
  const arrayProductos = [
    {nombre : 'Producto 1',id:1,stock:4,precio:5000,img:'multimedia/sombra.png',categoria:"1"},
    {nombre : 'Producto 2',id:2,stock:0,precio:7000,img:'multimedia/sombra.png',categoria:"2"},
    {nombre : 'Producto 3',id:3,stock:3,precio:4500,img:'multimedia/sombra.png',categoria:"1"}
  ]

  

  useEffect(()=>{
    const promesaProductos = new Promise((resolve, reject) => {

      setTimeout(()=>{
        resolve(arrayProductos)
        setLoading(false)
      },2000)
    })
  
    promesaProductos.then((resultado)=>{
      if(idCategory=="1"){
        const nuevoArray = resultado.filter(res=>{
          return res.categoria=="1"
        })
        setProductos(nuevoArray)
      }
      if(idCategory=="2"){
        const nuevoArray = resultado.filter(res=>{
          return res.categoria=="2"
        })
        setProductos(nuevoArray)
      }
      if(idCategory==undefined){
        setProductos(resultado)
      }
      
    })
  })

     
  return (
    <div>
        <Loading loading = {loading}/>
        <Itemlist prod = {productos}/>
    </div>
  )
}

export default ItemListContainer