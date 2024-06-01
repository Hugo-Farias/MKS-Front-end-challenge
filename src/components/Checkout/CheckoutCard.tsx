import "./CheckoutCard.scss";

type propsT = {
  image: string;
  name: string;
  quantity: number;
  price: string;
};

const CheckoutCard = function (props: propsT) {
  const { image } = props;

  return (
    <div className="checkout-card">
      <img src={image} alt="product image" />
    </div>
  );
};

export default CheckoutCard;
