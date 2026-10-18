import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  
  const { cart } = useContext(CartContext);
  const total = cart.reduce(
  (acumulado, pizza) => acumulado + pizza.price * pizza.count,
  0
);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex align-items-center gap-2 flex-wrap">
        <h6 className="text-white mb-0">
          Pizzería Mamma Mia
        </h6>

        <Link className="btn btn-outline-light" to="/">
          🍕 Home
        </Link>

        <Link className="btn btn-outline-light" to="/login">
          🔐 Login
        </Link>

        <Link className="btn btn-outline-light" to="/register">
          📝 Register
        </Link>

        <Link className="btn btn-outline-light" to="/profile">
          👤 Profile
        </Link>
      </div>

      <Link className="btn btn-outline-info" to="/cart">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
}

export default Navbar;
