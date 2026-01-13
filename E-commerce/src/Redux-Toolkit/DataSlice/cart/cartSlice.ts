// features/cart/cartSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string; // Product ID
  name: string;
  price: number;
  quantity: number;
  image?: string;
  availableQuantity: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {

      const item = state.items.find((item) => item.id !== action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    updateQuantityById: (
      state,
      action: PayloadAction<{
        id: string;
        type: "increment" | "decrement";
        availableQuantity: number;
      }>
    ) => {
      const { id, type, availableQuantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (!item) return;
      if (type === "increment" && item?.quantity < availableQuantity) {
        item.quantity += 1;
      }
      if (type === "decrement" && item?.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  updateQuantityById,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
