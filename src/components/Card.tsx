import "./Card.scss";
import buy from "../assets/buy.svg";
import Price from "./Card/Price";
import { useState } from "react";
import { ProductT } from "../types";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const Card = function (props: { product: ProductT; loading: boolean }) {
  const { name, photo, price, description } = props.product;
  const [added, setAdded] = useState<boolean>(false);
  const dispatch = useDispatch();

  const clickHandle = function () {
    setAdded(true);

    setTimeout(() => setAdded(false), 2000);

    //@ts-ignore
    dispatch(addItem(props.product));
  };

  return (
    <div className={`card ${props.loading}`}>
      <img src={photo} alt={`foto ${name}`} />
      <div className="name-price-cont">
        <h1 className="name">{name}</h1>
        {props.loading || <Price price={+price} alt={true} />}
      </div>
      <div className="description">{description}</div>
      <button
        className={`buy-btn ${added}`}
        onClick={clickHandle}
        disabled={added || props.loading}
      >
        <img src={buy} alt="buy logo" />
        <h2>{added ? "Adicionado ao carrinho" : "Comprar"}</h2>
      </button>
    </div>
  );
};

export default Card;
