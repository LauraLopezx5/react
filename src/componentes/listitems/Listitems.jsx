import React from 'react'
import Card from './Card'

const Listitems = () => {
  return (
    <div class = "d-flex flex-wrap justify-content-around">
        <Card nombre = "Producto 1"/>
        <Card nombre = "Producto 2"/>
        <Card nombre = "Producto 3"/>

    </div>
  )
}

export default Listitems