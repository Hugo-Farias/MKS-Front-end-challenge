import "./Card.scss";

type propsT = {
  name: string;
  photo: string;
  price: string;
  description: string;
};

const Card = function (props: propsT) {
  const { name, photo, price } = props;

  // Remove decimals if zero
  const newPrice = Number(price)
    .toFixed(2)
    .replace(/(\.0+|0+)$/, "");

  return (
    <div className="card">
      <img src={photo} alt={`${name} product photo`} />
      <div className="name-price-cont">
        <div className="name">{name}</div>
        <div className="price">{newPrice}</div>
      </div>
    </div>
  );
};

export default Card;
