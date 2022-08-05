
import ItemListContainer from './componentes/container/ItemListContainer'
import ItemDetailContainer from './componentes/detail/ItemDetailContainer';
import Navbar from "./componentes/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
          <Route path='/cart' element = {<p>este es el carrito</p>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
