import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../assets/api";
import { IChildren, IProduct, ProductContextData } from "../../assets/types";

export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export const ProductProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(
    [] as IProduct[]
  );
  const [token] = useState<string>(localStorage.getItem("@token") || "");

  useEffect(() => {
    api
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const addProduct = (data: IProduct) => {
    api
      .post("/products", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => console.log("send to cart"))
      .catch((error) =>
        console.error({ msg: "missed: send product to cart", error })
      );
  };

  const deleteProduct = (idProduct: string) => {
    api
      .delete(`/products/${idProduct}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("deletado"))
      .catch((error) => console.error(error));
  };

  const filterByName = (name: string) => {
    name
      ? setFilteredProducts(
          [...products].filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
          )
        )
      : setFilteredProducts([...products]);
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        deleteProduct,
        filterByName,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
