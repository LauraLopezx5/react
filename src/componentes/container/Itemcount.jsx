import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



export const Itemcount = ({stock}) => {

const [contador,setContador]=useState(1)
const [textoBotonCarrito,setTextoBotonCarrito]=useState("Agregar al carrito")
const [botonAgregarAlCarrito, setBotonAgregarAlCarrito] = useState(true)

useEffect(()=>{
  if(stock==0){
    setTextoBotonCarrito("Sin stock")
    setContador(0)
  }
})


  const restar = ()=>{
    if(contador>1)
    setContador (contador-1)
  }

  const sumar = ()=>{
    if(contador<stock)
    setContador (contador+1)
  }

  function agregarAlCarrito (){
    if(stock>0){
      setBotonAgregarAlCarrito(false)
    }
  }

  return (
    <div>
        <div id='itemcount' className = 'd-flex flex-row justify-content-around'>
          <button className = "resta" onClick={restar}>-</button>
          <div>{contador}</div>
          <button className = "suma" onClick={sumar}>+</button>
        </div>
        <div className='d-flex justify-content-center'>
          {botonAgregarAlCarrito?<button onClick = {agregarAlCarrito} id="botonCarrito"className="btn btn-secondary d-flex">{textoBotonCarrito}</button>
          :<Link to = {"/cart"}><button id = "finalizarCompra" className="btn btn-secondary d-flex">Finalizar Compra</button></Link>}
        </div>
        

    </div>
  )
}
