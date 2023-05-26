import Item from "./Item";

const ItemList = ({ producto }) => {
  return (
    <div className="container d-flex justify-content-center p-100">
      <div className="row">
        {producto.map((producto) => {
          return <Item producto={producto} key={producto.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
