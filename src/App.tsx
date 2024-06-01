import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header quantity={3} />
      <Main />
      <footer>MKS Sistemas © Todos os direitos reservados</footer>
    </>
  );
}

export default App;
