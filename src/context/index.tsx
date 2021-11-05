import { IChildren } from "../assets/types";
import { CartProvider } from "./cart";
import { ProductProvider } from "./product";
import { UserProvider } from "./user";

export const Contexts = ({ children }: IChildren) => (
  <UserProvider>
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  </UserProvider>
);
