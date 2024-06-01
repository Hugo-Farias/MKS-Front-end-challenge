import "./Products.scss";
import Card from "./Card";
import { ProductsT } from "../types";
import DUMMY_DATA from "../../DUMMY_DATA.json";

const { products }: ProductsT = DUMMY_DATA;

const Products = function () {
  const jsx = products.map((v, i) => {
    return <Card key={i} product={v} />;
  });

  return <div className="main">{jsx}</div>;
};

export default Products;
