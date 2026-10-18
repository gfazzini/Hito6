import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function CardPizza({ id, name, price, ingredients, img }) {
  const { cart, setCart } = useContext(CartContext);

  const agregarAlCarrito = () => {
    const pizzaExistente = cart.find((pizza) => pizza.id === id);

    if (pizzaExistente) {
      const carritoActualizado = cart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      );

      setCart(carritoActualizado);
    } else {
      const nuevaPizza = {
        id,
        name,
        price,
        ingredients,
        img,
        count: 1,
      };

      setCart([...cart, nuevaPizza]);
    }
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>

        <hr />

        <p className="text-center">Ingredientes:</p>

        <ul>
          {ingredients.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>

        <hr />

        <h4 className="text-center">
          Precio: ${price.toLocaleString("es-CL")}
        </h4>

        <div className="d-flex justify-content-between">
          <Link
            to={`/pizza/${id}`}
            className="btn btn-outline-dark"
          >
            Ver Más 👀
          </Link>

          <button
            className="btn btn-dark"
            onClick={agregarAlCarrito}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
