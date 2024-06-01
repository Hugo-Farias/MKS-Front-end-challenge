import { useSelector } from "react-redux";
import { CartStateT } from "./store/cartSlice";
import { storeT } from "./store/store";

export const getSlice = function () {
  return useSelector<storeT>((state) => state.main) as CartStateT;
};
