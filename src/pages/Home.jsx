import Header from "../componentes/Header";
import Cardpizza from "../componentes/Cardpizza";
import Footer from "../componentes/footer";
import { pizzas } from "../pizzas";

function Home() {
  return (
    <>
      <Header />

      <div className="d-flex justify-content-center flex-wrap">
        {pizzas.map((pizza) => (
          <Cardpizza
            key={pizza.id}
            id={pizza.id}
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