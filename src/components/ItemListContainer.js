import { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import productos from "../producto";
import { useParams } from "react-router";
import { getProductos, getProductosCategoria } from "../utils";

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [producto, setProducto] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category === undefined) {
      const res = getProductos();
      res.then((resultado) => {
        setProducto(resultado);
      });
    } else {
      const res = getProductosCategoria(category);
      res.then((resultado) => {
        setProducto(resultado);
      });
    }
  }, [category]);
  return (
    <main>
      <h1
        className="titulo text-center"
        style={{ fontSize: "54px", fontWeight: "bold" }}
      >
        {greeting}
      </h1>

      <ItemList producto={producto} />
    </main>
  );
};
export default ItemListContainer;
