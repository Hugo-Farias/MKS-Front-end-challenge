import "./Products.scss";
import Card from "./Card";
import { ProductsT, ProductT } from "../types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DUMMY_DATA from "../../DUMMY_DATA.json";

const { products: dummy }: ProductsT = DUMMY_DATA;

const API_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=DESC";

const queryFetch = async function (): Promise<ProductsT> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Network response was not ok");
  return await res.json();
};

const Products = function () {
  const { data, isLoading }: UseQueryResult<ProductsT, boolean> = useQuery<
    ProductsT,
    boolean
  >({
    queryKey: ["products"],
    queryFn: queryFetch,
  });

  const loadedData = data ? data.products : dummy;

  const jsx = loadedData.map((v: ProductT) => {
    return <Card key={v.id} product={v} loading={isLoading} />;
  });

  return <div className="products">{jsx}</div>;
};

export default Products;
