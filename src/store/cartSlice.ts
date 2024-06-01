import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ProductT } from "../types";

export type CartStateT = {
  items: CartItem[];
  total: number;
};

const initialState: CartStateT = {
  items: [
    {
      id: 1,
      name: "Iphone 11 128 GB",
      brand: "Apple",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
      price: "5000.00",
      createdAt: "2023-10-30T16:25:01.093Z",
      updatedAt: "2023-10-30T16:25:01.093Z",
      quantity: 1,
    },
  ],
  total: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ProductT>) => {
      console.log(state.items);
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
