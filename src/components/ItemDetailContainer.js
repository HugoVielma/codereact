import ItemDetail from "./ItemDetail";
// import productos from "../producto";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductobyId } from "../utils";

const ItemDetailContainer = () => {
  const [productoDetail, setProductoDetail] = useState({});
  const { id } = useParams();

  // aca adentro voy hacer una consulta a la base de datos , entonces necesito la variable "db"
  useEffect(() => {
    const res = getProductobyId();
    res.then((resultado) => {
      setProductoDetail(resultado);
    });
  }, [id]);

  return (
    <>
      <ItemDetail producto={productoDetail} />
    </>
  );
};
export default ItemDetailContainer;

// import ItemDetail from "./ItemDetail";
// // import productos from "../producto";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { getFirestore, doc, getDoc } from "firebase/firestore";

// const ItemDetailContainer = () => {
//   const [productoDetail, setProductoDetail] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const queryDb = getFirestore();
//     const queryDoc = doc(queryDb, "productos", "id");
//     getDoc(queryDoc).then((res) =>
//       setProductoDetail({ id: res.id, ...res.productoDetail() })
//     );
//   }, [id]);
//   return (
//     <>
//       <ItemDetail producto={productoDetail} />
//     </>
//   );
// };
// export default ItemDetailContainer;
