import { Link } from "react-router-dom";
import useCartContext from "./CartContext";

const CartWidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <>
      <Link className="nav-link" to="/cart">
        <img src="/imagenes/icono-cart.png" alt="" width="50"></img>
        <p className="cantidad">
          <span>{totalProductos() || ""}</span>
        </p>
      </Link>
    </>
  );
};
export default CartWidget;
