import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";

type propsT = { quantity: number };

const header = function (props: propsT) {
  const { quantity } = props;

  return (
    <div className="header">
      <img src={logo} alt="MKS Sistemas logo" />
      <button className={"cart-button"}>
        <img src={cart} alt="cart image" />
        <span className="quantity">{quantity}</span>
      </button>
    </div>
  );
};

export default header;
