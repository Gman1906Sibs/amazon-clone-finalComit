import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions
    // payload is the value dispatched from the shopping basket
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      // searching for item with equal index (i) to the one clicked (remove from basket)
      // findIndex => is a defined ES6 function
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
        // if item not in basket index will return negetive number but if it is will return 0 or more
      );

    // creating a new copy of the basket
      let newBasket = [...state.items];

      if (index >=0 ) {
        // logic for removing found item
        // splice cuts item out of basket X given number of times 
        //(in this case removes one of the products with that id)
        newBasket.splice(index, 1)
      }
      else {
        console.warn(
          `Cannot remove product (id:${action.payload.id} as its not in the basket)`
        )
      }
      // assaigning new basket list of items
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price ,0)

export default basketSlice.reducer;
