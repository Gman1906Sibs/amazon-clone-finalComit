import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import productReducer from "../slices/productSlice";


// the global store setup
export const store = configureStore({
  reducer: {
    product: productReducer,
    // basket: basketReducer
  },
    reducer: {
    // product: productReducer,
    basket: basketReducer
  },
});
