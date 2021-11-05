import LoginCard from "../../components/LoginCard";
import { FiShoppingBag } from "react-icons/fi";
import { Frame, Text, InfoRight, Main, Title } from "./style";

const Login = () => {
  return (
    <Main>
      <div>
        <Title>
          Burguer <span>kenzie</span>
        </Title>
        <InfoRight>
          <Frame>
            <FiShoppingBag />
          </Frame>
          <Text>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <span>melhores</span> ingredientes.
          </Text>
        </InfoRight>
      </div>
      <div>
        <LoginCard />
      </div>
    </Main>
  );
};

export default Login;
