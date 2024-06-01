import "./Card.scss";
import Price from "./Card/Price";

type propsT = {
  name: string;
  photo: string;
  price: string;
  description: string;
};

const Card = function (props: propsT) {
  const { name, photo, price } = props;

  return (
    <div className="card">
      <img src={photo} alt={`${name} product photo`} />
      <div className="name-price-cont">
        <div className="name">{name}</div>
        <Price price={+price} />
      </div>
    </div>
  );
};

export default Card;
