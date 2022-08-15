
import './item.css'
import { Itemcount } from './Itemcount'
import { Link } from 'react-router-dom'

const Item = ({item}) => {


  return (
    <div className ="card cardProductos">
      <Link to = {`/item/${item.id}`}><img src= "../multimedia/sombra.png"
      className="card-img-top" alt="..." /></Link>
      
      <div className ="card-body">
        <h5 className ="card-title">{item.nombre}</h5>
        <Itemcount stock = {item.stock} item = {item}/>
      </div>
    </div>
  )
}

export default Item