import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IProduct {
  name: string;
  price: number;
  image: string;
  amount: number;
}

export interface IUserData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}
