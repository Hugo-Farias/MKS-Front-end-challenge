import "./Products.scss";
import Card from "./Card";
import { ProductT } from "../types";
import { useEffect, useState } from "react";

const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=name&orderBy=DESC";

const Products = function () {
  const [apiData, setApiData] = useState<ProductT[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setApiData(data.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData().then();
  }, []);

  if (!apiData) return <span className="loading" />;

  const jsx = apiData.map((v) => {
    return <Card key={v.id} product={v} />;
  });

  return <div className="main">{jsx}</div>;
};

export default Products;
