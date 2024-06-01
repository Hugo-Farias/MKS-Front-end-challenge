import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { CartStateT } from "./cartSlice";

export type storeT = {
  main: CartStateT;
};

const store = configureStore({
  reducer: {
    main: cartSlice,
  },
});

export default store;
