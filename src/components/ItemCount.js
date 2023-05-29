import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const cresiente = () => {
    setCounter(counter + 1);
  };

  const decresiente = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <button disabled={counter >= stock} onClick={cresiente}>
        +
      </button>
      <span>{counter}</span>
      <button disabled={counter <= 1} onClick={decresiente}>
        -
      </button>
      <div>
        <button onClick={() => onAdd(counter)}>Agregar Al Carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
