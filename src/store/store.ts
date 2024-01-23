import { configureStore } from "@reduxjs/toolkit";
import productsPageSlice from "../components/pages/ProductsPage/productsPageSlice";

export const store = configureStore({
  reducer: { productPage: productsPageSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
