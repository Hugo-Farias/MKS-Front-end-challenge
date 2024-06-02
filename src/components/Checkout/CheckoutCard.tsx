import "./CheckoutCard.scss";
import x from "../../assets/x.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import Price from "../Card/Price";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/cartSlice";

type checkoutT = {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: string;
};

const CheckoutCard = function (props: checkoutT) {
  const { image, name, quantity, price, id } = props;
  const dispatch = useDispatch();

  const handleQuantity = function (add: boolean) {
    if (add) {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  const handleRemove = function () {
    dispatch(removeItem({ id: id, price: +price, quantity: quantity }));
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
      className="checkout-card"
    >
      <button className="close-btn" onClick={handleRemove}>
        <img src={x} alt="close button" />
      </button>
      <img src={image} alt="product image" />
      <div className="name">{name}</div>
      <div className="price-quantity-cont">
        <div className="quantity-set">
          <button className="subtract" onClick={() => handleQuantity(false)}>
            <img src={minus} alt="subtact quantity" />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="add" onClick={() => handleQuantity(true)}>
            <img src={plus} alt="add quantity" />
          </button>
        </div>
        <Price price={+price} />
      </div>
    </motion.div>
  );
};

export default CheckoutCard;
