import { Link } from "react-router-dom";
import useCartContext from "./CartContext";

const CartView = () => {
  const { cart, removeFromCart, clearCart } = useCartContext();

  if (cart.leght === 0) {
    return (
      <>
        <h3>No hay productos en el carrito</h3>
        <Link to="/">Inicio</Link>
      </>
    );
  } else {
    return (
      <div>
        {cart.map((itemCart) => {
          return (
            <div
              style={{ textAlign: "center", backgroundColor: "yellow" }}
              key={itemCart.id}
            >
              <h2>{itemCart.title}</h2>
              <h2>{itemCart.quantity}</h2>
              <h2>${itemCart.quantity * itemCart.precio}</h2>
              <button
                className="btn btn-warning"
                onClick={() => removeFromCart(itemCart.id)}
              >
                Borrar
              </button>
              <button className="btn btn-warning">Comprar</button>
            </div>
          );
        })}
        <button onClick={clearCart} style={{ backgroundColor: "yellow" }}>
          Limpiar Carrito
        </button>
      </div>
    );
  }
};

export default CartView;
