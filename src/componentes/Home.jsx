import Header from "./header";
import Cardpizza from "./Cardpizza";
import Footer from "./footer";
import { pizzas } from "../pizzas"; 

function Home() {
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