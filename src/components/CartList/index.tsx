import { useCart } from "../../provider/ProductProviders";

interface functions {
  showCart: () => void;
}

const Cart = ({ showCart }: functions) => {
  const { cart } = useCart();

  return (
    <div>
      <div>
        <span onClick={showCart} />
        {cart.length === 0 && (
          <div>
            <h1>Carrinho Vazio</h1>
            <p>Adicione algo para ver aqui</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
