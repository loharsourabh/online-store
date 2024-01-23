import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  name: string;
  price: number;
};

export type CartState = {
  cart: Product[];
};

const initialState: CartState = {
  cart: [],
};

export const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }: PayloadAction<Product>) => {
      const productAlreadyAdded = state.cart.some(
        ({ name }) => name === payload.name
      );

      if (!productAlreadyAdded) {
        state.cart.push(payload);
      }
    },

    removeProductFromCart: (state, { payload }: PayloadAction<Product>) => {
      const productIndex = state.cart.findIndex(
        ({ name }) => name === payload.name
      );

      if (productIndex !== -1) {
        state.cart.splice(productIndex, 1);
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = productsPageSlice.actions;
export default productsPageSlice.reducer;
