import React, { useEffect, useState } from 'react'
import { Itemcount } from '../container/Itemcount';

const ItemDetail = ({item}) => {
  
  return (
    <div className ="card cardProductos">
      <img src={item.img} className="card-img-top" alt="..." />
      
      <div className ="card-body">
        <h5 className ="card-title">{item.nombre}</h5>
        <p>Precio $ {item.precio}</p>
        <p>Descripcion : {item.descripcion} </p>

        <Itemcount stock = {item.stock} item = {item}/>
      </div>
    </div>
  )
}

export default ItemDetail