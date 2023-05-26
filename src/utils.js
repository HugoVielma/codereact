import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { db } from "./firebaseConfig";

// import { collection, getDocs, query, where } from "@firebase/firestore";
// import { useEffect, useState } from "react-router";

export const getProductos = () => {
  //obtengo una referencia de la coleccion "productos", sino no se a que coleccion le voy hacer la consulta

  const collecion = collection(db, "productos");
  //   console.log(collecion);
  // hago la consulta a la coleccion : esta consulta en particular va a buscar todos los documentos de la coollecion que le haya pasado como parametro
  const consulta = getDocs(collecion);
  const t = consulta;
  return t
    .then((respuesta) => {
      //respuesta : la respuesta de la consultade la base de datos
      //   console.log("salio todo bien");
      //respuesta.docs: un array con los documentos Pero hay que parsearlos
      //   console.table(respuesta.docs);
      // respuesta.docs[n](el [es por cada cosa que trae ]).data(): seria como .json() del fetch, transforma cada cosa del resultado en json
      const respuestaparseada = respuesta.docs.map((doc) => {
        const producto = {
          id: doc.id,
          ...doc.data(),
        };

        return producto;
      });
      return respuestaparseada;
    })
    .catch((error) => {
      console.log("hubo un error pidiendo los productos");
    });
};

export const getProductosCategoria = (category) => {
  const collecion = collection(db, "productos");
  const filtrando = query(collecion, where("category", `==`, category));

  const consulta = getDocs(filtrando);
  const t = consulta;
  return t
    .then((respuesta) => {
      const respuestaparseada = respuesta.docs.map((doc) => {
        const producto = {
          id: doc.id,
          ...doc.data(),
        };

        return producto;
      });

      return respuestaparseada;
    })
    .catch((error) => {
      console.log("hubo un error pidiendo los productos");
    });
};

export const getProductobyId = (id) => {
  const collecion = collection(db, "productos");
  const filtrando = query(collecion, where(documentId(), "==", id));

  const consulta = getDocs(filtrando);
  const t = consulta;
  return t
    .then((respuesta) => {
      const respuestaparseada = respuesta.docs.map((doc) => {
        const producto = {
          id: doc.id,
          ...doc.data(),
        };

        return producto;
      });

      return respuestaparseada;
    })
    .catch((error) => {
      console.log("hubo un error pidiendo los productos");
    });
};

// const useFirebase = (id) => {
//   const [loading, setLoading] = useState(false);
//   const [productos, setProductos] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         //1) se genera la query
//         const q = id
//           ? query(collection(db, "productos"), where("id", "==", id))
//           : query(collection(db, "productos"));
//         //2) realizar el llamado a firebase
//         //3) obtener el 'snapshot' con los datos crudos.
//         const querySnapshot = await getDocs(q);
//         const productsFireBase = [];
//         querySnapshot.forEach((doc) => {
//           productsFireBase.push({ id: doc.id, ...doc.data() });
//         });
//         setProductos(productsFireBase);
//       } catch (error) {
//         setError(error.message);
//       }
//       setLoading(false);
//     })();
//   }, [id]);
//   return [loading, productos, error];
// };
// export default useFirebase;
