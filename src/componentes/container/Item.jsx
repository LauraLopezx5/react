
import './item.css'
import { Itemcount } from './Itemcount'

const Item = ({item}) => {


  return (
    <div className ="card">
      <img src="../multimedia/sombra.png" className="card-img-top" alt="..." />
      <div className ="card-body">
        <h5 className ="card-title">{item.nombre}</h5>
        <p>precio $ {item.precio}</p>
        <Itemcount stock = {item.stock}/>
      </div>
    </div>
  )
}

export default Item