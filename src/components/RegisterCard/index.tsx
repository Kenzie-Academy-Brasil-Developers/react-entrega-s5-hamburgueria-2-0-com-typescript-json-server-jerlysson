import { useForm } from "react-hook-form";
import { FiShoppingBag } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ISignupData } from "../../assets/types";
import { useUser } from "../../context/user";
import {
  Address,
  Burguer,
  Form,
  Frame,
  Info,
  InfoCard,
  InfoLeft,
  InputField,
  MainContainer,
  Register,
  RegisterButton,
  Title,
  TitleAddress,
} from "./style";

const RegisterCard = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { signup } = useUser();

  const onSubmit = (userData: ISignupData) => {
    signup(userData, history);
    history.push("/");
  };

  return (
    <MainContainer>
      <InfoLeft>
        <Burguer>
          Burguer <span>kenzie</span>
        </Burguer>
        <InfoCard>
          <Frame>
            <FiShoppingBag />
          </Frame>
          <Info>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <span>melhores</span> ingredientes.
          </Info>
        </InfoCard>
      </InfoLeft>
      <Register>
        <TitleAddress>
          <Title>Cadastro</Title>
          <Address>
            <Link to="/login">Voltar para login</Link>
          </Address>
        </TitleAddress>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Name"
            variant="outlined"
            type="text"
            {...register("name")}
          />
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
          <RegisterButton type="submit">Cadastrar</RegisterButton>
        </Form>
      </Register>
    </MainContainer>
  );
};

export default RegisterCard;
