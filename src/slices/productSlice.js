import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Actions
    addProduct: (state, action) => {
        state.items = [...state.items, action.payload],
        console.log(state.items)  
    },
    // removeProduct: (state, action) => {},
  },
});

export const { addProduct } = productSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProduct = (state) => state.product.items;

export default productSlice.reducer;
