import "./Main.scss";
import Card from "./Card";
import { Products } from "../types";
import DUMMY_DATA from "../../DUMMY_DATA.json";

const { products }: Products = DUMMY_DATA;

const Main = function () {
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

export default Main;
