import { useCart } from "../../context/cart";
import { CgClose } from "react-icons/cg";
import {
  AddButton,
  ProductInfo,
  Cart,
  CartBody,
  CartHeader,
  CartOptions,
  CartProductCard,
  CloseCart,
  Value,
  ValueTotal,
  Counter,
  Divider,
  CartInfo,
  CartTitle,
  Frame,
  Image,
  ProductName,
  RemoveAllButton,
  RemoveContainer,
  SubButton,
  Title,
  Total,
} from "./style";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRemoveCircle, MdAddCircle } from "react-icons/md";
import { ICartSection } from "../../assets/types";

const CartSection = ({ setShowCart }: ICartSection) => {
  const {
    cartProducts,
    removeToCart,
    removeOneInCart,
    removeAllProducts,
    addToCart,
  } = useCart();

  const cartFiltred = cartProducts.filter(
    (product, index, list) =>
      list.map((product) => product.id).indexOf(product.id) === index
  );
  const totalValue = cartProducts.reduce(
    (accumulator, product) => accumulator + parseFloat(product.price),
    0
  );
  console.log(cartProducts);
  return (
    <Cart>
      <CartHeader>
        <Title>Carrinho de compras</Title>
        <CloseCart onClick={() => setShowCart(false)}>
          <CgClose />
        </CloseCart>
      </CartHeader>
      <CartBody>
        {cartFiltred.length === 0 && (
          <>
            <CartTitle>Seu carrinho está vazia</CartTitle>
            <CartInfo>adicione itens! </CartInfo>
          </>
        )}
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <CartProductCard>
                <Frame>
                  <Image src={product.image} alt={product.name} />
                </Frame>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <Counter>
                    <SubButton onClick={() => removeToCart(product.id)}>
                      <MdOutlineRemoveCircle />
                    </SubButton>
                    <span>{product.quantity}</span>
                    <AddButton onClick={() => (product.quantity = +1)}>
                      <MdAddCircle />
                    </AddButton>
                  </Counter>
                </ProductInfo>
                <RemoveContainer>
                  <button onClick={() => removeOneInCart(product.id)}>
                    <FaTrash />
                  </button>
                </RemoveContainer>
              </CartProductCard>
            </li>
          ))}
        </ul>

        {cartFiltred.length > 0 && (
          <>
            <Divider />
            <CartOptions>
              <ValueTotal>
                <Total>Total:</Total>
                <Value>R$ {totalValue.toFixed(2)}</Value>
              </ValueTotal>
              <RemoveAllButton onClick={removeAllProducts}>
                Remover todos
              </RemoveAllButton>
            </CartOptions>
          </>
        )}
      </CartBody>
    </Cart>
  );
};

export default CartSection;
