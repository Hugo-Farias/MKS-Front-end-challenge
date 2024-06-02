import "./Card.scss";
import buy from "../assets/buy.svg";
import Price from "./Card/Price";
import { useState } from "react";
import { ProductT } from "../types";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

// const placeholder = (
//   <div
//     className="card"
//     style={{ filter: "grayscale(1) brightness(0.9) blur(3px)" }}
//   >
//     <img src={""} alt={``} />
//     <div className="name-price-cont">
//       <h1 className="name">Lorem ipsum dolor.</h1>
//       {/*<Price price={0} style={{ filter: "blur(2px)" }}/>*/}
//     </div>
//     <div className="description">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sapiente.
//     </div>
//     <button className={`buy-btn ${`added`}`} disabled={true}>
//       {/*<img src={buy} alt="buy logo" />*/}
//       {/*<h2>{"Comprar"}</h2>*/}
//     </button>
//   </div>
// );

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
        {props.loading || <Price price={+price} />}
      </div>
      <div className="description">{description}</div>
      <button
        className={`buy-btn ${added}`}
        onClick={clickHandle}
        disabled={added || props.loading}
      >
        {props.loading || <img src={buy} alt="buy logo" />}
        <h2>{added ? "Adicionado ao carrinho" : "Comprar"}</h2>
      </button>
    </div>
  );
};

export default Card;
