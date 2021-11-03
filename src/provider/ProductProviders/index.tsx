import { createContext, useContext, useState } from "react";
import { IChildren, IProduct } from "../../assets/Types";

interface CartProviderData {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: IChildren) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (item: IProduct) => {
    const { name, price, image } = item;
    setCart([...cart, { name, price, image, amount: 1 }]);
  };

  const removeFromCart = (item: IProduct) => {
    const newCart = cart.filter((product) => product.name !== item.name);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
