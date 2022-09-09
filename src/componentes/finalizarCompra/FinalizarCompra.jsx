import "./finalizarCompra.css"
import { myContext } from '../cartContext/CartContext'
import { useContext, useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from 'react-router-dom'




const FinalizarCompra = () => {

    const { productosAgregados, totalAPagar, setVaciarCarrito } = useContext(myContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idCompra, setIdCompra] = useState("")
    const [mensajeFinal, setMensajeFinal] = useState(false)

    function enviarFormulario() {
        const orden = { comprador: { nombre, email }, productos: productosAgregados, total: totalAPagar }
        const db = getFirestore()
        const colleccion = collection(db, "pedidos")
        addDoc(colleccion, orden).then((res) => {
            setIdCompra(res.id)
            setMensajeFinal(true)
            setVaciarCarrito(true)
        })
    }


    return (
        <div id="finalizar">
            {!mensajeFinal && <div className='container'>
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
            </div>}

            {mensajeFinal && <div className="card" id="mensajeFinal">
                <div className="card-header">
                    Gracias por tu compra!
                </div>
                <div className="card-body">
                    <h5 className="card-title">Guarda el siguiente código para futuras consultas :</h5>
                    <p className="card-text">{idCompra}</p>
                    <div id="boton">
                        <Link style={{ textDecoration: "none" }} to={"/"}><button className="botonesCarrito btn btn-secondary">Volver a Inicio</button></Link>
                    </div>
                </div>
            </div>}




        </div>
    )
}

export default FinalizarCompra