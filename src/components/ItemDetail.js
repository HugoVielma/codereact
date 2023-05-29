import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { title, descripcion, precio, imagen } = props;

  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(props, 1);
    setAddedToCart(true);
  };

  return (
    <div className="card col-sm-4 text-center d-flex">
      <div className="card-body">
        <img src={imagen} alt="Mimagen" width="100" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text-50 descripcion">{descripcion}</p>
        <p className="card-text">
          $ <span>{precio}</span>
        </p>
        {!addedToCart ? (
          <ItemCount onAdd={handleAddToCart} initial={1} stock={props.stock} />
        ) : (
          <div>
            <p>Producto agregado al carrito</p>
            <Link to="/cart">Ver Carrito</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
