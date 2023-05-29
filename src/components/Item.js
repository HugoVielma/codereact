import useCartContext from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Item = ({ producto }) => {
  const { addToCart } = useCartContext();
  const { title, precio, imagen } = producto;
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleClick = () => {
    navigate(`/item/${producto.id}`);
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(producto, 1);
  };

  return (
    <div className="row col-sm-4 p-3">
      <div className="card text-center">
        <div className="card-body" variant="light">
          <h5 className="card-title">{title}</h5>
          <img src={imagen} alt="Mimagen" width="100px" />
          <p className="card-text">
            $ <span>{precio}</span>
          </p>
          {isAddingToCart ? (
            <button className="btn btn-warning" disabled>
              Agregando al carrito...
            </button>
          ) : (
            <button onClick={handleAddToCart} className="btn btn-warning">
              Comprar
            </button>
          )}
          <button onClick={handleClick} className="btn btn-warning">
            Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
