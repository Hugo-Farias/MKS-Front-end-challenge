import "./Checkout.scss";
import closeBtn from "../assets/closeBtn.svg";
import CheckoutCard from "./Checkout/CheckoutCard";
import { getSlice } from "../helper";

const Checkout = function () {
  const slice = getSlice().items;

  const checkoutJSX = slice.map((v) => {
    return (
      <CheckoutCard
        key={v.id}
        image={v.photo}
        name={v.name}
        quantity={v.quantity}
        price={v.price}
      />
    );
  });

  return (
    <>
      <div className="background" />
      <div className="checkout">
        <div className="top">
          <h1>
            Carrinho
            <br /> de compras
          </h1>
          <button className="close-btn">
            <img src={closeBtn} alt="close button" />
          </button>
        </div>
        <div className="main-section">{checkoutJSX}</div>
      </div>
    </>
  );
};

export default Checkout;
