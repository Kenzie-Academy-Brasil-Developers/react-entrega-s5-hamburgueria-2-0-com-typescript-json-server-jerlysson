import api from "../../assets/Api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cart from "../CartList";

interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

const ProductsLists = () => {
  const [productsList, setProductsList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const history = useHistory();

  useEffect(() => {
    api
      .get("/products")
      .then((r: any) => setProductsList(r.data))
      .catch((e) => console.log(e));
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const displayCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <nav>
        <div onClick={() => history.push("/")}>
          Kenzie <span>Burger</span>
        </div>
        <div>
          <input placeholder="Pesquise" />
        </div>
        <section>
          <div onClick={displayCart}>Carrinho</div>
          {showCart && <Cart showCart={displayCart} />}
        </section>
        <section onClick={logout}>
          <br />
        </section>
      </nav>
      <main>
        {productsList.map((product: Product, index) => {
          return (
            <div key={index}>
              <img alt={product.name} src={product.image} />
              <p>{product.name}</p>
              <p>R${product.price}</p>
              <p>{product.category}</p>
              <button>ADCIONAR NO CARRINHO</button>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default ProductsLists;
