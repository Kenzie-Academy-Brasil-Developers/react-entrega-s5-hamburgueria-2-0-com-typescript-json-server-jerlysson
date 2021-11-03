import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const goToSignup = () => {
    history.push("/signup");
  };

  return (
    <main>
      <h1>
        Kenzie <span>burger</span>
      </h1>
      <div>
        <button onClick={goToLogin}>Login</button>
        <button onClick={goToSignup}>Cadastro</button>
      </div>
    </main>
  );
};

export default Home;
