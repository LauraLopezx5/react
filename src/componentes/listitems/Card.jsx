import React from 'react'
import './card.css'

const Card = ({nombre}) => {
  return (
    <div className ="card">
      <img src="../multimedia/sombra.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{nombre}</h5>
        <p class="card-text">descripcion...</p>
        <a href="#" class="btn btn-secondary">Agregar al Carrito</a>
      </div>
    </div>
  )
}

export default Card