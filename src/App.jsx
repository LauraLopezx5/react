
import ItemListContainer from './componentes/container/ItemListContainer'
import ItemDetailContainer from './componentes/detail/ItemDetailContainer';
import Navbar from "./componentes/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from './componentes/cartContext/CartContext';
import Cart from './componentes/carrito/Cart';
import FinalizarCompra from './componentes/finalizarCompra/FinalizarCompra';





function App() {

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />
            <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/finalizarCompra' element = {<FinalizarCompra/>} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  )
}

export default App
