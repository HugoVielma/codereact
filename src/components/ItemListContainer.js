import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productos from "../producto";
import { useParams } from "react-router";

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    if (id) {
      pedido.then((resultado) =>
        setProducto(resultado.filter((perro) => perro.category === id))
      );
    } else {
      pedido.then((resultado) => setProducto(resultado));
    }
    pedido.catch((error) => console.log(error));
  }, [id]);
  return (
    <main>
      <h1 style={{ fontSize: "54px", fontWeight: "bold" }}>{greeting}</h1>
      <p id="coloreando">mi primer P</p>
      <ItemList producto={producto} />
    </main>
  );
};
export default ItemListContainer;
