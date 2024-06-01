import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ProductT } from "../types";

export type CartStateT = {
  items: CartItem[];
  total: number;
};

const initialState: CartStateT = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ProductT>) => {
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
      state.total++;
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload);
      state.total--;
    },
    increaseQuantity: (state, { payload }: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === payload);
      if (item) {
        item.quantity += 1;
        state.total++;
      }
    },
    decreaseQuantity: (state, { payload }: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total--;
      } else {
        state.items = state.items.filter((item) => item.id !== payload);
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
