import Item from "./Item"


export const Itemlist = ({prod}) => {

  return (
    <div className = "d-flex flex-wrap justify-content-around">
      {prod.map((item)=>(
        <Item key ={item.id} item = {item}/>
      ))}
    </div>
  )
}
