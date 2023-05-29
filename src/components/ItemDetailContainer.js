import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductobyId } from "../utils";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productoDetail, setProductoDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getProductobyId(id);
        setProductoDetail(resultado);
      } catch (error) {
        console.log("Hubo un error al obtener el producto:", error);
      }
    };

    fetchData();
  }, [id]);

  return <ItemDetail {...productoDetail} />;
};

export default ItemDetailContainer;
