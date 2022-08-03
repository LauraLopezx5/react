import {useEffect, useState} from 'react'

export const Itemcount = ({stock}) => {

const [contador,setContador]=useState(1)
const [textoBotonCarrito,setTextoBotonCarrito]=useState("Agregar al carrito")

useEffect(()=>{
  if(stock==0){
    setTextoBotonCarrito("Sin stock")
    setContador(0)
  }
},[])


  const restar = ()=>{
    if(contador>1)
    setContador (contador-1)
  }

  const sumar = ()=>{
    if(contador<stock)
    setContador (contador+1)
  }
  return (
    <div>
        <div id='itemcount' className = 'd-flex flex-row justify-content-around'>
          <button className = "resta" onClick={restar}>-</button>
          <div>{contador}</div>
          <button className = "suma" onClick={sumar}>+</button>
        </div>
        <div className='d-flex justify-content-center'>
        <button id="botonCarrito"className="btn btn-secondary d-flex">{textoBotonCarrito}</button>
        </div>
        

    </div>
  )
}
