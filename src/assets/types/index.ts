import { ReactNode } from "react";
import { History } from "history";

export interface IChildren {
  children: ReactNode;
}

export interface CartContextData {
  cartProducts: IProduct[];
  addToCart: (product: IProduct) => void;
  removeToCart: (idProduct: number) => void;
  removeOneInCart: (idProduct: number) => void;
  removeAllProducts: () => void;
}
export interface ICartSection {
  setShowCart: boolean | any;
}

export interface IProduct {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  quantity?: number;
}
export interface IProductCard {
  product: {
    id: number;
    name: string;
    price: string;
    category: string;
    image: string;
    userId?: number;
  };
}

export interface ProductContextData {
  filteredProducts: IProduct[];
  addProduct: (data: IProduct) => void;
  deleteProduct: (idProduct: string) => void;
  filterByName: (name: string) => void;
}

export interface IUser {
  email: string;
  password: string;
  name?: string;
}

export interface UserContextData {
  auth: string;
  userName: string;
  signup: (data: IUser, history: History) => void;
  login: ({ email, password }: IUser, history: History) => void;
  logout: () => void;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ISignupData {
  name: string;
  email: string;
  password: string;
}
