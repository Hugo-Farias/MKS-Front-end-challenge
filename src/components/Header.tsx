import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";

const header = function () {
  return (
    <div className="header">
      <img src={logo} alt="MKS Sistemas logo" />
      <button className={"cart-button"}>
        <img src={cart} alt="cart image" />
        <span className="quantity"></span>
      </button>
    </div>
  );
};

export default header;
