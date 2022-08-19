import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../loading/Loading'


const ItemDetailContainer = () => {

  const { idProducto } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const db = getFirestore()
    const itemFirebase = doc(db, "productos", idProducto)
    getDoc(itemFirebase).then((res) => {    
      setItem({id:res.id,...res.data()})
      setLoading(false)
    })
  }, [])


  return (
    <div>
      <div><Loading loading={loading} /></div>
      <div className="d-flex justify-content-center">
        {!loading && <ItemDetail item={item} />}
      </div>
    </div>
  )
}

export default ItemDetailContainer