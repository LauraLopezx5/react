import React, { useEffect, useState } from 'react'
import { Itemcount } from '../container/Itemcount';

const ItemDetail = ({idProducto,productos}) => {

  const [item,setItem]=useState({})

  useEffect(()=>{
    productos.forEach(producto => {
      if(producto.id==idProducto){
        setItem(producto)
        console.log(item)
      }
    });
  },[])


  
  return (
    <div className ="card">
      <img src="../multimedia/sombra.png" className="card-img-top" alt="..." />
      
      <div className ="card-body">
        <h5 className ="card-title">{item.nombre}</h5>
        <p>Precio $ {item.precio}</p>
        <p>Descripcion </p>

        <Itemcount stock = {item.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail