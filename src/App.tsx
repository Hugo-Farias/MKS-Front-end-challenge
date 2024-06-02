import "./App.scss";
import Header from "./components/Header";
import Products from "./components/Products";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Products />
      <Checkout />
      <footer>MKS Sistemas © Todos os direitos reservados</footer>
    </div>
  );
}

export default App;
