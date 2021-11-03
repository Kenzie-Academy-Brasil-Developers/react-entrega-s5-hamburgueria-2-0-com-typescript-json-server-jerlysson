import { IChildren } from "../assets/Types";
import { CartProvider } from "./ProductProviders";

const AppProvider = ({ children }: IChildren) => {
  return <CartProvider>{children}</CartProvider>;
};

export default AppProvider;
