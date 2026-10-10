function CardPizza({ name, price, ingredients, img }) {
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
          <button className="btn btn-outline-dark">
            Ver Más 👀
          </button>

          <button className="btn btn-dark">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;