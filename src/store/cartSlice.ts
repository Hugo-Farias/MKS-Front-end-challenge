import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ProductT } from "../types";

export type CartStateT = {
  open: boolean;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};

const initialState: CartStateT = {
  open: false,
  items: [],
  totalItems: 0,
  totalPrice: 0,
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
      state.totalItems += 1;
      state.totalPrice += +payload.price;
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload);
      state.totalItems -= 1;
    },
    increaseQuantity: (state, { payload }: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
      }
    },
    decreaseQuantity: (state, { payload }: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === payload);
      if (!item || item.quantity - 1 < 1) return;
      item.quantity -= 1;
      state.totalItems -= 1;
    },
    toggleCart: (state, { payload }: PayloadAction<boolean>) => {
      state.open = payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
