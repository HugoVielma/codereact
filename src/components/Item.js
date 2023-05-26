import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { title, precio, imagen } = producto;
  return (
    <div className=" row col-sm-4  p-3">
      <div className="card text-center">
        <div className="card-body" variant="light">
          <h5 className="card-title">{title}</h5>

          <img src={imagen} alt="Mimagen" width="100px" />
          <p className="card-text">
            $ <span>{precio}</span>
          </p>
          <Link to={`/item/${producto.id}`}>
            <button className="btn btn-warning">Comprar</button>
          </Link>
          <Link to={`/item/${producto.id}`}>
            <button className="btn btn-warning">Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
