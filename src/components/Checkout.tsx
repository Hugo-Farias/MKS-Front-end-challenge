import "./Checkout.scss";
import closeBtn from "../assets/closeBtn.svg";
// import x from "../assets/x.svg";

const Checkout = function () {
  return (
    <div className="cart-section">
      <div className="top">
        <h1>
          Carrinho
          <br /> de compras
        </h1>
        <button className="close-btn">
          <img src={closeBtn} alt="close button" />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
