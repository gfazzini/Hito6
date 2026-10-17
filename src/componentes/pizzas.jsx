
import { useState, useEffect } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("https://pizzeria-backend-czr3.onrender.com/api/pizzas/p001"))
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la API:", data);
        setPizza(Array.isArray(data) ? data[0] : data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <div className="container my-4">
      <div className="card mx-auto" style={{ maxWidth: "700px" }}>
        <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800"
                className="card-img-top"
                alt={pizza.name}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>

          <p>{pizza.desc}</p>

          <h4>Ingredientes:</h4>

          <ul>
            {pizza.ingredients.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>

          <h3>${pizza.price.toLocaleString("es-CL")}</h3>

          <button className="btn btn-dark">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pizza;

