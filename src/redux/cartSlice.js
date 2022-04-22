import { createSlice } from "@reduxjs/toolkit";
import cartItemsData from "../data/cartItemsData";

const initialState = {
  cartItems: cartItemsData,
  amount: 4,
  total: 399.99,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
