import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "./CartContext";

const CartView = () => {
  const { cart, removeFromCart, clearCart } = useCartContext();
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [formError, setFormError] = useState(false);

  const handleMostrarFormulario = () => {
    setShowForm(true);
  };

  const handleFinalizarCompra = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      telefono.trim() === "" ||
      correo.trim() === ""
    ) {
      setFormError(true);
      return;
    }

    clearCart();
    setNombre("");
    setTelefono("");
    setCorreo("");
    setFormError(false);
  };

  if (cart.length === 0) {
    return (
      <>
        <h3>No hay productos en el carrito</h3>
        <Link to="/">Inicio</Link>
      </>
    );
  } else if (showForm) {
    return (
      <div>
        <form onSubmit={handleFinalizarCompra}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <label>
            Correo:
            <input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </label>
          {formError && (
            <p>Por favor complete todos los campos del formulario.</p>
          )}
          <button type="submit">Finalizar Compra</button>
        </form>
      </div>
    );
  } else {
    let totalGeneral = 0;

    return (
      <div>
        {cart.map((itemCart) => {
          const { id, title, quantity, precio } = itemCart;
          const subtotal = quantity * precio;
          totalGeneral += subtotal;

          return (
            <div
              style={{ textAlign: "center", backgroundColor: "yellow" }}
              key={id}
            >
              <h2>{title}</h2>
              <h2>Cantidad: {quantity}</h2>
              <h2>Subtotal: ${subtotal}</h2>
              <button
                className="btn btn-warning"
                onClick={() => removeFromCart(id)}
              >
                Borrar
              </button>
            </div>
          );
        })}
        <h2>Total General: ${totalGeneral}</h2>
        <button onClick={handleMostrarFormulario}>Comprar</button>
      </div>
    );
  }
};

export default CartView;
