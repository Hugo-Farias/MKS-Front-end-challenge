import "./Products.scss";
import Card from "./Card";
import { ProductsCont } from "../types";
import DUMMY_DATA from "../../DUMMY_DATA.json";

const { products }: ProductsCont = DUMMY_DATA;

const Products = function () {
  const jsx = products.map((v, i) => {
    return (
      <Card
        key={i}
        name={v.name}
        photo={v.photo}
        price={v.price}
        description={v.description}
      />
    );
  });

  return <div className="main">{jsx}</div>;
};

export default Products;
