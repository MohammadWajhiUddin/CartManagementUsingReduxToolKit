import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProductArray: [],
};

const AddProductSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addNewProductToCart(state, action) {
      const exists = state.ProductArray.find(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        state.ProductArray = state.ProductArray.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty + 1,
                totalPrice: item.price * (item.qty + 1),
              }
            : item
        );
      } else {
        state.ProductArray.push({
          ...action.payload,
          qty: 1,
          totalPrice: action.payload.price,
        });
      }
    },

    decreaseQty: (state, action) => {
      const product = state.ProductArray.find(
        (item) => item.id === action.payload.id
      );
      if (product.qty === 1) {
        state.ProductArray = state.ProductArray.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.ProductArray = state.ProductArray.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty - 1,
                totalPrice: item.price * (item.qty - 1),
              }
            : item
        );
      }
    },

    removeSingleProductToCart(state, action) {
      console.log("Patload", action.payload);
      state.ProductArray = state.ProductArray.filter(
        (productinsidearray) => productinsidearray.id !== action.payload.id
      );
    },
    removeAllProductFromCart(state, action) {
      state.ProductArray = [];
    },
  },
});

// export default userSlice;
export const {
  addNewProductToCart,
  decreaseQty,
  removeSingleProductToCart,
  removeAllProductFromCart,
} = AddProductSlice.actions;

export default AddProductSlice.reducer;
