
import { useState } from "react";
import { pizzaCart } from "../pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    setCart((cartActual) =>
      cartActual.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const disminuir = (id) => {
    setCart((cartActual) =>
      cartActual
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (suma, pizza) => suma + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container my-4">
      <h2>Detalles del pedido:</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="mb-4">
          <img
            src={pizza.img}
            alt={pizza.name}
            width="120"
          />

          <h3>{pizza.name}</h3>

          <p>
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </p>

          <div className="d-flex align-items-center gap-2 mb-3">
            <button
              className="btn btn-outline-danger"
              onClick={() => disminuir(pizza.id)}
            >
              −
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-outline-primary"
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h3>

    <button className="btn btn-success mt-3">
        Pagar
    </button>

    </div>
  );
}

export default Cart;

