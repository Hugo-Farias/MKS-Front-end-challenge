import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { getSlice } from "../helper";

// type propsT = { quantity: number };

const header = function () {
  const slice = getSlice().total;

  console.log(slice);

  return (
    <header className="header">
      <img src={logo} alt="MKS Sistemas logo" />
      <button className={"cart-button"}>
        <img src={cart} alt="cart image" />
        <span className="quantity">{slice}</span>
      </button>
    </header>
  );
};

export default header;
