import "./App.scss";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header quantity={3} />
      <Products />
      <footer>MKS Sistemas © Todos os direitos reservados</footer>
    </>
  );
}

export default App;
