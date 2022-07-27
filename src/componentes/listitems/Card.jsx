import React, { useState } from 'react'
import './card.css'

const Card = ({id,stock}) => {

  const [contador,setContador]=useState(1)
  const restar = ()=>{
    if(contador>1)
    setContador (contador-1)
  }

  const sumar = ()=>{
    if(contador<stock)
    setContador (contador+1)
  }

  return (
    <div className ="card">
      <img src="../multimedia/sombra.png" className="card-img-top" alt="..." />
      <div className ="card-body">
        <h5 className ="card-title">Producto {id}</h5>
        <p className="card-text">descripcion...</p>
        <div id='itemcount' className = 'd-flex flex-row justify-content-around'>
          <div onClick={restar}>-</div>
          <div>{contador}</div>
          <div onClick={sumar}>+</div>
        </div>
        <a href="#" className="btn btn-secondary d-flex justify-content-center">Agregar al Carrito</a>
      </div>
    </div>
  )
}

export default Card