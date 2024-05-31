import "./Card.scss";

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
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default Card;
