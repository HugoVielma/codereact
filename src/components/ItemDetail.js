import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const [aCart, setaCart] = useState(false);
  const { addToCart } = useCartContext();
  const onAdd = (count) => {
    setaCart(true);
    addToCart(producto, count);
  };
  const { title, descripcion, precio, imagen } = producto;
  return (
    <div className="card  col-sm-4 text-center d-flex ">
      <div className="card-body">
        <img src={imagen} alt="Mimagen" width="100" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text-50 descripcion">{descripcion}</p>
        <p className="card-text">
          $ <span>{precio}</span>
        </p>
        {aCart ? (
          <Link to="/cart">Ver Carrito</Link>
        ) : (
          <ItemCount onAdd={onAdd} initial={1} stock={producto.stock} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
