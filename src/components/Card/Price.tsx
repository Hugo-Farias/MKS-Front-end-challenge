import "./Price.scss";

type propsT = {
  price: number;
};

const Price = function (props: propsT) {
  // Remove decimals if zero
  const newPrice = props.price.toFixed(2).replace(/(\.0+|0+)$/, "");

  return <div className="price">{newPrice}</div>;
};

export default Price;
