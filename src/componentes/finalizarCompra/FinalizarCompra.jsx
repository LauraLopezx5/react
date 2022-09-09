import "./finalizarCompra.css"
import { myContext } from '../cartContext/CartContext'
import { useContext, useState } from 'react'
import {addDoc, collection, getFirestore} from "firebase/firestore"



const FinalizarCompra = () => {

    const { productosAgregados, totalAPagar, setVaciarCarrito } = useContext(myContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idCompra, setIdCompra] = useState("")
    const [mensajeFinal, setMensajeFinal] = useState(false)

    function enviarFormulario() {
        const orden = { comprador: { nombre, email }, productos: productosAgregados, total: totalAPagar }
        const db = getFirestore()
        const colleccion = collection (db, "pedidos")
        addDoc(colleccion,orden).then((res)=>{
            setIdCompra(res.id)
            setMensajeFinal(true)
            setVaciarCarrito(true)
        })
    }


    return (
        <>
            <div className='container'>
                <form>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Nombre :</label>
                        <div className="col-sm-10">
                            <input type={"text"} className="form-control" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <label className="col-sm-2 col-form-label">Email :</label>
                        <div className="col-sm-10">
                            <input type={"email"} className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>


                    <button onClick={enviarFormulario} type="submit" className="btn btn-secondary" id='botonConfirmarCompra'>Confirmar Compra</button>
                </form>
            </div>

            {mensajeFinal && <div id="mensajeFinal">Gracias por tu compra tu codigo de seguimiento es : {idCompra}</div>}

        </>
    )
}

export default FinalizarCompra