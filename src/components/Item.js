import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { title, precio } = producto;
  return (
    <div className="card col-12 col-sm-4 text-center d-flex ">
      <div className="card-body ">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          $ <span>{precio}</span>
        </p>
        <button className="btn btn-warning">Comprar</button>
        <Link to={`/item/${producto.id}`}>
          <button className="btn btn-warning">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;

// muestra individualmente un solo producto (una sola card)  recibe un props con la info del producto que debe mostrar
