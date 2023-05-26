import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./components/CartContext";
import CartView from "./components/CartView";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a FamilyPets" />}
          />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
