import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header quantity={4} />
      <Main />
    </>
  );
}

export default App;
