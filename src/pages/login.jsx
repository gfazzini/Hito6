
function Login() {
  return (
    <div className="container mt-5">
      <h1>Iniciar sesión</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button type="button" className="btn btn-dark">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
