import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { getSlice } from "../helper";
import { useDispatch } from "react-redux";
import { saveCart, toggleCart } from "../store/cartSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";

let scrollbarSize: number;
let timeout: number;

const header = function () {
  const { totalItems } = getSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(saveCart());
    }, 500);
  }, [totalItems]);

  const handleClick = function () {
    scrollbarSize = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarSize + "px";

    dispatch(toggleCart(true));
  };

  return (
    <header className="header">
      <img src={logo} alt="MKS Sistemas logo" />
      <motion.button
        className="cart-button"
        onClick={handleClick}
        key={totalItems}
        animate={{ y: [0, 10, 0, -5, 0] }}
        transition={{ duration: 0.1 }}
      >
        <img src={cart} alt="cart image" />
        <span className="quantity">{totalItems}</span>
      </motion.button>
    </header>
  );
};

export default header;
