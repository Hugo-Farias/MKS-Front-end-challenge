import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { getSlice } from "../helper";
import { useEffect, useState } from "react";

let runtime = 0;

const header = function () {
  const slice = getSlice().total;
  const [update, setUpdate] = useState<null | string>(null);

  useEffect(() => {
    if (runtime <= 2) return;
    setUpdate("updated");

    setTimeout(() => {
      setUpdate("");
    }, 200);
  }, [slice]);

  runtime++;

  return (
    <header className="header">
      <img src={logo} alt="MKS Sistemas logo" />
      <button className={`cart-button ${update}`}>
        <img src={cart} alt="cart image" />
        <span className="quantity">{slice}</span>
      </button>
    </header>
  );
};

export default header;
