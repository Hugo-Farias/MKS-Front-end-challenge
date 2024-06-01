import "./Checkout.scss";
import closeBtn from "../assets/closeBtn.svg";
import CheckoutCard from "./Checkout/CheckoutCard";
import { getSlice } from "../helper";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";

const Checkout = function () {
  const slice = getSlice();
  const dispatch = useDispatch();

  const checkoutJSX = slice.items.map((v) => {
    return (
      <CheckoutCard
        key={v.id}
        id={v.id}
        image={v.photo}
        name={v.name}
        quantity={v.quantity}
        price={v.price}
      />
    );
  });

  const handleClose = function () {
    dispatch(toggleCart(false));
  };

  return (
    <>
      <div className={`background ${slice.open}`} onClick={handleClose} />
      <div className={`checkout ${slice.open}`}>
        <div className="top">
          <h1>
            Carrinho
            <br /> de compras
          </h1>
          <button className="close-btn" onClick={handleClose}>
            <img src={closeBtn} alt="close button" />
          </button>
        </div>
        <div className="main-section">{checkoutJSX}</div>
      </div>
    </>
  );
};

export default Checkout;
