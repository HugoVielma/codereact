import Item from "./Item";

const ItemList = ({ producto = [] }) => {
  return (
    <>
      {producto.map((producto) => {
        return <Item producto={producto} key={producto.id} />;
      })}
    </>
  );
};

export default ItemList;
