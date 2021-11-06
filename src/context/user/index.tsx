import { createContext, useContext, useState } from "react";
import { api } from "../../assets/api";
import { IChildren, IUser, UserContextData } from "../../assets/types";

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  const [auth, setAuth] = useState<string>(
    localStorage.getItem("@token") || ""
  );
  const [userName, setUserName] = useState<string>("");

  const login = ({ email, password }: IUser) => {
    api
      .post("/login", { email, password })
      .then(({ data }) => {
        setAuth(data.accessToken);
        localStorage.setItem("@token", data.accessToken);
        setUserName(data.user.name);
      })
      .catch((error) => console.error("Miss", error));
  };

  const logout = () => {
    localStorage.removeItem("@token");
    localStorage.clear();
    setAuth("");
  };

  const signup = (user: IUser) => {
    api
      .post(`/users`, user)
      .then((_) => login(user))
      .catch((_) => console.error("Missed"));
  };

  return (
    <UserContext.Provider value={{ auth, userName, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
