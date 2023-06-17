import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { db } from "./firebaseConfig";

export const getProductos = () => {
  const collecion = collection(db, "productos");
  const consulta = getDocs(collecion);

  return consulta
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
      throw error;
    });
};

export const getProductosCategoria = (category) => {
  const collecion = collection(db, "productos");
  const filtrando = query(collecion, where("category", "==", category));
  const consulta = getDocs(filtrando);

  return consulta
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
      throw error;
    });
};

export const getProductobyId = async (id) => {
  const collecion = collection(db, "productos");
  const filtrando = query(collecion, where(documentId(), "==", id));

  try {
    const consulta = await getDocs(filtrando);

    const productos = consulta.docs.map((doc) => {
      const producto = {
        id: doc.id,
        ...doc.data(),
      };
      return producto;
    });

    return productos[0];
  } catch (error) {
    throw error;
  }
};
