import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { getSlice } from "../helper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";

let runtime = 0;

let scrollbarSize: number;

const header = function () {
  const { totalItems, open } = getSlice();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState<null | string>(null);

  useEffect(() => {
    scrollbarSize = window.innerWidth - document.body.clientWidth;
    if (runtime <= 2) return;
    setUpdate("updated");

    setTimeout(() => {
      setUpdate("");
    }, 200);
  }, [totalItems]);

  runtime++;

  const handleClick = function () {
    //@ts-ignore
    dispatch(toggleCart(true));
  };

  document.body.style.overflow = open ? "hidden" : "auto";
  document.body.style.paddingRight = open ? scrollbarSize + "px" : "0";

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
