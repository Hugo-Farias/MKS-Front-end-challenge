import "./Header.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { getSlice } from "../helper";
// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { motion } from "framer-motion";

let scrollbarSize: number;

const header = function () {
  const { totalItems } = getSlice();
  const dispatch = useDispatch();

  const handleClick = function () {
    scrollbarSize = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarSize + "px";
    //@ts-ignore
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
