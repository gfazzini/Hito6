import Header from "./header";
import Cardpizza from "./Cardpizza";
import Footer from "./footer";
import { useState, useEffect } from "react";

function Home() {

  const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
    fetch("https://pizzeria-backend-czr3.onrender.com/api/pizzas"))
    .then((response) => response.json())
    .then((data) => setPizzas(data));
      }, []);

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center flex-wrap">
        

          {pizzas.map((pizza) => (
            <Cardpizza
            key={pizza.id}
            name={pizza.name}
            img={pizza.img}
            price={pizza.price}
            ingredients={pizza.ingredients}
            />
  ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;