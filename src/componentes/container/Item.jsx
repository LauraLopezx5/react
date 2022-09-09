
import './item.css'
import { Itemcount } from './Itemcount'
import { Link } from 'react-router-dom'

const Item = ({item}) => {


  return (
    <div className ="card cardProductos">
      <img src="" alt="" />
      <Link to = {`/item/${item.id}`}><img src={item.img}
      className="card-img-top" alt="..." /></Link>
      
      <div className ="card-body">
        <h5 className ="card-title">{item.nombre}</h5>
        <Itemcount stock = {item.stock} item = {item}/>
      </div>
    </div>
  )
}

export default Item