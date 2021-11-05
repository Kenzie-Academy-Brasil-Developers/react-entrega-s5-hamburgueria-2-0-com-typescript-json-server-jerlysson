import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ILoginData } from "../../assets/types";
import { useUser } from "../../context/user";
import {
  Form,
  InputField,
  LoginButton,
  SignupButton,
  LoginContainer,
  Redirect,
  Title,
} from "./style";

const LoginCard = () => {
  const history = useHistory<History>();
  const { register, handleSubmit } = useForm();
  const { login } = useUser();

  const toSubmit = (loginUser: ILoginData) => {
    login(loginUser, history);
    history.push("/");
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(toSubmit)}>
        <InputField
          label="Email"
          variant="outlined"
          type="email"
          {...register("email")}
        />
        <InputField
          label="Password"
          variant="outlined"
          type="password"
          {...register("password")}
        />
        <LoginButton type="submit">Logar</LoginButton>
        <Redirect>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Redirect>

        <Link to="/register">
          <SignupButton type="submit">Cadastrar</SignupButton>
        </Link>
      </Form>
    </LoginContainer>
  );
};

export default LoginCard;
