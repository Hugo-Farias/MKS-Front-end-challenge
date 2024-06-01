import "./CheckoutCard.scss";
import x from "../../assets/x.svg";

type propsT = {
  image: string;
  name: string;
  quantity: number;
  price: string;
};

const CheckoutCard = function (props: propsT) {
  const { image, name } = props;

  return (
    <div className="checkout-card">
      <span className="close-btn">
        <img src={x} alt="close button" />
      </span>
      <img src={image} alt="product image" />
      <div className="name">{name}</div>
      <div className="price-quantity-cont"></div>
    </div>
  );
};

export default CheckoutCard;
