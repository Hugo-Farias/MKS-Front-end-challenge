import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { getSlice } from "../helper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";

let runtime = 2;

let scrollbarSize: number;

const header = function () {
  const { totalItems } = getSlice();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState<null | string>(null);

  useEffect(() => {
    if (runtime >= 0) {
      scrollbarSize = window.innerWidth - document.body.clientWidth;
      runtime--;
      return;
    }
    setUpdate("updated");

    setTimeout(() => {
      setUpdate("");
    }, 200);
  }, [totalItems]);

  const handleClick = function () {
    //@ts-ignore
    dispatch(toggleCart(true));
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarSize + "px";
  };

  return (
    <header className="header">
      <img src={logo} alt="MKS Sistemas logo" />
      <button className={`cart-button ${update}`} onClick={handleClick}>
        <img src={cart} alt="cart image" />
        <span className="quantity">{totalItems}</span>
      </button>
    </header>
  );
};

export default header;
