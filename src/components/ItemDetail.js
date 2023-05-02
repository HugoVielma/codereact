const ItemDetail = ({ producto }) => {
  const { title, descripcion, precio } = producto;
  return (
    <div className="card col-12 col-sm-4 text-center d-flex ">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text-50 descripcion">{descripcion}</p>
        <p className="card-text">
          $ <span>{precio}</span>
        </p>
        <button className="btn btn-warning">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
