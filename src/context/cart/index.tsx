import { createContext, useContext, useState } from "react";
import { CartContextData, IChildren, IProduct } from "../../assets/types";

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export const CartProvider = ({ children }: IChildren) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(
    [] as IProduct[]
  );

  const addToCart = (product: IProduct) => {
    product.quantity = 1;
    setCartProducts([...cartProducts, product]);
  };

  const removeToCart = (idProduct: number) => {
    const newCartList = cartProducts
      .filter(({ id }) => id === idProduct)
      .slice(1);
    const filtred = cartProducts.filter(({ id }) => id !== idProduct);
    setCartProducts([...filtred, ...newCartList]);
  };

  const removeOneInCart = (idProduct: number) => {
    const newCartList = cartProducts.filter(({ id }) => id !== idProduct);
    setCartProducts(newCartList);
  };

  const removeAllProducts = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        removeAllProducts,
        removeOneInCart,
        removeToCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
