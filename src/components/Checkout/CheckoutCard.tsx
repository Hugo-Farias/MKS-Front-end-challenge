import "./CheckoutCard.scss";
import x from "../../assets/x.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import Price from "../Card/Price";

type propsT = {
  image: string;
  name: string;
  quantity: number;
  price: string;
};

const CheckoutCard = function (props: propsT) {
  const { image, name, quantity, price } = props;

  return (
    <div className="checkout-card">
      <span className="close-btn">
        <img src={x} alt="close button" />
      </span>
      <img src={image} alt="product image" />
      <div className="name">{name}</div>
      <div className="price-quantity-cont">
        <div className="quantity-set">
          <button className="subtract">
            <img src={minus} alt="subtact quantity" />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="add">
            <img src={plus} alt="add quantity" />
          </button>
        </div>
        <Price price={+price} />
      </div>
    </div>
  );
};

export default CheckoutCard;
