import "./Card.scss";
import buy from "../assets/buy.svg";
import Price from "./Card/Price";
import { useState } from "react";
import { ProductT } from "../types";

const Card = function (props: { product: ProductT }) {
  const { name, photo, price, description } = props.product;
  const [added, setAdded] = useState<boolean>(false);

  const clickHandle = function () {
    setAdded(true);

    setTimeout(() => setAdded(false), 2000);

    console.log(props.product);
  };

  return (
    <div className="card">
      <img src={photo} alt={`foto ${name}`} />
      <div className="name-price-cont">
        <h1 className="name">{name}</h1>
        <Price price={+price} />
      </div>
      <div className="description">{description}</div>
      <button
        className={`buy-btn ${added}`}
        onClick={clickHandle}
        disabled={added}
      >
        <img src={buy} alt="buy logo" />
        <h2>{added ? "Adicionado ao carrinho" : "Comprar"}</h2>
      </button>
    </div>
  );
};

export default Card;
