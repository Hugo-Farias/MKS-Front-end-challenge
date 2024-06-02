import "./Price.scss";

type propsT = {
  price: number;
  alt?: boolean;
};

const Price = function (props: propsT) {
  // Removes decimals if zero
  const newPrice = props.price.toFixed(2).replace(/(\.0+|0+)$/, "");

  return <div className={`price ${props.alt}`}>{newPrice}</div>;
};

export default Price;
