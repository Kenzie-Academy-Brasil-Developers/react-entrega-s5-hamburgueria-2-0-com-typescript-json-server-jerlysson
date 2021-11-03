import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../assets/Api";
import { useHistory } from "react-router-dom";
import { IUserData } from "../../assets/Types";

const Register = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Email obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IUserData) => {
    api
      .post("/register", data)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <section>
        <h1>
          Kenzie <span>Burger</span>
        </h1>
        <div />
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input placeholder="Digite seu nome" {...register("name")} />
          <span>Nome </span>
          <span>{errors.name?.message}</span>
        </label>
        <label>
          <input placeholder="Seu e-mail" {...register("email")} />
          <span>Email </span>
          <span>{errors.email?.message}</span>
        </label>
        <label>
          <input
            type="password"
            placeholder="Sua Senha"
            {...register("password")}
          />
          <span>Senha</span>
          <span>{errors.password?.message}</span>
        </label>
        <label>
          <input
            type="password"
            placeholder="Novamente a Senha"
            {...register("confirmPassword")}
          />
          <span>Confirme a senha</span>
          <span>{errors.confirmPassword?.message}</span>
        </label>
        <button type="submit">Cadastrar-se</button>
      </form>
    </main>
  );
};

export default Register;
