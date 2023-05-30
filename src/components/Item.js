import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {
  const { title, precio, imagen } = producto;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${producto.id}`);
  };

  return (
    <div className="row col-sm-4 p-3">
      <div className="card text-center">
        <div className="card-body" variant="light">
          <h5 className="card-title">{title}</h5>
          <img src={imagen} alt="Mimagen" width="100px" />
          <p className="card-text">
            $ <span>{precio}</span>
          </p>
          <button onClick={handleClick} className="btn btn-warning">
            Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
