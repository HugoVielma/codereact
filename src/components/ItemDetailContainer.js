import ItemDetail from "./ItemDetail";
import productos from "../producto";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productoDetail, setProductoDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    pedido
      .then((resultado) => {
        setProductoDetail(resultado.find((perro) => perro.id === parseInt(id)));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <ItemDetail producto={productoDetail} />
    </>
  );
};
export default ItemDetailContainer;

//se muestra la ruta "/item/:id"  Tiene adentro a un ItemDetail
