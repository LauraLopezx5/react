import {useState} from 'react'

export const Itemcount = ({stock}) => {

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
    <div>
        <div id='itemcount' className = 'd-flex flex-row justify-content-around'>
          <button className = "resta" onClick={restar}>-</button>
          <div>{contador}</div>
          <button className = "suma" onClick={sumar}>+</button>
        </div>
        <div className='d-flex justify-content-center'>
        <button className="btn btn-secondary d-flex justify-content-center">Agregar al Carrito</button>
        </div>
        

    </div>
  )
}
