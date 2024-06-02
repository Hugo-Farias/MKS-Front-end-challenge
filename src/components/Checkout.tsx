import "./Checkout.scss";
import closeBtn from "../assets/closeBtn.svg";
import CheckoutCard from "./Checkout/CheckoutCard";
import { getSlice } from "../helper";
import { useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { AnimatePresence, motion } from "framer-motion";

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
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";
    //@ts-ignore
    dispatch(toggleCart(false));
  };

  return (
    <AnimatePresence>
      {slice.open && (
        <>
          <motion.div
            className="checkout"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <div className="top">
              <h1>
                Carrinho
                <br /> de compras
              </h1>
              <button className="close-btn" onClick={handleClose}>
                <img src={closeBtn} alt="close button" />
              </button>
            </div>

            <div className="main-section">
              <AnimatePresence>{checkoutJSX}</AnimatePresence>
            </div>

            <div className="total-price">
              <div>{slice.totalPrice}</div>
            </div>
            <button className="confirm">Finalizar Compra</button>
          </motion.div>
          <div className={`background ${slice.open}`} onClick={handleClose} />
        </>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
