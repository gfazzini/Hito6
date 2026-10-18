import {useState} from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = () => {
    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Los passwords no coinciden");
      return;
    }

    alert("Te has registrado correctamente");
  };

  return (
    <div className="container mt-5">
      <h1>Registro</h1>

      <div className="mb-3 w-25">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3 w-25">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3 w-25">
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={validarDatos}
      >
        Enviar
      </button>
    </div>
  );
};

export default Register;