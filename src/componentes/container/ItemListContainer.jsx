
import { useEffect, useState } from 'react'
import { Itemlist } from './Itemlist'
import { useParams } from 'react-router-dom'
import Loading from '../loading/Loading'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const collectionProductosFirebase = collection(db, "productos")
    getDocs(collectionProductosFirebase).then((res) => {
      let arrayFirebase = res.docs
      arrayFirebase = arrayFirebase.map((producto) => {
        return { id: producto.id, ...producto.data() }
      })
      setLoading(false)
      if (idCategory == "1") {
        setProductos(arrayFirebase.filter(res => {
          return res.categoria == "1"
        }))
      }
      if (idCategory == "2") {
        setProductos(arrayFirebase.filter(res => {
          return res.categoria == "2"
        }))
      }
      if (idCategory == undefined) {
        setProductos(arrayFirebase)
      }
    })
  })


  return (
    <div>
      <Loading loading={loading} />
      <Itemlist prod={productos} />
    </div>
  )
}

export default ItemListContainer