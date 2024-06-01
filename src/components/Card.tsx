import "./Card.scss";
import Price from "./Card/Price";

type propsT = {
  name: string;
  photo: string;
  price: string;
  description: string;
};

const Card = function (props: propsT) {
  const { name, photo, price, description } = props;

  // console.log(description);

  return (
    <div className="card">
      <img src={photo} alt={`${name} product photo`} />
      <div className="name-price-cont">
        <h1 className="name">{name}</h1>
        <Price price={+price} />
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Card;
