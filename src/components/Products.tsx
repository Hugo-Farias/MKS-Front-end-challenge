import "./Products.scss";
import Card from "./Card";
import { ProductT, ProductsT } from "../types";
import { useEffect, useState } from "react";
import DUMMY_DATA from "../../DUMMY_DATA.json";

const { products: dummy }: ProductsT = DUMMY_DATA;

const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=DESC";

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

  const loadedData = apiData || dummy;

  const jsx = loadedData.map((v: ProductT) => {
    return <Card key={v.id} product={v} loading={apiData === null} />;
  });

  return <div className="products">{jsx}</div>;
};

export default Products;
