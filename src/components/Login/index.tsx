import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../assets/Api";
import { useHistory } from "react-router-dom";
import { IUserData } from "../../assets/Types";

const LoginForm = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IUserData) => {
    api
      .post("/login", data)
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
        <div></div>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input placeholder="Digite seu e-mail" {...register("email")} />
          <span>Email </span>
          <span>{errors.email?.message}</span>
        </label>
        <label>
          <input
            type="password"
            placeholder="Sua Senha!! "
            {...register("password")}
          />
          <span>Senha </span>
          <span>{errors.password?.message}</span>
        </label>
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};

export default LoginForm;
