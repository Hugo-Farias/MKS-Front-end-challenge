import { useSelector } from "react-redux";
import { CartState } from "./store/cartSlice";

export const getSlice = function () {
  return useSelector<CartState>((state) => state.items) as CartState;
};
