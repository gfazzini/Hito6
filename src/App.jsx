import { Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizzas";
import Profile from "./pages/profile";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
